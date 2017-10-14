import {store} from '_redux/Store'
import {selectSamples} from '_redux/waveforms/Reducer'

export default class AudioEngine {

	constructor() {

		this.volume = 0.5
		this.outputConnected = false
		var context = new AudioContext();
		this.destination = context.destination;
		this.scriptNode = context.createScriptProcessor(2048, 1, 1);

		this.waveforms = []

		let sub = store.subscribe(() => {

			let reduxState = store.getState()

			reduxState.audioEngine.isPlaying ? this.play() : this.pause()

		
			this.waveforms = selectSamples(store.getState().waveforms)
			const waveformsById = reduxState.waveforms 

			// add counters ...
			this.waveforms.forEach(waveform => {
				waveform.counter = 0
			})
		})


		this.scriptNode.onaudioprocess = (e) => {
			
			var outputBuffer = e.outputBuffer;
		
			for (var channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
		
				var outputData = outputBuffer.getChannelData(channel);
				
				for (var sample = 0; sample < outputBuffer.length; sample++) {

					var amp = 0

					this.waveforms.forEach(waveform => {
						
						waveform.counter++

						if (waveform.counter > waveform.samples.length - 1) {
							waveform.counter = 0
							return;
						}

						amp += waveform.samples[waveform.counter] * waveform.volume;
					})

					amp /= this.waveforms.length
					
					outputData[sample] = amp * this.volume
				}
			}
		};
	}

	play() {
		if (!this.outputConnected)  {
			console.log("starting audio engine")
			this.scriptNode.connect(this.destination);
			this.outputConnected = true	
		}
	}
	pause() {
		if (this.outputConnected) {
			console.log("pausing audio engine")
			this.scriptNode.disconnect(this.destination)
			this.outputConnected = false
		}
	}
}

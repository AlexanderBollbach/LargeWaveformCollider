import {store} from '_redux/Store'
import {
	processedSamples,
} from "_redux/reducers/Waveform";

export default class AudioEngine {

	constructor() {

		this.volume = 0.5

		this.outputConnected = false

		var context = new AudioContext();

		// Destination
		this.destination = context.destination;

		this.scriptNode = context.createScriptProcessor(2048, 1, 1);

		this.sampleStores = []

		let sub = store.subscribe(() => {
		
			this.sampleStores = []
			
			

			const waveformsById = store.getState().waveforms.byId 
			const waveformsIds = store.getState().waveforms.allIds


			waveformsIds.forEach(waveformId => {
				this.sampleStores.push({counter:0, buffer:processedSamples(waveformsById[waveformId]), volume: waveformsById[waveformId].volume})
			})	

			store.getState().audioEngine.isPlaying ? this.play() : this.pause()
		})


		this.scriptNode.onaudioprocess = (e) => {
			var outputBuffer = e.outputBuffer;
			for (var channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
				var outputData = outputBuffer.getChannelData(channel);
				for (var sample = 0; sample < outputBuffer.length; sample++) {

					var amp = 0

					this.sampleStores.forEach(store => {
						
						store.counter++

						if (store.counter > store.buffer.length - 1) {
							store.counter = 0
							return;
						}

						amp += store.buffer[store.counter] * store.volume;
					})

					amp /= this.sampleStores.length
					
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

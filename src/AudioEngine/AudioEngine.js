import {store} from '_redux/Store'
import {
	selectBuffers,
	
} from "_redux/reducers/WaveformsReducer";

export default class AudioEngine {

	constructor() {

		this.volume = 0.1

		this.outputConnected = false

		var context = new AudioContext();

		// Destination
		this.destination = context.destination;

		this.scriptNode = context.createScriptProcessor(2048, 1, 1);

		this.sampleStores = []

		let sub = store.subscribe(() => {
		
			this.sampleStores = []
			
			const buffers = selectBuffers(store.getState().waveforms)

			buffers.forEach(buffer => {
				this.sampleStores.push({counter:0, buffer:buffer})
			})	
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
						}
						amp += store.buffer[store.counter]
					})

					amp /= this.sampleStores.length
					
					outputData[sample] = amp * this.volume
				}
			}
		};

	}

	play() {
		if (!this.outputConnected)  {
			this.scriptNode.connect(this.destination);
			this.outputConnected = true	
		}
	}
	pause() {
		if (this.outputConnected) {
			this.scriptNode.disconnect(this.destination)
			this.outputConnected = false
		}
	}
}

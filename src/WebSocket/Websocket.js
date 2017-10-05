import io from "socket.io-client";
import { store } from "../redux/Store"
import { newBuffer } from '../redux/actions'

var socket = {
	connect: function() {
		console.log("connecting to ws server...");
		this.socket = io("http://localhost:2222");
		this.socket.on("frames", function(data) {
			store.dispatch(newBuffer(data.payload));
		});
	},

	disconnect: function() {
		console.log("disconnected from ws server!");
		this.socket.disconnect();
	}
}
export default socket

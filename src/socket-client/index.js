import * as io from 'socket.io-client';
import Server from "../server_data";
export default{
	io,
	url:Server.url
}
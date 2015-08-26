"use babel";

import React from 'react';
import store from 'store';

// import stores from 'statics/src/views/stores';
// import actions from 'statics/src/views/actions';
// import buttons from 'statics/src/views/components/buttons';
// import forms from 'statics/src/views/components/forms';

var styles = {
	height: "90px",
	width: "160px",
	"backgroundColor": "#aaa"
};

class Index extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){

		// MediaStreamTrack
    window.navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
		window.navigator.getUserMedia({
			video: true, audio: true
		}, function success(localMediaStream){
			var video = document.querySelector('video');
			var url = window.URL.createObjectURL(localMediaStream);
			console.log(url);
			// video.src = window.URL.createObjectURL(localMediaStream);
			video.play();

			video.onloadedmetadata = function(e) {
			  // Do something with the video here.
				console.log(e);
			};
		}, function fail(err){
			console.log(err);
		});
	}

	render(){
		console.log('render');
		return (
			<div>
				Hello, JSX!
				<video style={styles} src="https://mizcan.mizbering.jp/movies/main.mp4"></video>
			</div>
		);
	}
}

export default Index;

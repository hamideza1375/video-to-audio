const fs = require('fs');
const https = require('https');
const { execSync } = require('child_process');
const ffmpegStatic = require('ffmpeg-static');

// Uncomment one of these
// transcribeLocalVideo('deepgram.mp4');
transcribeRemoteVideo('https://www.w3schools.com/html/mov_bbb.mp4');

async function transcribeLocalVideo(filePath) {
	ffmpeg(`-hide_banner -y -i ${filePath} ${filePath}.wav`);
	fs.readFileSync(`${filePath}.wav`)
}

async function transcribeRemoteVideo(url) {
	const filePath = await downloadFile(url);
	await transcribeLocalVideo(filePath);
}

async function downloadFile(url) {
	return new Promise((resolve, reject) => {
		const request = https.get(url, response => {
			const fileName = url.split('/').slice(-1)[0]; // Get the final part of the URL only
			const fileStream = fs.createWriteStream(fileName);
			response.pipe(fileStream);
			response.on('end', () => {
				fileStream.close();
				resolve(fileName);
			 })
		})
	})
}

async function ffmpeg(command) {
	return new Promise((resolve, reject) => {
		execSync(`${ffmpegStatic} ${command}`, (err, stderr, stdout) => {
			if (err) reject(err);
			resolve(stdout);
		});
	});
}

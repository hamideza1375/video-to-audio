# Transcribe Videos with Node.js

This is a barebones project which transcribes either local or remote video files with [Deepgram](http://deepgram.com)'s AI Speech Recognition API. This project accompanies a blog post available at <https://developers.deepgram.com/blog/2021/11/transcribe-videos-nodejs/>

## Setup

```
git clone https://github.com/deepgram-devs/transcribe-videos.git
cd transcribe-videos
npm install
```

Set your `DG_KEY` environment variable or replace `process.env.DG_KEY` with your key.

## Usage

Uncomment either the `transcribeLocalVideo()` or `transcribeRemoveVideo()` calls at the top of `index.js` and run with:

```
node index.js
```
# video-to-audio

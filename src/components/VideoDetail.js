import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div classname="ui embed">
                <iframe ttile="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;
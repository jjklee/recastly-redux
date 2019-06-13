import React from 'react';
import VideoListEntry from './VideoListEntry.js';

//videos need to be an array not an object?
var VideoList = ({videos, handleVideoListEntryTitleClick}) => (
  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);


VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};


export default VideoList;

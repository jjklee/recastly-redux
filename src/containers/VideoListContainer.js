import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideoList from './../actions/videoList.js';

const VideoListContainer = state => {
  return {
    videos: state.videoList
  };
};


//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

// export default VideoListContainer;
export default connect(VideoListContainer, {handleVideoListEntryTitleClick: changeVideoList})(VideoList);
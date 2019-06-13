import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideoList from './../actions/videoList.js';

const VideoListContainer = videos => {
  // return {
    // videos: state.videoList
  // };
  // handleVideoListEntryTitleClick(video) {
  //   this.setState({currentVideo: video});

  // }
  return (dispatch) => {
    handleVideoListEntryTitleClick(videos) {
      changeVideoList(videos);
    }
  }
};


//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

// export default VideoListContainer;
export default connect(VideoListContainer, {changeVideoList})(VideoList);
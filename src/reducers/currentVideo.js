import Redux from 'redux';
import changeVideo from '../src/actions/currentVideo.js';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return {
      state.currentVideo: action.video
    }
    //change the state's video
  default:
    //change the state's video to null
    return {
      state.currentVideo: null;
  }
};

export default currentVideoReducer;

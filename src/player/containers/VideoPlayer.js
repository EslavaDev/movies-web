import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-playaer-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';
import { formattedTime, isFullScreen, requestFullScreen, exitFullScreen } from '../../libs/utilities'
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';
import {connect} from 'react-redux';
class VideoPlayer extends Component {
  state = {
    duration: 0,
    pause: true,
    currentTime: 0,
    loading: false,
    lastVolume: 0,
    volume: 1
  }

  componentDidMount = () => {
    this.setState({
      pause: !this.props.autoPlay
    })
  }


  togglePlay = (event) => {
    this.setState(prevState => ({
      pause: !prevState.pause
    }))
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    })
  }

  handleTimeUpdate = (event) => {
    this.setState({ currentTime: this.video.currentTime })
  }

  handleProgressChange = event => {
    //event.target.value
    this.video.currentTime = event.target.value;
  }

  handleSeeked = (event) => {
    this.setState(prevState => ({
      loading: !prevState.loading
    }))
  }

  handleSeeking = (event) => {
    this.setState(prevState => ({
      loading: !prevState.loading
    }))
  }
  handleVolumeChange = event => {
    //event.target.value
    this.setState({ volume: event.target.value })
    this.video.volume = event.target.value;
  }

  handleVolumeToggle = event => {
    this.setState({
      lastVolume: this.state.volume,
      volume: this.state.volume === 0 ? this.state.lastVolume : 0
    })
    this.video.volume = this.state.lastVolume
  }

  handleFullScreen = event => {
    !isFullScreen()  ? requestFullScreen(this.player) : exitFullScreen()
  }
  setRef = element =>{
    this.player = element
  }
  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <VideoPlayerControls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={formattedTime(this.state.duration)}
            currentTime={formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            value={this.state.volume}
            handleVolumeChange={this.handleVolumeChange}
            handleClick={this.handleVolumeToggle}
          />
          <FullScreen
            handleFullScreen={this.handleFullScreen}
          />
        </VideoPlayerControls>
        {this.state.loading &&
          <Spinner />}
        <Title title={this.props.media.get('title')} />
        <Video
          pause={this.state.pause}
          autoPlay={this.props.autoPlay}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeked={this.handleSeeked}
          handleSeeking={this.handleSeeking}
          src={this.props.media.get('src')}
        />
      </VideoPlayerLayout>
    )
  }
}

const mapStateToProps = (state,props) => {
  return {
  media: state.get('data').get('entities').get('media').get(props.id)
  }
};


export default connect(mapStateToProps)(VideoPlayer)
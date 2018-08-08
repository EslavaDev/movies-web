import React, { Component } from 'react'
import './video.css';
export default class Video extends Component {
    togglePlay() {
        if (this.props.pause) {
            this.video.play()
        } else {
            this.video.pause()
        }
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.pause !== this.props.pause) {
            this.togglePlay();
        }
    }
    setRef = element => {
        this.video = element
    }

    render() {
        const {
            autoPlay,
            src,
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeked,
            handleSeeking
        } = this.props
        return (
            <div className="Video">
                <video
                    ref={this.setRef}
                    autoPlay={autoPlay}
                    src={src}
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeked}
                />
            </div>
        )
    }
}

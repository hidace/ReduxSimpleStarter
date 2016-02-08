import React, { Component } from 'react';

import VideoListItem from './VideoListItem.js';

class VideoList extends Component {
  render() {
    const videoItems = this.props.videos.map((video) => {
      return (
        <VideoListItem
          key ={video.etag}
          onVideoSelect={this.props.onVideoSelect}
          video={video}
        />
      )
    });

    return (
      <div>
        <ul className="col-md-4 list-group">
          {videoItems}
        </ul>
      </div>
    );
  }
}

export default VideoList;

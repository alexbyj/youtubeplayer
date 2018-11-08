import React, { Component } from 'react';


class Video extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <img src={this.props.poster} />
      </div>
    )
  }
}


export default Video;
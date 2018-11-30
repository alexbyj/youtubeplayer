import 'babel-polyfill';
import React, { Component } from 'react'
import './App.scss'
import Video from './Video'
import Loading from './Loading'
import { Database, getMovies } from './Data'
import _ from 'lodash';

class App extends Component {
  componentWillMount() {
    const database = new Database()
    this._getMovies() 
  }

  async _getMovies() {
    let [movies] = await Promise.all([getMovies()])
    this.setState({videos: movies.data.movies})
  }

  render() {
    if (_.get(this, 'state.videos', []).length) {
      return (
        <div className="App">
          {this.state.videos.map((video, index) => {
            return <Video title={video.title} poster={video.background_image} key={index}/>
          })} 
        </div>
      );
    }
    return (
      <div className="App">
        <Loading />
      </div>
    );
  }
}

export default App;

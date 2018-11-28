import React, { Component } from 'react'
import './App.scss'
import Video from './Video'
import Loading from './Loading'
import { Database } from './Data'
import _ from 'lodash';

class App extends Component {

  componentWillMount() {
    const database = new Database()
    // database.get()
    // .then(result => {
    //   this.setState({
    //     videos: result
    //   })
    // })
    database.getMovies()
    .then(result => {
      return result.json();
    }).then(result => {
      console.log('#### result = ', result)
      this.setState({videos: result.data.movies})
    })
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

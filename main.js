'use strict';

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
var Sound = require('react-native-sound');
import Icon from 'react-native-vector-icons/FontAwesome';

class MainView extends Component {
  constructor() {
    super();
    let files = ['01 Southern Point.m4a',
                 '02 Silver Soul.mp3',
                 '05 ONE.mp3'];
    let songs = this.loadSounds(files);
    this.state = {
      playing: false,
      files: files,
      songs: songs,
      currentSong: 0
    };
  }

  render() {
    let playButton = !this.state.playing ? 'play' : 'pause';
    let index = this.state.currentSong
    console.log(this.playSound)
    return <View style={styles.container}>
          <TouchableOpacity onPress={this.playSound}>
            <Icon name={playButton} size={30}>
            </Icon>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.nextSong}>
            <Icon name="forward" size={30}>
            </Icon>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.previousSong}>
            <Icon name="backward" size={30}>
            </Icon>
          </TouchableOpacity>
           </View>;
  }

  loadSounds = (files) => {
    let songs = [];
    for (let i = 0; i < files.length - 1; i++) {
      let s = new Sound(
      files[i],
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log('failed to load the sound', error);
        } else {
          console.log(
            'duration in seconds: ' + s.getDuration() +
            'number of channels: ' + s.getNumberOfChannels()
          );
        }
    });
      songs.push(s);
    }
    return songs;
  }

  playSound = () => {
    let s = this.state.songs[this.state.currentSong];
    if (!this.state.playing) {
      s.play((success) => {
        if(success) {
          console.log('successfully finished playing');
        }  else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    } else {
      s.pause((success) => {
        if(success) {
          console.log('successfully finished playing');
        }  else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
    this.setState({ playing: !this.state.playing});
  }

  nextSong = () => {
    let oldSong = this.state.songs[this.state.currentSong];
    oldSong.stop();
    if (this.state.currentSong < this.state.songs.length) {
      let newSong = this.state.songs[this.state.currentSong + 1];
      newSong.play();
      this.setState({currentSong: this.state.currentSong + 1})
    }
  }
  previousSong = () => {
    let oldSong = this.state.songs[this.state.currentSong];
    oldSong.stop();
    if (this.state.currentSong > 0) {
      let newSong = this.state.songs[this.state.currentSong - 1];
      newSong.play();
      this.setState({currentSong: this.state.currentSong - 1})
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
  },
});

export default MainView;

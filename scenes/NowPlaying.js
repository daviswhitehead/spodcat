'use strict';

// react stuff
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
// custom imports
import PlayPauseButton from '../components/PlayPauseButton.js';
import NowPlayingButtonTray from '../components/NowPlayingButtonTray.js';
import PlayButton from '../components/PlayButton.js';

var Sound = require('react-native-sound');

class NowPlaying extends Component {
  constructor() {
    super();
    this.state = {
      playing: true,
      s: this.loadSound('01 Southern Point.m4a')
    };
  }

  // render() {
  //   let display = this.state.playing ? 'Play' : 'Paused';
  //   return <View style={[styles.page]}>
  //             <NowPlayingButtonTray>
  //             </NowPlayingButtonTray>
  //          </View>;
  // }
  render() {
    return <View style={[styles.page]}>
              <PlayButton></PlayButton>
           </View>;
  }

  loadSound = (soundfile) => {
    let s = new Sound(
      soundfile,
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
    return s;
  }

  playSound = () => {
    let s = this.state.s
    console.log(this.state);
    if (this.state.playing) {
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
    this.setState({ playing: !this.state.playing });
    console.log(this.state);
  }
}

var styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  title: {
    // flex: 10,
    flexDirection: 'column',
    fontSize: 20,
  },
  tray: {
    // flex: 5,
    flexDirection: 'column',
  }
});

export default NowPlaying;

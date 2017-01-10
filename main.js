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

class MainView extends Component {
  constructor() {
    super();
    this.state = {
      playing: true,
      s: this.loadSound('Politics is the Mind-Killer.mp3')
    };

  }

  render() {
    let display = this.state.playing ? 'Play' : 'Paused';
    return <View style={styles.container}>
             <TouchableOpacity onPress={this.playSound}>
               <Text style={styles.button}> {display}</Text>
             </TouchableOpacity>
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

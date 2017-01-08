// 'use strict';
//
// import React, {
//   Component
// } from 'react';
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View
// } from 'react-native';
// var Sound = require('react-native-sound');
//
// class MainView extends Component {
//   render() {
//     return <View style={styles.container}>
//              <TouchableOpacity onPress={this.playSound}>
//                <Text style={styles.button}>play</Text>
//              </TouchableOpacity>
//            </View>;
//   }
//
//   playSound() {
//     var s = new Sound('advertising.mp3', Sound.MAIN_BUNDLE, (e) => {
//       if (e) {
//         console.log('error', e);
//       } else {
//         console.log('duration', s.getDuration());
//         s.play();
//       }
//     });
//   }
// }
//
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     fontSize: 20,
//     backgroundColor: 'silver',
//     padding: 5,
//   },
// });
//
// export default MainView;


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
  // constructor(props) {
  //   super(props);
  //   this.state = {play_status: true};
  //
  //   // // Toggle the state every second
  //   // setInterval(() => {
  //   //   this.setState({ showText: !this.state.showText });
  //   // }, 1000);
  // }

  render() {
    return <View style={styles.container}>
             <TouchableOpacity onPress={this.playSound}>
               <Text style={styles.button}>play</Text>
             </TouchableOpacity>
           </View>;
  }

  loadSound = (filename) => {
    var s = new Sound(
      filename,
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

  playSound = (s) => {
    var mp3_file = 'Politics is the Mind-Killer.mp3'
    console.log(mp3_file)
    var s = this.loadSound(mp3_file);
    console.log(s)
    s.play();
    console.log(s)
  };
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

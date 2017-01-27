import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class PlayButton extends Component {
  render() {
    return (
      <TouchableOpacity>
      <Icon name="play" size={30}>
      </Icon>
      </TouchableOpacity>
    );
  }
}


// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = (<Icon name="rocket" size={30} color="#900" />)

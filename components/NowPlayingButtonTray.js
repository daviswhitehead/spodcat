'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

// dynamic sizing
let windowHeight = Dimensions.get('window').height;
let windowWidth = Dimensions.get('window').width;
let resizeFactor = 4;
let playPauseFactor = resizeFactor
let otherFactor = resizeFactor * 2

export default class NowPlayingButtonTray extends Component {
  render() {
    return (
      <View style={styles.tray}>
        <View style={styles.previous} />
        <TouchableOpacity style={styles.playPauseButton} >

          <View style={styles.playPauseTriangle} />
         </TouchableOpacity>
        <View style={styles.next} />
      </View>
    );
  }
}

// <View style={styles.playPauseCircle} />

const styles = StyleSheet.create({
  tray: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  playPauseButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth / playPauseFactor,
    height: windowWidth / playPauseFactor,
    borderWidth: 2,
    // borderHeight: windowWidth / playPauseFactor,
    borderRadius: windowWidth / (playPauseFactor * 2),
    backgroundColor: 'transparent',
    borderColor: 'grey',
    // borderTopColor: 'grey',
  },
  playPauseCircle: {
    width: windowWidth / playPauseFactor,
    height: windowWidth / playPauseFactor,
    borderRadius: windowWidth / (playPauseFactor * 2),
    backgroundColor: 'grey'
  },
  playPauseTriangle: {
    width: windowWidth / (otherFactor * 2),
    height: windowWidth / (otherFactor * 2),
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: windowWidth / (otherFactor * 2),
    borderBottomWidth: windowWidth / (otherFactor * 2),
    borderLeftWidth: windowWidth / otherFactor,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'blue',
    borderRadius: 10,
    marginLeft: 10,
  },
  next: {
    width: windowWidth / otherFactor,
    height: windowWidth / otherFactor,
    borderRadius: windowWidth / (otherFactor * 2),
    backgroundColor: 'red'
  },
  previous: {
    width: windowWidth / otherFactor,
    height: windowWidth / otherFactor,
    borderRadius: windowWidth / (otherFactor * 2),
    backgroundColor: 'green'
  },
});

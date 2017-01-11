'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Dimensions
} from 'react-native';

// dynamic sizing
let windowHeight = Dimensions.get('window').height;
let windowWidth = Dimensions.get('window').width;
let resizeFactor = 4;

export default class PlayPauseButton extends Component {
  static get defaultProps() {
    return {
      title: 'click me',
      onPress: () => any,
      testID: '',
    };
  }

  static propTypes() {
    return {
      title: PropTypes.string,
      onPress: PropTypes.function,
      testID: PropTypes.string,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
  }

  render() {
    const {
      onPress,
      title,
      disabled,
      testID,
    } = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    return (
      <TouchableOpacity
        testID={testID}
        onPress={onPress}>
        <View>
          <Text style={[styles.button], {alignItems: 'center'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: Platform.select({
    ios: {
      backgroundColor: '#f0f8ff',
      width: windowWidth / resizeFactor,
      height: windowWidth / resizeFactor,
      borderRadius: windowWidth / (resizeFactor * 2),

    }
  }),
  text: Platform.select({
    ios: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      color: 'blue',
      opacity: 0,
      // textAlign: 'center',
      fontSize: 18,
    }
  }),
  buttonDisabled: Platform.select({
    ios: {}
  }),
  textDisabled: Platform.select({
    ios: {
      color: '#cdcdcd',
    }
  }),
});

module.exports = PlayPauseButton;

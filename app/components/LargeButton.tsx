import { Component } from 'react';

import * as React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles/LargeButton.style';

import * as Speech from 'expo-speech';

class LargeButton extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <Pressable
        style={[
          styles.largeButtonContainer,
          {
            backgroundColor: theme.backgroundColor,
            borderColor: theme.borderColor
          }
        ]}
        onPress={() => {
          // Triggered when the user taps on the button
          Speech.speak(this.props.audio);
        }}
        onPressOut={() => {
          // Triggered when user removes their finger
          console.log('Test onPressOut');
        }}
        onLongPress={() => {
          // Triggered when the user presses and holds for longer than 500ms
          // Can customise the duration by setting delayLongPress
          console.log('Test onLongPress');
        }}
        accessible={true}
        accessibilityLabel={this.props.accessibilityLabel}
      >
        <Text
          style={[styles.largeButtonText, { color: theme.textColor }]}
          adjustsFontSizeToFit
        >
          {this.props.children}
        </Text>
      </Pressable>
    );
  }
}

export default LargeButton;

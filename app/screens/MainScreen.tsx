import * as React from 'react';
import { StyleSheet } from 'react-native';
import BeaconInfo from '../components/BeaconInfo';
import LargeButton from '../components/LargeButton';
import { HorizontalSeparator } from '../components/Separators';

import { View } from '../components/Themed';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <LargeButton accessibilityHint="Tap here to repeat the previous audio output">
        Tap here to repeat
      </LargeButton>
      <HorizontalSeparator />
      <BeaconInfo type="Point of Interest " place="Cafe " />
      <HorizontalSeparator />
      <LargeButton accessibilityHint="Tap here for more information">
        Tap here for more info
      </LargeButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

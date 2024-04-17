import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles as textstyles } from './TimerCountDownDisplay';

export type TimerModes = 'Break' | 'Focus';

type Props = {
  timerMode: TimerModes
};

export const TimerModeDisplay: React.FC<Props> = ({ timerMode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timerCountDownText}>
        {timerMode} Time {timerMode === 'Focus' ? '🍅' : '🥦'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%'
  },
  ...textstyles
});
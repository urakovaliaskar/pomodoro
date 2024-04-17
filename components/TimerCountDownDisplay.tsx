import { FC } from 'react';
import { Text, View, StyleSheet } from "react-native";

type Props = {
  timerDate: Date
};

export const TimerCountDownDisplay: FC<Props> = ({ timerDate }) => {
  return (
    <View>
      <Text style={styles.timerCountDownText}>
        {timerDate.getMinutes().toString().padStart(2, '0')}:
        {timerDate.getSeconds().toString().padStart(2, '0')}
      </Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  timerCountDownText: {
    fontSize: 40,
    fontWeight: '800',
    color: '#fff'
  }
});
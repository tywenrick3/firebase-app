import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import StopWatch from '../components/Stopwatch';

const ClockScreen = () => {
  return (
    <View style={styles.container}>
      <StopWatch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ClockScreen;

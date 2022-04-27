import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';

const FitnessScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>Fitness</Text>
    </SafeAreaView>
  );
};

export default FitnessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

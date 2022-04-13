import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
      }}>
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Welcome</Text>
      </View>
      <TouchableOpacity style={{backgroundColor: '#CCC'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FFF'}}>
          Lets Begin
        </Text>
      </TouchableOpacity>
      <View styles={styles.container}>
        <Text>Email: {}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

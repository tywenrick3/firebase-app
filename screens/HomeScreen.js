import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

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
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

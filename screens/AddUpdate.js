import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const AddUpdate = () => {
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [iconName, setIconName] = useState('');

  const navigation = useNavigation();

  const handleSumbit = () => {};

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Fitness Update</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          selectionColor={'#A0ED7B'}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="ex. 225 lbs"
          selectionColor={'#A0ED7B'}
          value={info}
          onChangeText={text => setInfo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="icon name"
          selectionColor={'#A0ED7B'}
          value={iconName}
          onChangeText={text => setIconName(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSumbit} style={styles.button}>
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddUpdate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#A0ED7B',
    backgroundColor: 'white',
    marginTop: 5,
  },
  buttonContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#A0ED7B',
    width: '100%',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#A0ED7B',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  titleContainer: {
    backgroundColor: '#A0ED7B',
    borderRadius: 10,
    marginBottom: 20,
  },
  titleText: {
    padding: 15,
    fontSize: 32,
    color: 'white',
  },
});

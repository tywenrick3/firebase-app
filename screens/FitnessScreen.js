import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import Card from '../components/FitnessCard';
import IonIcon from 'react-native-vector-icons/Ionicons';
IonIcon.loadFont();

const FitnessScreen = () => {
  const [cards, setCards] = useState([]);

  const handleAddFitness = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <IonIcon name={'add-circle-outline'} size={50} color={'#A0ED7B'} />
      </TouchableOpacity>
      <Card />
    </SafeAreaView>
  );
};

export default FitnessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
});

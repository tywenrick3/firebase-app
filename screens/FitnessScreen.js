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
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
IonIcon.loadFont();

const FitnessScreen = () => {
  const navigation = useNavigation();

  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [date, setDate] = useState(null);

  useEffect(() => {
    let today = new Date();
    let date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    setDate(date);
    // test info
    setTitle('Bench Press');
    setInfo('225 lbs');
  }, []);

  const handleAddFitness = () => {
    console.log('Add Button Pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleAddFitness} style={styles.button}>
        <IonIcon name={'add-circle-outline'} size={50} color={'#A0ED7B'} />
      </TouchableOpacity>
      <ScrollView style={styles.cards}>
        {cards.map((card, i) => (
          <Card />
        ))}
        <Card
          date={date}
          title={title}
          info={info}
          iconName={'podium-outline'}
        />
      </ScrollView>
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

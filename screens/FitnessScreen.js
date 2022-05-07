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

  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [date, setDate] = useState(null);
  const [iconName, setIconName] = useState('');

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
  }, []);

  const [cards, setCards] = useState([
    {
      date: {date},
      title: 'Height',
      info: '5 ft. 11 in',
      iconName: 'podium-outline',
    },
    {
      date: {date},
      title: 'Body Weight',
      info: '155 lbs',
      iconName: 'body-outline',
    },
    {
      date: {date},
      title: 'Bench Press',
      info: '225 lbs',
      iconName: 'barbell-outline',
    },
  ]);

  const handleAddFitness = () => {
    console.log('Add Button Pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleAddFitness} style={styles.button}>
        <IonIcon name={'add-circle-outline'} size={50} color={'#A0ED7B'} />
      </TouchableOpacity>
      <ScrollView style={styles.cards}>
        {cards.map((card, index) => (
          <Card
            card={card}
            key={index}
            date={date}
            title={title}
            info={info}
            iconName={iconName}
          />
        ))}
        {/* <Card
          date={date}
          title={title}
          info={info}
          iconName={'barbell-outline'}
        /> */}
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
    flexDirection: 'column',
  },
  cards: {},
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

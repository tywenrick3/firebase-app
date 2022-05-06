import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
IonIcon.loadFont();

const FitnessCard = ({date, title, info, iconName}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.dataText}>{info}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.iconContainer}>
        <IonIcon name={iconName} size={60} color={'#A0ED7B'} />
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 35,
    height: 125,
    borderRadius: 25,
    borderColor: '#A0ED7B',
    borderWidth: 3,
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
    paddingLeft: 120,
  },

  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 20,
  },
  dataText: {
    fontSize: 22,
    padding: 10,
    paddingLeft: 20,
  },
  dateText: {
    fontSize: 14,
    fontStyle: 'italic',
    paddingLeft: 20,
  },
});

export default FitnessCard;

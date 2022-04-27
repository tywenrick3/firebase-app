import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {displayTime} from '../components/util';

function Result({results}) {
  return (
    <ScrollView>
      <View style={styles.resultItem} />
      {results.map((item, index) => (
        <View key={index} style={styles.resultItem}>
          <Text style={styles.resultItemText}>
            Lap {results.length - index}
          </Text>
          <Text style={styles.resultItemText}>{displayTime(item)}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderColor: '#313131',
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  resultItemText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default React.memo(Result);

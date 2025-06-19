import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name: string;
  lifeSpan: string;
  origin: string;
}

const CatInfoCard: React.FC<Props> = ({ name, lifeSpan, origin }) => {
  return (
    <View style={styles.container}>
        <View style={styles.nameContainer}>  
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.infoLife}>{lifeSpan}</Text>
        </View>
      <Text style={styles.infoOrigin}>{origin}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '90%',
  },
  nameContainer: {
    flexDirection: 'row',
    alignContent: 'flex-end',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  infoOrigin: {
    fontSize: 10,
    marginBottom: 4,
    color: '#555',
  },
  infoLife: {
    fontSize: 22,
    color: '#555',
  }
});

export default CatInfoCard;
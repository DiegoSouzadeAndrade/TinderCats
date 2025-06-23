import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name: string;
  affectionLevel: string;
  origin: string;
}

const CatInfoCard: React.FC<Props> = ({ name, affectionLevel, origin }) => {
  return (
    <View style={styles.container}>
        <View style={styles.nameContainer}>  
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.infoAffectionLevel}>{affectionLevel}</Text>
        </View>
      <Text style={styles.infoOrigin}>{origin}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    backgroundColor: '#f0f0f0',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '90%',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#434141',
  },
  infoOrigin: {
    fontSize: 8,
    color: '#BFBFC0',
  },
  infoAffectionLevel: {
    fontSize: 16,
    color: '#434141',
  }
});

export default CatInfoCard;
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

type Props = {
  onVote: (value: number) => void;
};

const VoteButtons: React.FC<Props> = ({ onVote }) => {

  return (
    <View style={styles.buttonContainer}>
      <Button title={'dislike'} onPress={() => onVote(0)} color="tomato" />
      <Button title={'like'} onPress={() => onVote(1)} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default VoteButtons;
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = {
    onPress: (value?: number) => void;
    name: string;
    size: number;
    color: string
};

const VoteButtons: React.FC<Props> = ({ onPress, name, size, color }) => {

  return (
      <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress()}>
          <Icon style={styles.icon} name={name} size={size} color={color}/>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    width: 65,
    height: 65,
    overflow: 'hidden',
    borderRadius: 50,
    borderWidth: 5,
    backgroundColor: 'white',    
    elevation: 5,
  },
  icon:{
    marginBottom: -5,
  },
});

export default VoteButtons;
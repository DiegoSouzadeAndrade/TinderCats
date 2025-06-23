import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
    onPress: (value?: number) => void;
    name: string;
    size: number;
    color: string
};

const IconButton: React.FC<Props> = ({ onPress, name, size, color}) => {

  return (
      <TouchableOpacity style={styles.button} onPress={() => onPress()}>
          <Icon style={styles.iconContainer} name={name} size={size} color={color}/>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 65,
    height: 65,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  iconContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
import React from 'react';
import { View, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


type Props = {
    onPress: (value?: number) => void;
    name: string;
    size: number;
    color: string;
    backgroundColor?: string;
    elevation?: number;
};

const IconButton: React.FC<Props> = ({ onPress, name, size, color, backgroundColor, elevation}) => {

  return (
      <TouchableOpacity style={backgroundColor ? {...styles.button, backgroundColor, elevation} : styles.button} onPress={() => onPress()}>
          <MaterialCommunityIcons style={styles.iconContainer} name={name} size={size} color={color}/>
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
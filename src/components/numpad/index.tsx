import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles.tsx';

interface NumPadProps {
  onKeyPress: (value: string) => void;
}

const NumPad: React.FC<NumPadProps> = ({onKeyPress}) => {
  const keys = ['1', '2', '3', '4', '5', '6', '←', 'Enviar'];

  return (
    <View style={styles.container}>
      {keys.map(key => (
        <TouchableOpacity
          key={key}
          style={key === 'Enviar' ? [styles.key, styles.keySend] : styles.key}
          onPress={() => onKeyPress(key)}>
          <Text style={styles.keyText}>{key}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NumPad;

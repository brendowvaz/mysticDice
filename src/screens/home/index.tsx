import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Image} from 'react-native';
import NumPad from '../../components/numpad';

import styles from './styles';
import {Dies} from '../../assets/others/dies';

const Home: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [dies, setDies] = useState<string>('');

  const handleKeyPress = (value: string) => {
    if (value === '←') {
      setInput(input.slice(0, -1));
    } else if (value === 'Enviar') {
    } else {
      if (input.length < 2) setInput(input + value);
    }
  };

  useEffect(() => {
    if (input.length === 2) {
      setDies(Math.min(+input, +input.split('').reverse().join('')).toString());
    } else {
      setDies('');
    }
  }, [input]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {dies.length === 2 && (
          <Image source={{uri: Dies[dies]}} style={styles.image} />
        )}
      </View>
      <Text style={styles.input}>{input}</Text>
      <NumPad onKeyPress={handleKeyPress} />
    </SafeAreaView>
  );
};

export default Home;

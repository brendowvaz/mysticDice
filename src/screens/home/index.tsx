import React from 'react';
import {View, StatusBar, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../assets/others/colors';
import Button from '../../components/button';
import styles from './styles';

function Home({navigation}: any) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.purpple} />
      <LinearGradient
        colors={[colors.purpple, colors.purpple_secondary]}
        style={styles.linearGradient}></LinearGradient>
    </View>
  );
}
export default Home;

import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/others/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
  },
  input: {
    fontSize: 32,
    marginBottom: 20,
    padding: 10,

    backgroundColor: colors.purpple_secondary,
    color: colors.white,
    borderRadius: 10,
    width: '90%',
    textAlign: 'center',
  },
  image: {
    width: 400,
    height: 350,
  },
});

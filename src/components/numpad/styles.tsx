import {StyleSheet} from 'react-native';

import colors from '../../assets/others/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  key: {
    width: '30%',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.purpple_secondary,
    borderRadius: 10,
  },
  keySend: {
    width: '60%',
  },
  keyText: {
    fontSize: 30,
    color: colors.white,
  },
});

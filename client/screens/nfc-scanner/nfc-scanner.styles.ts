import { StyleSheet } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerText: {
    fontSize: 20,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
});

import { StyleSheet } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subtitle: {
    color: COLORS.light.BLACK,
    fontSize: 28,
  },
  title: {
    color: COLORS.light.BLUE,
    fontSize: 36,
    fontWeight: 'bold',
  }
});

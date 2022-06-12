import { StyleSheet } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  addressContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  addressValue: {
    fontSize: 14,
    color: COLORS.light.GRAY,
    marginRight: 10,
  },
});

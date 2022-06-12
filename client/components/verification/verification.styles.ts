import { StyleSheet } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  verificationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifiedByText: {
    color: COLORS.light.BLUE,
    fontWeight: 'bold',
    marginRight: 5,
  },
  verificatorText: {
    color: COLORS.light.BLACK,
    marginRight: 10,
    fontWeight: 'bold',
  },
});

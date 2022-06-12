import { StyleSheet, TouchableOpacity } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScan: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: '10%',
  },
  containerScanText: {
    fontSize: 20,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

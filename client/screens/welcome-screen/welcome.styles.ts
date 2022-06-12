import { StyleSheet, TouchableOpacity } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '20%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  authContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  authContainerText: {
    fontSize: 20,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  authContainerTextSeparator: {
    fontSize: 28,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
  scanContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  scanContainerText: {
    fontSize: 20,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  scanContainerButtons: {
    display: 'flex',
    flexDirection: 'row'
  },
});

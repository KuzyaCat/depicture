import { StyleSheet } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerScan: {
    marginTop: '20%',
  },
  containerButton: {
    marginBottom: '20%',
  },
  containerText: {
    fontSize: 20,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    width: 350,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: COLORS.light.BLUE,
  },
});

import { StyleSheet } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '10%',
    paddingHorizontal: '5%',
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#fff',
    height: '100%',
  },
  bidDataContainer: {
    marginBottom: 40,
  },
  bidContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  bidUserActionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bidUserContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bidUserName: {
    color: COLORS.light.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bidActionName: {
    color: COLORS.light.GRAY,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bidPrice: {
    color: COLORS.light.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  },
  endTimeContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endsInText: {
    color: COLORS.light.GRAY,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  endTimeText: {
    color: COLORS.light.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

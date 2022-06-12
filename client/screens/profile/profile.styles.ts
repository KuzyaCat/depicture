import { StyleSheet, TouchableOpacity } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  userFullname: {
    fontSize: 24,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  attributeContainer: {
    paddingHorizontal: '15%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  attributeDataContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  attributeDataNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  attributeDataNameText: {
    fontSize: 18,
    color: COLORS.light.GRAY,
    fontWeight: 'bold',
    marginBottom: 5,
    marginRight: 10,
  },
  attributeDataValueText: {
    fontSize: 16,
    color: COLORS.light.BLACK,
    marginBottom: 5,
  },
});

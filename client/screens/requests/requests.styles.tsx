import { StyleSheet, TouchableOpacity } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '5%',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: '#fff',
    height: '100%',
  },
  containerSubtitle: {
    fontSize: 16,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  requestsContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  shareRequestContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: '7%',
    width: '100%',
  },
  shareRequestUserContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    marginRight: 20,
  },
  shareRequestDataContainer: {
    display: 'flex',
  },
  userActionContainer: {
    display: 'flex',
  },
  userName: {
    fontSize: 16,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
  },
  userActionText: {
    fontSize: 16,
    color: COLORS.light.GRAY,
    fontWeight: 'bold',
  },
  userActionTypeText: {
    fontSize: 16,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userShareAttributeText: {
    fontSize: 16,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
    fontStyle: 'italic',
    width: '60%',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
});

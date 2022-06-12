import { StyleSheet, TouchableOpacity } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: '150%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: '5%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: 'hidden',
  },
  pictureHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '15%',
  },
  pictureDataContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  pictureName: {
    fontSize: 28,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
  },
  pictureStatus: {
    fontSize: 22,
    marginTop: 30,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
  },
  pictureArtist: {
    fontSize: 18,
    color: COLORS.light.GRAY,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pictureDescription: {
    fontSize: 14,
    color: COLORS.light.BLACK,
    marginBottom: 20,
    overflow: 'hidden',
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

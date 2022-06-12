import { StyleSheet } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    backgroundColor: '#fff',
  },
  subtitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: COLORS.light.BLACK,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dealContainer: {
    display: 'flex',
    marginBottom: 20,
  },
  dealContainerPictureTitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  dealWayContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dealPerson: {
    display: 'flex',
  },
  dealPicturePerson: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.light.BLACK,
  },
  dealTimestamp: {
    color: COLORS.light.GRAY,
    fontSize: 16,
  },
  dealPictureName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.light.BLACK,
  },
  dealArtistName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.light.GRAY,
  },
  scrollView: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

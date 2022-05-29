/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';
import { ROUTES } from './routes';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: ROUTES.TAB_ONE,
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: ROUTES.TAB_TWO,
            },
          },
          QRScanner: {
            screens: {
              QRCodeScannerScreen: ROUTES.QR_SCANNER,
            },
          },
        },
      },
      Modal: ROUTES.MODAL,
      NotFound: '*',
    },
  },
};

export default linking;

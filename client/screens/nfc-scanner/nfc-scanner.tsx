import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//import NfcManager, { NfcTech } from 'react-native-nfc-manager';

import { Button } from '../../components/button';
import { NFCIcon } from '../../icons';

import { styles } from './nfc-scanner.styles';

// Pre-step, call this before any NFC operations
//NfcManager.start();

export function NFCScannerScreen({ navigation }: any) {
  //async function readNdef() {
    //try {
      //// register for the NFC tag with NDEF in it
      //await NfcManager.requestTechnology(NfcTech.Ndef);
      //// the resolved tag object will contain `ndefMessage` property
      //const tag = await NfcManager.getTag();
      //console.warn('Tag found', tag);
    //} catch (ex) {
      //console.warn('Oops!', ex);
    //} finally {
      //// stop the nfc scanning
      //NfcManager.cancelTechnologyRequest();
    //}
  //}

  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Scan Tangem card with NFC</Text>
      <NFCIcon width={304} height={304} />
      <Text style={styles.containerText}>Place the top of the phone on the Tangem card</Text>
    </View>
  );
};

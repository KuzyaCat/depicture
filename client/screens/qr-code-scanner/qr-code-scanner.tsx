import { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner, BarCodeScannedCallback } from 'expo-barcode-scanner';

import { Button as AppButton } from '../../components/button';

import { Scanner, IScanner } from '../../services/scanner';
import { slicePictureId } from '../../utils';

import { ROUTES } from '../../navigation/routes';

import { styles } from './qr-code-scanner.styles';

export function QRCodeScannerScreen({ navigation }: any) { // TODO: add types
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);
  const [text, setText] = useState<string>('Not yet scanned')

  const askForCameraPermission = useCallback(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }, [])

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned: BarCodeScannedCallback = useCallback(({ type, data }: any) => {
    const callback = () => {
      setScanned(true);
      setText(data)
    };
    const scanner: IScanner = new Scanner(navigation);
    scanner.scanAndRedirect(callback, ROUTES.PICTURE, { id: slicePictureId(data) });
  }, []);

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.containerScan}>
        <Text style={styles.containerText}>Scan QR code with camera</Text>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 450, width: 450 }} />
        </View>
      </View>

      <View style={styles.containerButton}>
        {scanned &&
          <AppButton
            onPress={() => setScanned(false)}
            text='Scan again'
            isPrimary={false}
            width={200}
            height={48}
          />
        }
      </View>
    </View>
  );
}

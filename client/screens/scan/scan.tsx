import React, { useEffect, useState } from 'react';

import { Text, View } from '../../components/Themed';
import { Button } from '../../components/button';
import { Title } from '../../components/title';
import { RootTabScreenProps } from '../../types';

import { ROUTES } from '../../navigation/routes';

import * as userActions from '../../redux/actions/user.action';
import * as userSelectors from '../../redux/selectors/user.selector';

import { styles } from './scan.styles';

export function ScanScreen({ navigation }: RootTabScreenProps<'Scan'>) {
  const onQRPress = () => navigation.navigate(ROUTES.QR_SCANNER);
  const onTangemPress = () => navigation.navigate(ROUTES.NFC_SCANNER);

  return (
    <View style={styles.container}>
      <View style={styles.containerScan}>
        <Text style={styles.containerScanText}>Scan QR code with camera</Text>
        <Button
          onPress={onQRPress}
          text='Scan QR code'
          fontSize={20}
          width={200}
          height={48}
        />
      </View>
      <View style={styles.containerScan}>
        <Text style={styles.containerScanText}>Scan Tangem with NFC</Text>
        <Button
          onPress={onTangemPress}
          text='Scan Tangem'
          isPrimary={true}
          fontSize={20}
          width={200}
          height={48}
        />
      </View>
    </View>
  );
}

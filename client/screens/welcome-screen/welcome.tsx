import React, { useEffect, useState } from 'react';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { useDispatch, useSelector } from 'react-redux';

import { Text, View } from '../../components/Themed';
import { Button } from '../../components/button';
import { Title } from '../../components/title';
import { RootTabScreenProps } from '../../types';
import { shortenAddress } from '../../utils';

import * as userActions from '../../redux/actions/user.action';
import * as userSelectors from '../../redux/selectors/user.selector';

import { styles } from './welcome.styles';

export function WelcomeScreen({ navigation }: any) {
  const [actionFlag, setActionFlag] = useState(false);
  const dispatch = useDispatch();

  const connector = useWalletConnect();

  useEffect(() => {
    if (connector.connected && connector.accounts.length) {
      dispatch(userActions.onConnectWallet(connector.accounts[0]) as any); // TODO: fix type
    } else {
      dispatch(userActions.onConnectWallet(null) as any); // TODO: fix type
    }
  }, [connector, actionFlag]);

  const connectWallet = React.useCallback(() => {
    setActionFlag(!actionFlag);
    return connector.connect();
  }, [connector, actionFlag]);

  const killSession = React.useCallback(() => {
    setActionFlag(!actionFlag);
    return connector.killSession();
  }, [connector, actionFlag]);

  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.authContainer}>
        <Text style={styles.authContainerText}>Authorize with</Text>
        <Button
          onPress={connectWallet}
          text='Connect Wallet'
          fontSize={20}
          width={200}
          height={48}
        />
        <Text style={styles.authContainerTextSeparator}>OR</Text>
        <Text style={styles.authContainerText}>Scan Tangem card with NFC</Text>
        <Button
          onPress={connectWallet}
          text='Scan Tangem'
          isPrimary={true}
          fontSize={20}
          width={200}
          height={48}
        />
      </View>
      <View style={styles.scanContainer}>
        <Text style={styles.scanContainerText}>Scan picture</Text>
        <View style={styles.scanContainerButtons}>
          <Button
            onPress={connectWallet}
            text='Scan QR'
            fontSize={16}
            width={135}
            marginRight={10}
          />
          <Button
            onPress={connectWallet}
            text='Scan Tangem'
            isPrimary={true}
            fontSize={16}
            width={135}
            marginLeft={10}
          />
        </View>
      </View>
    </View>
  );
}

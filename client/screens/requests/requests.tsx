import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, SafeAreaView, Alert } from 'react-native';

import { Text, View } from '../../components/Themed';
import { Button } from '../../components/button';
import { Address } from '../../components/address';
import { Avatar } from '../../components/avatar';

import * as userSelectors from '../../redux/selectors/user.selector';
import { IShareRequest } from '../../domain/request';
import { shortenAddress } from '../../utils';

import { styles } from './requests.styles';

const INCOMING_REQUESTS = [
  {
    id: 1,
    userName: 'John Doe',
    userImage: 'https://obrazovaka.ru/wp-content/uploads/2014/08/Vinchi-Leonardo-Da.jpg',
    shareType: 'your profile data',
    shareAttribute: 'full name, age, country, portfolio',
  },
  {
    id: 2,
    userName: 'Ivan Ivan',
    userImage: 'https://obrazovaka.ru/wp-content/uploads/2014/08/Vinchi-Leonardo-Da.jpg',
    shareType: 'picture trade history',
    shareAttribute: 'Mona Lisa, Leonardo da Vinci (1503)',
  },
];

export function RequestsScreen({ navigation }: any) {
  const [requests, setRequests] = useState<Array<IShareRequest>>([]);
  const walletAddress = useSelector(userSelectors.getWalletAddress);

  useEffect(() => {
    setRequests(INCOMING_REQUESTS);
  }, []);

  const onButtonPress = (requestId: number) => {
    setRequests((prevState) => 
      prevState.filter((request) => request.id !== requestId)
    );
    Alert.alert(
      'Success',
      'You have accepted a request',
      []
    );
  };

  const renderShareRequest = (shareRequest: IShareRequest) => (
    <View key={shareRequest.id} style={styles.shareRequestContainer}>
      <View style={styles.shareRequestUserContainer}>
        <Text style={styles.userName}>{shareRequest.userName}</Text>
        <Address value={shortenAddress(walletAddress)} iconWidth={16} iconHeight={16} />
      </View>
      <View style={styles.shareRequestDataContainer}>
        <View style={styles.userActionContainer}>
          <Text style={styles.userActionText}>requested you to share</Text>
          <Text style={styles.userActionTypeText}>{shareRequest.shareType}</Text>
          <Text style={styles.userShareAttributeText}>{shareRequest.shareAttribute}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            height={40}
            fontSize={14}
            text='Accept'
            marginRight={5}
            onPress={() => onButtonPress(shareRequest.id)}
          />
          <Button
            height={40}
            fontSize={14}
            text='Decline'
            isWarning
            onPress={() => onButtonPress(shareRequest.id)}
          />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.containerSubtitle}>You have {requests.length} new incoming requests</Text>
          <View style={styles.requestsContainer}>
            { requests.map((shareRequest: IShareRequest) => renderShareRequest(shareRequest)) }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import React, { useEffect, useState, useCallback } from 'react';
import { Switch, ScrollView, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

import { Text, View } from '../../components/Themed';
import { Button } from '../../components/button';
import { Avatar } from '../../components/avatar';
import { Address } from '../../components/address';
import { PencilIcon } from '../../icons';
import { Verification } from '../../components/verification';

import { RootTabScreenProps } from '../../types';
import { ROUTES } from '../../navigation/routes';
import { shortenAddress } from '../../utils';
import { IUser, IUserAttribute } from '../../domain/user';

import * as userSelectors from '../../redux/selectors/user.selector';
import * as userActions from '../../redux/actions/user.action';

import COLORS from '../../constants/Colors';
import { styles } from './profile.styles';

const USER_DATA = {
  fullname: 'John Doe',
  image: 'https://obrazovaka.ru/wp-content/uploads/2014/08/Vinchi-Leonardo-Da.jpg',
  attributes: [
    {
      id: 1,
      active: true,
      requiresVerification: true,
      name: 'Fullname',
      value: 'John Doe',
      verifications: [
        {
          id: 11,
          verified: true,
          verifiedBy: 'Melbourne Government',
        }
      ]
    },
    {
      id: 2,
      active: false,
      requiresVerification: true,
      name: 'Age',
      value: '45',
      verifications: [
        {
          id: 21,
          verified: false,
          verifiedBy: 'Melbourne Government',
        }
      ]
    },
    {
      id: 3,
      active: true,
      requiresVerification: true,
      name: 'Country',
      value: 'Australia',
      verifications: [
        {
          id: 31,
          verified: true,
          verifiedBy: 'Melbourne Government',
        }
      ]
    },
    {
      id: 4,
      active: true,
      requiresVerification: false,
      name: 'Contact',
      value: 'johndoe@example.com',
      verifications: []
    },
    {
      id: 5,
      active: true,
      isDescription: true,
      requiresVerification: false,
      name: 'About',
      value: 'Lorem ipsum dolor sit amet.',
      verifications: []
    },
  ]
};

export function ProfileScreen({ navigation }: RootTabScreenProps<'Profile'>) {
  const [userData, setUserData] = useState<IUser>();

  const dispatch = useDispatch();
  const connector = useWalletConnect();

  const walletAddress = useSelector(userSelectors.getWalletAddress);

  useEffect(() => {
    setUserData(USER_DATA);
  }, []);

  const onToggleSwitch = (attributeId: number, newActive: boolean) => {
    setUserData((prevState) => ({
      ...prevState,
      attributes: prevState.attributes.map(
        (attr: IUserAttribute) =>
          attr.id === attributeId ? { ...attr, active: newActive } : attr
      ),
    }))
  };

  const onLogoutPress = useCallback(() => {
    dispatch(userActions.onConnectWallet(null) as any);
    return connector.killSession();
  }, []);

  const renderDataAttribute = (attribute: IUserAttribute) => {
    return (
      <View key={attribute.id} style={styles.attributeContainer}>
        <View style={styles.attributeDataContainer}>
          <View style={styles.attributeDataNameContainer}>
            <Text style={styles.attributeDataNameText}>{attribute.name}</Text>
            <PencilIcon width={16} height={16} />
          </View>
          <Text
            style={{
              ...styles.attributeDataValueText,
              ...(attribute.isDescription ? {} : { fontWeight: 'bold' } ),
            }}>{attribute.value}
          </Text>
          {
            attribute.verifications.map((verification) => (
              verification.verified
                ? <Verification key={verification.id} fontSize={14} verificatorValue={verification.verifiedBy} />
                : <Button key={verification.id} height={40} fontSize={14} text='Request verification' />
            ))
          }
        </View>
        <Switch
          trackColor={{ false: COLORS.light.BLUE, true: COLORS.light.BLUE }}
          thumbColor={ attribute.active ? '#fff' : '#fff' }
          ios_backgroundColor='#fff'
          value={attribute.active}
          style={{ marginLeft: 30, }}
          onValueChange={() => onToggleSwitch(attribute.id, !attribute.active)}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {userData && <Avatar url={userData.image} width={150} height={150} marginVertical={20} />}
          <Text style={styles.userFullname}>{userData && userData.fullname ? userData.fullname : 'User name'}</Text>
          {walletAddress && <Address value={shortenAddress(walletAddress)} marginBottom={30} iconWidth={16} iconHeight={16} />} 
          <View>
            { userData && userData.attributes.map((attribute) => renderDataAttribute(attribute)) }
          </View>
          <Button
            height={40}
            fontSize={14}
            text='Log out'
            marginTop={20}
            marginBottom={20}
            onPress={onLogoutPress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

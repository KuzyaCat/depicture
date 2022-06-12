import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageBackground, ScrollView, SafeAreaView, Alert } from 'react-native';

import { Text, View } from '../../components/Themed';
import { Button } from '../../components/button';
import { Verification } from '../../components/verification';
import { Address } from '../../components/address';

import { IPicture, IPictureAttribute } from '../../domain/picture';
import { shortenAddress } from '../../utils';
import * as userSelectors from '../../redux/selectors/user.selector';
import { ROUTES } from '../../navigation/routes';

import { styles } from './picture.styles';

const PICTURE_DATA = {
  name: 'Mona Lisa',
  artist: 'Leonardo da Vinci, 1503',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/250px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
  description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
  attributes: [
    {
      id: 1,
      requiresVerification: false,
      name: 'Size',
      value: '30.5x40.6 cm',
      verifications: []
    },
    {
      id: 2,
      requiresVerification: false,
      name: 'Last trade value',
      value: '$1.500.000',
      verifications: []
    },
    {
      id: 3,
      requiresVerification: true,
      name: 'Originality',
      verifications: [
        {
          id: 31,
          verified: true,
          verifiedBy: 'The Art Bank of Australia',
        }
      ]
    },
    {
      id: 4,
      requiresVerification: true,
      name: 'Artist',
      value: 'Leonardo da Vinci',
      verifications: [
        {
          id: 41,
          verified: true,
          verifiedBy: 'The Art Bank of Australia',
        }
      ]
    },
    {
      id: 5,
      requiresVerification: false,
      name: 'Location',
      value: 'The Museum of Modern Art',
      verifications: [
        {
          id: 51,
          verified: true,
          verifiedBy: 'The Art Bank of Australia',
        }
      ]
    },
    {
      id: 6,
      requiresVerification: false,
      name: 'Physical owner',
      value: 'John Doe',
      verifications: [
        {
          id: 61,
          verified: true,
          verifiedBy: 'The Art Deals',
        }
      ]
    },
    {
      id: 7,
      requiresVerification: true,
      requiresAddress: true,
      name: 'Digital owner',
      value: 'John Doe',
      verifications: [
        {
          id: 61,
          verified: true,
          verifiedBy: 'The Art Deals',
        }
      ]
    },
    {
      id: 8,
      requiresVerification: true,
      name: 'Latest picture trades',
      verifications: []
    }
  ]
};

export function PictureScreen({ navigation }: any) {
  const [pictureData, setPictureData] = useState<IPicture>();

  const walletAddress = useSelector(userSelectors.getWalletAddress);

  useEffect(() => {
    setPictureData(PICTURE_DATA);
  }, []);

  const onViewDetailsPress = useCallback(() => navigation.navigate(ROUTES.AUCTION_DETAILS), []);

  const renderDataAttribute = (attribute: IPictureAttribute) => {
    return (
      <View key={attribute.id} style={styles.attributeContainer}>
        <View style={styles.attributeDataContainer}>
          <View style={styles.attributeDataNameContainer}>
            <Text style={styles.attributeDataNameText}>{attribute.name}</Text>
          </View>
          {
            attribute.value &&
              <Text
                style={{
                  ...styles.attributeDataValueText,
                  ...(attribute.isDescription ? {} : { fontWeight: 'bold' } ),
                }}>{attribute.value}
              </Text>
          }
          {
            attribute.requiresAddress &&
              <Address value={shortenAddress(walletAddress)} iconWidth={16} iconHeight={16} />
          }
          {
            attribute.verifications.map((verification) => (
              verification.verified
                ? <Verification key={verification.id} fontSize={14} verificatorValue={verification.verifiedBy} />
                : <Button onPress={onRequestDetailsPress} height={40} fontSize={14} text='Request details' />
            ))
          }
          {
            (!attribute.verifications.length && attribute.requiresVerification) &&
              <Button onPress={onRequestDetailsPress} height={40} fontSize={14} text='Request details' />
          }
        </View>
      </View>
    );
  };

  const onRequestDetailsPress = useCallback(
    () => Alert.alert(
      'Success',
      'You have requested the user to share details',
      []
    ),
    []
  );

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.wrapper}>
          <ImageBackground source={{ uri: pictureData ? pictureData.image : '' }} style={styles.backgroundImage}>
            <View style={styles.container}>
              <View style={styles.pictureHeader}>
                <Text style={styles.pictureName}>{ pictureData ? pictureData.name : 'Picture name' }</Text>
                <Text style={styles.pictureArtist}>{ pictureData ? pictureData.artist : 'Picture artist' }</Text>
                <Text style={styles.pictureDescription}>{ pictureData ? pictureData.description : '' }</Text>
              </View>
              <View style={styles.pictureDataContainer}>
                { pictureData && pictureData.attributes.map((attribute: IPictureAttribute) => renderDataAttribute(attribute)) }
              </View>
              <Text style={styles.pictureStatus}>The Art is on auction</Text>
              <Button
                width={156}
                height={38}
                marginTop={10}
                marginBottom={20}
                text='View details'
                onPress={onViewDetailsPress}
              />
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

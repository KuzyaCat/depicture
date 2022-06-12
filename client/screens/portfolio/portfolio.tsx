import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import { Button } from '../../components/button';
import { Address } from '../../components/address';
import { ArrowIcon } from '../../icons';

import { ROUTES } from '../../navigation/routes';

import * as userSelectors from '../../redux/selectors/user.selector';
import { IDeal } from '../../domain/deal';
import { shortenAddress } from '../../utils';

import { styles } from './portfolio.styles';

const DEALS_DATA = [
  {
    id: 5,
    timestamp: '20.04.2022',
    pictureName: 'Mona Lisa',
    pictureArtist: 'Leonardo da Vinci',
    from: 'John Doe',
    to: 'You',
    verified: true,
  },
  {
    id: 4,
    timestamp: '18.04.2022',
    pictureName: 'Mona Lisa',
    pictureArtist: 'Leonardo da Vinci',
    from: 'You',
    to: 'John Doe',
    verified: true,
  },
  {
    id: 3,
    timestamp: '04.04.2022',
    pictureName: 'Mona Lisa',
    pictureArtist: 'Leonardo da Vinci',
    from: 'John Doe',
    to: 'You',
    verified: true,
  },
  {
    id: 2,
    timestamp: '25.03.2022',
    pictureName: 'Mona Lisa',
    pictureArtist: 'Leonardo da Vinci',
    from: 'You',
    to: 'John Doe',
    verified: true,
  },
  {
    id: 1,
    timestamp: '10.02.2022',
    pictureName: 'Mona Lisa',
    pictureArtist: 'Leonardo da Vinci',
    from: 'John Doe',
    to: 'You',
    verified: true,
  },
];

export function PortfolioScreen({ navigation }: any) {
  const [dealsData, setDealsData] = useState<Array<IDeal>>([]);

  const walletAddress = useSelector(userSelectors.getWalletAddress);

  useEffect(() => {
    setDealsData(DEALS_DATA);
  }, []);

  const renderDeals = (deal: IDeal) => (
    <View key={deal.id} style={styles.dealContainer}>
      <Text style={styles.dealTimestamp}>{deal.timestamp}</Text>
      <View style={styles.dealContainerPictureTitle}>
        <Text style={styles.dealPictureName}>{deal.pictureName}</Text>
        <Text style={styles.dealArtistName}> {deal.pictureArtist}</Text>
      </View>
      <View style={styles.dealWayContainer}>
        <View style={styles.dealPerson}>
          <Text style={styles.dealPicturePerson}>{deal.from}</Text>
          <Address value={shortenAddress(walletAddress)} iconWidth={16} iconHeight={16} />
        </View>
        <ArrowIcon width={64}/>
        <View style={styles.dealPerson}>
          <Text style={styles.dealPicturePerson}>{deal.to}</Text>
          <Address value={shortenAddress(walletAddress)} iconWidth={16} iconHeight={16} />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>You've made {dealsData.length} deals</Text>
          </View>
          { dealsData.map((deal) => renderDeals(deal)) }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import { Button } from '../../components/button';
import { Address } from '../../components/address';

import { IAuctionDetails, IBid } from '../../domain/auction';
import * as userSelectors from '../../redux/selectors/user.selector';
import { shortenAddress } from '../../utils';

import { styles } from './auction-details.styles';

const AUCTION_DETAILS_DATA = {
  endsIn: '01:36:00',
  bids: [
    {
      id: 1,
      userName: 'John Doe',
      value: '$500.000'
    },
    {
      id: 2,
      userName: 'Ivan Ivan',
      value: '$450.000'
    },
    {
      id: 3,
      userName: 'John Doe',
      value: '$400.000'
    },
    {
      id: 4,
      userName: 'Petr Weh',
      value: '$380.000'
    },
    {
      id: 5,
      userName: 'Ivan Ivan',
      value: '$350.000'
    },
    {
      id: 6,
      userName: 'John Doe',
      value: '$320.000'
    },
    {
      id: 7,
      userName: 'John Doe',
      value: '$300.000'
    },
    {
      id: 8,
      userName: 'Petr Weh',
      value: '$100.000'
    },
  ],
};

export function AuctionDetailsScreen({ navigation }: any) {
  const [auctionDetailsData, setAuctionDetailsData] = useState<IAuctionDetails>();
  const walletAddress = useSelector(userSelectors.getWalletAddress);

  useEffect(() => {
    setAuctionDetailsData(AUCTION_DETAILS_DATA);
  }, []);

  const renderBidAttributes = (bid: IBid) => (
    <View key={bid.id} style={styles.bidContainer}>
      <View style={styles.bidUserActionContainer}>
        <View style={styles.bidUserContainer}>
          <Text style={styles.bidUserName}>{bid.userName}</Text>
          <Address value={shortenAddress(walletAddress)} iconWidth={16} iconHeight={16} />
        </View>
        <Text style={styles.bidActionName}>placed a bid</Text>
      </View>
      <Text style={styles.bidPrice}>{bid.value}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.bidDataContainer}>
            {auctionDetailsData && auctionDetailsData.bids.map((bid: IBid) => renderBidAttributes(bid))}
          </View>
          <View style={styles.endTimeContainer}>
            <Text style={styles.endsInText}>Ends in</Text>
            <Text style={styles.endTimeText}>{ auctionDetailsData ? auctionDetailsData.endsIn : '' }</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              width={156}
              height={38}
              text='Make a bid'
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

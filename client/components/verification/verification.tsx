import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import { CheckedIcon } from '../../icons/checked-icon';

import { styles } from './verification.styles';

interface IVerificationProps {
  fontSize: number;
  verificatorValue: string;
}

export const Verification: React.FC<IVerificationProps> = (props) => {
  const { fontSize, verificatorValue } = props;

  return (
    <View style={styles.verificationContainer}>
      <Text style={{
        ...styles.verifiedByText,
        fontSize,
      }}>Verified by</Text>
      <Text style={{
        ...styles.verificatorText,
          fontSize,
      }}>{verificatorValue}</Text>
      <CheckedIcon width={18} height={18} />
    </View>
  );
};

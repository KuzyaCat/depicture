import { Text, View } from 'react-native';

import { styles } from './title.styles';

export const Title = (props: {}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Welcome to</Text>
      <Text style={styles.title}>DEPICTURE</Text>
    </View>
  );
};

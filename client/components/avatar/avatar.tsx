import React from 'react';
import { View, ImageBackground } from 'react-native';

import { styles } from './avatar.styles';

interface IAvatarProps {
  url: string;
  width: number | string;
  height: number | string;
  marginVertical?: number;
}

export const Avatar: React.FC<IAvatarProps> = (props) => {
  const image = { uri: props.url };

  return (
    <View style={{
      ...styles.avatarContainer,
      width: props.width,
      height: props.height,
      marginVertical: props.marginVertical,
    }}>
      <ImageBackground
        source={image}
        style={styles.avatarImage}
        resizeMode='cover'
        imageStyle={{ borderRadius: 100000 }}
      />
    </View>
  );
};

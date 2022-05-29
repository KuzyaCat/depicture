import { TouchableOpacity, Text } from 'react-native';

import { styles } from './button.styles';

export const Button = (props: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...(props.isPrimary ? styles.primaryButtonStyle : styles.buttonStyle),
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
      }}>
        <Text
          style={props.isPrimary ? styles.primaryButtonTextStyle : styles.buttonTextStyle}
        >{props.text}
        </Text>
    </TouchableOpacity>
  );
};

interface IButtonProps {
  onPress?: () => void;
  isPrimary?: boolean;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  text: string;
};

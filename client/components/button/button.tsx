import { TouchableOpacity, Text } from 'react-native';

import { styles } from './button.styles';

export const Button = (props: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...(props.isPrimary
          ? styles.primaryButtonStyle
          : props.isWarning
            ? styles.warningButtonStyle
            : styles.buttonStyle
        ),
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        ...(props.width ? { width: props.width } : {}),
        ...(props.height ? { height: props.height } : {}),
      }}>
        <Text
          style={{
            ...props.isPrimary
              ? styles.primaryButtonTextStyle
              : props.isWarning
                ? styles.warningTextStyle
                : styles.buttonTextStyle,
            ...(props.fontSize ? { fontSize: props.fontSize } : {}),
          }}
        >{props.text}
        </Text>
    </TouchableOpacity>
  );
};

interface IButtonProps {
  onPress?: () => void;
  isPrimary?: boolean;
  isWarning?: boolean;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  text: string;
  fontSize?: number;
  width?: number;
  height?: number;
};

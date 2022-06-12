import React from 'react';
import Svg, { Circle, Path } from "react-native-svg"

interface ICopyIconProps {
  width: number;
  height: number;
}

export const CopyIcon: React.FC<ICopyIconProps> = (props) => {
  const { width, height } = props;

  return (
  <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M9.333 3V.667h-8V10H3.62" stroke="#2F80ED" strokeWidth={1.175} />
      <Path stroke="#2F80ED" strokeWidth={1.175} d="M6.667 6h8v9.333h-8z" />
    </Svg>
  );
};

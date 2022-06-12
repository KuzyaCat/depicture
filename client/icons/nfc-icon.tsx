import React from 'react';
import Svg, { Circle, Path } from "react-native-svg"

interface INFCIconProps {
  width: number;
  height: number;
}

export const NFCIcon: React.FC<INFCIconProps> = (props) => {
  const { width, height } = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 310 310"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={155} cy={155} r={152} stroke="#007AFF" strokeWidth={6} />
      <Path
        d="M223.048 83.183H85.654a8 8 0 0 0-8 8v190.262c0 1.599.757 3.111 2.093 3.99 11.79 7.759 40.043 20.868 74.604 20.868s62.813-13.109 74.603-20.868c1.337-.879 2.094-2.391 2.094-3.99V91.183a8 8 0 0 0-8-8Z"
        fill="#E0EFFE"
        stroke="#007AFF"
        strokeWidth={3}
      />
      <Path
        d="m113.598 83.183 5.578 9.762h69.725l5.578-9.761"
        stroke="#007AFF"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
};

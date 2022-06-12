import React from 'react';
import Svg, { Circle, Path } from "react-native-svg"

interface ICheckedIconProps {
  width: number;
  height: number;
}

export const CheckedIcon: React.FC<ICheckedIconProps> = (props) => {
  const { width, height } = props;

  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx={7.5}
        cy={7.5}
        r={6.5}
        fill="#24A0ED"
        stroke="#24A0ED"
        strokeWidth={2}
      />
      <Path
        d="m4.391 7.696 1.943 1.956 4.275-4.304"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </Svg>
  );
};

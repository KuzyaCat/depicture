import React from 'react';
import Svg, { Circle, Path } from "react-native-svg"

interface ICheckedIconProps {
  width: number;
}

export const ArrowIcon: React.FC<ICheckedIconProps> = (props) => {
  const { width } = props;

  return (
    <Svg
      width={width}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M65.06 13.06a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L61.88 12l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM0 13.5h64v-3H0v3Z"
        fill="#2F80ED"
      />
    </Svg>
  );
};


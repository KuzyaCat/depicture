import React from 'react';
import Svg, { Circle, Path } from "react-native-svg"

interface IPencilIconProps {
  width: number;
  height: number;
}

export const PencilIcon: React.FC<IPencilIconProps> = (props) => {
  const { width, height } = props;

  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={8} cy={8} r={7.5} fill="#fff" stroke="#2F80ED" />
      <Path
        d="M11.245 6.287 6.65 10.883l-1.34.16.162-1.338 4.596-4.597a.974.974 0 0 1 .236-.032c.186-.003.433.046.68.294.249.248.298.495.295.68a.977.977 0 0 1-.033.237ZM8.884 5.584 10.68 7.38"
        stroke="#2F80ED"
      />
    </Svg>
  );
};

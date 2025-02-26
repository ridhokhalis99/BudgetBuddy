import { Svg, Path } from "react-native-svg";

export default function Account({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C8.81186 17.2 7.64218 16.906 6.59528 16.3441C5.54837 15.7823 4.65678 14.9701 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C15.3432 14.9701 14.4516 15.7823 13.4047 16.3441C12.3578 16.906 11.1881 17.2 10 17.2Z"
        fill={color}
      />
    </Svg>
  );
}

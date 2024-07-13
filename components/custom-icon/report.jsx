import { Svg, Path } from "react-native-svg";

export default function Report({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8.71104 0.32071C5.47666 0.747273 2.70166 2.7254 1.2626 5.62696C0.611039 6.93946 0.311039 8.14415 0.264164 9.64883C0.231352 10.6285 0.315727 11.4207 0.536039 12.2973C1.79698 17.3129 6.79854 20.4676 11.861 19.4457C15.8642 18.6348 18.911 15.4191 19.5392 11.3363C19.647 10.6379 19.6517 9.26915 19.5439 8.57071C18.9439 4.65196 16.136 1.51602 12.3673 0.555084C11.2189 0.259772 9.83604 0.175398 8.71104 0.32071ZM7.85791 4.53477C8.18135 4.66602 8.35948 5.02227 8.28916 5.39258C8.26573 5.53321 8.15791 5.67383 7.75948 6.07227L7.26729 6.57852L10.9751 6.5879C14.636 6.60196 14.6829 6.60196 14.8095 6.7004C15.0579 6.88321 15.1329 7.03321 15.1329 7.32852C15.1329 7.62383 15.0579 7.77383 14.8095 7.95665C14.6829 8.05508 14.636 8.05508 10.9751 8.06915L7.26729 8.07852L7.75948 8.58477C8.29385 9.12383 8.35948 9.2504 8.28916 9.61133C8.24698 9.84571 7.96573 10.1223 7.73135 10.1645C7.34229 10.2395 7.25791 10.1785 5.98291 8.90821C4.30479 7.23008 4.30948 7.43165 5.93604 5.78633C7.2626 4.4504 7.42198 4.34727 7.85791 4.53477ZM12.747 9.85508C13.0564 10.0801 15.0532 12.1238 15.1048 12.2645C15.1798 12.466 15.1657 12.7051 15.0673 12.8973C14.9501 13.1176 12.7845 15.2738 12.611 15.3395C12.0157 15.5645 11.4298 15.0629 11.5892 14.4676C11.6267 14.3363 11.7626 14.1629 12.1095 13.8207C12.3673 13.5629 12.5782 13.3379 12.5782 13.3191C12.5782 13.2957 10.9329 13.2816 8.92198 13.2816C4.86729 13.2816 5.11104 13.3004 4.85791 12.9723C4.75479 12.8363 4.73135 12.752 4.73135 12.5504C4.73135 12.2691 4.82041 12.1098 5.07823 11.9316L5.23291 11.8285H8.90323C10.9235 11.8285 12.5782 11.8145 12.5782 11.791C12.5782 11.7723 12.386 11.566 12.1517 11.3363C11.5095 10.7035 11.4064 10.3566 11.7485 9.96758C11.9267 9.76602 12.0204 9.72383 12.3251 9.72383C12.5173 9.71915 12.6017 9.74727 12.747 9.85508Z"
        fill={color}
      />
    </Svg>
  );
}

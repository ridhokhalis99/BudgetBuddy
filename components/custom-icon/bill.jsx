import { Svg, Path } from "react-native-svg";

export default function Bill({ size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ scale: 0.9 }}
    >
      <Path
        d="M15.915 0.232871L14.5 0.940871L12.944 0.164871C12.805 0.0960368 12.6521 0.0602236 12.497 0.0602236C12.3419 0.0602236 12.189 0.0960368 12.05 0.164871L10.5 0.940871L8.947 0.163871C8.80798 0.0952589 8.65503 0.0595703 8.5 0.0595703C8.34497 0.0595703 8.19202 0.0952589 8.053 0.163871L6.5 0.939871L5.085 0.233871C4.97066 0.176787 4.84362 0.149868 4.71595 0.15567C4.58828 0.161472 4.46421 0.199802 4.35552 0.267023C4.24682 0.334243 4.15711 0.428124 4.09489 0.539757C4.03267 0.651389 4 0.77707 4 0.904871V11.6889L2.5 12.4399L1.091 11.7349C0.976479 11.6767 0.848959 11.6489 0.720627 11.6541C0.592295 11.6593 0.467439 11.6973 0.357992 11.7645C0.248546 11.8318 0.158165 11.9259 0.0954896 12.038C0.0328137 12.1501 -6.36198e-05 12.2764 9.24236e-08 12.4049V14.4999C9.24236e-08 15.1629 0.263392 15.7988 0.732233 16.2676C1.20107 16.7365 1.83696 16.9999 2.5 16.9999H14.5C15.163 16.9999 15.7989 16.7365 16.2678 16.2676C16.7366 15.7988 17 15.1629 17 14.4999V0.899871C16.9993 0.772409 16.9662 0.647224 16.9037 0.536135C16.8412 0.425046 16.7514 0.331719 16.6428 0.264966C16.5342 0.198212 16.4104 0.160235 16.2831 0.154619C16.1557 0.149004 16.029 0.175935 15.915 0.232871ZM1 14.4999V12.8099L2.049 13.3349C2.18793 13.4044 2.34115 13.4406 2.4965 13.4406C2.65185 13.4406 2.80507 13.4044 2.944 13.3349L4.495 12.5599L6.044 13.3339C6.18358 13.4042 6.3377 13.4408 6.494 13.4408C6.6503 13.4408 6.80442 13.4042 6.944 13.3339L8.496 12.5579L10.052 13.3349C10.1906 13.4049 10.3437 13.4414 10.499 13.4414C10.6543 13.4414 10.8074 13.4049 10.946 13.3349L12 12.8089V14.4999C12.0016 15.0426 12.1819 15.5698 12.513 15.9999H2.5C2.10218 15.9999 1.72064 15.8418 1.43934 15.5605C1.15804 15.2792 1 14.8977 1 14.4999ZM16 14.4999C16 14.8977 15.842 15.2792 15.5607 15.5605C15.2794 15.8418 14.8978 15.9999 14.5 15.9999C14.1022 15.9999 13.7206 15.8418 13.4393 15.5605C13.158 15.2792 13 14.8977 13 14.4999V12.3999C13 12.2721 12.9673 12.1464 12.9051 12.0348C12.8429 11.9231 12.7532 11.8292 12.6445 11.762C12.5358 11.6948 12.4117 11.6565 12.284 11.6507C12.1564 11.6449 12.0293 11.6718 11.915 11.7289L10.498 12.4369L8.941 11.6599C8.8022 11.5905 8.64916 11.5544 8.494 11.5544C8.33884 11.5544 8.1858 11.5905 8.047 11.6599L6.5 12.4399L5 11.6939V1.30987L6.048 1.83387C6.18758 1.90421 6.3417 1.94084 6.498 1.94084C6.6543 1.94084 6.80842 1.90421 6.948 1.83387L8.5 1.05887L10.051 1.83487C10.1901 1.90394 10.3432 1.93988 10.4985 1.93988C10.6538 1.93988 10.8069 1.90394 10.946 1.83487L12.5 1.05887L14.057 1.83587C14.1955 1.90491 14.3482 1.94084 14.503 1.94084C14.6578 1.94084 14.8105 1.90491 14.949 1.83587L16 1.30887V14.4999ZM9 4.99987C9 5.13248 8.94732 5.25966 8.85355 5.35343C8.75979 5.44719 8.63261 5.49987 8.5 5.49987H7.5C7.36739 5.49987 7.24021 5.44719 7.14645 5.35343C7.05268 5.25966 7 5.13248 7 4.99987C7 4.86726 7.05268 4.74009 7.14645 4.64632C7.24021 4.55255 7.36739 4.49987 7.5 4.49987H8.5C8.63261 4.49987 8.75979 4.55255 8.85355 4.64632C8.94732 4.74009 9 4.86726 9 4.99987ZM14 4.99987C14 5.13248 13.9473 5.25966 13.8536 5.35343C13.7598 5.44719 13.6326 5.49987 13.5 5.49987H10.5C10.3674 5.49987 10.2402 5.44719 10.1464 5.35343C10.0527 5.25966 10 5.13248 10 4.99987C10 4.86726 10.0527 4.74009 10.1464 4.64632C10.2402 4.55255 10.3674 4.49987 10.5 4.49987H13.5C13.6326 4.49987 13.7598 4.55255 13.8536 4.64632C13.9473 4.74009 14 4.86726 14 4.99987ZM9 7.49987C9 7.63248 8.94732 7.75966 8.85355 7.85343C8.75979 7.94719 8.63261 7.99987 8.5 7.99987H7.5C7.36739 7.99987 7.24021 7.94719 7.14645 7.85343C7.05268 7.75966 7 7.63248 7 7.49987C7 7.36726 7.05268 7.24009 7.14645 7.14632C7.24021 7.05255 7.36739 6.99987 7.5 6.99987H8.5C8.63261 6.99987 8.75979 7.05255 8.85355 7.14632C8.94732 7.24009 9 7.36726 9 7.49987ZM14 7.49987C14 7.63248 13.9473 7.75966 13.8536 7.85343C13.7598 7.94719 13.6326 7.99987 13.5 7.99987H10.5C10.3674 7.99987 10.2402 7.94719 10.1464 7.85343C10.0527 7.75966 10 7.63248 10 7.49987C10 7.36726 10.0527 7.24009 10.1464 7.14632C10.2402 7.05255 10.3674 6.99987 10.5 6.99987H13.5C13.6326 6.99987 13.7598 7.05255 13.8536 7.14632C13.9473 7.24009 14 7.36726 14 7.49987ZM9 9.99987C9 10.1325 8.94732 10.2597 8.85355 10.3534C8.75979 10.4472 8.63261 10.4999 8.5 10.4999H7.5C7.36739 10.4999 7.24021 10.4472 7.14645 10.3534C7.05268 10.2597 7 10.1325 7 9.99987C7 9.86726 7.05268 9.74009 7.14645 9.64632C7.24021 9.55255 7.36739 9.49987 7.5 9.49987H8.5C8.63261 9.49987 8.75979 9.55255 8.85355 9.64632C8.94732 9.74009 9 9.86726 9 9.99987ZM14 9.99987C14 10.1325 13.9473 10.2597 13.8536 10.3534C13.7598 10.4472 13.6326 10.4999 13.5 10.4999H10.5C10.3674 10.4999 10.2402 10.4472 10.1464 10.3534C10.0527 10.2597 10 10.1325 10 9.99987C10 9.86726 10.0527 9.74009 10.1464 9.64632C10.2402 9.55255 10.3674 9.49987 10.5 9.49987H13.5C13.6326 9.49987 13.7598 9.55255 13.8536 9.64632C13.9473 9.74009 14 9.86726 14 9.99987Z"
        fill={color}
      />
    </Svg>
  );
}

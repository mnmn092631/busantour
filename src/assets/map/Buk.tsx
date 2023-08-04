import React from "react";
import { GugunName, MapGroup, Marker } from "styles/map/map";
import { GugunProps } from "types/map";

const Buk = ({ onClick, selectedGugun }: GugunProps) => {
  return (
    <>
      <MapGroup fill="#6db2d1" onClick={() => onClick("북구")}>
        <path d="M1499.57 1189.89l.01-.05 14.91-16.02-.01-.02.02-.01 4.44-6.55 4.06-6.01 2.97-7.32.15-.56.39-1.49.69-2.59.37-1.43.31-1.16.96-3.16.21-.95.35-1.49.36-1.59.31-1.33.03-.14.13-.56.23-1 .53-2.32.04-.15.17-.72.01-.08.09-.36.4-1.75.41-1.77.2-1.15.18-1.28.09-.66.05-.4-.04-.24.33-3.59.61-5.58.04-.38.05-.4.04-.43.33-3.01.06-.56.11-1.02.11-1 .02-.18.01-.08.23-2.12.07-.62-.07-.93.28-.97.55-5.11.07-.61.13-1.2.09-.79.19-1.75.87-8.06.47-3.31.2-1.46.04-.3.23-1.05-.12-.09.03-1.58.14-1.3.08-.86.31-.85.22-1.55.51-3.56.86-5.95.06-1.16.19-3.52.26-4.7.32-5.94.21-3.97 1.31-14.03 1.01-10.93-2-5.45-2.81-6.99-1.86-4.39 3.57-4.405 4.41-5.425.81-.998 6.35-15.821 1.38-3.565.11-.304 1.36-4.135 1.41-4.195.62-1.867 1.15-3.369.12-.326 1.73-5.172 2.92-6.554.31-.706 5.41-12.14 8.07-19.332.03-.06 1.02-2.621.82-2.184.87-2.418 2.7-7.503.55-1.547.29-.787.88-2.318.49-1.18 1.6-3.845.91-2.227 2.6-6.253 1.39-3.391 1.04-2.495 8.02-19.391.11-.28.05-.151.01-.015 1.14-3.168.92-2.565 1.75-4.849 1.15-3.299 1.06-2.932.77-2.116 1.2-3.603.73-2.197 1.23-3.651 1.09-3.313.01-.021.02-.035.82-2.489.3-.907 1.05-3.151-3.11-8.824-2.29-6.371-.71-1.966v-.003l1.98-1.188 2.79-1.705.45-.27 1.36-.832.94-.579.99-.601 4.32-2.616.5-.306.6-.369.15-.093 1.38-.623.34-.151.22-.042.76-.136 1.05-.024.52-.026.34-.017 1.04-.192.55-.111 1 .482 1.92-.318 2.24-.757 3.87-1.116.97-.159 1.45-.411 3.25-.908.48-.028 2.06-.185.74-.053 1.47-.107.13-.031.29-.069 3.64-.841 1.02-.244.14-.027.16-.027.89-.072.45-.037 1.04-.082 2.65-.177.09-.013.61-.082 1.99-.272 1.86-.295 5.66-1.132 1.28-.152 1.53-.144 6.92-.657.98-.022 2-.066 2.05.057 2.4.617 2.64.701 5.59.871 7.57.811.06.007 1.19 1.04.21.186 3.35 2.936.93.115.15.019 3.25.403 2.52.312 5.53-.464 2.7.802 6.89 2.053 6.24.589.34.032.79.071 6.14.547 2.68.095 6.68-1.272 1.89-.32 1.58.871 2.59 2.073-1.89 2.765-2.31 4.819-.13 2.647-.04 1.756-1.63 3.021.01.543-5.44 3.364-3.18 3.753-2.48 1.568.23 1.543-.72 2.804-1.89 1.323-.17.684-.46 1.807-.01 6.367-.75 1.953-.11.667.04.617.14 2.091.54 2.363-.61 1.939-.41 4.993-.37 1.843-1.73 2.63-.7.699-1.77.222-1.19.33-4.87 2.586-3.6-.629-1.39 1.778-2.23.962-2.14.244-.81.993-1.19 1.938-1.61 1.667-1.62 3.532-.31.694.51.693-.17.297-.17.297.59-.357.02.027.87.93 2.12 1.175 1.08 1.169.98 1.449 1.18-.395.88.418.39.183 1.55.967-.1.682.33.677.46-.093 1.41.001 1.51-.299 1.89-.373 2.86 1.477 1.47 1.289 1.84 1.565 2.48 2.359 1.48 2.762 2.78.266.06.162.15-.06.56-.196.56-.271.57-.37.69-.235.95-.436.58-.06 1.4.337.62.265.49.219.36.122.19.119.08.017.58.059 1.22.405 2.31.792 1.54 1.091 1.79-.213 2.14-.424 2.54 1.468.03.15.39.319.68.646.71.806.12.219.06-.062.06-.06.19.305-.1.355.38 1.257-.06-.015.05.134.31.926.13.2.58.965.77 1.274 1.07.976-.24 1.527-.06.047.07.349-1.39 1.456-2.46.971-2.5 2.983-.6 1.998-2.88 3.642-.16.169-1.25 1.745-.13.048-.55 1.343-.71 1.728-.3.905-.1.287-.23.573-.2.29-.05.29v.05l.01.23.57.271-.34.859.24.904.2.736 1.39 5.261 1.1 2.781.79 2.252.28.486 1 1.337-4.07 3.563.21 3.592 2.41 3.314 1.87.601 7.15 2.347 2.47 3.044 1.19.584.41.224.4.185.39.186 1.42.614.35 2.619.31 2.474-.09.128-.21.326-.36.512.45.787.21.225.74 1.003 1.11 1.622-.96 4.113-.16.828 2.41 6.289-1.22 4.74-.48 1.868-2.42 3.537-6.37 3.543-2.86 4.483-2.72 15.594-4.91 5.31-6.03 6.74 2.62 8.61-1.24 2.49 2.84 1.9 1.44-.85 3.4.81 1.1-.3 3.69 1.18 1.25 1.22.59 1.5 1.27 2.04 1.33.66 1.14.58 2.33 1.8 1.41.31 3.56.78 9.29 1.65 6.94.15 1.68-.08 6.18-.31 2.55-1.89 2.09 2.1 1.23-.09 1.47-2.58 6.66-2.83 7.37-4.27 3.08 4.55.38 2.03.78 4.37 1.13 6.45.69 3.71.01.06-1.52.97-2.84 1.66-8.14 3.23-1.98 6.11-.71 2.26-.96 3.04-.68.67-1.06 3.36-1.48 4.02-.29.74-.89 2.49-.34.74-.02.28-.55.64-3.2 2.78.51 1.45 1.36 3.77-2.82 2.88.28 1.37-.1 1.45-2.71 2.75-.83.82-2.35 3.52-4.29 3.12-2.33 6.51-1.5 1.62-1.44 2.09-.96 1.4-3.29 3.66-.2.84-.02.08-.27 1.36-.03.25v.07l.23 1.69.25 1.76.32 2.3.11.93.15 1.37v.27l-.2 6.76-.07 2.09-.71.92-.14.63-.91 3.99-.79 2.96-.44 1.51-.34 1.21-1.75 3.14-1.32 1.33-1.77 1.82-.36.39-.19.22-.77.88-3.99 3.9-1.38 4.34-1.25-.67-.69.78-.45.5-1.58 1.79.1 1.4-.25 2.23-.22 1.89-.6 4.87-.85.09-6.8.58-2.64.22-.08 5.2-.03 1.54-.08 4.05-.01 1.3-.66 1.15-2.54-.15-2.22-.13-1.11-.07-5.09-.3-2.72.33-2.31.28-1.45-2.7-.78-1.42-3.21 3.3-2.42 2.49-2.18 1.14-1.92.96-3.34-.72-2.19-1.95-3.08 1.94-3.04 1.99-2.98 1.85-1.2 3.12-3.47 4.84-1.39 1.7-1.69 2.13-8.88 2.46-3.52 4.66-3.57 1.46-2.93.13-3.64.52-7.53 1.06.31 1.26 1.15 4.47-1.2 6.73-2.04 2.3-2.04 1.05-1.7 1.99-1.74 1.97-1.18 2.38-1.19 2.41-3 4.08-2.32 2.76-1.3 1.38-.87.93-1.15 1.12-.76.7-.93-.81-5.26-1.99-6.63-2.43-2.17-.81-2.17-.9-2.55-.05-10.87-.1-6.43.01-5.63.05-3.83 1.81-1.09.61-1.09.63-4.03.01-1.85.3-3.34 1.08-.74-.62-2.6-2.14-3.71-4.82-.12-.18-9.82-3.79-1.47.81-1.24.68-4.08-1.06-2.02 1.32-4.8.25h-.06l-1.4-.64-.82-.36-.34-2.31-.46-3.82-.02-2.75-7.05-4.59-6.31-2.52-.36-.16-2.05-1.08-.68-.34-.78-.42-.23-.15-.91-.22-.97-.25-1.01-.11-.63-.32-.39-.05-.2.04-.39.2-.3.24-1.69-.69-.39-.18.09-.21.08-.17-.94-.62-.1-.06.87-1.63.35-.65.34-.1.78.28.14-.3.18-.37-.08-.05-1.45-.88-.16-.09-.26-.15-.18-.08-.17-.07-.01.03-.06-.09-.28-.19-.84-.52-.74-.45-.51-.32-.37-.24-.46-.28-.41-.24-.15-.1-.99 1.97-.18.33-.29.52-.2.28.06.11-.85 1.7-.33.68-.11.19-.96-.23-.44-.19-.52.06-.85-.32-.28.16-.72.53-.83.55-.47.2-.79-.11-.59.12-.75.49-1.22 1.12-1.19-.04-.38-.08-.83-.06-.37-.02-.57-.04.01-.07.06-.34.46-2.9.26-1.52.17-1.02.23-1.37.3-1.84.04-.21-3.38-.33-1.79-.18-1.1-.12-.97-.1-.97-.1-.92-.09-.93-.1-.94-.09-1.53-.15-.4-.04.05-.31.08-.65.07-.52.11-.82.39-2.9-1.26-1.19.08-.08 1.64-1.76 1.01-1.14.49-.59.38-1.21.38-2.35.4-2.14.43-3.29.41-1.68.41-1.98-.11-.46-1.08-2.23-1.84-1.63-2.13-1.82-.78-.69-.24-.2" />
      </MapGroup>
      {/* 마커 */}
      <Marker $active={"북구" === selectedGugun}>
        <g fill="#6e8c03" stroke="#232323">
          <path
            d="M1574.64 1192.15c0 9.78-7.94 17.71-17.72 17.71-9.78 0-17.72-7.93-17.72-17.71 0-9.79 7.94-17.72 17.72-17.72 9.78 0 17.72 7.93 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M1579.82 1192.44c0 9.78-7.93 17.71-17.72 17.71-9.78 0-17.72-7.93-17.72-17.71 0-9.79 7.94-17.72 17.72-17.72 9.79 0 17.72 7.93 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <g fill="#585859" stroke="#232323">
          <path
            d="M1606.11 1014.19c0 9.78-7.93 17.72-17.72 17.72-9.78 0-17.72-7.94-17.72-17.72 0-9.78 7.94-17.716 17.72-17.716 9.79 0 17.72 7.936 17.72 17.716"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <g fill="#d98b2b" stroke="#232323">
          <path
            d="M1782.61 1078.66c0 9.78-7.93 17.71-17.72 17.71-9.78 0-17.71-7.93-17.71-17.71 0-9.79 7.93-17.72 17.71-17.72 9.79 0 17.72 7.93 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <g fill="#049dd9" stroke="#232323">
          <path
            d="M1751.27 913.103c0 9.785-7.93 17.717-17.72 17.717-9.78 0-17.72-7.932-17.72-17.717 0-9.784 7.94-17.716 17.72-17.716 9.79 0 17.72 7.932 17.72 17.716"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </Marker>
      {/* 구 이름 텍스트 */}
      <GugunName onClick={() => onClick("북구")} transform="translate(1610.6 1055.22)">
        북구
      </GugunName>
    </>
  );
};

export default Buk;
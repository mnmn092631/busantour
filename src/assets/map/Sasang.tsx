import React from "react";
import { GugunName, MapGroup, Marker } from "styles/map/map";
import { GugunProps } from "types/map";

const Sasang = ({ onClick, selectedGugun }: GugunProps) => {
  return (
    <>
      <MapGroup fill="#65abce" onClick={() => onClick("사상구")}>
        <path d="M1514.23 1230.3l1.19.04 1.22-1.12.75-.49.59-.12.79.11.47-.2.83-.55.72-.53.28-.16.85.32.52-.06.44.19.96.23.11-.19.33-.68.85-1.7-.06-.11.2-.28.29-.52.18-.33.99-1.97.15.1.41.24.46.28.37.24.51.32.74.45.84.52.28.19.06.09.01-.03.17.07.18.08.26.15.16.09 1.45.88.08.05-.18.37-.14.3-.78-.28-.34.1-.35.65-.87 1.63.1.06.94.62-.08.17-.09.21.39.18 1.69.69.3-.24.39-.2.2-.04.39.05.63.32 1.01.11.97.25.91.22.23.15.78.42.68.34 2.05 1.08.36.16 6.31 2.52 7.05 4.59.02 2.75.46 3.82.34 2.31.82.36 1.4.64h.06l4.8-.25 2.02-1.32 4.08 1.06 1.24-.68 1.47-.81 9.82 3.79.12.18 3.71 4.82 2.6 2.14.74.62 3.34-1.08 1.85-.3 4.03-.01 1.09-.63 1.09-.61 3.83-1.81 5.63-.05 6.43-.01 10.87.1 2.55.05 2.17.9 2.17.81 6.63 2.43 5.26 1.99.93.81-1.6 4.22-.2 8.89.52 3.03.27 6.67 1.17 5.17.23 1.12-2.77 3.96-2.15 3.14-.16.11-2.72 1.26-.77.39-4.78 2.34-2.87 1.39-1.91.93-2.13 5.55-4.75 5.55-2.51 2.87-1 1.19-3.24 1.33-2.6 1.05-2.37 4.32-3.4 4.29-1.13 3.71-4.13 2.54-.25 2.17 1.41 4.73.77 2.63.48 1.54.3 1.05-.46 2.59 4.7 6.53 1.99 3 .39 5.41.37 4.98 1.08 2.9 1.49 3.11-1.33 4.5-.05.09-1.08 1.42-2.74 3.54.77 1.53-2.39 2.44-1.19 3.13.14 2.55-.05.33.28 5.25-.7 1.3-2.12 3.83-.11 6.86-.4 1.82 4.96 2.02.92.37.05.01 2.21 2.8 1.15.94 1.07.85 2.34 1.89 2.48 1.86 2.39 1.79 1.54 1.12 1.74-1.08.63.23.4 1.15.61 1.65.38.18.32.15.29 1.18.15.69.07.14.45.84.1.17.2.57.17.31.2.38.2.32-.04.07-.01.1-.02.38.23.48.05.22.05.31-.06.31-.03.15-.04.31.35.52.09.15.26.42.09.15.01.53.01.58-.05.24-.04.29-.09.68.3.52-.29.34-.09.24-.19.34-.28.35-.52.44.48.23.78.42.24.19.2.29.15.43.01.43-.09.34.33-.1.05.1.25.33.05.24-.14.53-2.25.56.1.29-.51 1.17.77.32.15.14.24.1.77.08.59.33.39.33.19.34.11.28.19.34.34.38-.57.39-.62.35-1.15.5v.05l-.03.77.01.57v.39l-.04.48.01.58v.1h.05l-.05.19.01.19v.44l.01.33v.15l-.04.72.01.53v.19l.01.1v.58l-.03.58V1462.09l.01.58v.1l-.04.58.01.48-.53.01.01.19v.24l.01.96.03 1.59.04 2.56.09 2.79v.19l.16.82.1.72.16 1.06.11.43.1.28.02 1.59-.15-.28-.52.49-.33.29-.38.34-.24.25-.33.29-.24.15-2.38 2.25-.28.3-1.52 1.42-.15-.1-1.09.93-.29.25-1.9 1.62.29.09.35.62 3.75 6.26.44.18.58.23.3.34.09.04.1.19.39.48.59.47.44.28.58.38.44.28.54.43.19.24.05.09.66 1.92.05.14v.1l.1.24-.05.1-4.88 8.64-5.02 8.8-4.31 8.25-.7 1.32-2.52 4.64-.75-.79-2.15-2.18-2.1-2.19-2.06-2.09-2.37-.68-2.47-.69-1.16-.51-2.23-1.03-2.32-.3-2.31-.3-.68.15-2.54.67-2.64.66-1.54.22-1.83.12-4.71.46-2.3-2.18-2.86-1.55-.88-.51-2.86-1.41-1.41-.65-2.1-1.94-5.44.13-1.64.02-.48.01-2.03-.45-4.4-.95-10.84 3.3 1.73 1.3 5.88 4.56 3.1 3.06.89.04 1.14.02 1.31-.61 1.39-.63 2.24 1.39 2.99 1.88.17.14 2.63 1.59 4.19 2.57.81.49 5.21 3.14 3.11 1.89-.87.14-.73 1.04-1.06 1.71-1.43.59-.13 1.16v.05l.21 2.72 1.47 1.59-.26.58-.69.23-.9.84-1.47 1.37-1.98 1.83.92.59-.02 1.64.23 1.37.09.69 1.16.42 1.17.92.18.16.41.39.2.21.24.02.15.26.33.19.25.02 1.25.41.37.08.92.27 2-.06.86.02.8-.02-1.03.74h-.05l-.62.07-.82.1-.17-.05-.16.02-.15.03-.24.06-.82-.09-.82-.08.05-.04.07-.01.07-.1-.34-.07-.34-.01v-.1l-.19-.04h-.15l-.14.09-.29-.18-.39-.12-.59-.29-.21-.11-.29-.21-.22-.21-.15-.14-.05-.05-.32-.45-.49-.57-.46-.41-.46-.13-.37-.07-.43-.04-.62.05v.08l.04.14.06.19.05.22-.02.14.19.3.29.44.48.67.22.33.12 1.55.07 1.37.49 1.84.08.34.07.36.03.03.42.95.82 1.84v.17l-.28 1.88-.17 1.69-.17 1.55-.12 1.01-.09.82-.12 1.25-.04.82-.11 1.65-.08 1.68-.1 1.52-.28 2.29.83.12.23.04 2.11-1.27 1.89-.26-.43 1.83-.04.15-.25 1.09-.63 2.75-.23.99-.29 1.26-.12.41-.16.39-.79 1.96-.51 1.14-.51 1.33-.24.54-.59.32-2.58 1.42-1.62.9-1.87 1.02-.88.45-4.32 4.26-1.21 1.22-.64 1.26-.48 1.07h-.03l-1.58-.27-9.57-1.27-1.79-.23-6.02.2-5.44-1.58h-2.06l-11.28-2.47-5.42-.88-1.21.02h-.77l-5.38.78-2.02.87-3.73.52-6.75 8.55-3.16 2.06-2.04 2.73-4.34 4.56-4.2 3.32-2.61 3.4-.55 5.46-4.35 6.74-1.69 1.56-7.32-.09-6.06 1.36-4.91-.68-6.81-3.86-8.14-4.81-1.25-.86-1.45-1-1.87-.6-2.26-.73-.71-.22-4.4-2.05-.91-.45-3.05-1.91.04-.28.17-1.71-2.13-.11-2.45-.12-.94-.05-1.75-.27-1.96-.73-6.34-2.39-1-.35-.63-.2-.09-.02-2.12-.66-1.98-.96-.37-.14-.56-.25-.64-.31-.14-.11-.21-.1-.36.39-.36.61-.13.29-.36.92-.65 2.45-.21.76-1.47-.46v.02l-.18.16-.69 2.25-.41.72v.19l-.51-.23-.08.29-.05.05-.13.58-.28.59-.19.38-.15.2-.32.43-.34.36-.21.22-.42.37-.5.42-1.35-.74-.19.35-.19-.05.32-.54-.11-.01-.18-.05-.05-.03-1.27-.28-.82-.22-1.63-.37-.62 1.4-.36.67-.58 1.25-.25.53-.76 1.55-.92 3.58-.92 2.65-.42 1.2-2.31-2.34-2.36-2.36-.63-.75-.31-.63-.2-1.21-.22-1.22-.06-.34-.31-1.73-.22-1.24-.14-.79-.31-1.56-.11-.58-.19-.89-.32-2.33-.13-.92-.18-1.1-.01-.14-.11-.68-.41-2.46-.1-1-.06-.72-.07-.53-.06-.63-.02-.38-.06-.72-.09-1.49-.07-1.06-.11-1.54-.08-1.27.02-1.43.02-1.07.27-1.44.15-.82.25-1.21.25-1.34.12-.49.35-1.73.31-1.51.46-2.18.64-1.93 1-3.11.47-1.35.4-1.29.3-.74.71-1.71.61-1.29.74-1.53.13-.32.72-1.78.46-1 .22-.56.67-1.59.56-1.18.5-.92.28-.48.88-1.61.63-1.15 1.03-1.91.45-1.35.49-1.4.48-1.4 1.51-4.63.46-1.63.32-1.16.49-1.74.18-1.26.27-1.71.35-2.08.31-1.81.23-1.3.22-1.2.72-1.29.46-.58.42-.58.38-.53.88-1.19 1.27-1.61 1.24-1.56.99-1.2-16.64 1.34v-.03l.22-2.55.31-3.67 1.02-12.1-.1-3.52-.43-14.8.01-4.46.01-6.35V1489.63l.01-1.28v-.69l.02-.64.03-.7.02-.59.03-.95.04-1.07.04-1.22.03-.99.05-1.16.03-.88.03-1.1.03-.75.02-.45.03-.94.05-1.56.07-1.78.05-1.36.04-1.25.6-6.79.02-.15.11-1.24.14-3.77.07-1.62.19-4.95.26-.76.06-.18-.11-6.8.08-.49.01-.05 6.3-36.81h0l.98-6.26 1.7-10.83.02-8.47.05-19.27.05-19.27.05-19.27.03-12.85.02-6.42.04-17.38 1.37-4.66 5.17-8.16.01-.03.01-.01 6.4-10.08 17.08-14.25 7.75-4.05 11.63-6.06 3.25-1.7 2.91-1.51 4.1-2.14 5.97-5.19.33-.29 6.83-5.94 7.71-6.71 9.05-9.15 9.06-9.15 7.16-7.69.26.22.78.69 2.13 1.82 1.84 1.63 1.08 2.23.11.46-.41 1.98-.41 1.68-.43 3.29-.4 2.14-.38 2.35-.38 1.21-.49.59-1.01 1.14-1.64 1.76-.08.08 1.26 1.19-.39 2.9-.11.82-.07.52-.08.65-.05.31.4.04 1.53.15.94.09.93.1.92.09.97.1.97.1 1.1.12 1.79.18 3.38.33-.04.21-.3 1.84-.23 1.37-.17 1.02-.26 1.52-.46 2.9-.06.34-.01.07.57.04.37.02.83.06.38.08" />
      </MapGroup>
      {/* 마커 */}
      <Marker $active={"사상구" === selectedGugun}>
        <g fill="#585859" stroke="#232323">
          <path
            d="M1480.05 1347.85c0 9.78-7.94 17.71-17.72 17.71-9.79 0-17.72-7.93-17.72-17.71 0-9.79 7.93-17.72 17.72-17.72 9.78 0 17.72 7.93 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          ></path>
        </g>
        <g fill="#6e8c03" stroke="#232323">
          <path
            d="M1459.5 1365.04c0 9.79-7.93 17.72-17.72 17.72-9.78 0-17.71-7.93-17.71-17.72 0-9.78 7.93-17.72 17.71-17.72 9.79 0 17.72 7.94 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          ></path>
        </g>
        <g fill="#d98b2b" stroke="#232323">
          <path
            d="M1631.51 1279.72c0 9.79-7.93 17.72-17.72 17.72-9.78 0-17.71-7.93-17.71-17.72 0-9.78 7.93-17.71 17.71-17.71 9.79 0 17.72 7.93 17.72 17.71"
            vectorEffect="non-scaling-stroke"
          ></path>
          <path
            d="M1508.72 1343.48c0 9.79-7.93 17.72-17.71 17.72-9.79 0-17.72-7.93-17.72-17.72 0-9.78 7.93-17.72 17.72-17.72 9.78 0 17.71 7.94 17.71 17.72"
            vectorEffect="non-scaling-stroke"
          ></path>
        </g>
      </Marker>
      {/* 구 이름 텍스트 */}
      <GugunName onClick={() => onClick("사상구")} transform="translate(1430.68 1438.12)">
        사상구
      </GugunName>
    </>
  );
};

export default Sasang;
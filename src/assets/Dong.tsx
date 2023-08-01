import React from "react";
import { GugunName, MapGroup, Marker } from "./mapStyle";
import { GugunProps } from "./type";

const Dong = ({ onClick, selectedGugun }: GugunProps) => {
  return (
    <>
      <MapGroup fill="#87c5db" onClick={() => onClick("동구")}>
        <path d="M1745 1483.08l2.74.1.24-.1h.05l1.58-.65.91-.15.15-.01 1.15-.06.44-.06.62-.1.38-.06.58-.01.58.19.54.23.19.05.63.28.39.09.63.23 1.4.7 1.02.47.68.08.63-.06.91-.2.09.04.15.15.83.75.45.91.34.43.83.57.53.28 2.24 1.27 1.81 1.75.24.24.05.04.05.15.05.19.05.1.1.14.05.19.05.15.05.28.06.15.05.14h.04l.05-.05.2.09.14.1.1.09.24.24.1.24-.03.68.05.24V1493.92l.05.1.1.14.1.14h.1l.14.05.19.04.49.05.48-.01.34-.01.23-.05.49.19h.05l.24.09.05.05.24.09.05.05.09-.2.64.38.33.04.54.19.24-.01.29.05.38.09.2-.01.19.05.05-.05.09-.1.15.14.1.1.24-.05.09.04.2.05.09-.05h.05l.19-.15.14-.19.1-.01h.05l.19.05.29.09.39.19.29.19.63.04.1.09h.24l.19-.01.19-.05.3.48.05.1v.04l.1.34.3.57.49.53.68.37.29.19.35.67.15.57.14.1.45.38h.04l.35.57-.05.29-.09.29.2.24.05.04.1.1.19.14v.05l.63.23.39.24v.04l.1.05.19.14.1.05.05.05.29.04 1.74.31.38.04 1.11.13.48-.01 1.4-.02h.15l1.06-.02 1.29-.06.29-.06.34.1.39.13.53.24.68.18.39.14.58.18.14.05h.05l.24-.01.43-.1.44-.15.38-.1h.05l.53-.01.39.19.24.09.14.09.3.09.38.09.72-.29.67-.45.38-.39.14-.15.24-.39.23-.63.04.05h.15l.39.09.1.24-.05.1-.14.34 1.28.09.15-.46 7.12.29.52.15.39.17.42.28.05.05 1.81 1.32v.53l.34.24 1.61 1.18h.1l.09.04h.1l.67-.01.92-.01 1.01-.02.58-.01.14-.05h.29l.39-.01 3.99-.11 12.04-.27 1.69-.08-.25-.43h.39l1.68-.03 2.22 3.68.4.67.65 1.09.3.47.23.35.62 1.05.62 1.05.47.95.48 1.1.37.94.19.55.22.72.48 1.82.27 1.87.12 1.4.07 1.2-.04.82-.08 1.06-.12 1.45-.27 1.5-.64 2.32-1.24 3.73-.76 1.07.05.53v.19l.04.73.04 1.58v.29h-.05l1.2 1.6-.35 6.87.18 2.31.36 3.76.18 2.36.05.53.04.67.6 6.6.13 2.41.05.24-.15.24-.1.1-.62.04-4.58.41-1.2.09.45 5.06.14 1.64.23 2.41.14 1.25.27 3.08-3.59 4.61-8.14 10.21-3.97 5.14-3 3.74-.57.78h-.05l-7.37 9.74-.89 1.27-6.47 8.48-.81 1.02-2.41 3.22-2.19-1.65-3.22-2.46-7.99-6.05.14-.38-.1-.2-.58-.57 2.27-2.34 2.09-2.11 1.38-1.41 3.13-3.18 1.09-1.17.52-.49.28-.39.29-.39.23-.39.1-.2.04-.09.05-.15.18-.43.19-.49.14-.44.18-.91.08-.49v-.62l.05-6.07.03-4.1-1.07-.8-.05-.05-3.85-2.83-2.02.08-4.81.5-.33.06-1.06.11-1.88.17.33 2.45 1.38 2.01-3.91 2.66-1.2.83-1.52.99-2.05 1.43-1.43.98-.19.1-.39.25-.8.59-.2.1-.14.05-.37 1.06-1.25 3.4-1.39 3.68-1.06 2.86-1.02 2.71-.14.43-.51 1.41-.19.44-.14.34 1.95 1.46.54.38.39.28 1.31.99.93.66 1.41 1.04 1.22.9.05.05.05.09v.05l-.05.05-.04.09-.1.1-.38.44 1.07.76 3.95 2.92 4.63 3.4 1.8 1.32 2.39 1.8 1.61 1.23.04.04.05.05.05.05-.05.05-.04.1-.47.63-1.7 2.29-1.23 1.66-.52.68-.1.1-.04.04-.05-.04h-.1l-1.41-1.04-7.65-5.67-2.83-2.12-.63-.42-.49-.38-1.21-.9-2.59-1.89-2.14-1.6-.68-.48-.93-.7-.97-.71-.65 1.79-.51 1.41-.28.67-.64 1.8-.33.92-.83 2.03-.28.83-.88 2.37-.19.39-.32.92 2.63 1.93 5.31 3.92 6.87 5.05 3.46 2.6-1.42 1.85-1.93 2.73-.85 1.02-3.17-2.36-.24-.19-.64-.47-.53-.38-.3-.23-6.43-4.77-4.19-3.07-1.95-1.46-.34-.14-1.98-.7-1.31-.46-.41 1.21-.79 2.09-.19.48-.74 2.04-.13.38v.05l-.05.05-1.76 4.6-.09.34-3.48 9.35-1.9 4.99-.64 1.75-.7 1.79-.63-.23-.75 1.41-.42.82-.28.44-.52.97-.42.83-.38.63-.6 1.12-.29.43-.46.97-.71 1.44-.27-.13.55-1.11v-.01l-.88-1.62-.01-.05-.04-.04-.31-.58-.54-.96.01-.03.61-1.56.66-1.71.94-2.39.85-2.15-1.2-.42-3-1.05-3.67-1.29-2.79-.98-2.79-.98-.26-.09-.59-.19-.62-.23-.1-.03-1.34-.04-.45-.42.31-2.03-.11-.28-.11.08h-.01l-.01.01-1.62-.41-.2-.05-.65-.14-.86-.18-.57-.12h-.02l-.89-.41-.74-.34-.32-.15-.63-.76-.3-.39-.23-.18-.59-.23-.5-1.23.06-.04.5-.28.01-.02.01-.2-.21-.34-.35-.43-1.25-1.09-.55-1.34-.79-.48-.39-.07-.18-.04-.72-.23-.04-.07-.27-.43-.63-.21-.66.18-.54-.36-.54-1.31-.01-.1-.11-1.09-.01-.1-.37-.53-.07-.1-.58-.54-.21-.14-.71-.51h-.06l-.01-.06v-.11l-.01-.19-.28-.01-.1-.08-.49-.3-.15-.13-.87-.57-.05-.04-.22-.11-.02-.08-.13-.09.01-.04.13-.13.02-.02.5-.54.03-.01.01-.01v-.02l.01-.02.03-.04.43-.45.14-.13.09-.06.13-.1-.09-.09h-.05l-.04-.05h-.01l-.06.05-.13.12-.04.03-.31.32v.01l-.01.01-.29.31-.16.17-.07.09-.02.02-.12.12-.24.26-.1.1-.02.02-.01.03v.04l.01.01-.12.09-.01.01-.01.01-.05.09-.31.29-.05.05-.03.08h-.01l-.01.02.01.05-.09.24-.09.27-.01-.01v.02l-.47-.19-.07-.38-.05.03-2.2-2.31v-.01l.08-.08.02-.01-.1-.14v-.01l.47-.51.03-.03.03-.05.03-.04.19-.17.13-.12v-.01h0l-.03-.08-.49-.81-.33-.19-.01.02-.01-.01-.07.1v.01l-.04.03-.07.06-.03.02-.03.01h-.22l-.17-.14-.14-.14-.09-.23.07-.09.05-.06-.01-.01.01-.01-.13-.12-.33-.05-.02.01-.16.12-.02.01h-.19l-.24-.09-.38-.38-.2-.47-.02.01-.33.24-1.49 2.71h-.01v.01l-.85-.18-1.02-.21-.99-.2-.6-.12-.53-.11-.31-.07-.32-.06-.42-.09-.29-.06-.27-.06-.27-.05-.21-.05-.58-.04-.39-.04-.89-.07-.81-.07-.81-.07-.01.01-.08.07-.14.1-.59.46-1.07 1.51-.74 1.05-.01.01-.01.01-2.82 1.78-3.47-.33.03.08h-.03l-.76-.05-.77-.22-.84-.1-.9-.17-.43-.22-.9-.59-.74-2.54-.43-1.22-.05-.32-.64-.85-.27-.2-2.04-2.02-2.41-2.51-1.37-1.52-.31-.91-.74-2.21-.54-1.82 1.3-2.5 1.67-3.13.66-1.53.63-1.45.46-1.07-.14-1.79-.03-1.34-.62-1.29-.68-1.58 1.05-3.03.8-2.25 1.32-3.37.71-2.02.4-.86.56-1.36.97-3.1-1.23-.63-.76-.44-1.75-2.92-.46-.93.92-3.53.13-.24-.35-1.31-.29-1.45-.18-.99-.16-1.1-.2-1.64.22-1.28.34-1.71.75-1.47.17-.04.09-1.9.2-1.63.33-2.79-.02-2.82.06-1.63.14-1.33-.11-2.72-.07-3.11.21-2.81.36-3.85-1.04-2.64-1.03-2.83-.94-2.81-.01-2.78.03-3.27.34.14 5.18-1.48 3.29-2.36 2.9-2.88 6.44-1.07 2.64-.37h.05l1.97-.42 1.34-.55 3.62-2.61 1.81 1.71 3.26 1.97h.14l.97.04.72-.16.28-.1 1.91-1.19 2-1.76 2.84-.28 1.09-.84 2.41-3.31 3.39-2.12 2.25-1.1 1.16-2.57.71-1.07 2.79.06.28-.49.94-1.8.47-.87.5-1.94.55-2.08.18-.58.36-1.4.78-3.09.22-.87-.11-1.35-.38-2.98-.72-5.72 1.36-2.48.85-1.36.43-.3.38-.39.38-.29.62-.3.34.04-.17 1.5-.09.24-.15.14-.09.3-.43.24-.28.3-.14.38-.05.1.29-.29.04-.05.53-.44.42-.59.82-3.48 2.41-3.12.04-.1-.05-.09.05-.15.29-.1.23-.19.29-.25.14-.53.43-.05.92.32.48.04.01.24-.38.68-.53.15-.33.01-1.32 2.23.19-.1.19-.09.09-.39.2-.05.37-.35-.05-.19.05-.24.28-.44.29-.29.43-.1.38.09.15-.2.51-1.31 1.73-.31 1.41 1.04.05.05 1.26.36" />
      </MapGroup>
      {/* 마커 */}
      <Marker $active={"동구" === selectedGugun}>
        <g fill="#585859" stroke="#232323">
          <path
            d="M1848.65 1535.94c0 9.78-7.93 17.71-17.71 17.71-9.79 0-17.72-7.93-17.72-17.71 0-9.79 7.93-17.72 17.72-17.72 9.78 0 17.71 7.93 17.71 17.72"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <g fill="#d98b2b" stroke="#232323">
          <path
            d="M1764.41 1590.49c0 9.78-7.93 17.72-17.72 17.72-9.78 0-17.71-7.94-17.71-17.72 0-9.79 7.93-17.72 17.71-17.72 9.79 0 17.72 7.93 17.72 17.72M1749.91 1641.01c0 9.78-7.93 17.71-17.72 17.71-9.78 0-17.71-7.93-17.71-17.71 0-9.79 7.93-17.72 17.71-17.72 9.79 0 17.72 7.93 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M1744.37 1654.86c0 9.78-7.93 17.71-17.71 17.71-9.79 0-17.72-7.93-17.72-17.71 0-9.79 7.93-17.72 17.72-17.72 9.78 0 17.71 7.93 17.71 17.72M1808.12 1510.19c0 9.78-7.93 17.72-17.71 17.72-9.79 0-17.72-7.94-17.72-17.72 0-9.79 7.93-17.72 17.72-17.72 9.78 0 17.71 7.93 17.71 17.72"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M1755.64 1650.77c0 9.78-7.93 17.72-17.72 17.72-9.78 0-17.71-7.94-17.71-17.72 0-9.79 7.93-17.72 17.71-17.72 9.79 0 17.72 7.93 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </Marker>
      {/* 구 이름 텍스트 */}
      <GugunName onClick={() => onClick("동구")} transform="translate(1696.49 1588.33)">
        동구
      </GugunName>
    </>
  );
};

export default Dong;

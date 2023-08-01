import React from "react";
import { GugunName, MapGroup, Marker } from "./mapStyle";
import { GugunProps } from "./type";

const Yeongdo = ({ onClick, selectedGugun }: GugunProps) => {
  return (
    <>
      <MapGroup fill="#398bbe" onClick={() => onClick("영도구")}>
        <path d="M1876.52 1947.61l-.52-.57 1.93-2.07-.65-1.22-.99-.62-.5-.22-.57.27-.32-.05-.02-.23-.08-.19.72-.89.26-.75-.74-.14-.71-.16-.24-.27-.54-.14-.21-.4.45-.7-.13-.39-.52-.36h0l-.85-.33-2.3-1.7-3.02-.71-2.18.68-1.6.01-1.43-1.48-2.1-.59-1.44-1.36-1.68-.34-5.66.43-1.76-1.23-1.04-1.55-.08-3.03.73-2.49 1.17-2.74.91-2.75-.63-3.69-.82-.88v-.98l-.32-1.04.51-1.89 1.55-1.86.98-1.77.37-.57-.15-.14-.07-.27.01-.41.08-.05.07-.11-.06-.42.08-.07.05-.14-.25-.9-.23-.12.13-.39-.12-.36.48-.5.05.02.11-.18-.18-.53-.07-.09-.08-.24.05-.14h.07l.18-.51-.04-.17-.12-.12.14-.27.06-.17.11-.28.28-.83-.18-.47-.16-.28-.91-1.38-.51-.21-.32-.23.05-.28.07-.17-.12-.35-.92-.96-.95.92-.27-.26 1.21-1.22 1.03 1.08.55-.52-.05-.06-.18-.18-.33-.34-.67-.64-.81.74.04.04-.03.02-.9.87-.3-.31.44-.44-.48-.42.09-.18.15-.16-.14-.15.14-.15.24.04.11-.23-2.64-1.25-.9-.51-.24.11-2.93-1.36-.6-.76-.48-.13-.24-.13-.2-.51-.32.27-5.38-.6-1.75.02-1.58.15-1.43-.29-1.01-.24-.64-.15-1.89-.58-1.33-.61-3-.71-1.62 1.98-.78.21-1.4-.75-.81-.02-1.3 1.68-.83.47-1.14-.13-.5-2.7.18-1.43-.43-.7-2.03-.1-1.71-1.37-1.02-.43-2.18-1.33-.4-.45-1.17.46-1.89-1.23-1.26-.92-1.85-.44-4.09-2.22-1.05-1.27-1.41-.96-.4-.36-.68-1.05-.61-.49.04-.19-2.32-1.36-3.74-2.01-4.67-2.43-.98-.5-.45-.25-1.04-.54-2.27-1.19-.41-.21-.61-.67-3.68-3.97-2.46-.96-1.13-1.53-1.11-2.64-.08-.31-.12-.38-1.85-2.57-.11-.15-.41-.54-.76-.8-.82-1.32-.4-.34-.12-.09-1.52-1.21-.41-.44-.11-.13-1.37-1.4-.55-1.12-1.63-1.88-1.41-1.06-.7-.77-1.49-1.46-.12-.11-.32-.29-1.97-.94-1.65-1.67-.13-.12-1.49-1.49-1.11-1.62-1.15-1.69-.17.1-.25-.11-.25-.13-.09-.14-1.52-.77-.18-.25-3.65 2.54-.04-.04-1.14.82-5.72-5.53-.36.29-.29-.36-.29-.36-.59-.73-.58-.73.13-.11-17.63-17.64-.6-.01-1.65 1.61-.46.43-1.2 1.17-.19-.19-.18-.18.13-.13.14-.14.05.05.06.05 1.18-1.15 1.03-.99 2.21-2.15-.08-.06.2-.42.01-.02.01-.02-.47-1.35v-.03l-.22-.65-.23-.64.09-.02.08-.03.16-.04.16-.05.03.04.5-.17.51-.17-.01-1.5-.52.18-.1-.26-.4-1-.35.05-.26-1.88.97-.09.15-.88.09.03-.03-.06-.05-.22-.16-.61-.36-1.39-.03-.06-.03-.06-.21-.59-.21-.59-.31-.81-.31-.81-.07-.17-.07-.18-.14-.29-.07-.15-.21-.43-.21.01-.2.01-.06-.13-.06-.14-.02-.06-.01-.06-.04.01-.04.02-.03-.02-.02-.01-.01-.02-.02-.02-.01-.05-.01-.05-.84-.16-2.15-.41-1.87.13-1.88.14h-.03l-.01-.01-.02-.01-.02-.02-.01-.02.04-.03.01.02.03.02 1.89-.13 1.88-.14.72.14.73.14v-.04l.01-.26.21.03.04-.52.02-.33-.06-.07.01-.16-.69-.21.17-.13.35-.23.28-.14.31-.14.16-.08.23-.12.23-.31-.13-.6.33-.12 1.01-.31.44-.12.13-.05.45-.13 1.1.46.15-.31 5.95 2.5 1.28-.52.69-1.63.62-1.46-.64-.24-.37-.15-2.83-1.19-2.02-.85-1.33-.56-.46.18-.74 1.81-.38.12-.2.06-.07.03-2.85.87-.79.28-.23.06-.88-.27-1.13-1.8-.42-.65.15-.09-.45-.74-.12-.21-.12-.22-.89-1.44-1.35.85-.04-.07-.05-.07-.64-.99-.65-.99.56-.33.56-.33-.14-.24-.14-.25-.38-.69-.37-.69.12-.05.13-.06-.1-.16-.6-.97-.43-.72-.79-1.3-.04-.05-.27.18-.42-.74-.58-1.03.28-.03-.32-2.94-.1-1.01-.08-.56.35-1.46-.86.01-.86.01-.17-.03v-.12l.33-.01h.96l.63-.01.43-1.81.14-.65.11-.48.05-.26.02-.03.08-.07 2.43-.68.99-.27.83-.24.62-.17 1.71-.48.26.23.02.02.31.27.43.32.31.4.03.03.26.61-.09.02.01.07-.53.1-.71.14-.7.15.02.22.06.4.91-.09.08.03.04.09-.01.12v.02l-.02.03-.05.02-.21.02.02.12.42-.01.03.19-.29.07h.19l.13.42.01.09-.06.04-.11.03.04.2-.3.09-.49.12.11.48.14.48.08-.01.13-.04.01.03.08-.04.01-.01 1.27-.04 1.87-.08h.23l2.48 2.54h.01l.66.68.54.22.76.33.05-.1.22.1-.03.09 1.72.74 2.11.89 1.52.64 1.17.5 2.23.97.12.05.16.07.52-1.13.78-1.71-3.11-1.36-2.01-6.5-1.01-3.41.25-.07.45-.14.25-.08 4.61-1.39.68-.2.04.05.38 1.28 1.15 3.86.27.91 2.13.91.58-.4.24-1.47.31-1.98.44-2.88-2.73.05-.01-.11v-.12h.08l.01-.07 2.68.04h.4l.76-.59.59-.47 1.36-1.07h.03l.03-.01.04-.05.05-.03h.06v-.04l1.1-.88 1.09-.88 1.22-.66.38-.21 1.59-.86 1.52-.62 1.52-.61 1.29-.52.07-.02 1.08-.44-.05-.15-.05-.15-.04-.13-.04-.13.14-.06.05.01h.05l.03.06.18.44 2.32-.93 6.96-2.81.87.33.48.18.4.16.07-.18.27.1-.03.09-.04.09.55.22.55.22-.06.16.14.06.22.09-.14.37.79.33.32.14 1.26-3.29 1.84.73 1 .41 1.23.5 1.24.5.59.2-.02.11.19.06-.02.24.65.16.01-.05h.02l.02-.05.02-.03.01-.01h.05l.03-.12.28.05.29.06.01.14.02.14-.01.05.11.02-.68 3.15-.16.64 1.37.58.35-.87-.77-.32.04-.12 1.12.45.2.09-.31.73.96.4 1.33.56.75.31.9.39.34.16.38.17.21.09.14-.3.7.26.11.09.71-.23.03-.09 1.38-3.58-5.79-2.23-1.48-4.42-.02-.04.22-1.04.51-2.43 1.48-.53 1.15 2.76 3.22-1.23-.9-2.85 1.52-.56.08.11.95-.35.05-.12.51-.2.12.04 1.43 3.64.61 1.56.42 1.06.82-.32.11-.04 1.47-.57.05.12.79-.31.89-.35-.04-.14.6-.23.25.7.67 1.81 1.11 2.84.49-.18.27.35.77-.35-.05-.39 1-.38-1.48-3.75-2.07-5.25.17-.06-2.01-5.27.3-.12-.09-.23.28-.11-.15-.42 5.24-2.04-.02-.05 11.39-4.46.13.26.17-.06.94-.37 4.86-.59 1.87 2.11 2.75-1.38 1.67.31 1.57 1.59 1.63-1.76.59.54.24.22.25.22.02.01.02-.02.06.05 1.45.84 7.67 4.48.93.49-.01.01 3.26 1.93-.35.67-1.92 3.61-.87 1.58 1.48.67 3.21-5.59 7.74 4.28 3.11 1.7.27.19 5.7 3.16.07-.13 10.61 5.96 1.81 1.71 7.55 7.15 1.8 1.71 4.66 6.27 9.16 12.01.92 1.25 2.14 2.81 3.36 4.43 3.91 5.18.6.73 3.13 2.44.24.19 1.08.84 1.13.88 7.27-5.93-1.84-2.25-.83-1.03-4.89-4.26-.09.1-.55-.48.48-.54 7.63 6.66 1.06 1.29-.13 1.21-4.67 3.81-.69-.24-.74.6-.21 2.4-1.21.99.62.61v.21l.34.61.31.68.04.07.13.1.12.1 2.47 2.89 2.47 2.88.07.08.06.08.02.03.02.03v.05l.01.06.01.05v.05l.01.05-.01.06-.01.06-.04.16-.04.1-3.78 3.24-3.77 3.25-.03.06-.03.68.06-.08.82.51-.2.34-.19.45.14.12.25.24.26.23.26.07.26.06 2.18-1.29.9 1.52 3.15 5.32-2.07 1.22.14.24.33.56.14.26.55.91.15.24 1.58 2.69 2.7 4.58 1.85 3.12 4.22 7.14 2.96 5.01 2.96 5.01.87 1.47.28.47 2.86 4.95 3.03 5.13.39.68.38.64 6.27-3.69.16-.11.05-.08.02-.07.03-.09.02-.14-1.59-2.78 2.6-4.66 1.87-3.34 3.31-5.92.65.36-1.18 2.13.54.9 2.22-1.68-1.05-.81.09-.12 1.08.83 13.97-10.56.36-.44.3-.46 1.62-1.69.22.13.38-.42.51-.41.37-.18.38-.42.66-.25.17-.24.48-.37.29-.07.3-.34.4-.16.32-.18.74-.13.37-.26 2.54-.96.51-.31.95-.17.51.15.86-.2.79-.1 1.2.19.73.67.17-.15.54-.28.02.15.24.03-.02-.25.4-.28.17.13 1.87-.2.73.18.49.52.35.26.36.57v.21l.14.15-.94.49-.8-.06-.02.11 1.13.69-.11.36-.16.17.73.7-.01.21.04.26.14.13-.24.57.12.09-.19.56-.71-.2-.5-.46-.43.93h-.45l-.11.18.25.14.36.55.36.34v.2l-.28.13-.33.14-.35.11-.18-.07-.25-.04-.19.03.02.53-.26.31.01.03.77-.05.18.45.42-.05.17.42-.16.45.14.42.05.46-.13.37-.37-.02.03.98-.06.25-.14.34.11.67-.36.61.07.44-.24.24-.18.7-.48.96-1.07 1.85-.09.3-.12.15-.5.35.02.06.28-.04.35-.15.32-.26-.14.52-.7.75-.34.24.21.41-.14.16-.13.23-.15.2-.03-.09-.01-.14-.19-.01-.63.5-.93-.23v-.03l.03-.6-.22-.11-.36.11-.17.34-.02.18-.09.25-.57.05-.26.11-.15-.2-.47-.02-.07.08-.33-.02-.12.09-.32.44-.55-.09-.45.08-.26-.16-.28.17.13.16-.18.11-.4.09v-.14l-.34.03-.18-.09-.37.12-.29-.04-.67.81-.32-.14-.65.79-.47.02-.25-.19-.41.22-.11.11-.39.07-1.87 2.07-.43.81-.78.95-.49.7-1 2.1-.06.43.02.36.05-.05.11-.07.06.03.23.14.07.14.02.23-.12.31.12.09.13.11-.12.15-.18-.08-.59-.18-.02.17.6.56.01.18-.08.24.08.06-.11.61-.5-.08-.18.12.15.24.08.21-.08.1-.19.06-.15-.03.02-.11-.1-.08-.08-.47-.26-.08-.17-.17-.07-.08-.44-.01-.3.01-.63.13-.15.21-.07-.02-.05.66-.12.31-.38.04-.21.58-9.55 4.11-4.45 1.96-2.04-3.8-2.06-3.84-.08-.05-.11-.03-.13-.02-.11.02-.1.04-.02-.04-8.51 5.02-1.11.66-3.59 2.13-5.83 3.44-7.28 4.29.21 2.44-.02.43.44 1.09-.12.03.02.04.11.26.04.06.12-.13.88 1.36h.12l.54.29.1-.07.08.09.26-.24 2.14 2.5.52.55.32.28.78-.92.03-.14-.08-.08.67-1.28.09-.25-.38-1.05-.31-1.09.06-.13-.72-2.39.27-.08.72 2.49.13.01.52 1.82.15.39v.21l6.53 1.31 6.47 1.3-.05-.26-1.61-4.78-1.48-4.37.42-.14 3.14 9.24.1 5.97.08 3.22-.03-.02-.63.51-.21 1.09 1.66.24 1.08.72-.44 2.64.62 1.05.69 1.98.81.25.16.69-.79.68 1.73.55.06.42-.02.12-.88 1.41 1.35 1.98.21 1.06.28.6.59.3.2 2.14 1.69.74.99 3.59 2.25 2.87 1.89 2.05 2.83 1.37 3.1 1.4 1.07.22.29 1.82 1.88 1.37 1.69.9.97-.34 1.75 2.01.39.03.24.72 3.14.75.71-.71 1.58.67-.2.75 3.84.31.36-.77.87.08-.63.6.88.54 1.07-.69.97.81.92.25.05.07.17.24-.18.41.56.5.96-.1.66.4-.5.62.83.5 1.92-.27.47.1 1.28-.24.31.67.73-.34 1.36.08 1.96.82.32 1.22-1.32 1.49-.55-.33.14.99-1.16.56.5.46.33.87.82 1.59h-1.82l-.27.73-1.23.41-.39.56 1.82.27-.48.39-2.27.62-.29.41.83.78-.15.84-1.01.39-.18 1-.83 2.09.78.96-.57.88-2.96 2.38.44.81-.71.61-.78.81-1.19.8-.87.45-1.04 2.13.55.72-1.01 1.11-1.43.55-1.13 2.59-.41 1.03-.76 2.45.22 1.51 1.48 1.25-.17 1.24.2.03.12.87.9-.02.22.11.7-.29.26.16.23-.13.11.13h.5l.16.19-.2.39-.37.5.09.23.22.13-.46.89-.72-.2-.44.6-.21-.01-.44.03-.54.15-.11.23-.7.26.18.16-.8.59 1.46.12.04.56-1.39 1.13-.83.14-.98-.37.03-.63-.88.42-.84 1.29 1.54-.51.78 1.32-1.79.91-.26-.73-.67.63-.2.76-1.36 1.11-1.14-.06.15-.72-3.97 1.58-1.2.48-1.05.52.35.41-.38.44-.65.28-.64.49-.97.44-.45.11-1.72.56.63.85-2.03.98-1.11.11-1.39-.73-.83 1.01-2.16.51-.8.43-1.46-.66-.15-.51.53-.59.89-.15-.07-.65-.94.13-.25-.79-1.71-.07-.31-.85.28-.32-.89-.3-.35.58-.84-.1.37-.69-.75-.32-1.65.24-1.31-.07-.2-.74-.16-.04-.38-.31-.95.27-.41.53-.99.2-1.51-.15-.61-.23v-.29l-.01-.15-1.55.24-1.05-.62-1.49-1.47-.72-1.46.26-1.09 1.11-1.04-.77-.2.03-.48-.94.37.25-1.5.96-1.11-1.68.15-.44-1.11-.01-.11.82-.69-.05-.69-.32-.18-.45.39-.24-.94-.77.19-.34-.47.26-.93-.66-.77.18-1.94-.22-1.09.49-.62.86-.08 1.21-1.79-.14-.58-.16-.63 1.02-2.45-1.17-.62-.85-1.19.35-4.59-2.68-2.26-1.96-.95-.56.95-.64.49.14.86-.87 1.17-.63.27-.25-.73-.73-.06.23-1.9-.42-.42-1.85.31.41-2.28-.06-2.05.53-.63.35-1.03-1.05-1.37-.15-.18-.86-1.15-.12-.22-.17-.46-.04-.46-.21-.11-.12-.09-.12-.27-.26-.04-.47-.24-.19.03-.18-.02-.1-.12.02-.19.15-.16.17.14.51.34.2.09.19.01.13-.19.21-.14h.21l.19.08.11.15.43-.42.13-.13-.52-.38.14-.18-.54-.22-3.71-1.53.29-.41-1.29-1.24-.22.18-.15-.2.32-.81-.54-.2-1.11-1.78-.13-.29-.34.05-.02-.06-.2-.07-.69.36-.77-.32-.07.18-.68-.32.27-.52.36.19.16.12.68.27 1.01-.55-.42-1.2-1.38-2.77-.31-.03-.7-.04-1.14-.35-.71-.25-1.09-.31-.56-.26-.68-.05-1.01.17-1.74.08-1.9.26-1.76.07-2.43 1.11-.87.71-1.2.54-.79.63-.34.4-.34.25-.22.28-.16.62-.18.2-.17.35-.16.23-.24.17-.1.15-.23.46-.48.32-.23.19-.25.41.01.47-1.33 1.25-1.05.51-2.06 1.44-3.43 1.48-.57.27m-86.87-212.3l2.28 5.91-2.27-5.91h-.01m-51.49 64.46l-.03.07h0l.03-.07M1823.76 1722.5l-1.4 1.31-.12-.11-.13-.11 1.41-1.32.86-.81.54-.51 1.1-1 1.15-1.04 2.16-2.01 6.23-5.78 4-3.72.11.12.11.13-4.16 3.86-4.16 3.86-2.06 1.92-2.06 1.91-1.09 1-1.37 1.25-1.12 1.05M2025.49 1835.3l-33.55 3.44-.09-.95 2.89-.3.01.09 16.01-1.64-.01-.1 14.65-1.49.09.95M1976.14 2057.62l.2.5h.2l.2.7-.2.1-.4-.1-.3.1-.5.6.5.1.1-.1h.4l.2.2.2.1.1.1.3.1v.5l-.1.1v.1l-.3.4-.5.7v.2l-.2.2-.1.2-1.1.3v.2l-.2.2-.1-.1-.3.1-.1-.3-.3.1h-.9l-.6.1-.1-.2.2-.1-.3-.7-.1-.2-.1-.2V2061.02l.3-.3h-.1v-.3h-.2l-.1.1h-.2l.1-.1.1-.1.2-.1v-.2l.1-.3-.1-.3.1-.2.7-.6.1-.1.2-.1.1-.1h.1v.2l.2.5.2.7.4-.1-.2-.2.1-.3.2-.1.1-.3.4-.1-.1-.2.1-.1.5-.1.1-.1.2-.5h.6" />
        <path d="M1906.54 1794.42l.1.3-.1.2v.2h.1l.1.3-.2-.1-.1.1.2.1-.1.2-.2-.1-.4-.2.1-.4h.2v-.1l-.1-.1.1-.3.2-.2.1.1h0" />
      </MapGroup>
      {/* 마커 */}
      <Marker $active={"영도구" === selectedGugun}>
        <g fill="#049dd9" stroke="#232323">
          <path
            d="M1968.85 1978.24c0 9.79-7.93 17.72-17.72 17.72-9.78 0-17.71-7.93-17.71-17.72 0-9.78 7.93-17.71 17.71-17.71 9.79 0 17.72 7.93 17.72 17.71M1823.32 1822.62c0 9.78-7.93 17.71-17.72 17.71-9.78 0-17.71-7.93-17.71-17.71 0-9.79 7.93-17.72 17.71-17.72 9.79 0 17.72 7.93 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <g fill="#d98b2b" stroke="#232323">
          <path
            d="M1774.31 1841.23c0 9.78-7.93 17.72-17.71 17.72-9.79 0-17.72-7.94-17.72-17.72 0-9.78 7.93-17.72 17.72-17.72 9.78 0 17.71 7.94 17.71 17.72M1722.8 1768.28c0 9.78-7.93 17.72-17.72 17.72-9.78 0-17.72-7.94-17.72-17.72 0-9.78 7.94-17.72 17.72-17.72 9.79 0 17.72 7.94 17.72 17.72M1933.16 1839.39c0 9.79-7.93 17.72-17.72 17.72-9.78 0-17.71-7.93-17.71-17.72 0-9.78 7.93-17.71 17.71-17.71 9.79 0 17.72 7.93 17.72 17.71"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M1740.19 1753.87c0 9.78-7.93 17.71-17.72 17.71-9.78 0-17.71-7.93-17.71-17.71 0-9.79 7.93-17.72 17.71-17.72 9.79 0 17.72 7.93 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <g fill="#8c0303" stroke="#232323">
          <path
            d="M1804.89 1764.65c0 9.78-7.94 17.71-17.72 17.71-9.78 0-17.72-7.93-17.72-17.71 0-9.79 7.94-17.72 17.72-17.72 9.78 0 17.72 7.93 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </Marker>
      {/* 구 이름 텍스트 */}
      <GugunName transform="translate(1760.34 1856.82)" onClick={() => onClick("영도구")}>
        영도구
      </GugunName>
    </>
  );
};

export default Yeongdo;

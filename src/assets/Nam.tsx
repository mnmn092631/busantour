import React from "react";
import { GugunName, MapGroup, Marker } from "./mapStyle";
import { GugunProps } from "./type";

const Nam = ({ onClick, selectedGugun }: GugunProps) => {
  return (
    <>
      <MapGroup fill="#90cbde" onClick={() => onClick("남구")}>
        <path d="M1980.4 1742.9h-.01l-1.51-14.38-1.69.22-4.4-43.15.33-.05h.34l-.41-4.82-.05-.04-.07-1.16-.09-.05-2.25-2.32-1.77-1.85-1.82.22h-.05l-.65 1.64-.88 2.28-.42 1.21.39.14 1.5.6 2.14.84-.1.29-.79 1.94-6.25-2.41 1.49-3.88.23-.63-.92.11-1.82.17-3.61.4.29-.01.13 8.86.28 18.64-67.43 1.07-.03-2.12-4.92-3.4-8.66-5.98-14.8-10.14-.99 1.41-3.41-2.35-2.82-1.74-2.28-1.37-4.62-2.77-.1-.09-.1-.1-.09-.04-.05-.1-.05-.1-.05-.09-.05-.1-.46-1.92-.01-.19V1675.3l.09-.24 4.84-7.93.38-.68h.05l.04-.09.1-.05.05-.05.09-.1.1-.05.14-.05 1.2-.31.05.05.1.38-.05.05-1.2.31-.09.05-.1.05-.04.1-.1.14-.28.49-4.84 7.92-.05.05V1675.63l.47 1.97.05.09.05.05.05.1.09.04 4.38 2.64 4.13 2.49 9.07-15.03.39.29 1.27-2.04.78.46.28-.43-.1-.1-6.99-3.99-.05-.04-.24.38-.22-2.35.98-1.7 1.6-2.82 2.16-3.84 1.21.66-1.97 3.4h.09l.19-.3.71-.97 1.6-2.34.61-.92 1.94-2.73 1.65-2.43 1.27-1.8 2.49-4.14 2.33 1.27.77-.3.67-.35 2.33-1.86 2.57-2.07-.09.49.1.04.14-.53-1.77-5.61-.16-.48-.7-1.91-.14.14-4.34-3.11-5.23 7.4h-.1l-6.38-4.62v-.05l2.97-4.24 1.84-2.53 2.64-3.7 2.79-3.85 2.83-3.99 1.84-2.58h.05l-4.85-1.81-2.37-.83v-.05l-6.35-2.26-5.66 7.84-.44-.19.33-.92-.15-.04-13.14-5.54 2.52-5.96-.88-.37 2.93-7.18.42-.92h-.05l-.05-.05v-.24l-.16-.96-.76-5.91-.39-3.32-.21-1.35-.12-1.1.01.19-.49-.52-.11-.44-.07-1.49.61-1.16.7-1.36.05-.05.1.04v-.04l-.06-.68-.11-.91-.17-1.49v-.24l-.06-.53-.05-.34-.28-2.79-.06-.48-.11-.96-.06-.43v-.44l-.06-.48-.05-.09-.05-.48-.01-.29-.05-.58-.06-.24-.05-.34v-.29l-.06-.24v-.33l-.28-2.65-.11-.82-.17-1.92-.28-2.65-.35-3.51-.1-.33-.06-.87-.05-.09-.17-1.74-.06-.67-.05-.29-.06-.48-.39-3.56-.48-.13-.05-.25.04-.24.19-.19.1-.2-.06-.33-.38-.09h-.1l-.05-.05v-.05l-.05-.19.04-.82.13-.63.05-.19-1.74.17.76-1.07 1.24-3.73.64-2.32.27-1.5.12-1.45.08-1.06.04-.82-.07-1.2-.12-1.4-.27-1.87-.48-1.82-.22-.72-.19-.55-.37-.94-.48-1.1-.47-.95-.62-1.05-.62-1.05-.23-.35-.3-.47-.65-1.09-.4-.67-2.22-3.68-3.52-5.86-.11-.14-.38-.58-.58-.91-.3-.63-.45-1.05-.35-1.2-.16-.81-.03-.58-.12-3.71-.29-9.63-.02-1.16-.26-8.47-.05-1.54v-.05l-.5-2.02-.01-.04-.2-.43 1.15-.55 6.65-2.94.29-.1.48-.2v-.05l1.15-.5 1.4.07.39.58 2.96 4.43.05.05.09.14.35.53.34.47.4.62.25.39.22.45.21.46.01.07.1.26.1.26.11.36 1.58-.35 1.25-.26.05-.01 1.25-.02-.01-.09-.02-.1-.02-.19.01-.51-.01-.62-.02-.22-.01-.05v-.48l-.01-.1v-.33l.14-.03.2-.03.31-.03.31-.05.38-.17.44-.2.16-.08.21-.09.05-.03.1-.05.14-.06.51-.22.22-.11.23-.11.1-.05h.38l.2-.01h.28l.25-.01.07.03.65-.01h.09l.49.01.48.04.09.01.15.01.25-.14.18.04.27-.26.21.08.12.03.51.11.31-.05.53.11 1.1.62.7.34.4.28.78.46 1.15.62.85-1.29.33-.45.55-.78.76-1.12.65-.93.37-.54.1-.05.14-.07.84-.45.21-.12.64-.38 1.49-.82 1.7-.89.84-.43.92-.53 1.15-.6.22-.12.4-.22 2.68-1.51.34-.19 2.39-1.23 1.24-.59 2.6-.1 5.68-.27 7.64.27 4.78-10.26.44-1.5.84-3-.4-3.6-.29-2.03 1.91-1.32 7.08-4.95.72-3.07.71-3.05-1.89-3.44 3.42-4.55.3-.3-.01-.07 3.2-1.88 4.37-.98 1.63-.22 2.79-.28.82-.11 3.42-3.52 3.47-2.51 2.24-1.67 2.49-1.34 2.87-1.59 2.66 1.07 2.96 1.21 4.35 1.19 4.62-.41 2.17.4 3.16-1.35 1.19-1.17.81-.74 1.04-1.02.43-.4.81-.39 3.42-1.91.91 1.91.73 1.63.42 3.54.88.7 2.05 1.83.8 2.47.59 1.89.82 1.75.74 1.5 1.74 2.07.47 1.4.39 1.2.51 1.61.62 1.84.11.38 2.07 3.58.19.25 1.82 1.74.13 1.69.03 1.01-.01.04.03.2.04.53.52.81.99 1.45.12.19.47.7 2.29 3.43.03.05.32.47.22.39 5.22 7.92.05.09.03.07.13.92.33 2.42.02.09.15.27 1.05 2.42.08.2.18 1.12-.09 1.49.02.11.94 1.69.19.53.22.71-.56.93-.11.16-.37.45.76.98.79.94.94.7.66.51.16.6-.04.87-.04.48.13.58.15.67.24 1.34.19.96.57 1.1.22 1.49.34 2.36.24 1.8 1.62 5.15.81 2.55.3.93-.04 1.9-.03 1.64-.03.48.01.51h-.05l-.83.9-.19.2-.43.44-.48.48-.69.82-.98 1.62-.52.76-.42.56-.25.63-.19.53-.01.08.08.11.96 1.34.45.59.24.36.4.55.41.52.15.22.52.66.66.81.46.04 1.73.15.22.09.62.69.41.47.44.48.32.28.49.41.44.37.95.83.02.01.06.08.14.11 1.12.99h.05l.78.66.3.28.01.04.47.37.09.03.06.06.1.05.25.86.2.48.39.14.1.24.34.45.59.57.3.52.42.78.09.18.15.19.79 1.1.3.39.26.37.08.07.08.12.08.1.24.34.07.11.46.18.17.07.12.05 1.6.65.17.09.32.17.46.3.17.19.02.07.27.36.15.19.76 1 .19.25.7 1.09.12.21.08-.11.25-.3 2.47 1.98 5.14 4.05 4.86 3.89 3.8 3.06.04.02-2.03 2.78-1.7 2.29.01.05-11.08 16.35h-.05l-.19.24-4.99 7.55-.14.14.49.57.98 1.05 3.25-4.82 3.16-4.62 9.09-13.44h.04l.5-.58.46-.47 1.11-.94.79-.53.84-.48.87-.39 1.31-.44.53-.14 1.46-.67.99.05.47.11.54.23.49.25 21.96 14.83-2.42 3.59 1.84 1.24-5.13 7.51.01.09-1.46 2.18-.1-.09-5.15 6.82-7.32 9.6-.43.64-.74 2.03-.5 1.79-.46 1.6 1.69-.22-.06-.34.6-2.13.04-.48.14-.29.19-.2.18-.67.23-.44.1-.19.14-.29.42-.64 2.13-2.78.57-.68.47-.68 1.37-1.76 1.89-2.48.14.09 1.56-1.9.05-.05.15.05 2.63 1.98 1.8 1.37 3.06-4.57-.39-3.56.44-6.03 4.53-6.67.04-.05.05-.05h.05l.05.05 1.85 1.27.9-1.17v-.05l-.2-.14h-.09l-.01-.09.87-.06.29.09 2.08-2.68-2.1-1.51-2.31 3.02-.05.05-1.15.16h-.1l-.05-.04h-.04l-.05-.05v-.1l-.01-.05.05-.05.1-.04 1.1-.12 2.41-3.21 2.97-4.19 1.33-1.85 1.55-2.19 3.85-5.39-.41-2.42.86-.14.4 2.37-4.22 5.92.25.17.05.05-.33.54.6 1.05.89 1.58-.66 1.31.01.28.14.24.04 2.6 4.29-.4 2.81 1.69-3.53 8.68-.83 2.42 1.81 1.23.98 1.09-.12 2.03h-.24l.06.58.38.14-.38.34.73.52-.48.1.89.95-.92.16-.03.82.5 1.1.43-.01 2.68 1.84 1.59.17.15.58-1.68.36-1.49.02-.64 2.71.01.48-.48.15.25.29.23 2.59 1.1 2.69 1.67 2.38.34.19 1.09 1.76 1.25-.16 1.07.75-.43.4-1.05.54.4.77.61 2.01h.38l.35.52.72-.35.58.52-.61.74-.42 1.16-.32.97-.19.24-.08.87.28-.01.11.48-.14.68.71 2.3.44-.05.24.28.05.29.44.28.11.63-.29.1 1.02.75 3.1.87 1.77 2.34.29.28.79 1.34 2.28 3.96.15.77.25.19.77.37.31.72-.34.15.64 1.15.94 1.24v.24l-.13.77.14.05.34.09 1.08 1.47.58-.2 1.19 2.15.62-.01.2.48-.43.06.53.28.79.95.45 1.05.81-.3.64.57 1.05 2.39.39.77.41 1.39-.81.44-2.48 1.97-.47.73.69.61.43.05-.14.63-1.19.35-1.28 1.61-.02 2.02-.36 1.36v.05l3.31 2.74.47 1.87-.19.78-1.13 1.41-1.2.16-1.05 1.08.49.42-.93 1.99.01.77-1.17 1.9.35.96.69 1.1-.61 1.4 1.28 1.81 1.31.13 1.47 8.46-1.85 1.61-1.28 1.56.57 2.45-1.94 5.76-1.1.26-.61 7.38-1.32 2-.28.92.2.14-3.24 2.55-.53.25-.51 1.26.34.33-.6 1.55-.39-.04-.28.63.44.09-1.25 3.3.58.47-1.97 3.16 2.04 1.27-1.84 2.29 1.25.03.25.34-2.74.47-.18 1.06-1.7 2.53.36 1.35-.65 1.6-.95.93.47 2.21 5.41 4.15-.6 1.65-1.97.51-.71.64-.23.82.73.62-1.85 1.71.06 1.11.82-.35.19.14-.19.29-.81.4-.43.1-.98-.61.05-.34-.72.4.05.1-.72.49-.05-.24v-.15l-1.9-1.37-.15-.33.14-.24.24-.39-3.34-1.16-1.14 1.08-.58.2-.89 1.51-4.64-.61-1.82.47-.48.05-.09.15-.34.29-.29-.14-1.34.41-1.78-.03-.34-.13-.73-.43-.6-1.05-.83-1.14.14-.1-.14-.05-.86.69-.58-.23-.14.24-.3-.28.19-.25-.29-.33-.43.15-.68-.42-.45-.86-.34-.09-1.23-1.62-.23.53-1.1.64-.53.11-2.83.38-.97-.42-.34.05-.49-.23.03-1.35-3.39-1.01-.78-.81-1.17-1.28-.49-.23-.49-.28-.73-.86.42-.63-.53-.04-.25-.63.43-.19-.34-.39-.3-.81v-.19l-.79-.95-.34-.19-.19.39-.14-.1-.3-.33-.15-.58.71-1.02-.35-.57-.53.1-.15-.43-.29-.19-.39-.18.37-.92-.19-.29-.68-.33-.58.01-.58-.14-.05.05-11.05 11.2 6.89 6.63-.37.36 6.92 6.78-.37.38-12.2-11.96-1.62 1.65-.15-.02-1.46-1.42-32.8 33.41 15.82 15.53.05-.06.08-.04.08.01.06.02.47.47.03.07v.08l-.04.07-.47.47-.06.03-.08-.01-.07-.03-3.75-3.68-23.23 4.5-2.18-1.49-15.56-10.68-.16-1.65-.27.03-1.47-14.37m15.35 6.07l2.08 20.35 2.26 1.54 23.01-4.46-12.46-12.26-14.89-5.17" />
        <path d="M2052.96 1753.39l-.17-.1-5.11 8.94-.22-.12-4.06 7.1.22.13-.41.7-.05.05-.08.03-.07-.01-.57-.33-.06-.06-.02-.08.02-.07.3-.55.05-.06.06-.03h.08l.08.03 4.27-7.47 15.19-26.59-1.95-1.91 1.01-1.03 2.39 2.35-10.9 19.08M2119.94 1766.92l-.6.5-.4.1h-.1l-.3-.1h-.9l-.6-.2-.4-.3-.3-.3.1-.3.3-.3.2-.3.3-.1.3-.5h-.5l-.2-.1-.2-.1-.1-.4v-.3l.5-.2.5-.6.6-.3.3-.1.4-.1h.4l.9-.1 1.4.1.4.1.2.2.1.5.2.2.3.3.1.1-.3.5v.9l-.1.3-.2.2-.5.3-.7.2-.3.1h-.5l-.3.1h0M2118.34 1756.42l-.6 1.2-.3.6-.4.4-.3.2h-.2l-.3.1-.3-.1-.3-.2-.1-.2v-.6h-.2v-.2l.5-.5.3.1.1-.2.1-1.1-.1-.3v-.2l-.1-.5v-.3l.1-.3.2-.5.3-.2.1-.2v-.4l.2-.4.3-.3v-.2l.2-.2h.2l.2.2.1.4.2.2v.6l.1 1v.4l.3.5v.4l-.4.5.1.3h0M2108.84 1736.72l-.5.5-.6.3-.4.1-.8.4-.1.3h-.2l-.3-.1-.2-.6v-.6h.2l-.1-.2-.2-.2-.1-.1v-.3l-.2-.6.1-.5-.1-.2v-.2l.5-.2.3-.1.5-.3.4-.4.3-.2.2-.2.1.3 1 .2.3.1.1.3.2.5.1.1-.1.3-.2.2-.1.2-.1.2.1.7v.1l-.1.2h0M2082.64 1735.92l.1.2.6-.1.1.3h.4l.2.2h.3l.1.2.2.1.2.1.3.2h.3v.2l.1.1v.5l-.2.1-.6-.3.1-.1-.2-.2-.3.2-.1.2.2.2-.1.1h-.5l-.3.1h-.3l-.1-.1v-.1l-.5.4-.3.2-.3-.1.1.2-.1.1.1.1-.1.1h-.5l.1-.2v-.1h-.2v-.2l.1-.1.3-.1v-.2l.1-.3.1-.3.6-.3v-.4h-.1l-.1.2-.2-.1v-.1h-.2l-.6.2-.1-.2-.1-.1v-.1l.1-.1V1736.22h.2l.5.2.2-.2v-.3h.4M2120.14 1770.72l-.2.2h-.3l-.4-.2-.3.1h-.1l-.4.2h-.3l-.3-.2-.4-.3-.1-.2v-.1l-.1-.1.3-.4.2-.5.4-.3.2-.1.5-.2.1-.1 1.8-.3.4-.2.6.1v.1l-.1.1-.1.1v.1l.1.1-.4.4-.3.2-.1.5-.2.7-.2.2-.3.1h0" />
        <path d="M2106.64 1731.82l.1.1-.5.2v.1l.4.4h.4l.3.1.1.3-.4.7-.5.3-.8.5h-.3v-.1h-.3l-.1-.1v-.3l-.1-.2-.1-.1v-.1l-.2-.1v-.2l.1-.2.1-.3.1-.1.1-.3.4-.3-.2-.1h-.2v-.2H2105.34l.7-.1.6.1h0M2121.14 1759.32l-.2.5-.1.5-.5.5-.3.1h-.3l-.5.2H2118.04l-.4-.1v-.2l-.1-.2.1-.3-.1-.1.1-.2.2-.2h.2l.1-.1.2.1.4-.2.7-.1.9-.3.5-.2h.2l.1.1v.2h0" />
      </MapGroup>
      {/* 마커 */}
      <Marker $active={"남구" === selectedGugun}>
        <g fill="#585859" stroke="#232323">
          <path
            d="M1991.76 1566.72c0 9.78-7.94 17.72-17.72 17.72-9.79 0-17.72-7.94-17.72-17.72 0-9.78 7.93-17.72 17.72-17.72 9.78 0 17.72 7.94 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M1980.83 1594.77c0 9.78-7.93 17.71-17.72 17.71-9.78 0-17.71-7.93-17.71-17.71 0-9.79 7.93-17.72 17.71-17.72 9.79 0 17.72 7.93 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <g fill="#6e8c03" stroke="#232323">
          <path
            d="M2006.14 1576.48c0 9.79-7.93 17.72-17.72 17.72-9.78 0-17.71-7.93-17.71-17.72 0-9.78 7.93-17.71 17.71-17.71 9.79 0 17.72 7.93 17.72 17.71"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M2005.74 1576.04c0 9.78-7.94 17.71-17.72 17.71-9.78 0-17.72-7.93-17.72-17.71 0-9.79 7.94-17.72 17.72-17.72 9.78 0 17.72 7.93 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <g fill="#049dd9" stroke="#232323">
          <path
            d="M2120.7 1711.05c0 9.78-7.93 17.71-17.72 17.71-9.78 0-17.71-7.93-17.71-17.71 0-9.79 7.93-17.72 17.71-17.72 9.79 0 17.72 7.93 17.72 17.72M2030.36 1712c0 9.79-7.93 17.72-17.71 17.72-9.79 0-17.72-7.93-17.72-17.72 0-9.78 7.93-17.71 17.72-17.71 9.78 0 17.71 7.93 17.71 17.71"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M2125.03 1718.05c0 9.79-7.93 17.72-17.71 17.72-9.79 0-17.72-7.93-17.72-17.72 0-9.78 7.93-17.71 17.72-17.71 9.78 0 17.71 7.93 17.71 17.71M1937.44 1415.02c0 9.78-7.93 17.72-17.72 17.72-9.78 0-17.71-7.94-17.71-17.72 0-9.79 7.93-17.72 17.71-17.72 9.79 0 17.72 7.93 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <g fill="#d98b2b" stroke="#232323">
          <path
            d="M1885.28 1589.63c0 9.79-7.93 17.72-17.71 17.72-9.79 0-17.72-7.93-17.72-17.72 0-9.78 7.93-17.72 17.72-17.72 9.78 0 17.71 7.94 17.71 17.72"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <g fill="#8c0303" stroke="#232323">
          <path
            d="M1863.86 1469.62c0 9.79-7.94 17.72-17.72 17.72-9.78 0-17.72-7.93-17.72-17.72 0-9.78 7.94-17.72 17.72-17.72 9.78 0 17.72 7.94 17.72 17.72"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </Marker>
      {/* 구 이름 텍스트 */}
      <GugunName onClick={() => onClick("남구")} transform="translate(1914.8 1604.04)">
        남구
      </GugunName>
    </>
  );
};

export default Nam;

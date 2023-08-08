import React from "react";
import Buk from "./Buk";
import Dong from "./Dong";
import Dongrae from "./Dongrae";
import Gijang from "./Gijang";
import Haeundae from "./Haeundae";
import Jung from "./Jung";
import Nam from "./Nam";
import Saha from "./Saha";
import Sasang from "./Sasang";
import Busanjin from "./Busanjin";
import Gangseo from "./Gangseo";
import Geumjeong from "./Geumjeong";
import Seo from "./Seo";
import Suyeong from "./Suyeong";
import Yeongdo from "./Yeongdo";
import Yeonje from "./Yeonje";
import { BusanMapProps } from "types/map";

const BusanMap = ({ selectedGugun, setSelectedGugun }: BusanMapProps) => {
  const onClick = (gugun: string): void => {
    setSelectedGugun(gugun);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      baseProfile="tiny"
      version="1.2"
      viewBox="0 100 3007 2480"
      style={{
        width: "100vmax",
        height: "100vmin",
        maxWidth: "1344px",
        maxHeight: "972px",
        position: "absolute",
        top: "55%",
        right: "0",
        transform: "translateY(-50%)",
      }}
    >
      <Buk onClick={onClick} selectedGugun={selectedGugun} />
      <Dong onClick={onClick} selectedGugun={selectedGugun} />
      <Busanjin onClick={onClick} selectedGugun={selectedGugun} />
      <Dongrae onClick={onClick} selectedGugun={selectedGugun} />
      <Gangseo onClick={onClick} selectedGugun={selectedGugun} />
      <Gijang onClick={onClick} selectedGugun={selectedGugun} />
      <Geumjeong onClick={onClick} selectedGugun={selectedGugun} />
      <Haeundae onClick={onClick} selectedGugun={selectedGugun} />
      <Jung onClick={onClick} selectedGugun={selectedGugun} />
      <Nam onClick={onClick} selectedGugun={selectedGugun} />
      <Saha onClick={onClick} selectedGugun={selectedGugun} />
      <Sasang onClick={onClick} selectedGugun={selectedGugun} />
      <Seo onClick={onClick} selectedGugun={selectedGugun} />
      <Suyeong onClick={onClick} selectedGugun={selectedGugun} />
      <Yeongdo onClick={onClick} selectedGugun={selectedGugun} />
      <Yeonje onClick={onClick} selectedGugun={selectedGugun} />
    </svg>
  );
};

export default BusanMap;

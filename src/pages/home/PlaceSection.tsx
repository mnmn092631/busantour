import React, { useEffect, useState } from "react";
import apiService from "src/api";
import BusanMap from "src/assets/BusanMap";
import {
  GugunName,
  MapCardContent,
  MapCardTitle,
  PlaceContainer,
  PlaceInfo,
  PlaceListContainer,
} from "src/styles/pages/home/placeStyle";
import { CardCategory } from "src/styles/pages/subpage/utils";
import { PlaceData } from "src/types/api";

const PlaceSection = () => {
  const [selectedGugun, setSelectedGugun] = useState<string>("금정구");
  const [places, setPlaces] = useState<PlaceData[]>([]);
  const category: { [key: string]: number } = { 공원: 1, 문화: 2, 역사: 3, 자연: 4, 체험: 5 };

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const data = await apiService.placeService.getPlace();
        setPlaces(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <PlaceContainer>
      <BusanMap selectedGugun={selectedGugun} setSelectedGugun={setSelectedGugun} />
      <PlaceInfo>
        <GugunName>{selectedGugun} 명소</GugunName>
        <PlaceListContainer>
          {places
            .filter(place => place.gugun === selectedGugun)
            .map(place => (
              <div key={place.id}>
                <MapCardTitle>
                  <CardCategory $category={category[place.category]}>{place.category}</CardCategory>
                  {place.name}
                </MapCardTitle>
                <MapCardContent>{place.addr1}</MapCardContent>
              </div>
            ))}
        </PlaceListContainer>
      </PlaceInfo>
    </PlaceContainer>
  );
};

export default PlaceSection;

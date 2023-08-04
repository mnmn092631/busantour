import React, { useEffect, useState } from "react";
import apiService from "api";
import BusanMap from "assets/map/BusanMap";
import {
  GugunName,
  MapCardContent,
  MapCardTitle,
  PlaceContainer,
  PlaceInfo,
  PlaceListContainer,
} from "styles/home/placeStyle";
import { PlaceData } from "types/api";
import { CardCategory } from "styles/components/subpage/card";

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
                <MapCardContent>{place.addr}</MapCardContent>
              </div>
            ))}
        </PlaceListContainer>
      </PlaceInfo>
    </PlaceContainer>
  );
};

export default PlaceSection;

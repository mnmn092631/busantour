import React, { useEffect, useState } from "react";
import { getData } from "src/api";
import BusanMap from "src/assets/BusanMap";
import { FoodTitle } from "src/styles/pages/home/foodStyle";
import {
  GugunName,
  MapCardContent,
  MapCardTitle,
  PlaceContainer,
  PlaceInfo,
  PlaceListContainer,
} from "src/styles/pages/home/placeStyle";
import { CardCategory } from "src/styles/pages/subpage/utils";

interface PlaceData {
  id: number;
  name: string;
  gugun: string;
  addr1: string;
  place_category: string;
}

const PlaceSection = () => {
  const [selectedGugun, setSelectedGugun] = useState<string>("금정구");
  const [places, setPlaces] = useState<PlaceData[]>();
  const category: { [key: string]: number } = { 공원: 1, 문화: 2, 역사: 3, 자연: 4, 체험: 5 };

  const getPlace = async () => {
    try {
      const response: PlaceData[] = await getData<PlaceData[]>("/busanplace");
      setPlaces(response);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to get user");
    }
  };

  useEffect(() => {
    getPlace();
  }, []);

  return (
    <PlaceContainer>
      <BusanMap selectedGugun={selectedGugun} setSelectedGugun={setSelectedGugun} />
      <PlaceInfo>
        <GugunName>{selectedGugun} 명소</GugunName>
        <PlaceListContainer>
          {places &&
            places
              .filter(place => place.gugun === selectedGugun)
              .map(place => (
                <div key={place.id}>
                  <MapCardTitle>
                    <CardCategory $category={category[place.place_category]}>{place.place_category}</CardCategory>
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

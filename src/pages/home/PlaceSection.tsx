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
  MorePlaceBtn,
} from "styles/home/placeStyle";
import { PlaceData } from "types/api";
import { useNavigate } from "react-router-dom";
import { DataCate } from "styles/utils";

const PlaceSection = () => {
  const [selectedGugun, setSelectedGugun] = useState<string>("금정구");
  const [places, setPlaces] = useState<PlaceData[]>([]);
  const category: { [key: string]: number } = { 공원: 1, 문화: 2, 역사: 3, 자연: 4, 체험: 5 };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await apiService.placeService.getPlace();
        setPlaces(response.data);
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
                  <DataCate $category={category[place.category]}>{place.category}</DataCate>
                  {place.name}
                </MapCardTitle>
                <MapCardContent>{place.addr}</MapCardContent>
              </div>
            ))}
        </PlaceListContainer>
        <MorePlaceBtn onClick={() => navigate(`/place?cate=${selectedGugun}`)}>자세히 보기→</MorePlaceBtn>
      </PlaceInfo>
    </PlaceContainer>
  );
};

export default PlaceSection;

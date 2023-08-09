import React, { useEffect, useState } from "react";
import apiService from "api";
import BusanMap from "assets/map/BusanMap";
import {
  GugunName,
  PlaceContainer,
  PlaceInfo,
  PlaceListContainer,
  MorePlaceBtn,
  MapDataTitle,
  MapDataAddr,
  MapDataCate,
} from "styles/home/placeStyle";
import { PlaceData } from "types/api";
import { useNavigate } from "react-router-dom";

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
                <MapDataTitle>
                  <MapDataCate $category={category[place.category]}>{place.category}</MapDataCate>
                  {place.name}
                </MapDataTitle>
                <MapDataAddr>{place.addr}</MapDataAddr>
              </div>
            ))}
        </PlaceListContainer>
        <MorePlaceBtn onClick={() => navigate(`/place?cate=${selectedGugun}`)}>자세히 보기→</MorePlaceBtn>
      </PlaceInfo>
    </PlaceContainer>
  );
};

export default PlaceSection;

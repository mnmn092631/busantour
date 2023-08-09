import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { getPlaceAsync } from "store/place";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";

const PlaceSection = () => {
  const dispatch = useDispatch();
  const places: AppState["places"] = useSelector((state: AppState) => state.places);
  const [selectedGugun, setSelectedGugun] = useState<string>("금정구");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch<any>(getPlaceAsync());
  }, [dispatch]);

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
                  <MapDataCate $category={place.categoryColor}>{place.category}</MapDataCate>
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

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "src/api";
import { PlaceData } from "src/types/api";

const Place = () => {
  const id = useParams().id;
  const [place, setPlace] = useState<PlaceData>();

  useEffect(() => {
    const getPlaceById = async () => {
      try {
        const response: PlaceData = await apiService.placeService.getPlaceById(Number(id));
        setPlace(response);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to get place by id");
      }
    };
    getPlaceById();
  }, [id]);

  return <div>{place && place.name}</div>;
};

export default Place;

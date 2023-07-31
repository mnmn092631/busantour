import React from "react";
import { useParams } from "react-router-dom";

const Place = () => {
  const { id } = useParams();
  return <div>게시글{id}</div>;
};

export default Place;

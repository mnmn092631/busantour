import React, { useEffect } from "react";
import { ContentContainer } from "styles/subpage/utils";
import PageTitle from "components/subpage/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { getTourAsync } from "store/tour";

const Tour = () => {
  const dispatch = useDispatch();
  const tours: AppState["tours"] = useSelector((state: AppState) => state.tours);

  useEffect(() => {
    dispatch<any>(getTourAsync());
  }, [dispatch]);

  return (
    <>
      {tours.length !== 0 && <PageTitle pageName="테마여행" imgSrc={tours[1].main_img_n} imgName={tours[1].name} />}
      <ContentContainer></ContentContainer>
    </>
  );
};

export default Tour;

import React, { useEffect, useState } from "react";
import { ContentContainer } from "styles/subpage/utils";
import PageTitle from "components/subpage/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { getTourAsync } from "store/tour";
import { CardContainer } from "styles/home/foodStyle";
import Card from "components/subpage/Card";
import { openModal } from "store/modal";
import Pagination from "components/Pagination";

const Tour = () => {
  const dispatch = useDispatch();
  const tours: AppState["tours"] = useSelector((state: AppState) => state.tours);
  const [numPage, setNumPage] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * 12;

  useEffect(() => {
    dispatch<any>(getTourAsync());
  }, [dispatch]);

  useEffect(() => {
    setPage(1);
    tours.length !== 0 && setNumPage(Math.ceil(tours.length / 12));
  }, [tours]);

  return (
    <>
      {tours.length !== 0 && <PageTitle pageName="테마여행" imgSrc={tours[1].main_img_n} imgName={tours[1].name} />}
      <ContentContainer>
        <CardContainer>
          {tours.length !== 0 &&
            tours
              .slice(offset, offset + 12)
              .map(tour => <Card key={tour.id} item={tour} onClick={() => dispatch(openModal("tours", tour.id))} />)}
        </CardContainer>
      </ContentContainer>
      <Pagination page={page} setPage={setPage} numPage={numPage} />
    </>
  );
};

export default Tour;

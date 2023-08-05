import React, { useEffect, useState } from "react";
import Pagination from "components/Pagination";
import { CardContainer, ContentContainer } from "styles/subpage/utils";
import PageTitle from "components/subpage/PageTitle";
import CategorySelect from "components/subpage/CategorySelect";
import Card from "components/subpage/Card";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { getPlaceAsync } from "store/place";
import { openModal } from "store/modal";

const Places = () => {
  const dispatch = useDispatch();
  const places: AppState["places"] = useSelector((state: AppState) => state.places);
  const [numPage, setNumPage] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * 12;
  const [selectGugun, setSelectGugun] = useState<string>("전체");
  const placeCate = [
    "전체",
    "강서구",
    "금정구",
    "기장군",
    "남구",
    "동구",
    "동래구",
    "부산진구",
    "북구",
    "사상구",
    "사하구",
    "서구",
    "수영구",
    "연제구",
    "영도구",
    "중구",
    "해운대구",
  ];
  const category: { [key: string]: number } = { 공원: 1, 문화: 2, 역사: 3, 자연: 4, 체험: 5 };

  useEffect(() => {
    dispatch<any>(getPlaceAsync());
  }, [dispatch]);

  useEffect(() => {
    setPage(1);
    places.length !== 0 &&
      setNumPage(
        Math.ceil(
          places.filter(place => {
            if (selectGugun === "전체") return place;
            else return place.gugun === selectGugun;
          }).length / 12,
        ),
      );
  }, [places, selectGugun]);

  return (
    <>
      {places.length !== 0 && <PageTitle pageName="관광명소" imgSrc={places[1].main_img_n} imgName={places[1].name} />}
      <ContentContainer>
        <CategorySelect categories={placeCate} state={selectGugun} setState={setSelectGugun} />
        <CardContainer>
          {places.length !== 0 &&
            places
              .filter(place => {
                if (selectGugun === "전체") return place;
                else return place.gugun === selectGugun;
              })
              .slice(offset, offset + 12)
              .map(place => (
                <Card
                  key={place.id}
                  item={place}
                  onClick={() => dispatch(openModal("places", place.id))}
                  subCategories={category}
                />
              ))}
        </CardContainer>
      </ContentContainer>
      <Pagination page={page} setPage={setPage} numPage={numPage} />
    </>
  );
};

export default Places;

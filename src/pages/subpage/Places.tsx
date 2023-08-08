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
import { useSearchParams } from "react-router-dom";

const Places = () => {
  const dispatch = useDispatch();
  const places: AppState["places"] = useSelector((state: AppState) => state.places);

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

  const [searchParams, setSearchParams] = useSearchParams();
  const cate = searchParams.get("cate") || "전체";

  const page = Number(searchParams.get("page")) || 1;
  const [numPage, setNumPage] = useState<number>();
  const offset = (page - 1) * 12;

  useEffect(() => {
    dispatch<any>(getPlaceAsync());
  }, [dispatch]);

  useEffect(() => {
    places.length !== 0 &&
      setNumPage(
        Math.ceil(
          places.filter(place => {
            if (cate === "전체") return place;
            else return place.gugun === cate;
          }).length / 12,
        ),
      );
  }, [places, cate]);

  return (
    <>
      {places.length !== 0 && <PageTitle pageName="관광명소" imgSrc={places[1].main_img_n} imgName={places[1].name} />}
      <ContentContainer>
        <CategorySelect categories={placeCate} cate={cate} setSearchParams={setSearchParams} />
        <CardContainer>
          {places.length !== 0 &&
            places
              .filter(place => {
                if (cate === "전체") return place;
                else return place.gugun === cate;
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
        <Pagination cate={cate} page={page} setSearchParams={setSearchParams} numPage={numPage} />
      </ContentContainer>
    </>
  );
};

export default Places;

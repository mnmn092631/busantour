import React, { useEffect, useState } from "react";
import { CardContainer, ContentContainer } from "styles/subpage/utils";
import Pagination from "components/Pagination";
import PageTitle from "components/subpage/PageTitle";
import CategorySelect from "components/subpage/CategorySelect";
import Card from "components/subpage/Card";
import { AppState } from "store";
import { useDispatch, useSelector } from "react-redux";
import { getFoodAsync } from "store/food";
import { openModal } from "store/modal";
import { useSearchParams } from "react-router-dom";

const Foods = () => {
  const dispatch = useDispatch();
  const foods: AppState["foods"] = useSelector((state: AppState) => state.foods);

  const foodCate = ["전체", "한식", "중식", "일식", "아세안요리", "양식", "카페&베이커리", "해산물", "그릴"];
  const [searchParams, setSearchParams] = useSearchParams();
  const cate = searchParams.get("cate") || "전체";

  const page = Number(searchParams.get("page")) || 1;
  const [numPage, setNumPage] = useState<number>();
  const offset = (page - 1) * 12;

  useEffect(() => {
    dispatch<any>(getFoodAsync());
  }, [dispatch]);

  useEffect(() => {
    foods &&
      setNumPage(
        Math.ceil(
          foods.filter(food => {
            if (cate === "전체") return food;
            else return food.category === cate;
          }).length / 12,
        ),
      );
  }, [foods, cate]);

  return (
    <>
      {foods.length !== 0 && <PageTitle pageName="맛집정보" imgSrc={foods[2].main_img_n} imgName={foods[2].name} />}
      <ContentContainer>
        <CategorySelect categories={foodCate} cate={cate} setSearchParams={setSearchParams} />
        <CardContainer>
          {foods.length !== 0 &&
            foods
              .filter(food => {
                if (cate === "전체") return food;
                else return food.category === cate;
              })
              .slice(offset, offset + 12)
              .map(food => <Card key={food.id} item={food} onClick={() => dispatch(openModal("foods", food.id))} />)}
        </CardContainer>
        <Pagination cate={cate} page={page} setSearchParams={setSearchParams} numPage={numPage} />
      </ContentContainer>
    </>
  );
};

export default Foods;

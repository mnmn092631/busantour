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

const Foods = () => {
  const dispatch = useDispatch();
  const foods: AppState["foods"] = useSelector((state: AppState) => state.foods);

  const [numPage, setNumPage] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * 12;

  const [selectFood, setSelectFood] = useState<string>("전체");
  const foodCate = ["전체", "한식", "중식", "일식", "아세안요리", "양식", "카페&베이커리", "해산물", "그릴"];

  useEffect(() => {
    dispatch<any>(getFoodAsync());
    console.log("Foods");
  }, [dispatch]);

  useEffect(() => {
    setPage(1);
    foods &&
      setNumPage(
        Math.ceil(
          foods.filter(food => {
            if (selectFood === "전체") return food;
            else return food.category === selectFood;
          }).length / 12,
        ),
      );
  }, [foods, selectFood]);

  return (
    <>
      {foods.length !== 0 && <PageTitle pageName="맛집정보" imgSrc={foods[2].main_img_n} imgName={foods[2].name} />}
      <ContentContainer>
        <CategorySelect categories={foodCate} state={selectFood} setState={setSelectFood} />
        <CardContainer>
          {foods.length !== 0 &&
            foods
              .filter(food => {
                if (selectFood === "전체") return food;
                else return food.category === selectFood;
              })
              .slice(offset, offset + 12)
              .map(food => <Card key={food.id} item={food} onClick={() => dispatch(openModal("foods", food.id))} />)}
        </CardContainer>
      </ContentContainer>
      <Pagination page={page} setPage={setPage} numPage={numPage} />
    </>
  );
};

export default Foods;

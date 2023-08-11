import apiService from "api";
import Pagination from "components/Pagination";
import Card from "components/subpage/Card";
import CategorySelect from "components/subpage/CategorySelect";
import PageTitle from "components/subpage/PageTitle";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppState } from "store";
import { openModal } from "store/modal";
import { getTourAsync } from "store/tour";
import { CardContainer, ContentContainer } from "styles/subpage/utils";

const Tour = () => {
  const dispatch = useDispatch();
  const tours: AppState["tours"] = useSelector((state: AppState) => state.tours);

  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchTourTags = async () => {
      try {
        const { data } = await apiService.tourService.getTourTags();
        setTags(["전체"].concat(data));
      } catch (error) {
        console.error("Error fetching tourtags:", error);
      }
    };
    fetchTourTags();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("cate") || "전체";

  const page = Number(searchParams.get("page")) || 1;
  const [numPage, setNumPage] = useState<number>();
  const offset = (page - 1) * 12;

  useEffect(() => {
    dispatch<any>(getTourAsync());
  }, [dispatch]);

  useEffect(() => {
    tours.length !== 0 &&
      setNumPage(
        Math.ceil(
          tours.filter(tour => {
            if (tag === "전체") return tour;
            else return tour.tags.indexOf(tag) !== -1;
          }).length / 12,
        ),
      );
  }, [tours, tag]);

  if (tours.length === 0) return null;

  return (
    <>
      <PageTitle pageName="테마여행" imgSrc={tours[1].main_img_n} imgName={tours[1].name} />
      <ContentContainer>
        <CategorySelect categories={tags} cate={tag} setSearchParams={setSearchParams} />
        <CardContainer>
          {tours
            .filter(tour => {
              if (tag === "전체") return tour;
              else return tour.tags.indexOf(tag) !== -1;
            })
            .slice(offset, offset + 12)
            .map(tour => (
              <Card key={tour.id} item={tour} onClick={() => dispatch(openModal("tours", tour.id))} />
            ))}
        </CardContainer>
        <Pagination cate={tag} page={page} setSearchParams={setSearchParams} numPage={numPage} />
      </ContentContainer>
    </>
  );
};

export default Tour;

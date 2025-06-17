import { NavLink, useLoaderData } from "react-router";
import SliderSection from "../Components/Other/SliderSection";
import Banner from "../Components/Other/Banner";
import LatestCourses from "../Components/Other/LatestCourses";
import PopularCourses from "../Components/Other/PopularCourses";
import Loading from "../Components/Common/Loading";

function Homepage() {
  const data = useLoaderData();

  const { latestCourses, popularCourses } = data;

  return (
    <div className="w-full">
      <Banner></Banner>

      {!latestCourses ? (
        <Loading />
      ) : (
        <LatestCourses latestCourses={latestCourses} />
      )}

      {!popularCourses ? (
        <Loading />
      ) : (
        <PopularCourses popularCourses={popularCourses} />
      )}

      <SliderSection></SliderSection>
    </div>
  );
}

export default Homepage;

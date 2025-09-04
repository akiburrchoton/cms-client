import { NavLink, useLoaderData } from "react-router";
import SliderSection from "../Components/Other/SliderSection";
import Banner from "../Components/Other/Banner";
import Loading from "../Components/Common/Loading";
import LatestCourses from "../Components/Other/LatestCourses";
import PopularCourses from "../Components/Other/PopularCourses";
import { Helmet } from "react-helmet-async";

function Homepage() {
  const data = useLoaderData();

  const { latestCourses, popularCourses } = data;

  return (
    <div className="w-full">
      <Helmet>
        <title>Home | The Learning Loop</title>
      </Helmet>

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

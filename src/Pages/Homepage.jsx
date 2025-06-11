import { NavLink } from "react-router";
import SliderSection from "../Components/Other/SliderSection";
import Banner from "../Components/Other/Banner";
import LatestCourses from "../Components/Other/LatestCourses";
import PopularCourses from "../Components/Other/PopularCourses";

function Homepage() {
  return (
    <div className="w-full">
      <Banner></Banner>
      <LatestCourses></LatestCourses>
      <PopularCourses></PopularCourses>
      <SliderSection></SliderSection>
    </div>
  );
}

export default Homepage;

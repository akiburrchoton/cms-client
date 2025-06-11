import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { motion, useMotionValue, useSpring } from "framer-motion";

function Banner() {
  // 1. Create motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Smooth the motion values
  const springX = useSpring(mouseX, { stiffness: 20, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 20, damping: 20 });
  const springX2 = useSpring(mouseX, { stiffness: 60, damping: 30 });
  const springY2 = useSpring(mouseY, { stiffness: 60, damping: 30 });

  // 3. Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x / 20);
      mouseY.set(y / 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-[url('.../../assets/wave.svg')] bg-no-repeat bg-bottom bg-contain h-svh flex justify-center items-center w-full">
      <div className="grid grid-cols-2 w-[1300px] items-center">
        <div className="mr-20">
          <h1 className="text-6xl font-bold text-brand font-montserrat leading-18 mb-4 ">
            <span className="font-bold text-orange">Discover</span> the Future
            Skills.
          </h1>
          <p className="text-mainText font-libre">
            Mauris vitae ultricies leo integer malesuada nunc vel. Est ultricies
            integer quis auctor elit sed.Dictum at tempor commodo. Est ultricies
            integer quis auctor elit sed.Dictum at tempor commodo.
          </p>
          <div className="mt-10">
            <NavLink to="/register">
              <button className="btn bg-(--color-orange) text-white font-bold rounded-full px-6">
                <span>Explore Courses</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="flex gap-6 justify-end items-center">
          <motion.img
            src="src/assets/banner-img-1.jpg"
            alt=""
            className="h-90 rounded-b-full overflow-hidden"
            style={{
              x: springX,
              y: springY,
            }}
          />
          <motion.img
            src="src/assets/banner-img-2.jpg"
            alt=""
            className="h-110 rounded-t-full mt-10"
            style={{
              x: springX2,
              y: springY2,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

"use client"
// import SunAnimation from "./SunAnimation";
import dynamic from 'next/dynamic'

const SunAnimationDynamic = dynamic(() => import('./SunAnimation'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const HomeSunAnimation = () => {
  return (
    <div className="" id="sunanimation">
      <SunAnimationDynamic color="#2CAC68" />
    </div>
  );
};

export default HomeSunAnimation;

import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeBlog from "@/components/containers/home/HomeBlog";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import NextPage from "@/components/containers/home/NextPage";
import BookButton from "@/components/containers/home/BookButton";

const Home = () => {

 useEffect(() => {
  
  const scrollY=localStorage.getItem('scrollPosition')
  const mousePosition=localStorage.getItem('cursorDistance')
  if(scrollY&& mousePosition){
    window.scrollTo(0,Number.parseInt(scrollY)+Number.parseInt(mousePosition))
  }
  
 },[])
 

// new code
useEffect(() => {
  // Function to update scroll position
  const updateScrollPosition = () => {
    const currentPosition = window.scrollY;
    // setScrollPosition(currentPosition);
    localStorage.setItem('scrollPosition', currentPosition.toString());
  };

  // Function to update cursor distance
  const updateCursorDistance = (event:any) => {
    const distanceFromTop = event.clientY;
    // setCursorDistance(distanceFromTop);
    localStorage.setItem('cursorDistance', distanceFromTop.toString());
  };

  // Add event listeners
  window.addEventListener('scroll', updateScrollPosition);
  window.addEventListener('mousemove', updateCursorDistance);

  // Cleanup by removing event listeners
  return () => {
    window.removeEventListener('scroll', updateScrollPosition);
    window.removeEventListener('mousemove', updateCursorDistance);
  };
}, []); // Empty dependency array ensures this effect only runs once on mount



  
  return (
    <Layout header={1} footer={1} video={true}>
      <HomeOneBanner />
      <Agency />
      <HomeOffer />
      <PortfolioText />
      <HomeTestimonial />
      <BookButton/>
      
      {/* <HomeBlog /> */}
      {/* <HomeSponsor /> */}
      <NextPage />
    </Layout>
  );
};

export default Home;

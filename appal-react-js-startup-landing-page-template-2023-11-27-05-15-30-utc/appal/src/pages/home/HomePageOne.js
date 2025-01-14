import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutOne } from "../../layouts";
import BannerOne from "../../components/Banner/BannerOne";
import { BrandSlider } from "../../components/BrandSlider";
import { WorkingProgressOne } from "../../components/WorkingProgress";
import FeaturesNav from "../../components/FeaturesNav/FeaturesNav";
import { FeatureOne } from "../../components/Features";
import { TestimonialSliderOne } from "../../components/TestimonialSlider";
import { ServiceSliderOne } from "../../components/ServiceSlider";
import FanFact from "../../components/FuncFact/FanFact";
import Pricing from "../../components/PricingSection/PricingSection";
import { AppSectionOne } from "../../components/AppSection";
import { FaqSectionOne } from "../../components/FaqSection";
import BlogSlider from "../../components/BLogSlider/BlogSlider";
import titleOne from "../../data/title/title-one.json";

const HomePageOne = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="App Landing Creative - Appal - Mobile App Leanding Page"
        favicon="assets/images/logo/favourite-icon-1.png"
      />
      <LayoutOne activeClass="active" wrapperClass="home-page-1">
        <main>
          <BannerOne />
          <BrandSlider />
          <WorkingProgressOne sectionSpace="sec-ptb-160" title={titleOne} />
          <FeaturesNav />
          <FeatureOne sectionSpace="sec-ptb-160" />
          <ServiceSliderOne sectionSpace="sec-ptb-160 pt-0" />
          <TestimonialSliderOne
            sectionSpace="sec-ptb-160"
            bgColor="bg-light-gray"
          />
          <FanFact />
          <Pricing pricingBg="assets/images/pricing/sec-bg-1.jpg" />
          <AppSectionOne />
          <FaqSectionOne />
          <BlogSlider sectionSpace="sec-ptb-160" />
        </main>
      </LayoutOne>
    </Fragment>
  );
};

export default HomePageOne;

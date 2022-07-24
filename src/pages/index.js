import React from "react";
import {
  ContactSection,
  HeroSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { AboutSection } from "../../content/sections/about/AboutSection";

export default function IndexPage() {
  return (
    <>
      <Seo title="모두 모여라 기술 블로그" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection
          sectionId="articles"
          heading="최근 포스트"
          sources={["Medium"]}
        /> */}
        <AboutSection sectionId="about" heading="모모팀을 소개합니다" />
        {/* <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" /> */}
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}

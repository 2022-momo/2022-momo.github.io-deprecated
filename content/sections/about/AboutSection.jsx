import { useLocalDataSource } from "gatsby-theme-portfolio-minimal/src/sections/About/data";
// import { PageSection } from "gatsby-theme-portfolio-minimal/src/types";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import React from "react";
import { MemberProfile } from "./MemberProfile";

export function AboutSection(props) {
  const response = useLocalDataSource();
  const data = response.allAboutMarkdown.sections[0];

  return (
    <Animation type="fadeUp">
      <Section anchor={props.sectionId} heading={props.heading}>
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
        <MemberProfile />
      </Section>
    </Animation>
  );
}

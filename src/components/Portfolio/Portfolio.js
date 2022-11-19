import React from "react";
import {
  GridContainer,
  BlogCard,
  Img,
  ContentContainer,
  TitleContent,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  CardInfo,
  UtilityList,
  ExternalLinks,
} from "./PortfolioStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <SectionDivider />
      <SectionTitle>Portfolio</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <ContentContainer>
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <UtilityList>
                  <ExternalLinks
                    href={visit}
                    target="_blank"
                    alt="Check out"
                  ></ExternalLinks>
                  <ExternalLinks
                    href={source}
                    target="_blank"
                    alt="Source code"
                  ></ExternalLinks>
                </UtilityList>
              </ContentContainer>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Portfolio;

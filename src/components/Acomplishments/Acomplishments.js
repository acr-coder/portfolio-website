import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './AcomplishmentsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { courses } from '../../constants/constants';

const Acomplishments = () => (
  <Section nopadding id="projects">
    
    <SectionTitle main>My Udemy Courses</SectionTitle>
    <GridContainer>
      {courses.map((course) => (
        <BlogCard key={course.id} >
          <Img src={course.image} />
          <TitleContent>
            <HeaderThree title>{course.title}</HeaderThree>
            <Hr />
          </TitleContent>
          
          <div>
            <TitleContent></TitleContent>
            <TagList>
              {course.tags.map((tag,i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={course.visit}>Enroll This Course</ExternalLinks>
            
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Acomplishments;




// import React from 'react';

// import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

// const data = [
//   { number: 20, text: 'Open Source Projects'},
//   { number: 1000, text: 'Students', },
//   { number: 1900, text: 'Github Followers', },
//   { number: 5000, text: 'Github Stars', }
// ];

// const Acomplishments = () => (
//   <div>
//     Acomplishments
//   </div>
// );

// export default Acomplishments;

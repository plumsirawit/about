import React from 'react';
import { PagePanel } from './PagePanel';
import mainPhoto from '../assets/main_cut.jpg';
import './education-panel.css';

export const EducationHeadPanel = () => {
  return (
    <PagePanel className="education-head">
      <div className="main">
        <h1 className="header">Education</h1>
      </div>
    </PagePanel>
  );
};

export const AllEducationPanel = () => {
  return (
    <div className="education-grid">
      <EducationPrimarySchoolPanel />
      <EducationMiddleSchoolPanel />
      <EducationHighSchoolPanel />
      <EducationUniversityPanel />
    </div>
  );
};

interface EducationPanelProps {
  className?: string;
}
export function EducationPanel<T extends EducationPanelProps>(
  props: React.PropsWithChildren<T>,
) {
  return (
    <section className={['education-panel', props.className].join(' ')}>
      {props.children}
    </section>
  );
}

export const EducationPrimarySchoolPanel = () => {
  return (
    <EducationPanel className="education-primary">
      <div className="overlay" />
      <div className="main">
        <div className="description">
          <h1 className="header">Primary School</h1>
          <h3 className="subheader">Assumption Samutprakarn School</h3>
          <p>2008 - 2014</p>
          <br />
          <p>
            I have received awards such as academic certifiates, diploma, and
            Smart Student awards.
          </p>
          <p>
            My favorite subjects were mathematics and science. I have also
            competed in academic competitions involving mathematics and science.
          </p>
        </div>
      </div>
    </EducationPanel>
  );
};

export const EducationMiddleSchoolPanel = () => {
  return (
    <EducationPanel className="education-middle">
      <div className="overlay" />
      <div className="main">
        <div className="description">
          <h1 className="header">Middle School</h1>
          <h3 className="subheader">Assumption Samutprakarn School</h3>
          <p>2014 - 2017</p>
          <br />
          <p>
            I have stronger interests in mathematics and computer science. My
            first inspiration was when I received full score in first M2 (grade
            8) computer exam. I started building applications using MIT app
            inventor and then moved to Android Studio thanks to my teachers'
            support.
          </p>
          <p>
            I've also participated in a lot of competitions involving
            mathematics, science, computer science, and English.
          </p>
          <p>
            I've participated in a team where we created a computer science
            project "Universal Quiz" as an android application. The application
            supports designing quiz and organizing exams on mobile app.
          </p>
          <p>
            I joined POSN mathematics olympiad camp in 2015 and informatics camp
            in 2016. They were among the first inspirations for me to be a
            software engineer, mathematician and computer scientist.
          </p>
        </div>
      </div>
    </EducationPanel>
  );
};

export const EducationHighSchoolPanel = () => {
  return (
    <EducationPanel className="education-high">
      <div className="overlay" />
      <div className="main">
        <div className="description">
          <h1 className="header">High School</h1>
          <h3 className="subheader">Mahidol Wittayanusorn School</h3>
          <p>2017 - 2020</p>
          <br />
          <p>
            I built even stronger interests in mathematics and computer science,
            especially in competitive programming and pure mathematics. I
            participated only competitions that are involved with informatics
            olympiad and hackathons. I joined several school clubs and also
            managed some. My general interests (apart from primary goals) are
            data science, running, teaching, politics, math modelling, etc.
          </p>
          <p>
            I've done a science project together with a friend about
            brain-computer interface, using them to facilitate communications
            for disabled patients.
          </p>
          <p>
            I found hobbies that I like, such as running, making music,
            tinkering things in the workshop, and developing websites.
          </p>
        </div>
      </div>
    </EducationPanel>
  );
};

export const EducationUniversityPanel = () => {
  return (
    <EducationPanel className="education-university">
      <div className="overlay" />
      <div className="main">
        <div className="description">
          <h1 className="header">Higher Education</h1>
          <h3 className="subheader">TBD</h3>
          <p>2021 - current</p>
          <br />
          <p>
            After graduating from Mahidol Wittayanusorn School, I took a gap
            year. I've participated as an intern and then a software engineer at
            Brikl. Currently I'm looking forward to study higher education.
          </p>
        </div>
      </div>
    </EducationPanel>
  );
};

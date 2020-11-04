import React from 'react';
import './about.scss';
import Timeline, { TimelineProps } from '../timeline/timeline';
import SectionHeader from '../section-header/section-header';
import SkillsCard from '../skills-card/skills-card';

export interface Skill {
  id: string,
  content: string,
  value: number,
}

export interface AboutContentParagraph {
  id: string,
  content: string
}

export interface AboutProps {
  skills: Array<Skill>,
  about: Array<AboutContentParagraph>,
  timeline: TimelineProps
}

class About extends React.Component<AboutProps> {
  render() {
    const { about, skills, timeline } = this.props;
    return (
      <section
        id={'about'}
        className={'about-mf sect-pt4 route'}
      >
        <div className={'container'}>
          <SectionHeader header={'Timeline'} />
          <Timeline
            events={timeline.events}
          />
        </div>
        <div className={'container'}>
          <SectionHeader header={'Skills'} />
          <SkillsCard
            skills={skills}
            about={about}
          />
        </div>
      </section>
    );
  }
}

export default About;

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

export interface LibraryGroup {
  type: string,
  content: Array<string>
}

export interface AboutProps {
  skills: Array<Skill>,
  libraries: Array<LibraryGroup>,
  timeline: TimelineProps
}

class About extends React.Component<AboutProps> {
  render() {
    const { libraries, skills, timeline } = this.props;
    return (
      <section
        id={'about'}
        className={'about-mf sect-pt4 route'}
      >
        <div className={'container'}>
          <SectionHeader
            header={'Timeline'}
            subtitle={'Academic and professional career experiences'}
          />
          <Timeline
            events={timeline.events}
          />
        </div>
        <div className={'container'}>
          <SectionHeader
            header={'Skills'}
            subtitle={'Programming languages and technologies'}
          />
          <SkillsCard
            skills={skills}
            libraries={libraries}
          />
        </div>
      </section>
    );
  }
}

export default About;

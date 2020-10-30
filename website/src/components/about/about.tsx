import React from 'react';
import './about.scss';
import Timeline, { TimelineProps } from '../timeline/timeline';

export interface Skill {
  id: string,
  content: string,
  percentage: string,
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
        <Timeline
          events={timeline.events}
        />
        <div className={'container'}>
          <div className={'row'}>
            <div
              className={'col-sm-12'}
              id={'big-card-container'}
            >
              <div
                className={'box-shadow-full big-card'}
                id={'big-card'}
              >
                <div className={'row'}>
                  <div className={'col-md-6'}>
                    <div className={'row'}>
                      <div
                        className={'col-sm-6 col-md-5'}
                        style={{ margin: '0 auto' }}
                      >
                        <div
                          className={'about-img'}
                          style={{ textAlign: 'center' }}
                        >
                          <img
                            className={'img-fluid rounded b-shadow-a'}
                            alt={''}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={'skill-mf'}>
                      {skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>
                            {' '}
                            <span className={'pull-right'}>
                              {skill.percentage}
                            </span>
                            <div className={'progress progress-rounded'}>
                              <div
                                className={'progress-bar progress-rounded'}
                                role={'progressbar'}
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className={'col-md-6'}>
                    <div className={'about-me pt-4 pt-md-0'}>
                      <div className={'title-box-2'}>
                        <h5 className={'title-left'}>About Me</h5>
                      </div>
                      {about.map(content => {
                        return (
                          <p
                            className={'lead'}
                            key={content.id}
                          >
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

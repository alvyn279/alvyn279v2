import React from 'react';

interface AboutProps {
  skills: Array<any>,
  about: Array<any>
}

class About extends React.Component<AboutProps> {
  render() {
    const { about, skills } = this.props;
    return (
      <section
        id={'about'}
        className={'about-mf sect-pt4 route'}
      >
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-sm-12'}>
              <div className={'box-shadow-full'}>
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
                      {/* <p className="title-s">Skill</p> */}
                      {skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>
                            {' '}
                            <span className={'pull-right'}>
                              {skill.porcentage}
                            </span>
                            <div className={'progress'}>
                              <div
                                className={'progress-bar'}
                                role={'progressbar'}
                                style={{ width: skill.porcentage }}
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

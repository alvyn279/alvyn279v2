import React from 'react';
import { Progress } from 'antd';
import { OtherParagraph, Skill } from '../about/about';
import { LIGHTER_MAIN_THEME_COLOR, MAIN_THEME_COLOR } from '../../index';

import './skills-card.scss';

export interface SkillsCardProps {
  skills: Array<Skill>
  otherSkills: Array<OtherParagraph>
}

const SkillsCard = (props: SkillsCardProps) => {
  const { otherSkills, skills } = props;

  const renderSkills = () => {
    return (
      <div className={'skill-mf'}>
        {skills.map(skill => {
          return (
            <div key={skill.id}>
              <span>{skill.content}</span>
              <Progress
                strokeColor={{
                  '0%': LIGHTER_MAIN_THEME_COLOR,
                  '100%': MAIN_THEME_COLOR,
                }}
                percent={skill.value}
                status={'active'}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const renderOtherSkillsText = () => {
    return (
      <div className={'about-me pt-4 pt-md-0'}>
        <div className={'title-box-2'}>
          <p className={'title-left'}>Some other libraries I&apos;ve used...</p>
        </div>
        {otherSkills.map(content => {
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
    );
  };

  return (
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
              {renderSkills()}
            </div>
            <div className={'col-md-6'}>
              {renderOtherSkillsText()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;

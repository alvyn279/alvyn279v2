import React from 'react';
import { Progress, Tree } from 'antd';
import { LibraryGroup, Skill } from '../about/about';
import { LIGHTER_MAIN_THEME_COLOR, MAIN_THEME_COLOR } from '../../index';

import './skills-card.scss';

export interface SkillsCardProps {
  skills: Array<Skill>
  libraries: Array<LibraryGroup>
}

const { DirectoryTree } = Tree;

const SkillsCard = (props: SkillsCardProps) => {
  const { libraries, skills } = props;

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

  const renderLibrariesUsed = () => {
    // single level antd tree
    const treeData = libraries.map((libraryGroup: LibraryGroup, libGroupIndex: number) => {
      return {
        title: libraryGroup.type,
        key: libGroupIndex.toString(),
        children: libraryGroup.content.map((library: string, index: number) => ({
          title: library,
          key: `${libGroupIndex}-${index}`,
          isLeaf: true,
        })),
      };
    });

    return (
      <div className={'about-me pt-4 pt-md-0'}>
        <div className={'title-box-2'}>
          <p className={'title-left'}>Some other libraries I&apos;ve used...</p>
        </div>
        <div className={'libs'}>
          <DirectoryTree
            selectable={false}
            treeData={treeData}
          />
        </div>
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
              {renderSkills()}
            </div>
            <div className={'col-md-6'}>
              {renderLibrariesUsed()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;

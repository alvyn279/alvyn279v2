import React from 'react';

export interface SectionHeaderProps {
  header: string,
  subtitle?: string,
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { header, subtitle } = props;
  return (
    <div className={'row'}>
      <div className={'col-sm-12'}>
        <div className={'title-box text-center'}>
          <h3 className={'title-a'}>{header}</h3>
          {subtitle && (
            <p className={'subtitle-a'}>
              {subtitle}
            </p>
          )}
          <div className={'line-mf'} />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;

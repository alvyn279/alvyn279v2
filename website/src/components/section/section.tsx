import React from 'react';

interface SectionProps {
  id: string,
  content: any
}

const Section = (props: SectionProps) => {
  const { content, id } = props;

  return (
    <div className={'section'}>
      <div
        className={'section-content'}
        id={id}
      >
        {content}
      </div>
    </div>
  );
};

export default Section;

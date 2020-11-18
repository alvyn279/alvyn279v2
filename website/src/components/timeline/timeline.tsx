import React from 'react';
import {
  Timeline as VerticalTimeline,
  TimelineItem as VerticalTimelineItem,
} from 'vertical-timeline-component-for-react';
import { Tag, Tooltip } from 'antd';
import { TagItem } from '../../utils/tags';
import { FONT_COLOR_DEFAULT, MAIN_THEME_COLOR } from '../../index';

import './timeline.scss';

export interface TimelineProps {
  events: Array<TimelineItem>
}

interface TimelineItem {
  dateString: string,
  dateStringBackgroundColor?: string,
  dateStringColor?: string,
  title: string,
  subtitle?: string,
  institution: string,
  description?: Array<string>,
  tagItems?: Array<TagItem>
}

const timelineItemContainerStyle = {
  background: '#ddd',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 1px 1px 0 rgba(0,0,0,.06), 0 2px 5px 0 rgba(0,0,0,.2)',
};

const Timeline = (props: TimelineProps) => {
  const { events } = props;

  const renderTags = (tagItems: Array<TagItem>, timelineItemIndex) => {
    return tagItems.map((tagItem: TagItem, tagIndex: number) => {
      const { tag, tooltipComment }: TagItem = tagItem;
      const tagId = `${timelineItemIndex}-${tagIndex}`;
      const extraTagProps = tooltipComment ? {
        style: {
          cursor: 'pointer',
        },
      } : {};

      return (
        <Tooltip
          title={tooltipComment}
          key={`tag-tooltip-${tagId}`}
          color={tag.color}
        >
          <Tag
            key={`tag-${tagId}`}
            className={'roundify'}
            color={tag.color}
            {...extraTagProps}
          >
            {tag.content}
          </Tag>
        </Tooltip>
      );
    });
  };

  return (
    <VerticalTimeline lineColor={'#ddd'}>
      {events.map((timelineItem: TimelineItem, index: number) => (
        <VerticalTimelineItem
          key={index.toString()}
          dateText={timelineItem.dateString}
          bodyContainerStyle={timelineItemContainerStyle}
          dateInnerStyle={{
            background: timelineItem.dateStringBackgroundColor || MAIN_THEME_COLOR,
            color: timelineItem.dateStringColor || FONT_COLOR_DEFAULT,
          }}
        >
          <h4>{`${timelineItem.title}, ${timelineItem.institution}`}</h4>
          {timelineItem.subtitle && <h5>{timelineItem.subtitle}</h5>}
          {timelineItem.tagItems && (
            <p className={'tag'}>
              {renderTags(timelineItem.tagItems, index)}
            </p>
          )}
          {timelineItem.description && (
            timelineItem.description.map((paragraph: string, paragraphIndex: number) => (
              <p
                key={`item-desc-${index}-${paragraphIndex}`}
              >
                {paragraph}
              </p>
            ))
          )}
        </VerticalTimelineItem>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;

import React from 'react';
import {
  Timeline as VerticalTimeline,
  TimelineItem as VerticalTimelineItem,
} from 'vertical-timeline-component-for-react';
import { FONT_COLOR_DEFAULT, MAIN_THEME_COLOR } from '../../index';

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
}

const timelineItemContainerStyle = {
  background: '#ddd',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 1px 1px 0 rgba(0,0,0,.06), 0 2px 5px 0 rgba(0,0,0,.2)',
};

const Timeline = (props: TimelineProps) => {
  const { events } = props;

  return (
    <div className={'container'}>
      <div className={'row'}>
        <div className={'col-sm-12'}>
          <div className={'title-box text-center'}>
            <h3 className={'title-a'}>Timeline</h3>
            <div className={'line-mf'} />
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
                  {timelineItem.subtitle ? <h5>{timelineItem.subtitle}</h5> : <span />}
                  <br />
                  {timelineItem.description ? (
                    timelineItem.description.map((paragraph: string) => (
                      <p>{paragraph}</p>
                    ))
                  ) : (<span />)}
                </VerticalTimelineItem>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

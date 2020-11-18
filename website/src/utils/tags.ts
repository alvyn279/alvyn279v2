export interface Tag {
  color: string,
  content: string,
}

export interface TagItem {
  tag: Tag,
  tooltipComment?: string,
}

// Tags are based on antd Tag standard
export const TAGS: Record<string, Tag> = {
  SCHOOL: {
    color: '#993002',
    content: 'school',
  },
  INTERNSHIP: {
    color: '#196184',
    content: 'internship',
  },
  PARTTIME: {
    color: '#baac2b',
    content: 'part-time',
  },
  FULLTIME: {
    color: '#4b7f31',
    content: 'full-time',
  },
  BACKTOBACK: {
    color: '#6a2944',
    content: 'back-to-back',
  },
};

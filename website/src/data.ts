import { TimelineProps } from './components/timeline/timeline';
import { AboutProps } from './components/about/about';
import { TAGS } from './utils/tags';

const TIMELINE_INFO: TimelineProps = {
  events: [
    {
      dateString: 'Sep 2016',
      title: 'Student',
      institution: 'Concordia University',
      description: [
        'Started Bachelor\'s of Software Engineering (BEng).',
        'Enrolled in co-op.',
      ],
      dateStringBackgroundColor: '#800000',
      dateStringColor: '#FFD700',
      tagItems: [{
        tag: TAGS.SCHOOL,
      }],
    }, {
      dateString: 'Jan 2018 - Aug 2018',
      title: 'Software Engineering Intern',
      institution: 'Ericsson',
      description: [
        'Worked on a web application in Django.',
        'Worked on a Java-based functional testing framework.',
      ],
      dateStringBackgroundColor: '#002561',
      dateStringColor: '#FFFFFF',
      tagItems: [{
        tag: TAGS.INTERNSHIP,
      }, {
        tag: TAGS.BACKTOBACK,
        tooltipComment: '4-month ✕ 2 with different teams',
      }],
    }, {
      dateString: 'May 2019 - Jan 2020',
      title: 'Full-Stack Developer Intern',
      institution: 'Ineat',
      description: [
        'Worked on a mobile application in React Native.',
      ],
      dateStringBackgroundColor: '#f31c4d',
      dateStringColor: '#FFFFFF',
      tagItems: [{
        tag: TAGS.INTERNSHIP,
        tooltipComment: '4-month, May to Aug',
      }, {
        tag: TAGS.PARTTIME,
        tooltipComment: 'During school, Sep to Jan',
      }],
    }, {
      dateString: 'May 2020',
      title: 'Student',
      institution: 'Concordia University',
      description: [
        'Graduated Bachelor\'s of Software Engineering (BEng) with distinction.',
      ],
      dateStringBackgroundColor: '#800000',
      dateStringColor: '#FFD700',
      tagItems: [{
        tag: TAGS.SCHOOL,
      }],
    }, {
      dateString: 'Jun 2020 - Sep 2020',
      title: 'SDE Intern',
      institution: 'Amazon Web Services (AWS)',
      description: [
        'Worked on a native AWS serverless web application.',
      ],
      dateStringBackgroundColor: '#232F3E',
      dateStringColor: '#FF9900',
      tagItems: [{
        tag: TAGS.INTERNSHIP,
        tooltipComment: '4-month remote',
      }],
    }, {
      dateString: 'Feb 2021',
      title: 'SDE',
      institution: 'Amazon Web Services (AWS)',
      dateStringBackgroundColor: '#232F3E',
      dateStringColor: '#FF9900',
      tagItems: [{
        tag: TAGS.FULLTIME,
        tooltipComment: 'Vancouver, BC',
      }],
    },
  ],
};

export const ABOUT_INFO: AboutProps = {
  skills: [
    {
      id: 'react',
      content: 'React',
      value: 90,
    }, {
      id: 'ts',
      content: 'TypeScript',
      value: 90,
    }, {
      id: 'java',
      content: 'Java',
      value: 85,
    }, {
      id: 'python',
      content: 'Python',
      value: 75,
    }, {
      id: 'git',
      content: 'Git',
      value: 95,
    }, {
      id: 'rest',
      content: 'REST',
      value: 80,
    }, {
      id: 'aws',
      content: 'AWS',
      value: 60,
    }, {
      id: 'mongo',
      content: 'MongoDB',
      value: 70,
    },
  ],
  libraries: [
    {
      type: 'Unit & BDD testing',
      content: [
        'Jest',
        'Enzyme',
        'JUnit',
        'Groovy',
        'Spock',
      ],
    }, {
      type: 'Java Patterns (DI, Builder, & utilities)',
      content: [
        'Lombok',
        'Dagger',
      ],
    }, {
      type: 'React',
      content: [
        'Redux',
        'redux-thunk',
        'react-router',
        'Webpack',
        'axios',
      ],
    }, {
      type: 'Cloud',
      content: [
        'aws-cdk',
      ],
    }, {
      type: 'Python',
      content: [
        'Django',
        'Flask',
      ],
    }, {
      type: 'Mobile',
      content: [
        'React Native',
        'Android',
      ],
    }, {
      type: 'Linter',
      content: [
        'eslint',
        'airbnb/javascript',
        'pylint',
      ],
    },
  ],
  timeline: TIMELINE_INFO,
};

export const SOCIAL_INFO = {
  githubLink: 'https://github.com/alvyn279',
  linkedinLink: 'https://www.linkedin.com/in/alvyn-duy-khoi-le',
  email: 'alvyn279@gmail.com',
};

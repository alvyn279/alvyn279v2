import { TimelineProps } from './components/timeline/timeline';
import { AboutProps } from './components/about/about';

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
    }, {
      dateString: 'May 2019 - Jan 2020',
      title: 'Full-Stack Developer Intern',
      institution: 'Ineat',
      description: [
        'Worked on a mobile application in React Native.',
      ],
      dateStringBackgroundColor: '#f31c4d',
      dateStringColor: '#FFFFFF',
    }, {
      dateString: 'May 2020',
      title: 'Student',
      institution: 'Concordia University',
      description: [
        'Graduated Bachelor\'s of Software Engineering (BEng) with distinction.',
      ],
      dateStringBackgroundColor: '#800000',
      dateStringColor: '#FFD700',
    }, {
      dateString: 'Jun 2020 - Sep 2020',
      title: 'SDE Intern',
      institution: 'Amazon Web Services (AWS)',
      description: [
        'Worked on a native AWS serverless web application.',
      ],
      dateStringBackgroundColor: '#232F3E',
      dateStringColor: '#FF9900',
    }, {
      dateString: 'Feb 2021',
      title: 'SDE',
      institution: 'Amazon Web Services (AWS)',
      dateStringBackgroundColor: '#232F3E',
      dateStringColor: '#FF9900',
    },
  ],
};

export const ABOUT_INFO: AboutProps = {
  skills: [
    {
      id: 'HTML5_skill',
      content: 'HTML5',
      percentage: '80%',
      value: 80,
    },
    {
      id: 'CSS3_skill',
      content: 'CSS3',
      percentage: '75%',
      value: 75,
    },
    {
      id: 'JavaScript_skill',
      content: 'JavaScript',
      percentage: '90%',
      value: 90,
    },
    {
      id: 'PHP_skill',
      content: 'PHP',
      percentage: '70%',
      value: 70,
    },
    {
      id: 'ReactJS_skill',
      content: 'ReactJS',
      percentage: '80%',
      value: 80,
    },
    {
      id: 'Python_skill',
      content: 'Python',
      percentage: '75%',
      value: 75,
    },
    {
      id: 'VanillaJS_skill',
      content: 'VanillaJS',
      percentage: '85%',
      value: 85,
    },
    {
      id: 'Wordpress_skill',
      content: 'Wordpress',
      percentage: '80%',
      value: 80,
    },
  ],
  about: [
    {
      id: 'first-p-about',
      content: 'lol1',
    },
    {
      id: 'second-p-about',
      content: 'lol2',
    },
    {
      id: 'third-p-about',
      content: 'lol',
    },
  ],
  timeline: TIMELINE_INFO,
};

export const SOCIAL_INFO = {
  githubLink: 'https://github.com/alvyn279',
  linkedinLink: 'https://www.linkedin.com/in/alvyn-duy-khoi-le',
};

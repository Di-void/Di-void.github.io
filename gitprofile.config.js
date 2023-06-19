// gitprofile.config.js

const config = {
  github: {
    username: 'Di-void', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'don-akhirebhulu-675082242',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'deezy',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'dandonpaul@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.JS',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Prifina Inc',
      position: 'Frontend Developer Intern',
      from: 'September 2022',
      to: 'December 2022',
      companyLink: 'https://www.prifina.com/',
    },
    {
      company: 'LinuxJobber Inc',
      position: 'Frontend Developer Intern',
      from: 'September 2022',
      to: 'October 2022',
      companyLink: '',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Aptech Computer Education',
      degree: 'Advanced Diploma in SE',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Topflight College',
      degree: 'O Levels',
      from: '2014',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Countries',
      description:
        'Search and discover different countries around the world!',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://countries-react-ts.netlify.app/',
    },
    {
      title: 'Dees Todo',
      description:
        'Not your regular todo list apps. Sort your tasks by dragging and dropping and more.. :)',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'http://dees-todolist.netlify.app/',
    },
    {
      title: 'Url Shortener',
      description:
        'Url shortener app made with ReactJS',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://shortly-reactapp.netlify.app/',
    },
    {
      title: 'Url Shortener Backend',
      description:
        'Url shortener backend made with NodeJS and Express',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/Di-void/hi-counselor-url-shortener',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
      'retro',
      'halloween',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;

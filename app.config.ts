export default defineAppConfig({
  alpine: {
    title: 'Benjis Blog',
    description: 'My own personal blog.',
    image: {
      src: '/banner.webp',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'left',
      logo: {
        path: '/logo.png',
        pathDark: '/logo.png',
        alt: 'Benjis Blog',
      }
    },
    footer: {
      credits: {
        enabled: true,
        text: 'Benjis Blog',
        repository: 'https://github.com/Benji377/website'
      },
      navigation: true,
      alignment: 'center',
      message: 'Follow me on'
    },
    socials: {
      twitter: 'https://twitter.com/Benben377',
      instagram: '',
      github: 'https://github.com/Benji377',
      facebook: '',
      medium: '',
      youtube: 'https://www.youtube.com/@benji_377'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    },
    backToTop: {
      text: 'Back to top',
      icon: 'material-symbols:arrow-upward'
    }
  }
})

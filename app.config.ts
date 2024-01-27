export default defineAppConfig({
  alpine: {
    title: 'Benjis Blog',
    description: 'Welcome to my awesome blog!',
    image: {
      src: '/banner.webp',
      alt: 'The banner image of the blog',
      width: 400,
      height: 300
    },
    header: {
      position: 'right',
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
        repository: 'https://github.com/Benji377'
      },
      navigation: false,
      alignment: 'center',
      message: 'Follow me on'
    },
    socials: {
      twitter: 'https://twitter.com/Benben377',
      github: 'https://github.com/Benji377',
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

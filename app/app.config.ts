export default defineAppConfig({
  header: {
    title: 'Kuina UI',
  },
  github: {
    url: 'https://github.com/Kuina-UI/docs',
    branch: 'main',
  },
  navigation: {
    sub: 'header',
  },
  ui: {
    colors: {
      neutral: 'stone',
    },
    contentNavigation: {
      defaultVariants: {
        variant: 'pill',
        highlight: true,
      },
    },
  },
})

module.exports = {
  title: "Theme Title",
  description: "Theme description",
  base: "/",
  theme: "casper",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false,
    },
  },
  themeConfig: {
    cover: "/images/cover.jpg",
    logo: "/images/berry.jpg",
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Posts",
        link: "/posts",
      },
      {
        text: "Techs",
        link: "/category/techs",
      },
      {
        text: "Psychol",
        link: "/category/psychol",
      },
      {
        text: "Review",
        link: "/category/reviews",
      },
      {
        text: "Category",
        link: "/category/some-category",
      },
      {
        text: "Page",
        link: "/a-page.html",
      },
    ],
    footer: [
      {
        text: "Latest Posts",
        link: "/posts",
      },
      {
        text: "Facebook",
        link: "https://facebook.com/",
      },
      {
        text: "Twitter",
        link: "https://twitter.com",
      },
      {
        text: "Github",
        link: "https://github.com/",
      },
    ],
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
};
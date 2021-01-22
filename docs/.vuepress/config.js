module.exports = {
  title: "Theme Title",
  description: "Theme description",
  base: "/blog/",
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
        link: "https://www.facebook.com/jingwu.hu",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/wowdacom",
      },
      {
        text: "Github",
        link: "https://github.com/wowdacom",
      },
    ],
    social: {
      github: "https://github.com/wowdacom",
      twitter: "https://twitter.com/wowdacom",
      facebook: "https://www.facebook.com/jingwu.hu",
      instagram: "https://www.instagram.com/jingwuhu/",
      linkedin: "https://linkedin.com",
    },
  },
};

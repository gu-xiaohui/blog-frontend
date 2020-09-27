// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  templates:{
    StrapiPosts: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTags: [
      {
        path: '/tags/:id',
        component: './src/templates/Tags.vue'
      }
    ]
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./src/content/article/**/*.md",
      },
    },
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ["posts", "tags"],
        singleTypes: ["home-header"],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: "manage@gmail.com",
        //   password: "bzAN0903h",
        // },
      },
    },
  ],
  transformers: {
    remark: {
      // global remark options
    },
  },
};

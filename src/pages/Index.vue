<template>
  <Layout>
    <!-- Page Header -->
    <header
      class="masthead"
      :style="`background-image: url(${host}${header.banner.url})`"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{ header.title }}</h1>
              <span class="subheading">{{ header.slogan }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div
            class="post-preview"
            v-for="(post, index) in $page.posts.edges"
            :key="index"
          >
            <g-link :to="post.node.path">
              <h2 class="post-title">{{ post.node.title }}</h2>
              <h3 class="post-subtitle">{{ post.node.description }}</h3>
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#"
                >{{ post.node.created_by && post.node.created_by.firstname
                }}{{ post.node.created_by && post.node.created_by.lastname }}</a
              >
              {{ post.node.created_at }}
            </p>
            <g-link
              style="text-decoration: underline; margin-left: 5px"
              v-for="(tag, index) in post.node.tags"
              :key="index"
              :to="'/tags/' + tag.id"
              >{{ tag.title }}</g-link
            >
          </div>
          <!-- Pager -->
          <div class="clearfix">
            <!-- <a class="btn btn-primary float-right" href="#"
              >Older Posts &rarr;</a
            > -->
            <Pager :info="$page.posts.pageInfo"></Pager>
          </div>
        </div>
      </div>
    </div>

    <!-- <hr /> -->
  </Layout>
</template>
<page-query>
  query($page: Int){
  posts:allStrapiPosts(perPage: 10, page: $page) @paginate{
      pageInfo{
        totalPages,
        currentPage
      }
    edges{
      node{
        id,content, 
        title,
        description,
        created_at,
        path,
        created_by{
          lastname,
          firstname,
          id
        }
        tags{
          title, id
        }
      }
    }
  },
   header:allStrapiHomeHeader{
    edges{
      node{
        title,
        slogan,
        banner{
          url
        }
      }
    }
  }
}
</page-query>
<script>
import {Pager} from 'gridsome'
export default {
  components:{
    Pager
  },
  metaInfo: {
    title: "Hello, world!",
  },
  computed: {
    header() {
      return this.$page.header.edges[0].node;
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

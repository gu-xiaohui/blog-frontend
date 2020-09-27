<template>
  <Layout>
    <header class="masthead" style="background-image: url(/img/about-bg.jpg)">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{ $page.tag.title }}</h1>
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
            v-for="(post, index) in $page.tag.posts"
            :key="index"
          >
            <g-link :to="'/post/' + post.id">
              <h2 class="post-title">{{ post.title }}</h2>
              <h3 class="post-subtitle">{{ post.description }}</h3>
            </g-link>
            <p class="post-meta">
              Created at
              {{ post.created_at }}
            </p>
          </div>
          <!-- Pager -->
          <div class="clearfix">
            <Pager :info="pageInfo"/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($id: ID!, $page: Int){
  tag:strapiTags(id: $id){
    title, 
    id, 
    posts{
      id,
      title,content,description,
      created_by,
      created_at
    },
    belongsTo(perPage: 10, page: $page) @paginate{
      pageInfo{
        totalPages,
        currentPage
      },
      edges{
        node{
          ... on StrapiPosts{
           id, title
          }
          
        }
      }
    }
  }
}
</page-query>
<script>
import {Pager} from 'gridsome'
export default {
  components: {Pager},
  computed: {
    pageInfo() {
      return this.$page.tag.belongsTo.pageInfo
    }
  }
};
</script>

<style>
</style>
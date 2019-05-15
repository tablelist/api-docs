<template src="./template.html">
</template>

<script>
import marked from 'marked';

import articlesApi from 'api/articles';
import PATH_TO_ARTICLE from 'constants/pathToArticle';

export default {
  name: 'tl-article',
  data() {
    return {
      notFound: false,
      article: null
    };
  },
  computed: {
    markdown() {
      if (!this.article) return '';

      return marked(this.article);
    }
  },
  mounted() {
    const pathToArticle = PATH_TO_ARTICLE[this.$route.path];

    if (!pathToArticle) {
      this.notFound = true;

      return null;
    }

    return articlesApi.getById(encodeURIComponent(pathToArticle))
      .then(article => {
        this.article = article;
      })
      .catch(() => {
        this.notFound = true;
      });
  }
};
</script>

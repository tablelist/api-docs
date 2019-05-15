<template src="./template.html">
</template>

<script>
import PATH_TO_ARTICLE from 'constants/pathToArticle';

export default {
  name: 'article',
  data() {
    return {};
  },
  mounted() {
    console.log('ARTICLE', PATH_TO_ARTICLE[this.$route.path]);
  }
};
</script>

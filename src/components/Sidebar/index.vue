<template src="./template.html">
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      showAuthLinks: false,
      showCityLinks: false,
      showVenueLinks: false
    };
  },
  methods: {
    toggle(type) {
      this.showAuthLinks = false;
      this.showCityLinks = false;
      this.showVenueLinks = false;

      if (type === 'auth') {
        this.showAuthLinks = true;
      } else if (type === 'cities') {
        this.showCityLinks = true;
      } else if (type === 'venues') {
        this.showVenueLinks = true;
      }
    }
  }
};
</script>

<template>
  <div class="card" @click="toggleBorder">
    <div class="card-header">
      <slot name="header">
        <img :src="img" alt="Card Image" />
      </slot>
    </div>
    <div class="card-body">
      <div name="body" class="body">{{ content }}</div>
      <div name="subtitle" class="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      isBorderVisible: false,
    };
  },
  props: {
    img: String,
    content: String,
    subtitle: String,
  },
  methods: {
    toggleBorder() {
      this.$emit("card-clicked");
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  width: 130px;
}

img {
  width: 100%;
  height: 80px;
  object-fit: contain;
}

.bordered-card {
  border-color: #F2FCE4;
  border-radius: 5px;
}

.card-header {
  border-radius: 5px 5px 0 0;
  text-align: center;
}

.card-body {
  padding-bottom: 10px;
}

.card-header img {
  max-width: 100%;
  height: auto;
}

.body, .subtitle {
  text-align: center;
}

.subtitle {
  color: grey;
}
</style>

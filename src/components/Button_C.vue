<template>
    <div>
      <button class="custom-button" :style="{backgroundColor:color1}">Shop Now &#8594;</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Button1",
    props: {
      color1: String,
    },
  };
  </script>
  
  <style scoped>
  .custom-button {
    height: 36px;
    width: 120px;
    border: 1px solid grey;
    color: white;
    font-weight: 700;
    border-radius: 4px;
  }
  </style>
  
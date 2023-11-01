<template>
    <div>
      <button :style="{ backgroundColor: color }" class="custom-button">Primary</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Button1",
    props: {
      color: String,
    },
  };
  </script>
  
  <style scoped>
  .custom-button {
    height: 25px;
    width: 180px;
    border: 1px solid grey;
    color: white;
    font-weight: 700;
    border-radius: 4px;
  }
  </style>
  
<template>
  <div>
    <div class="card-list">
      <Card
        v-for="(item, index) in cardData"
        :key="index"
        :class="{ 'bordered-card': selectedCardIndex === index }"
        :style="{ backgroundColor: item.color }"
        :img="item.imageSrc"
        :content="item.content"
        :subtitle="item.subtitle"
      >
      </Card>
    </div> 
    <div class="card-list1">
      <Card1
        v-for="(item, index) in cardData1"
        :key="index"
        :style="{ backgroundColor: item.color }"
        :title="item.title"
        :img1="item.img1"
        :btn_color="item.btn_color"
      ></Card1>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Card1 from "@/components/Card_01.vue"

export default {
  components: {
    Card,
    Card1,
  },
  data() {
    return {
      cardData: [   
        {
          imageSrc:"./src/assets/cat-13.png",
          content: "Cake & Milk",
          color: "#81B13D",
          subtitle:"14 items"
        },
        {
          imageSrc: "./src/assets/Cat-11.png",
          content: "Peach",
          color: "#FFFCEB",
          subtitle:"17 items"
        },
        {
          imageSrc: "./src/assets/Cat-12.png",
          content: "Oganic Kiwi",
          color: "#ECFFEC",
          subtitle:"21 items"
        },
        {
          imageSrc: "./src/assets/Cat-9.png",
          backgroundColor:"none",
          content: "Red Apple",
          color: "#FEEFEA",
          subtitle:"68 items"
        },
        {
          imageSrc: "./src/assets/Cat-3.png",
          content: "Snack",
          color: "#FFF3EB",
          subtitle:"16items"
        },
        {
          imageSrc: "./src/assets/Cat-4.png",
          content: "Black Plum",
          color: "#FFF3FF",
          subtitle:"25 items"
        },
        {
          imageSrc: "./src/assets/Cat-1.png",
          content: "Vegatable",
          color: "#F2FCE4",
          subtitle:"25 items"
        },
        {
          imageSrc: "./src/assets/Cat-15.png",
          content: "Headphone",
          color: "#FFFCEB",
          subtitle:"33 items"
        },
        {
          imageSrc: "./src/assets/Cat-14.png",
          content: "Cake & Milk",
          color: "#F2FCE4",
          subtitle:"54 items"
        },
        {
          imageSrc: "./src/assets/Cat-7.png",
          content: "Orange",
          color: "#FFF3FF",
          subtitle:"63 items"
        },
      ],
      selectedCardIndex: null,
      cardData1: [
      {
        title:"Everyday Fresh & Clean with Our Products",
        img1: "./src/assets/Cms-04.png",
        color: "#f0e8d5",
        btn_color:"#3bb77e"
      },
      {
        title:"Make Your Breakfast Healthy and Easy",
        img1: "./src/assets/remove3.png",
        btn_color:"#3bb77e",
        color:"#f3e8e8"
      },
      {
        title:"The Best Organic Product Online",
        img1: "./src/assets/Cms-03.png",
        btn_color: "#fdc040",
        color:"#e7eaf3"
      }
    ],
      
    };
  },
  methods: {
    selectCard(index) {
      if (this.selectedCardIndex === index) {
        this.selectedCardIndex = null;
      } else {
        this.selectedCardIndex = index;
      }
    },
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.bordered-card {
  border-color: #F2FCE4;
}
.card-list1{
  margin-top: 100px;
  display: flex;
  gap: 10px;
}
</style>

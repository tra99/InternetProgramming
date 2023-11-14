<template>
  <div>
    <div style="display: flex; justify-content: space-between;padding: 20px 20px 20px 20px;">
      <div style="font-weight: 600; font-size: 24px;">Featured Category</div>
      <div style="display: flex;gap: 30px;">
        <div style="font-weight: 700;">All</div>
      <menu1
        :menu="groups"
      >
      </menu1>
      </div>
    </div>

    <div class="card-list">
      <Card
        v-for="(item, index) in product"
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
        v-for="(item, index) in promotion"
        :key="index"
        :style="{ backgroundColor: item.color }"
        :title="item.title"
        :img1="item.img1"
        :btn_color="item.btn_color"
      ></Card1>
    </div>
    <div style="display: flex; justify-content: space-between;padding: 20px 20px 20px 20px;">
      <div style="font-weight: 600; font-size: 24px;">Popular Products</div>
      <div style="display: flex;gap: 30px;">
        <div style="font-weight: 700;">All</div>
      <menu1
        :menu="groups"
      >
      </menu1>
      </div>
    </div>
  </div>
  <div class="product2">
    <product class="product-list"
      v-for="(item,index) in product2"
      :key="index"
      :bgColor1="item.bgColor1 "
      :imgPro="item.imgPro"
      :describe="item.describe"
      :text1="item.text1"
    ></product>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Card1 from "@/components/Card_01.vue";
import { mapState } from "pinia";
import { useProductStore } from "./store/product.js"; 
import menu1 from "@/components/Menu_item.vue"
import product from "@/components/Product_compo.vue"

export default {
  components: {
    Card,
    Card1,
    menu1,
    product
  },
  computed: {
    ...mapState(useProductStore,['product']),
    ...mapState(useProductStore,['promotion']),
    ...mapState(useProductStore,['groups']),
    ...mapState(useProductStore,['product2']),
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

.card-list1 {
  margin-top: 100px;
  display: flex;
  gap: 10px;
} 
.product2{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /* width: 100%; */
  gap: 20px;
}

</style>

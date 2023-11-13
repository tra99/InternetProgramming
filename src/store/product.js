import {defineStore} from "pinia";

export const productStore=defineStore("product",{
    state:()=>({
      groups:["Milks & Diaries","Coffee & Teas","Pet Foods","Meats","Vegetables","Fruits"],
        product:[
                {
                    imageSrc:"./src/assets/cat-13.png",
                    content: "Cake & Milk",
                    color: "#f2fce4",
                    subtitle:"16 items"
                  },
                  {
                    imageSrc: "./src/assets/cat-11.png",
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
        promotion:[
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
        ]
    }),
    getters:{
        countProduct:(state)=>state.product.length,
    }
})



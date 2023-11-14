<template>
    <div class="product">
        <div class="stack" :style="{backgroundColor:bgColor1}">{{ text1 }}</div>
        <img style="width: 100%;height: 40%;" :src="imgPro" alt="product">
        <div style="padding-left: 16px;padding-right: 16px;">
            <div style="color: grey;">Hodo Foods</div>
            <div class="name-pro">{{ describe }}</div>
            <div style="display: flex; gap: 10px;padding-top: 8px;">
                <img  src="../assets/Frame18.png" alt="">
                <div style="color: grey;">(4.0)</div>
            </div>
            <div style="color: grey;padding-top: 8px;">500 gram</div>
            <div style="padding-top: 10px;display: flex; justify-content: space-between;">
                <div style="margin-top: 4px; font-size: 18px;font-size: 20px;color: rgb(59, 183, 126);font-weight: bold;">$2.51 <span style="text-decoration:line-through;font-size: 14px;color: grey;">$2.00</span></div>
                <button class="button1">Add +</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"Product_Card",
        props:{
            bgColor1:String,
            text1:String,
            imgPro:String,
            describe:String
        }
    }
</script>
<style>
    .product{
        border: 1px solid rgb(195, 194, 194);
        border-radius: 10px;
        height: 55vh;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .product .stack{
        width: 28%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        border-radius: 0px 20px 20px 0;
        color: white;
    }
    .product .name-pro{
        font-size: 16px;
        font-weight: bold;
        padding-top: 6px;
    }
    .product .button1{
        background-color: rgb(176, 220, 176);
        border: none;
        /* padding: 8px ; */
        border-radius: 6px;
        color: green;
        font-weight: 600;
        font-size: 14px;
    }
</style>
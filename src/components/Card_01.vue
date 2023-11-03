<template>
    <div class="container" :style="{backgroundColor:bg_color}">
        <div class="content " style="height: 100%;">
            <div class="title" style="height: 50%; display: flex;align-items:end">{{ title }}</div>
            <div style="height: 50%; display: flex; align-items: center;">
                <Button1 :color1='btn_color'></Button1>
            </div>
        </div>
        <div class="image">
            <img class="img1" :src="img1" alt="Image">
        </div>
    </div>
</template>
<script>
import Button1 from "../components/Button_C.vue"
    export default{
        components:{
            Button1
        },
        name:"Card_01",
        props:{
            title:String,
            img1:String,
            bg_color:String,
            btn_color:String
        },

    }
</script>
<style>
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        border-radius: 10px;
        width: 33%;
    }
    .content .button1{
        margin-top: 20%;
    }
    .container .content{
        width: 50%;
        padding: 10% 0 10% 10%;
        font-weight: 600;
        font-size: 20px;
    }
    .title{
        font-size: 28px;

    }
    .container .image{
        height: 100%;
        width: 50%;
        display: flex;
        align-items:flex-end;
        justify-content: center;
    }
    .container .img1{
        width: 100%;
        object-fit: cover;
        border-radius: 0 0 10px 0;
    }

</style>
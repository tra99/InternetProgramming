<template>
    <div class="container">
        <div>
            <div style="width: 150px; font-size: large; font-weight: 700;">{{ title }}</div>
        </div>
        <div>
            <img class="img1" :src="img1" alt="Image">
        </div>
    </div>
</template>
<script>
    export default{
        name:"Card_01",
        props:{
            title:String,
            img1:String,
            button1:String
        }
    }
</script>
<style>
    .container{
        display: flex;
        justify-content: center;
        border: 1px solid grey;
        margin: 10px;
        padding: 20px 20px 0px 20px;
        width: 300px;
    }
    .img1{
        /* object-fit: contain; */
        margin-top: 40px;
    }

</style>
<template>
    <div class="menu-item">
        <div v-for="item in menu" :key="item">{{ item }}</div>
    </div>
</template>

<script>
export default {
    name: "menu_item",
    props: {
        nameCompany: {
            type: String,
            default: ""
        },
        bold: {
            type: String,
            default: ""
        },
        menu: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>
.menu-item {
    display: flex;
    gap: 30px;
}
</style>

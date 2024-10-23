<template>
   <div class="card" style="width: 150px; min-height: 250px; margin-right: 10px;">
                <img style="min-width: 100px; height: auto;" :src="imgSrc" alt="">
                <h6 style="width: 100%; height: 110px; display:flex; justify-content: center; align-items: center;">{{ categoryName }}</h6>

            </div>
</template>

<script>
export default {
    name:"CardCategory",
    props:{
        imgSrc: {
          type: String,
          required: true,
          default: ""
        },
        categoryName: {
          type: String,
          required: true,
          default: "Category Name"
        },

    }


}
</script>

<style scoped>
.card{
    max-width: 150px;
  min-height: 200px;
  box-shadow: 0px 4px 16px 0px #4685853d;
  padding: 10px;
  border-radius: 10px;
  margin: 40px;
   
}
</style>
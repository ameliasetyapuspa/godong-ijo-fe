<template>
    <div class="card-menu" :style="{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 53.5%, rgba(0, 0, 0, 0.8) 94.08%), url(' + imgSrc + ')' }">
      <div class="bottom-left text-start">
        <h5 class="m-0">{{ menuName }}</h5>
        <p class="m-0">{{ menuPrice }}</p>
        <p style="font-size: 12px;">{{ menuDescription }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardMenu",
    props: {
      imgSrc: {
        type: String,
        required: true,
        default: "@/assets/WaterfallResto/menu-1.jpg"
      },
      menuName: {
        type: String,
        required: true,
        default: "Menu Name"
      },
      menuPrice: {
        type: String,
        required: true,
        default: "Menu Price"
      },
      menuDescription: {
        type: String,
        required: true,
        default: "Menu Description"
      }
    }
  }
  </script>
  
  <style scoped>
  .card-menu {
    background-size: cover;
    position: relative;
    border-radius: 20px;
    text-align: center;
    color: white;
    width: 250px;
    height: 250px;
  }
  
  /* Bottom left text */
  .bottom-left {
    position: absolute;
    bottom: 8px;
    left: 16px;
  }
  </style>
  
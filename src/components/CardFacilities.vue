<template>
    <div style="padding: 20px;">
        <div class="card ms-4" style="width: 200px; min-height: 250px; margin-right: 50px;">
      <img :src="imgSrc" style="width: 200px; height: 120px;" class="card-img-top img-fluid">
      <div class="card-body d-flex flex-column align-items-center">
        <h4 style="font-size: 14px;">{{ title }}</h4>
        <h5 style="font-size: 12px;">{{ subtitle }}</h5>
        <p style="font-size: 12px;" class="card-text">{{ description }}</p>
      </div>
    </div>
    </div>
   
    </template>
    
    <script>
    export default {
      props: {
        imgSrc: {
          type: String,
          required: true,
          default: "@/assets/Home/facilities-1.png"
        },
        title: {
          type: String,
          required: true,
          default: "Aula Dome"
        },
        subtitle: {
          type: String,
          required: true,
          default: "(Semi Outdoor)"
        },
        description: {
          type: String,
          required: true,
          default: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
      }
    }
    </script>
    
    <style scoped>
    .card {
      box-shadow: 0px 4px 16px 0px rgba(70, 133, 133, 0.24);
      border: none !important;
      background: white;
    }
    </style>
    
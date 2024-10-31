<template>
  <div class="card text-start">
    <div class="container p-3">
      <img :src="imgSrc" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ placeName }}</h5>
        <p style="font-size: 12px" class="card-text">
          {{ placeDescription }}
        </p>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "CardVerticalGarden",
  props: {
    imgSrc: {
      type: String,
      required: true,
      default: "@/assets/VerticalGarden/default.jpg",
    },
    placeName: {
      type: String,
      required: true,
      default: "Default Place Name",
    },
    placeDescription: {
      type: String,
      required: true,
      default:
        "Default description about this place. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  },
};
</script>
  
  <style scoped>
.card {
  max-width: 280px;
  width: 100%;
  min-height: 280px;
  box-shadow: 0px 4px 16px 0px #4685853d;
  border-radius: 18px;
  margin: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card .container {
  padding: 2rem;
  min-height: 380px;
}

.card-img-top {
  width: 100%;
  height: auto;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.card-body {
  display: flex;
  flex-direction: column;
  min-height: 200px;
}

.card-title {
  font-size: 1rem;
  font-weight: bold;
  max-height: 3.6em;
  line-height: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.card-text {
  font-size: 0.9rem;
  line-height: 1.2rem;
  min-height: 150px;
  overflow-y: auto;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}

@media (max-width: 576px) {
  .card {
    max-width: 100%;
    width: 100%;
  }
}
</style>
  
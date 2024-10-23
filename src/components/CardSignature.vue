<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <!-- Use dynamic prop for the image source -->
        <img :src="imageSrc" class="img-fluid rounded-start" :alt="imageAlt" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <!-- Use dynamic prop for the title and text -->
          <h5 style="font-size: 14px" class="card-title text-start">
            {{ cardTitle }}
          </h5>
          <p style="font-size: 12px" class="card-text text-start">
            {{ cardText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "CardSignature",

  // Define the props to make the card dynamic
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: "Card image",
    },
    cardTitle: {
      type: String,
      required: true,
    },
    cardText: {
      type: String,
      required: true,
    },
  },
};
</script>
  
  <style>
/* You can add custom styling here if needed */

.card {
  box-shadow: 0px 4px 16px 0px rgba(70, 133, 133, 0.24);
  border: none !important;
  width: 350px;
  height: 100px;
}
</style>
  
<template>
  <div class="card text-start">
    <div class="container p-3">
      <img :src="imgSrc" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ programName }}</h5>
        <p style="font-size: 12px" class="card-text">
          {{ programDescription }}
        </p>
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
      default: "@/assets/Ecotainment/fish-1.png",
    },
    programName: {
      type: String,
      required: true,
      default: "Jenghis khan catfish",
    },
    programDescription: {
      type: String,
      required: true,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
    },
  },
};
</script>
    
    <style scoped>
.card {
  max-width: 280px; /* Ensures it takes up full width on smaller screens */
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
  max-height: 3.6em; /* Allows for 3 lines */
  line-height: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limits to 3 lines */
  -webkit-box-orient: vertical;
  white-space: normal;
}

.card-text {
  font-size: 0.9rem;
  line-height: 1.2rem;
  min-height: 150px; /* Set max height to limit the card-text area */
  overflow-y: auto; /* Enables vertical scrolling if content overflows */
  display: -webkit-box;
  -webkit-line-clamp: 6; /* Adjust this value based on card size */
  -webkit-box-orient: vertical;
}

@media (max-width: 576px) {
  .card {
    max-width: 100%; /* Adjusts for smaller screens */
    width: 100%;
  }
}
/* Custom Scrollbar Styling for WebKit Browsers (Chrome, Safari) */
.card-text::-webkit-scrollbar {
  width: 1px; /* Scrollbar width */
}

.card-text::-webkit-scrollbar-track {
  background: #034a4a; /* Track color matches card background */
  border-radius: 10px;
}

.card-text::-webkit-scrollbar-thumb {
  background-color: #42b983; /* Scroll thumb color */
  border-radius: 10px;
  width: 2px;
  border: 1px solid #fff; /* Adds space around thumb */
}

/* Firefox Scrollbar Styling */
.card-text {
  scrollbar-width: none;
  scrollbar-color: #42b983 #fff; /* Thumb color and track color */
}
</style>
    
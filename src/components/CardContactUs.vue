<template>
  <div class="contact-us-card">
    <!-- Display the image for the event package -->
    <img
      :src="imgSrc"
      alt="Contact Us Image"
      class="category-image"
      style="width: 100%; height: auto"
    />

    <!-- Display the package name -->
    <h3 class="contact-title">{{ contactTitle }}</h3>

    <p>{{ contactDescription }}</p>

    <!-- Button to trigger modal for package detail -->
    <a
      target="_blank"
      :href="`https://wa.me/${contactNumber}`"
      class="btn btn-success m-auto"
    >
      Selengkapnya
    </a>
  </div>
</template>
    
    <script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    contactTitle: {
      type: String,
      required: true,
    },
    contactDescription: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String | Int16Array,
      required: true,
    },
  },
};
</script>
    
    <style scoped>
.contact-us-card {
  margin: auto;
  width: 15rem;
  height: 340px;
  padding: 1rem;
  box-shadow: 0px 4px 16px 0px #4685853d;
  border-radius: 18px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.category-image {
  width: 120px;
  border-radius: 12px;
}

.contact-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.facilities-list {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
  max-height: 100px;
  overflow-y: auto;
  width: 100%;
}

.facility-item {
  font-size: 12px;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  max-width: 60%; /* Makes the modal responsive */
  max-height: 70%; /* Limits modal height to screen height */
  overflow: hidden;
}

.modal-pack-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.img-container {
  width: 100%;
  overflow-y: auto; /* Enables vertical scrolling */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-height: 80vh; /* Limits container height to 80% of viewport */
}

.detail-image {
  width: 100%; /* Makes image width fit the modal */
  height: auto; /* Allows height to overflow */
}

/* Custom Scrollbar Styling for WebKit Browsers (Chrome, Safari) */
.facilities-list::-webkit-scrollbar {
  width: 1px;
}

.facilities-list::-webkit-scrollbar-track {
  background: #034a4a;
  border-radius: 10px;
}

.facilities-list::-webkit-scrollbar-thumb {
  background-color: #42b983;
  border-radius: 10px;
  border: 1px solid #034a4a;
}

/* Firefox Scrollbar Styling */
.facilities-list {
  scrollbar-width: thin;
  scrollbar-color: #42b983 #034a4a;
}
</style>
    
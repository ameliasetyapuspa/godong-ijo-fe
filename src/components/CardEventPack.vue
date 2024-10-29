<template>
  <div class="price-category-card">
    <!-- Display the image for the event package -->
    <img
      :src="imgSrc"
      alt="Event Package Image"
      class="category-image"
      style="width: 100%; height: auto"
    />

    <!-- Display the package name -->
    <h3 class="pricing-catalogue">{{ packName }}</h3>

    <!-- Display each facility in the facilities list -->
    <ul class="facilities-list">
      <li
        v-for="(facility, index) in facilities"
        :key="index"
        class="facility-item text-start"
      >
        <span class="facility-title">{{ facility }}</span>
      </li>
    </ul>

    <!-- Button to trigger modal for package detail -->
    <button class="btn btn-success m-auto" @click="openModal">
      Selengkapnya
    </button>

    <!-- Modal for displaying package detail image and packName -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h4 class="modal-pack-name text-dark">{{ packName }}</h4>
        <!-- Responsive Image Container -->
        <div class="img-container">
          <img :src="packageDetail" alt="Package Detail" class="detail-image" />
        </div>
        <div
          class="btn-container d-flex flex-column mt-4 m-auto"
          style="gap: 5px"
        >
          <!-- WhatsApp redirect button -->
          <a
            :href="`https://wa.me/${contact}`"
            target="_blank"
            class="btn btn-success"
            style="width: 100px"
          >
            Pesan
          </a>
          <!-- Close button -->
          <button
            class="btn btn-danger"
            @click="closeModal"
            style="width: 100px"
          >
            Close
          </button>
        </div>
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
    },
    packName: {
      type: String,
      required: true,
    },
    facilities: {
      type: Array,
      required: true,
      validator(value) {
        return value.every((item) => typeof item === "string");
      },
    },
    packageDetail: {
      type: String,
      required: true,
    },
    contact: {
      type: String | Int16Array,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
  
  <style scoped>
.price-category-card {
  margin: auto;
  width: 18rem;
  height: 400px;
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

.pricing-catalogue {
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
  
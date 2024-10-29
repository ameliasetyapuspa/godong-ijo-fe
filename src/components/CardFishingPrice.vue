<template>
  <div class="price-category-card">
    <!-- Display the single image -->
    <img :src="imgSrc" alt="Fishing Category Image" class="category-image" />

    <!-- Display the single pricing catalogue title -->
    <h3 class="pricing-catalogue">{{ pricingCatalogue }}</h3>

    <!-- Display each item in pricingList -->
    <ul class="pricing-list">
      <li
        v-for="(item, index) in pricingList"
        :key="index"
        class="pricing-item"
      >
        <span class="pricing-title">{{ item.pricingTitle }}</span>
        <span class="pricing-fee">{{ item.fee }}</span>
      </li>
    </ul>
  </div>
</template>
    
  <script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    pricingCatalogue: {
      type: String,
      required: true,
    },
    pricingList: {
      type: Array,
      required: true,
      validator(value) {
        return value.every(
          (item) =>
            typeof item.pricingTitle === "string" &&
            typeof item.fee === "string"
        );
      },
    },
  },
};
</script>
    
  <style scoped>
.price-category-card {
  color: white;
  margin: auto;
  width: 18rem;
  height: 320px; /* Ensures consistent card height */
  padding: 1rem;
  border-radius: 18px;
  background-color: #034a4a;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

.pricing-list {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
  max-height: 100px; /* Limits height for overflow */
  overflow-y: auto; /* Allows scrolling if content exceeds max height */
  width: 100%; /* Ensures list takes up full width */
}

.pricing-item {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

.pricing-title,
.pricing-fee {
  font-size: 12px;
}

/* Custom Scrollbar Styling for WebKit Browsers (Chrome, Safari) */
.pricing-list::-webkit-scrollbar {
  width: 1px; /* Scrollbar width */
}

.pricing-list::-webkit-scrollbar-track {
  background: #034a4a; /* Track color matches card background */
  border-radius: 10px;
}

.pricing-list::-webkit-scrollbar-thumb {
  background-color: #42b983; /* Scroll thumb color */
  border-radius: 10px;
  border: 1px solid #034a4a; /* Adds space around thumb */
}

/* Firefox Scrollbar Styling */
.pricing-list {
  scrollbar-width: thin;
  scrollbar-color: #42b983 #034a4a; /* Thumb color and track color */
}
</style>
  
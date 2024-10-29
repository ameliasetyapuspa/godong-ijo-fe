<template>
  <div>
    <div
      class="hero-section text-start d-flex flex-column justify-content-center text-white"
    >
      <div class="hero-text w-50">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>

    <div
      class="opening-hours d-flex justify-content-around align-items-center"
      style="margin: 100px 100px"
    >
      <h1>Opening Hours</h1>
      <div
        class="opening-time"
        style="
          padding: 80px;
          background-color: #034a4a;
          border-radius: 20px;
          color: white;
        "
      >
        <h1>9 AM - 9 PM</h1>
      </div>
    </div>

    <div class="fish-list">
      <h4>MONSTER FISH N FISHING LAKE BY GODONGIJO</h4>
      <div class="fish-list-container mt-5">
        <div class="row p-4">
          <div
            v-for="(fishes, index) in fishes"
            :key="index"
            class="col-lg-3 col-md-6 col-sm-6 mb-4"
          >
            <CardFish
              :imgSrc="fishes.imgSrc"
              :fishName="fishes.fishName"
              :fishDescription="fishes.fishDescription"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Fishing Prices Section -->
    <div class="fishing-pricing mt-5 mb-5">
      <h4>Daftar Harga</h4>
      <div class="row p-4">
        <div
          v-for="(price, index) in fishingPrices"
          :key="index"
          class="col-lg-3 col-md-6 col-sm-6 mb-4"
        >
          <CardFishingPrice
            :imgSrc="price.imgSrc"
            :pricingCatalogue="price.pricingCatalogue"
            :pricingList="price.pricingList"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardFish from "@/components/CardFish.vue";
import CardFishingPrice from "@/components/CardFishingPrice.vue";
export default {
  name: "FishingLakeView",
  components: { CardFish, CardFishingPrice },
  data() {
    return {
      fishes: [
        {
          imgSrc: require("@/assets/FishingLake/fish-1.png"),
          fishName: "Jenghis khan catfish",
          fishDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
        },
        {
          imgSrc: require("@/assets/FishingLake/fish-1.png"),
          fishName: "Jenghis khan catfish",
          fishDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
        },
        {
          imgSrc: require("@/assets/FishingLake/fish-1.png"),
          fishName: "Jenghis khan catfisddddddddddddh",
          fishDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
        },
        {
          imgSrc: require("@/assets/FishingLake/fish-1.png"),
          fishName: "Jenghis khan catfish",
          fishDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
        },
        {
          imgSrc: require("@/assets/FishingLake/fish-1.png"),
          fishName: "Jenghis khan catfish",
          fishDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
        },
        {
          imgSrc: require("@/assets/FishingLake/fish-1.png"),
          fishName: "Jenghis khan catfish",
          fishDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
        },
        {
          imgSrc: require("@/assets/FishingLake/fish-1.png"),
          fishName: "Jenghis khan catfish",
          fishDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
        },
        {
          imgSrc: require("@/assets/FishingLake/fish-1.png"),
          fishName: "Jenghis khan catfish",
          fishDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
        },
      ],
      fishingPrices: [
        {
          imgSrc: require("@/assets/FishingLake/fishing-price-1.png"),
          pricingCatalogue: "Harga Mancing Kategori 1",
          pricingList: [
            {
              pricingTitle: "Sewa Joran Kecil",
              fee: "20.000/Buah",
            },
            {
              pricingTitle: "Sewa Joran Besar",
              fee: "25.000/Buah",
            },
            {
              pricingTitle: "Umpan Ikan",
              fee: "10.000/Paket",
            },
            {
              pricingTitle: "Umpan Ikan",
              fee: "10.000/Paket",
            },
            {
              pricingTitle: "Umpan Ikan",
              fee: "10.000/Paket",
            },
            {
              pricingTitle: "Umpan Ikan",
              fee: "10.000/Paket",
            },
          ],
        },
        {
          imgSrc: require("@/assets/FishingLake/fishing-price-2.png"),
          pricingCatalogue: "Harga Mancing Kategori 2",
          pricingList: [
            {
              pricingTitle: "Sewa Joran Anak-anak",
              fee: "15.000/Buah",
            },
            {
              pricingTitle: "Sewa Joran Dewasa",
              fee: "30.000/Buah",
            },
            {
              pricingTitle: "Pakan Pelet Premium",
              fee: "15.000/Paket",
            },
          ],
        },
        {
          imgSrc: require("@/assets/FishingLake/fishing-price-3.png"),
          pricingCatalogue: "Harga Mancing Kategori 3",
          pricingList: [
            {
              pricingTitle: "Sewa Joran Ekstra Kecil",
              fee: "18.000/Buah",
            },
            {
              pricingTitle: "Sewa Joran Ekstra Besar",
              fee: "35.000/Buah",
            },
            {
              pricingTitle: "Umpan Cacing",
              fee: "8.000/Paket",
            },
          ],
        },
        {
          imgSrc: require("@/assets/FishingLake/fishing-price-4.png"),
          pricingCatalogue: "Harga Mancing Kategori 4",
          pricingList: [
            {
              pricingTitle: "Sewa Joran Regular",
              fee: "20.000/Buah",
            },
            {
              pricingTitle: "Sewa Joran Deluxe",
              fee: "40.000/Buah",
            },
            {
              pricingTitle: "Pakan Spesial",
              fee: "12.000/Paket",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-section {
  background-image: url("@/assets/FishingLake/hero.png");
  width: 100%;
  height: 600px;
  padding: 120px;
}
</style>
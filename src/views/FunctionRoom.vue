<template>
  <div>
    <div
      class="hero-section text-center d-flex align-items-center justify-content-center text-white"
    >
      <div class="hero-text w-50">
        <h1>Function Room</h1>
      </div>
    </div>

    <div class="function-room-list" style="margin: 100px">
      <div class="row mt-5">
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 mb-4 text-md-start text-sm-center"
        >
          <img
            style="width: 90%; height: auto"
            src="@/assets/Ecotainment/eco-2.png"
            alt=""
          />
        </div>
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 mb-sm-4 mb-4 text-sm-center d-flex flex-column justify-content-center"
        >
          <h3 class="mb-3 text-md-start text-sm-center">Aula Dome</h3>

          <p class="text-md-start text-sm-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div class="row mt-5">
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 mb-4 text-md-start text-sm-center d-flex flex-column justify-content-center"
        >
          <h3 class="mb-3 text-md-start text-sm-center">Aula Café</h3>

          <p class="text-md-start text-sm-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 order-first order-md-0 mb-sm-4 mb-4"
          style="margin: 0"
        >
          <img
            style="width: 90%; height: auto"
            src="@/assets/Ecotainment/eco-2.png"
            alt=""
          />
        </div>
      </div>
      <div class="row mt-5">
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 mb-4 text-md-start text-sm-center"
        >
          <img
            style="width: 90%; height: auto"
            src="@/assets/Ecotainment/eco-2.png"
            alt=""
          />
        </div>
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 mb-sm-4 mb-4 text-sm-center d-flex flex-column justify-content-center"
        >
          <h3 class="mb-3 text-md-start text-sm-center">Aula White House</h3>

          <p class="text-md-start text-sm-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>

    <div class="event-packages" style="margin: 100px">
      <h3>Event Packages</h3>
      <p>
        Godong Ijo menawarkan berbagai macam paket acara antara lain sebagai
        berikut
      </p>

      <!-- Loop through eventPackages to render each category and its cardList -->
      <div
        v-for="(packageCategory, index) in eventPackages"
        :key="index"
        class="text-start"
      >
        <h4 class="mb-5">{{ packageCategory.category }}</h4>
        <div class="row d-flex justify-content-start">
          <!-- Loop through each cardList item and render CardEventPack -->
          <CardEventPack
            v-for="(card, cardIndex) in packageCategory.cardList"
            :key="cardIndex"
            class="col-12 col-md-6 col-lg-4 mb-4"
            :imgSrc="card.imgSrc"
            :packName="card.packName"
            :facilities="card.facilities"
            :packageDetail="card.packageDetail"
            :contact="card.contact"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import CardEventPack from "@/components/CardEventPack.vue"; // Adjust path as needed

export default {
  name: "FunctionRoomView",
  components: {
    CardEventPack,
  },
  data() {
    return {
      eventPackages: [
        {
          category: "Meeting",
          cardList: [
            {
              imgSrc: require("@/assets/FunctionRoom/meeting-1.jpg"),
              packName: "Room Only",
              facilities: [
                "LCD Infocus + Screen",
                "White Board",
                "Flipchart",
                "Stationery (Notes, pulpen)",
                "Sound System",
              ],
              packageDetail: require("@/assets/FunctionRoom/meeting-1.jpg"),
              contact: "628122906800",
            },
            {
              imgSrc: require("@/assets/FunctionRoom/meeting-1.jpg"),
              packName: "Half Day",
              facilities: [
                "LCD Infocus + Screen",
                "White Board",
                "Flipchart",
                "Stationery (Notes, pulpen)",
                "Sound System",
              ],
              packageDetail: require("@/assets/FunctionRoom/detail-pack-1.jpg"),
              contact: "628122906800",
            },
          ],
        },
        {
          category: "Wedding",
          cardList: [
            {
              imgSrc: require("@/assets/FunctionRoom/wedding-1.jpg"),
              packName: "Room Only",
              facilities: [
                "LCD Infocus + Screen",
                "White Board",
                "Flipchart",
                "Stationery (Notes, pulpen)",
                "Sound System",
              ],
              packageDetail: require("@/assets/FunctionRoom/detail-pack-1.jpg"),
            },
            {
              imgSrc: require("@/assets/FunctionRoom/wedding-1.jpg"),
              packName: "Room Only",
              facilities: [
                "LCD Infocus + Screen",
                "White Board",
                "Flipchart",
                "Stationery (Notes, pulpen)",
                "Sound System",
              ],
              packageDetail: require("@/assets/FunctionRoom/detail-pack-1.jpg"),
            },
            {
              imgSrc: require("@/assets/FunctionRoom/wedding-1.jpg"),
              packName: "Room Only",
              facilities: [
                "LCD Infocus + Screen",
                "White Board",
                "Flipchart",
                "Stationery (Notes, pulpen)",
                "Sound System",
              ],
              packageDetail: require("@/assets/FunctionRoom/detail-pack-1.jpg"),
            },
            {
              imgSrc: require("@/assets/FunctionRoom/wedding-1.jpg"),
              packName: "Half Day",
              facilities: [
                "LCD Infocus + Screen",
                "White Board",
                "Flipchart",
                "Stationery (Notes, pulpen)",
                "Sound System",
              ],
              packageDetail: require("@/assets/FunctionRoom/detail-pack-1.jpg"),
              contact: "628122906800",
            },
          ],
        },
        {
          category: "Gethering",
          cardList: [
            {
              imgSrc: require("@/assets/FunctionRoom/gethering-1.jpg"),
              packName: "Room Only",
              facilities: [
                "LCD Infocus + Screen",
                "White Board",
                "Flipchart",
                "Stationery (Notes, pulpen)",
                "Sound System",
              ],
              packageDetail: require("@/assets/FunctionRoom/detail-pack-1.jpg"),
              contact: "628122906800",
            },
            {
              imgSrc: require("@/assets/FunctionRoom/gethering-1.jpg"),
              packName: "Half Day",
              facilities: [
                "LCD Infocus + Screen",
                "White Board",
                "Flipchart",
                "Stationery (Notes, pulpen)",
                "Sound System",
              ],
              packageDetail: require("@/assets/FunctionRoom/detail-pack-1.jpg"),
              contact: "628122906800",
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
  background-image: url("@/assets/FunctionRoom/hero.png");
  width: 100%;
  height: 600px;
  padding: 120px;
}
</style>
  
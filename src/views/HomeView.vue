<template>
  <div class="home">
    <div class="hero-section">
      <div class="row">
        <div class="col-md-5 me-5">
          <div class="hero-img ">
            <img style="max-width: 510px; width: auto;" src="@/assets/Home/hero.png" alt="">
          </div>
        </div>

        <div class="col-md-6 mt-md-5 mt-sm-0 text-start">
          <h1>The Waterfall Resto N Monster Fishing Lake</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button class="btn btn-success explore-btn">Explore Us!</button>
        </div>
      </div>

      <!-- Carousel -->
      <div class="corousel-resto">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container-carousel">
                <img src="@/assets/Home/resto-carousel-1.png" alt="The Waterfall Resto" style="width:100%;">
                <div class="centered">
                  <p style="font-family: Poppins; font-size: 50px;color: #FFF;">The Waterfall Resto</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container-carousel">
                <img src="@/assets/Home/resto-carousel-1.png" alt="The Waterfall Resto" style="width:100%;">
                <div class="centered">
                  <p style="font-family: Poppins; font-size: 50px;color: #FFF;">The Waterfall Resto</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container-carousel">
                <img src="@/assets/Home/resto-carousel-1.png" alt="The Waterfall Resto" style="width:100%;">
                <div class="centered">
                  <p style="font-family: Poppins; font-size: 50px;color: #FFF;">The Waterfall Resto</p>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <!-- Resto Signature Section -->
      <div class="resto-signature">
        <div class="row signature-content">
  <div class="col-md-6 text-start d-flex align-items-center" style="height: 800px;">
    <div>
      <h1>Kami menyediakan berbagai jenis hidangan dan minuman</h1>
      <button class="btn explore-btn">Lihat Menu ></button>
    </div>
  </div>
  <div class="col-md-6 d-flex flex-column justify-content-center align-items-end" style="gap: 0;">
    <!-- Iterate over the signatureItems and pass props to each CardSignature -->
    <div v-for="(item, index) in signatureItems" :key="index" :class="['d-flex', 'w-100', getCardAlignment(index)]">
      <CardSignature :imageSrc="item.imageSrc" :cardTitle="item.cardTitle" :cardText="item.cardText" />
    </div>
  </div>
</div>

      </div>


      <div class="fishing-lake">
        <div class="container-carousel">
                <img src="@/assets/Home/fishing.png" alt="Monster Fishing Lake" style="width:100%;">
                <div class="centered">
                  <p style="font-family: Poppins; font-size: 50px;color: #FFF;">Monster Fishing Lake</p>
                </div>
              </div>
              <div class="fishing-content d-flex justify-content-center" style="gap: 60px;padding: 100px;" >
                <img src="@/assets/Home/fishing-2.png" alt="Memancing" width="300">
                <div class="fishing-text d-flex justify-content-start flex-column justify-content-center" style="gap: 30px;">
                  <H4 style="width: 80%; text-align: start;">Rasakan pengalaman memancing ikan monster!</H4>
                  <button style="width: 200px;" class="btn btn-success explore-btn">Lihat Lebih Lanjut ></button>
                </div>
              </div>


              <div class="fishing-marquee">
                <!-- <div class="marquee-container">
                
  <div class="marquee-wrapper">
    <div class="fishing-client">
      <img v-for="(item, idx) in marqueeImages" :key="idx" :src="require(`@/assets/Home/${item}`)" class="image-client" />
    </div>
  </div>
        </div> -->
        <div class="logos">
      <div class="logos-slide">
        <img v-for="(item, idx) in marqueeImages" :key="idx" :src="require(`@/assets/Home/${item}`)" />

        
      </div>
      <div class="logos-slide">
        <img v-for="(item, idx) in marqueeImages" :key="idx" :src="require(`@/assets/Home/${item}`)" />

        
      </div>
    </div>
      </div>


      <div class="our-facilities" style="margin: 0px 100px;">
      <h2 class="text-start mb-5">Fasilitas Kami</h2>
      <div class="facilities ">
        <carousel :margin="0">
        <CardFacilities
          v-for="(facility, index) in facilityItems"
          :key="index"
          :imgSrc="facility.imgSrc"
          :title="facility.title"
          :subtitle="facility.subtitle"
          :description="facility.description"
        />
      </carousel>
      </div>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import CardSignature from "@/components/CardSignature.vue";
import CardFacilities from "@/components/CardFacilities.vue";
import carousel from 'vue-owl-carousel'
export default {
  name: "HomeView",
  components: {
    CardSignature,
    CardFacilities,
    carousel
  },
  data() {
    return {
      // Dummy data for CardSignature
      signatureItems: [
        {
          imageSrc: require("@/assets/Home/signature-1.png"),
          cardTitle: "Wood Fired Neapolitan Pizza",
          cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          imageSrc: require("@/assets/Home/signature-2.png"),
          cardTitle: "Grilled Angus Steak",
          cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          imageSrc: require("@/assets/Home/signature-3.png"),
          cardTitle: "Sushi and Sashimi Platter",
          cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          imageSrc: require("@/assets/Home/signature-4.png"),
          cardTitle: "Lobster Thermidor",
          cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          imageSrc: require("@/assets/Home/signature-5.png"),
          cardTitle: "Vegetarian Delight Salad",
          cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
      marqueeImages: [
        'marquee-1.png',
        'marquee-2.png',
        'marquee-3.png',
        'marquee-4.png',
        'marquee-5.png',
      ],
      facilityItems: [
      {
          imgSrc: require("@/assets/Home/facilities-1.png"),
          title: "Aula Dome",
          subtitle: "(Semi Outdoor)",
          description: "Aula luas dengan pemandangan alam sekitar.",
        },
        {
          imgSrc: require("@/assets/Home/facilities-1.png"),
          title: "Aula Dome",
          subtitle: "(Semi Outdoor)",
          description: "Aula luas dengan pemandangan alam sekitar.",
        },
        {
          imgSrc: require("@/assets/Home/facilities-1.png"),
          title: "Kolam Renang",
          subtitle: "(Outdoor)",
          description: "Kolam renang besar dengan pemandangan hijau.",
        },
        {
          imgSrc: require("@/assets/Home/facilities-1.png"),
          title: "Taman Bermain",
          subtitle: "(Outdoor)",
          description: "Taman bermain anak-anak dengan berbagai fasilitas.",
        },
        {
          imgSrc: require("@/assets/Home/facilities-1.png"),
          title: "Tempat Parkir",
          subtitle: "(Indoor & Outdoor)",
          description: "Parkir luas untuk kenyamanan pengunjung.",
        },
      ]
    };
  },
  methods: {
    // Method to return the correct alignment class based on the index
    getCardAlignment(index) {
      return index % 2 === 0 ? "justify-content-start" : "justify-content-end";
    },
  },
  mounted (){
  
  }
};
</script>

<style scoped>

.row{
  --bs-gutter-x :0 !important;
}
.hero-img {
  mask-image: url(@/assets/Home/heromask.png);
  mask-repeat: no-repeat;
  mask-size: contain;
  width: 500px;
}

.hero-img img {
  margin-top: -20px;
  margin-left: -25px;
}

.explore-btn {
  background-color: #034a4a;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
}

.container-carousel {
  position: relative;
  text-align: center;
  color: white;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.resto-signature {
  max-height: 800px;
  height: auto;
  background-image: url("@/assets/Home/leaf-pattern.png");
  background-size: cover;
}

.signature-content{
  padding: 0px 130px;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  padding: 60px 0;
  background: #EBFCF7;
  white-space: nowrap;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}

.logos:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), #EBFCF7);
}

.logos:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #EBFCF7);
}

.logos:hover .logos-slide {
  animation-play-state: paused;
}

.logos-slide {
  display: inline-block;
  animation: 40s slide infinite linear;
}

.logos-slide img {
  height: 200px;
  margin: 0 20px;
}

</style>

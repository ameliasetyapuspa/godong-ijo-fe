<template>
  <div class="home">
    <div class="hero-section">
      <div class="row">
        <div class="col-md-5 me-5">
          <div class="hero-img">
            <img
              style="max-width: 510px; width: auto"
              src="@/assets/Home/hero.png"
              alt=""
            />
          </div>
        </div>

        <div class="col-md-6 mt-md-5 mt-sm-0 text-start">
          <h1>The Waterfall Resto N Monster Fishing Lake</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button class="btn btn-success explore-btn">Explore Us!</button>
        </div>
      </div>

      <!-- Carousel -->
      <div class="corousel-resto">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container-carousel">
                <img
                  src="@/assets/Home/resto-carousel-1.png"
                  alt="The Waterfall Resto"
                  style="width: 100%"
                />
                <div class="centered">
                  <p style="font-family: Poppins; font-size: 50px; color: #fff">
                    The Waterfall Resto
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container-carousel">
                <img
                  src="@/assets/Home/resto-carousel-1.png"
                  alt="The Waterfall Resto"
                  style="width: 100%"
                />
                <div class="centered">
                  <p style="font-family: Poppins; font-size: 50px; color: #fff">
                    The Waterfall Resto
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container-carousel">
                <img
                  src="@/assets/Home/resto-carousel-1.png"
                  alt="The Waterfall Resto"
                  style="width: 100%"
                />
                <div class="centered">
                  <p style="font-family: Poppins; font-size: 50px; color: #fff">
                    The Waterfall Resto
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <!-- Resto Signature Section -->
      <div class="resto-signature">
        <div class="row signature-content">
          <div
            class="col-md-6 text-start d-flex align-items-center"
            style="height: 800px"
          >
            <div>
              <h1>Kami menyediakan berbagai jenis hidangan dan minuman</h1>
              <button class="btn btn-success explore-btn" @click="$router.push('/waterfall-resto')" style="cursor: pointer;">Lihat Menu ></button>
            </div>
          </div>
          <div
            class="col-md-6 d-flex flex-column justify-content-center align-items-end"
            style="gap: 0"
          >
            <!-- Iterate over the signatureItems and pass props to each CardSignature -->
            <div
              v-for="(item, index) in signatureItems"
              :key="index"
              :class="['d-flex', 'w-100', getCardAlignment(index)]"
            >
              <CardSignature
                :imageSrc="item.imageSrc"
                :cardTitle="item.cardTitle"
                :cardText="item.cardText"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="fishing-lake">
        <div class="container-carousel">
          <img
            src="@/assets/Home/fishing.png"
            alt="Monster Fishing Lake"
            style="width: 100%"
          />
          <div class="centered">
            <p style="font-family: Poppins; font-size: 50px; color: #fff">
              Monster Fishing Lake
            </p>
          </div>
        </div>
        <div
          class="fishing-content d-flex justify-content-center"
          style="gap: 60px; padding: 100px"
        >
          <img src="@/assets/Home/fishing-2.png" alt="Memancing" width="300" />
          <div
            class="fishing-text d-flex justify-content-start flex-column justify-content-center"
            style="gap: 30px"
          >
            <H4 style="width: 80%; text-align: start"
              >Rasakan pengalaman memancing ikan monster!</H4
            >
            <button style="width: 200px" class="btn btn-success explore-btn">
              Lihat Lebih Lanjut >
            </button>
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
          <div class="fishings">
            <div class="fishings-slide">
              <img
                v-for="(item, idx) in marqueeImages"
                :key="idx"
                :src="require(`@/assets/Home/${item}`)"
              />
            </div>
            <div class="fishings-slide">
              <img
                v-for="(item, idx) in marqueeImages"
                :key="idx"
                :src="require(`@/assets/Home/${item}`)"
              />
            </div>
          </div>
        </div>

        <div class="our-facilities" style="margin: 0px 100px">
          <h2 class="text-start mb-5" style="font-weight: 600; font-size: 30px">
            Fasilitas Kami
          </h2>
          <div class="facilities">
            <VueSlickCarousel v-bind="settingsCarousel">
              <CardFacilities
                v-for="(facility, index) in facilityItems"
                :key="index"
                :imgSrc="facility.imgSrc"
                :title="facility.title"
                :subtitle="facility.subtitle"
                :description="facility.description"
              />
            </VueSlickCarousel>
            <section class="section home-feature p-5">
              <div
                class="container d-flex justify-content-center"
                style="
                  background-color: #ffffff;
                  border-radius: 30px;
                  box-shadow: 0px 4px 16px 0px rgba(70, 133, 133, 0.24);
                  padding: 60px 40px 30px;
                "
              >
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-12">
                    <div class="row">
                      <!-- ***** Features Small Item Start ***** -->
                      <div
                        class="col-lg-4 col-md-6 col-sm-6 col-12"
                        data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                        v-for="(advantages, index) in advantages"
                        :key="index"
                      >
                        <div
                          class="features-small-item d-flex"
                          style="gap: 10px"
                        >
                          <div class="icon mb-3">
                            <i
                              ><img
                                width="80"
                                class="img-rounded"
                                :src="advantages.icon"
                                alt=""
                            /></i>
                          </div>
                          <div class="advantage-content text-start">
                            <h5 class="features-title">
                              {{ advantages.title }}
                            </h5>
                            <p>
                              {{ advantages.description }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <!-- Our Location Section -->
        <div class="our-location mb-5">
          <div class="row gx-5">
            <div
              class="col-12 col-sm-12 col-md-5 d-flex flex-column align-items-start justify-content-center"
            >
              <h4 style="font-size: 30px; font-weight: 600">Lokasi Kami</h4>
              <p>Temukan Kami dengan Mudah</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-6.370738912767085,106.74511347285247"
                target="_blank"
              >
                <button
                  style="width: 200px"
                  class="btn btn-success explore-btn"
                >
                  Lihat Google Maps
                </button>
              </a>
            </div>
            <div
              class="col-12 col-sm-12 col-md-7 d-flex flex-column align-items-center justify-content-center"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271.02873780392235!2d106.74493642219119!3d-6.370725325847066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef4708dc6039%3A0x5d1ec5e4a31bc422!2sThe%20Waterfall%20Resto%20by%20Godongijo!5e0!3m2!1sen!2sid!4v1729620973923!5m2!1sen!2sid"
                height="350"
                width="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div class="testimony" style="margin: 0px 100px">
          <h2 class="text-start mb-5" style="font-weight: 600; font-size: 34px">
            Testimoni
          </h2>
          <div class="testimony-container">
            <VueSlickCarousel v-bind="settingsCarouselTesti">
              <!-- Iterate over the testimonyItems and pass props to each CardTestimony -->
              <CardTestimony
                v-for="(testimony, index) in testimonyItems"
                :key="index"
                :imgSrc="testimony.imgSrc"
                :fullName="testimony.fullName"
                :instance="testimony.instance"
                :comment="testimony.comment"
              />
            </VueSlickCarousel>
          </div>
        </div>

        <div class="our-client mt-5 mb-5">
          <h2
            class="text-center mb-5"
            style="font-weight: 600; font-size: 34px"
          >
            Klien Kami
          </h2>
          <div class="logos mt-4">
            <div class="logos-slide">
              <img
                v-for="(item, idx) in ourClients"
                :key="idx"
                :src="require(`@/assets/Home/${item}`)"
              />
            </div>
            <div class="logos-slide">
              <img
                v-for="(item, idx) in ourClients"
                :key="idx"
                :src="require(`@/assets/Home/${item}`)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardSignature from "@/components/CardSignature.vue";
import CardFacilities from "@/components/CardFacilities.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import CardTestimony from "@/components/CardTestimony.vue";
export default {
  name: "HomeView",
  components: {
    CardSignature,
    CardFacilities,
    VueSlickCarousel,
    CardTestimony,
  },
  data() {
    return {
      settingsCarouselTesti: [
        {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        },
      ],
      settingsCarousel: [
        {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        },
      ],
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
        "marquee-1.png",
        "marquee-2.png",
        "marquee-3.png",
        "marquee-4.png",
        "marquee-5.png",
      ],
      ourClients: [
        "client-1.png",
        "client-2.png",
        "client-3.png",
        "client-4.png",
        "client-5.png",
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
      ],
      advantages: [
        {
          icon: require("@/assets/Home/advantage-1.png"),
          title: "Area Parkir Luas",
          description: "Area parkir yang luas mobil dan motor",
        },
        {
          icon: require("@/assets/Home/advantage-2.png"),
          title: "Free Wifi",
          description: "Akses internet gratis di semua area",
        },
        {
          icon: require("@/assets/Home/advantage-3.png"),
          title: "Mudah Dijangkau",
          description: "Akses menuju godong ijo mudah dijangkau dengan mudah",
        },
      ],
      testimonyItems: [
        {
          imgSrc: require("@/assets/Home/testimony-1.png"),
          fullName: "John Doe",
          instance: "Traveler",
          comment:
            "The Waterfall Resto offers an unforgettable dining experience with a view like no other. Highly recommend!",
        },
        {
          imgSrc: require("@/assets/Home/testimony-1.png"),
          fullName: "Jane Smith",
          instance: "Food Blogger",
          comment:
            "Amazing food and beautiful scenery! The Monster Fishing Lake was the perfect weekend getaway.",
        },
        {
          imgSrc: require("@/assets/Home/testimony-1.png"),
          fullName: "Michael Johnson",
          instance: "Photographer",
          comment:
            "The perfect blend of nature and culinary delight. The views were incredible, and the service was excellent.",
        },
        {
          imgSrc: require("@/assets/Home/testimony-1.png"),
          fullName: "Emily Davis",
          instance: "Adventure Seeker",
          comment:
            "If you love fishing and great food, this is the place to be! Loved the atmosphere and the friendly staff.",
        },
        {
          imgSrc: require("@/assets/Home/testimony-1.png"),
          fullName: "Chris Wilson",
          instance: "Family Trip",
          comment:
            "We had a wonderful family day here. The kids enjoyed the fishing, and we all loved the food. A must-visit!",
        },
      ],
    };
  },
  methods: {
    // Method to return the correct alignment class based on the index
    getCardAlignment(index) {
      return index % 2 === 0 ? "justify-content-start" : "justify-content-end";
    },
  },
  mounted() {},
};
</script>

<style scoped>
.row {
  --bs-gutter-x: 0 !important;
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

.signature-content {
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
  padding: 10px 0;
  background: #ebfcf7;
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
  background: linear-gradient(to left, rgba(255, 255, 255, 0), #ebfcf7);
}

.logos:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #ebfcf7);
}

.logos:hover .logos-slide {
  animation-play-state: paused;
}

.logos-slide {
  display: inline-block;
  animation: 40s slide infinite linear;
}

.logos-slide img {
  height: 100px;
  margin: 0 20px;
}

.fishings {
  overflow: hidden;
  padding: 60px 0;
  background: #ebfcf7;
  white-space: nowrap;
  position: relative;
}

.fishings:before,
.fishings:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}

.fishings:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), #ebfcf7);
}

.fishings:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #ebfcf7);
}

.fishings:hover .fishings-slide {
  animation-play-state: paused;
}

.fishings-slide {
  display: inline-block;
  animation: 40s slide infinite linear;
}

.fishings-slide img {
  height: 200px;
  margin: 0 20px;
}

button.slick-prev:before,
button.slick-next:before {
  background: red !important;
}

.advantage {
  width: 1096px;
  border-radius: 30px;
  box-shadow: 0.3px 0.3px 0.3px #393535;
  height: 226px;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}

.features-title {
  font-size: 16px;
  font-weight: 500;
}

.advantage-content p {
  font-size: 12px;
}

.our-location {
  margin: auto;
  background: #4685853d;
  width: 1000px;

  border-radius: 10px;
  padding: 80px;
}
</style>

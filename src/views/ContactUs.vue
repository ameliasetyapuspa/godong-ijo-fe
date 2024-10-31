<template>
  <div>
    <div
      class="hero-section text-center d-flex align-items-center justify-content-center text-white"
    >
      <div class="hero-text text-dark">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="complete-information" style="margin: 100px">
      <h3 class="text-start">Hubungi Kami Untuk Informasi Selengkapnya</h3>
      <div class="row p-4">
        <div
          v-for="(contact, index) in listContacs"
          :key="index"
          class="col-lg-3 col-md-4 col-sm-6 mb-4"
        >
          <CardContactUs
            :imgSrc="contact.imgSrc"
            :contactTitle="contact.contactTitle"
            :contactDescription="contact.contactDescription"
            :contactNumber="contact.contactNumber"
          />
    
        </div>
      </div>
    </div>
    <div class="our-location mb-5">
          <div class="row gx-5">
            <div
              class="col-12 col-sm-12 col-md-5 d-flex flex-column align-items-center  justify-content-center"
            >
              <h4 style="font-size: 30px; font-weight: 600; text-align: start;" class="text-start">Lokasi Kami</h4>
              <p class="text-start">Temukan Kami dengan Mudah</p>
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

        <div class="social-media">
          <div class="row">
          <div
              class="col-12 col-sm-12 col-md-5 d-flex flex-column align-items-center text-light justify-content-center"
            >
              <h4 style="font-size: 40px; font-weight: 600; text-align: start;" class="text-start">Social Media</h4>
              <p class="text-start">Terhubung dengan Kami di Platform Favorit Anda</p>
          
          
            </div>
            <div
              class="col-12 col-sm-12 col-md-7 d-flex align-items-center justify-content-center"
            >
              <div class="socmed-container d-flex" style="gap: 40px;">

               
                  <div class="socmed-img  d-flex flex-column justify-content-center align-items-center text-center text-light">
                    <img width="80" src="@/assets/ContactUs/instagram.png" alt="IG">
                    <p style="font-size: 30px;">Instagram</p>
                  </div>
                  <div class="socmed-img  d-flex flex-column justify-content-center align-items-center text-center text-light">
                    <img width="80" src="@/assets/ContactUs/youtube.png" alt="IG">
                    <p style="font-size: 30px;">Youtube</p>
                  </div>
                  <div class="socmed-img  d-flex flex-column justify-content-center align-items-center text-center text-light">
                    <img width="80" src="@/assets/ContactUs/tiktok.png" alt="IG">
                    <p style="font-size: 30px;">Tiktok</p>
                  </div>
                

              </div>
            </div>
          </div>



            
        </div>

  </div>
</template>

<script>
import CardContactUs from "@/components/CardContactUs.vue";
export default {
  name: "ContactUsView",
  components: { CardContactUs },
  data() {
    return {
      listContacs: [
        {
          imgSrc: require("@/assets/ContactUs/contact-1.png"),
          contactTitle: "Resto n Cafe",
          contactDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
          contactNumber: "6281294964358",
        },
        {
          imgSrc: require("@/assets/ContactUs/contact-1.png"),
          contactTitle: "Resto n Cafe",
          contactDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
          contactNumber: "6281294964358",
        },
        {
          imgSrc: require("@/assets/ContactUs/contact-1.png"),
          contactTitle: "Resto n Cafe",
          contactDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
          contactNumber: "6281294964358",
        },
        {
          imgSrc: require("@/assets/ContactUs/contact-1.png"),
          contactTitle: "Resto n Cafe",
          contactDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
          contactNumber: "6281294964358",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-section {
  background-image: url("@/assets/VerticalGarden/hero.png");
  width: 100%;
  height: 600px;
  padding: 120px;
}

.our-location {
  margin: auto;
  background: #4685853d;
  padding: 80px;
  margin: 100px;
  border-radius: 10px;
 
}

.social-media{
  padding: 150px;
  background-color: #034A4A;
  border-radius: 20px;
margin: 100px;
 
}
</style>
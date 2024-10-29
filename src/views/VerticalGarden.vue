<template>
  <div>
    <div
      class="hero-section text-center d-flex align-items-center justify-content-center text-white"
    >
      <div class="hero-text text-dark">
        <h1>Vertical Garden</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>

    <div class="vg-intro" style="margin: 100px">
      <div class="row">
        <div class="col-12 col-md-6 col-sm-12 col-lg-6 mb-4 text-start">
          <h3>Apa Itu Vertical Garden?</h3>

          <p class="text-start">
            Vertical garden adalah metode menanam tanaman secara vertikal pada
            dinding atau struktur tegak lainnya, memanfaatkan ruang yang
            biasanya tidak digunakan untuk berkebun. Teknik ini populer di area
            perkotaan dengan lahan terbatas, memberikan manfaat estetika serta
            lingkungan, seperti peningkatan kualitas udara dan isolasi termal
            pada bangunan. Vertical garden dapat menciptakan tampilan hijau yang
            menarik sambil memaksimalkan penggunaan ruang secara efisien.
          </p>
          <a
            target="_blank"
            href="https://wa.me/6281294964358"
            style="width: 200px"
            class="btn btn-success explore-btn"
          >
            Konsultasi >
          </a>
        </div>
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 order-first order-md-0 mb-sm-4 mb-4"
        >
          <img
            style="width: 90%; height: auto"
            src="@/assets/VerticalGarden/vg-intro.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="advantages mt-5" style="margin: 80px">
      <h3 class="mb-5">Keunggulan Vertical Garden Godong Ijo</h3>

      <div class="adavantage-list row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
          <div class="advantage-item d-flex" style="gap: 20px">
            <img
              style="width: 120px; height: 120px; border-radius: 50%"
              src="@/assets/VerticalGarden/advantage-1.png"
            />
            <div
              class="adavantage-text d-flex flex-column text-start"
              style="gap: 10px"
            >
              <h5>Big Plant Nursery</h5>
              <p>
                Memiliki Nursery Lebih dari 5.000 m2 dengan ketersediaan
                tanaman vertical garden lebih dari 250.000 tanaman
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
          <div class="advantage-item d-flex" style="gap: 20px">
            <img
              style="width: 120px; height: 120px; border-radius: 50%"
              src="@/assets/VerticalGarden/advantage-2.png"
            />
            <div
              class="adavantage-text d-flex flex-column text-start"
              style="gap: 10px"
            >
              <h5>RnD Collaboration with Vertical Green Pte, Ltd Singapore</h5>
              <p>
                Memiliki Kerjasama Research & Development Technology dengan
                Vertical Green Pte, Ltd Singapore
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
          <div class="advantage-item d-flex" style="gap: 20px">
            <img
              style="width: 120px; height: 120px; border-radius: 50%"
              src="@/assets/VerticalGarden/advantage-3.png"
            />
            <div
              class="adavantage-text d-flex flex-column text-start"
              style="gap: 10px"
            >
              <h5>High Technology</h5>
              <p>
                Memiliki  High Technology Sistem Vertical Garden Indoor &
                Outdoor
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
          <div class="advantage-item d-flex" style="gap: 20px">
            <img
              style="width: 120px; height: 120px; border-radius: 50%"
              src="@/assets/VerticalGarden/advantage-4.png"
            />
            <div
              class="adavantage-text d-flex flex-column text-start"
              style="gap: 10px"
            >
              <h5>Respons Guarantee</h5>
              <p>24 Hours Respons Guarantee for Maintenancee</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
          <div class="advantage-item d-flex" style="gap: 20px">
            <img
              style="width: 120px; height: 120px; border-radius: 50%"
              src="@/assets/VerticalGarden/advantage-5.png"
            />
            <div
              class="adavantage-text d-flex flex-column text-start"
              style="gap: 10px"
            >
              <h5>High Satisfied Client</h5>
              <p>
                Terpercaya atas kualitas dengan  lebih dari 200 satisfied client
              </p>
            </div>
          </div>
        </div>

        <div class="place-type" style="margin: 100px">
          <h3>Penempatan Vertical Garden</h3>
          <p class="mb-5">
            Godong Ijo menawarkan pembuatan vertical garden baik Outdoor maupun
            Indoor. Selain itu, terdapat juga produk Moss khusus dalam ruangan
            indoor
          </p>

          <div class="outdoor text-start">
            <h4 class="mb-5">{{ type }} Vertical Garden</h4>
            <div class="row">
              <CardVerticalGarden
                v-for="(place, index) in places[0].environmentEdu"
                :key="index"
                :imgSrc="place.imgSrc"
                :placeName="place.placeName"
                :placeDescription="place.placeDescription"
                class="col-12 col-md-6 col-lg-4 mb-4"
              />
            </div>
          </div>

          <div class="indoor text-start">
            <h4 class="mb-5">{{ type }} Vertical Garden</h4>
            <div class="row">
              <CardVerticalGarden
                v-for="(place, index) in places[0].environmentEdu"
                :key="index"
                :imgSrc="place.imgSrc"
                :placeName="place.placeName"
                :placeDescription="place.placeDescription"
                class="col-12 col-md-6 col-lg-4 mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerticalGardenView",
  data() {
    return {
      places: [
        {
          type: "Outdoor",
          placeList: [
            {
              imgSrc: require("@/assets/VerticalGarden/place-1.jpg"),
              placeName: "Learning About Animal",
              placeDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            },
            {
              imgSrc: require("@/assets/VerticalGarden/place-1.jpg"),
              placeName: "Learning About Animal",
              placeDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            },
            {
              imgSrc: require("@/assets/VerticalGarden/place-1.jpg"),
              placeName: "Learning About Animal",
              placeDescription:
                "Lorem ipsum dolssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            },
          ],
        },
        {
          type: "Indoor",
          placeList: [
            {
              imgSrc: require("@/assets/VerticalGarden/place-1.jpg"),
              placeName: "Learning About Animal",
              placeDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            },
            {
              imgSrc: require("@/assets/VerticalGarden/place-1.jpg"),
              placeName: "Learning About Animal",
              placeDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            },
            {
              imgSrc: require("@/assets/VerticalGarden/place-1.jpg"),
              placeName: "Learning About Animal",
              placeDescription:
                "Lorem ipsum dolssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
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
  background-image: url("@/assets/VerticalGarden/hero.png");
  width: 100%;
  height: 600px;
  padding: 120px;
}
</style>
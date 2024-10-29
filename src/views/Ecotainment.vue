<template>
  <div>
    <div
      class="hero-section text-center d-flex align-items-center justify-content-center text-white"
    >
      <div class="hero-text w-50">
        <h1>Ecotainment</h1>
      </div>
    </div>

    <div class="ecotainment-intro">
      <div class="row">
        <div class="col-12 col-md-6 col-sm-12 col-lg-6 mb-4 text-start">
          <h3>Ecotainment itu Apa Sih?</h3>

          <p class="text-start">
            Ecotaiment adalah suatu kegiatan karyawisata yang memiliki nilai
            edukasi. Pembelajaran dalam membantu meningkatkan kecerdasan.
            Meningkatkan kreativitas wawasan ilmu pengetahuan terhadap
            lingkungan sekitar.
          </p>
          <button style="width: 200px" class="btn btn-success explore-btn">
            Selengkapnya >
          </button>
        </div>
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 order-first order-md-0 mb-sm-4 mb-4"
        >
          <img
            style="width: 100%; height: auto"
            src="@/assets/Ecotainment/intro-img.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="fieldtrip-platform">
      <h3>Platform Fieldtrip</h3>
      <p>
        Ecotainment Field Trip bisa dilaksanakan diberbagai platform antara lain
        sebagai berikut
      </p>

      <div class="row mt-5">
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 mb-4 text-md-start text-sm-center"
        >
          <h3 class="mb-3 text-md-start text-sm-center">Virtual Fieldtrip</h3>

          <p class="text-md-start text-sm-center">
            Bimbingan edukasi dari instruktur (Guide From Instruktur) setelah
            bahan praktek dikirimkan oleh kami ke siswa/i  dan akan dipandu oleh
            kami lewat zoom meeting
          </p>
        </div>
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 order-first order-md-0 mb-sm-4 mb-4"
        >
          <img
            style="width: 80%; height: auto"
            src="@/assets/Ecotainment/eco-1.png"
            alt=""
          />
        </div>
      </div>

      <div class="row mt-5">
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 mb-4 text-md-start text-sm-center"
        >
          <img
            style="width: 80%; height: auto"
            src="@/assets/Ecotainment/eco-2.png"
            alt=""
          />
        </div>
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 mb-sm-4 mb-4 text-sm-center"
        >
          <h3 class="mb-3 text-md-start text-sm-center">
            Goes To School Fieldtrip
          </h3>

          <p class="text-md-start text-sm-center">
            Goes To School Fieldtrip adalah bimbingan edukasi oleh instruktur
            Godongijo secara tatap muka di sekolah
          </p>
        </div>
      </div>

      <div class="row mt-5">
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 mb-4 text-md-start text-sm-center"
        >
          <h3 class="mb-3 text-md-start text-sm-center">
            Fieldtrip at Godongijo
          </h3>

          <p class="text-md-start text-sm-center">
            Fieldtrip at Godongijo adalah bimbingan edukasi oleh instruktur
            Godongijo secara on site / secara tatap muka di Godongijo
          </p>
        </div>
        <div
          class="col-12 col-md-6 col-sm-12 col-lg-6 order-first order-md-0 mb-sm-4 mb-4"
          style="margin: 0"
        >
          <img
            style="width: 80%; height: auto"
            src="@/assets/Ecotainment/eco-2.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="education-program" style="margin: 100px">
      <h3>Program Edukasi</h3>
      <p class="mb-5">
        <b>Ecotainment Godong Ijo</b> memiliki tiga kategori program yaitu
        Edukasi Lingkungan, Science, dan Art.
      </p>

      <div class="environtment-edu text-start">
        <h4 class="mb-5">Edukasi Lingkungan</h4>
        <div class="row">
          <CardEduProgram
            v-for="(program, index) in programs[0].environmentEdu"
            :key="index"
            :imgSrc="program.imgSrc"
            :programName="program.programName"
            :programDescription="program.programDescription"
            class="col-12 col-md-6 col-lg-4 mb-4"
          />
        </div>
      </div>

      <div class="science-edu text-start">
        <h4 class="mb-5">Edukasi Science</h4>
        <div class="row">
          <CardEduProgram
            v-for="(program, index) in programs[0].scienceEdu"
            :key="index"
            :imgSrc="program.imgSrc"
            :programName="program.programName"
            :programDescription="program.programDescription"
            class="col-12 col-md-6 col-lg-4 mb-4"
          />
        </div>
      </div>
      <div class="art-edu text-start">
        <h4 class="mb-5">Edukasi Art</h4>
        <div class="row">
          <CardEduProgram
            v-for="(program, index) in programs[0].artEdu"
            :key="index"
            :imgSrc="program.imgSrc"
            :programName="program.programName"
            :programDescription="program.programDescription"
            class="col-12 col-md-6 col-lg-4 mb-4"
          />
        </div>
      </div>
    </div>

    <div
      class="ecotainment-cta p-4"
      style="margin: 100px; background-color: #c3dfdc; border-radius: 20px"
    >
      <div class="row p-5">
        <div class="col-md-5">
          <img
            style="width: 80%; border-radius: 18px; margin-bottom: 20px"
            src="@/assets/Ecotainment/eco-cta.png"
            alt=""
          />
        </div>
        <div
          class="col-md-7 d-flex flex-column justify-content-center align-items-start"
        >
          <h2 class="mb-3">Masih Penasaran?</h2>
          <p>Yuk kepoin website ecotainment lebih lanjut</p>
          <button style="width: 200px" class="btn btn-success explore-btn">
            Selengkapnya >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardEduProgram from "@/components/CardEduProgram.vue";

export default {
  name: "EcotainmentView",
  components: { CardEduProgram },
  data() {
    return {
      programs: [
        {
          environmentEdu: [
            {
              imgSrc: require("@/assets/Ecotainment/program-1.png"),
              programName: "Learning About Animal",
              programDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            },
            {
              imgSrc: require("@/assets/Ecotainment/program-1.png"),
              programName: "Learning About Animal",
              programDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            },
            {
              imgSrc: require("@/assets/Ecotainment/program-1.png"),
              programName: "Learning About Animal",
              programDescription:
                "Lorem ipsum dolssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            },
          ],
          scienceEdu: [
            {
              imgSrc: require("@/assets/Ecotainment/program-1.png"),
              programName: "Learning About Animal",
              programDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            },
            {
              imgSrc: require("@/assets/Ecotainment/program-1.png"),
              programName: "Learning About Animal",
              programDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            },
          ],
          artEdu: [
            {
              imgSrc: require("@/assets/Ecotainment/program-1.png"),
              programName: "Learning About Animal",
              programDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            },
            {
              imgSrc: require("@/assets/Ecotainment/program-1.png"),
              programName: "Learning About Animal",
              programDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
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
  background-image: url("@/assets/Ecotainment/hero.png");
  width: 100%;
  height: 600px;
  padding: 120px;
}

.ecotainment-intro {
  margin: 100px;
}

.explore-btn {
  background-color: #034a4a;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
}

.fieldtrip-platform {
  margin: 100px;
}
</style>
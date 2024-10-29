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
        <h1>10 AM - 9 PM</h1>
      </div>
    </div>

    <div class="our-menu" style="margin: 100px">
      <h2>Our Menu</h2>
      <div class="category-list">
        <CategoryCarousel v-bind="settingsCarousel">
          <CardCategory
            v-for="(categories, index) in categories"
            :key="index"
            :imgSrc="categories.imgSrc"
            :categoryName="categories.categoryName"
          />
        </CategoryCarousel>

        <div class="menus mt-5">
          <div class="row">
            <div
              v-for="(menu, index) in menus"
              :key="index"
              class="col-lg-3 col-md-6 col-sm-6 mb-4"
            >
              <CardMenu
                :imgSrc="menu.imgSrc"
                :menuName="menu.menuName"
                :menuPrice="menu.menuPrice"
                :menuDescription="menu.menuDescription"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCategory from "@/components/CardCategory.vue";
import CardMenu from "@/components/CardMenu.vue";
import CategoryCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "WaterfallRestoView",
  components: { CardCategory, CategoryCarousel, CardMenu },
  data() {
    return {
      categories: [
        {
          imgSrc: require("@/assets/WaterfallResto/category-1.png"),
          categoryName: "Tampah Godong Ijo",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/category-1.png"),
          categoryName: "Tampah Godong Ijo",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/category-1.png"),
          categoryName: "Tampah Godong Ijo",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/category-1.png"),
          categoryName: "Tampah Godong Ijo",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/category-1.png"),
          categoryName: "Tampah Godong Ijo",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/category-1.png"),
          categoryName: "Tampah Godong Ijo",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/category-1.png"),
          categoryName: "Tampah Godong Ijo",
        },
      ],
      menus: [
        {
          imgSrc: require("@/assets/WaterfallResto/menu-1.jpg"),
          menuName: "Nasi Goreng",
          menuPrice: "Rp 20.000",
          menuDescription: "Nasi goreng wenakk sekalii",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/menu-1.jpg"),
          menuName: "Sate Ayam",
          menuPrice: "Rp 25.000",
          menuDescription: "Sate ayam bumbu kacang",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/menu-1.jpg"),
          menuName: "Ayam Bakar",
          menuPrice: "Rp 30.000",
          menuDescription: "Ayam bakar kecap",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/menu-1.jpg"),
          menuName: "Es Teler",
          menuPrice: "Rp 15.000",
          menuDescription: "Minuman dingin segar",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/menu-1.jpg"),
          menuName: "Rendang",
          menuPrice: "Rp 35.000",
          menuDescription: "Daging sapi bumbu rendang",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/menu-1.jpg"),
          menuName: "Bakso",
          menuPrice: "Rp 20.000",
          menuDescription: "Bakso sapi kuah gurih",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/menu-1.jpg"),
          menuName: "Mie Goreng",
          menuPrice: "Rp 18.000",
          menuDescription: "Mie goreng spesial",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/menu-1.jpg"),
          menuName: "Gado-Gado",
          menuPrice: "Rp 22.000",
          menuDescription: "Salad sayur dengan saus kacang",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/menu-1.jpg"),
          menuName: "Nasi Campur",
          menuPrice: "Rp 28.000",
          menuDescription: "Nasi dengan aneka lauk",
        },
        {
          imgSrc: require("@/assets/WaterfallResto/menu-1.jpg"),
          menuName: "Soto Ayam",
          menuPrice: "Rp 18.000",
          menuDescription: "Soto ayam dengan kuah bening",
        },
      ],
      settingsCarousel: [
        {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 6,
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
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 4,
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
    };
  },
};
</script>

<style scoped>
.hero-section {
  background-image: url("@/assets/WaterfallResto/hero.png");
  width: 100%;
  height: 600px;
  padding: 120px;
}

.menus {
  margin: auto;
}

::v-deep .slick-prev:before {
  color: #034a4a !important;
  font-size: 24px;
  margin-right: 10px;
}

::v-deep .slick-next:before {
  color: #034a4a !important;
  font-size: 24px;
  padding: 10px;
}
</style>
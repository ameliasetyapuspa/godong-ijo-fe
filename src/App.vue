<template>
  <div id="app">
    <nav
      class="navbar navbar-expand-lg custom-navbar sticky-top"
      :style="{ opacity: navbarOpacity }"
    >
      <div
        class="container d-sm-flex d-flex flex-column flex-sm-column flex-md-row align-items-sm-center justify-content-sm-center"
      >
        <div
          class="logo-img d-sm-flex justify-content-between justify-content-sm-between"
        >
          <img
            width="200"
            height="60"
            src="/logo.png"
            alt=""
            @click="$router.push('/')"
            style="cursor: pointer"
          />
          <button
            class="navbar-toggler d-sm-block d-md-block d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="menus">
          <button
            class="navbar-toggler d-sm-none d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link
                  to="/waterfall-resto"
                  class="nav-link"
                  active-class="active"
                  exact-active-class="exact-active"
                >
                  The Waterfall Resto
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/fishing-lake"
                  class="nav-link"
                  active-class="active"
                >
                  Fishing Lake
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/ecotainment"
                  class="nav-link"
                  active-class="active"
                >
                  Ecotainment
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/function-room"
                  class="nav-link"
                  active-class="active"
                >
                  Function Room
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/vertical-garden"
                  class="nav-link"
                  active-class="active"
                >
                  Vertical Garden
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/contact-us"
                  class="nav-link"
                  active-class="active"
                >
                  Contact Us
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <router-view />
    <footer
      class="row row-cols-1 row-cols-sm-2 row-cols-md-5 border-top justify-content-center align-items-start"
    >
      <div class="col mb-3 p-4 rounded-3 mt-4" style="background-color: white">
        <a
          href="#"
          class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
        >
          <img width="" src="/logo.png" alt="" />
        </a>
        <p class="text-body-secondary text-justify">
          JanLink merupakan sebuah website penguhubung antara pedagang keliling
          dan pembeli di sekitar Kota Bogor berbasis GIS
        </p>
      </div>

      <div class="col mb-3 ms-5 mt-4">
        <h5>Menu</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">Beranda</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">Jajanan</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">Cari Jajan</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">Dashboard</a>
          </li>
        </ul>
      </div>

      <div class="col mb-3 ms-5 mt-4">
        <h5>Kontak</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">Home</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">Features</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">Pricing</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">FAQs</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">About</a>
          </li>
        </ul>
      </div>

      <div class="col mb-3 ms-4 mt-4">
        <h5 class="ms-2">Ikuti Kami</h5>
        <ul class="nav list-unstyled">
          <li class="ms-3">
            <a class="text-body-secondary" href="#"
              ><i class="fa-brands fa-instagram"></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#"
              ><i class="fa-brands fa-youtube"></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#"
              ><i class="fa-brands fa-twitter"></i
            ></a>
          </li>
        </ul>
      </div>
      <p class="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navbarOpacity: 1,
      lastScrollY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > this.lastScrollY) {
        // Scrolling down - reduce opacity
        this.navbarOpacity = 0.1;
      } else {
        // Scrolling up - restore full opacity
        this.navbarOpacity = 1;
      }

      this.lastScrollY = currentScrollY;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap");

h1,
h2,
h3,
h4,
h5,
h6,
p,
div,
a,
span {
  font-family: "Poppins" !important;
}

#app {
  font-family: Poppins, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ebfcf7;
}

.row {
  --bs-gutter-x: 0 !important;
}

html,
body {
  background-color: #ebfcf7;
}

.custom-navbar {
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease-in-out; /* Smooth opacity transition */
}

nav .menus a {
  font-size: 14px;
}

#navbarNav ul {
  gap: 25px !important;
}

nav .menus li {
  gap: 50px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.active {
  color: #42b983;
  font-weight: bold;
  border-bottom: 2px solid #42b983;
}
</style>
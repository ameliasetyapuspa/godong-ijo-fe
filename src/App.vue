<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg custom-navbar sticky-top">
      <div class="container">
        <div class="logo-img">
          <img width="200" height="60" src="/logo.png" alt="">
        </div>

        <div class="menus">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">The Waterfall Resto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Fishing Lake</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ecotainment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Function Room</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Vertical Garden</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');

h1,h2,h3,h4,h5,h6,p,div,a,span{
  font-family: "Poppins" !important;
}

#app {
  font-family: Poppins, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #EBFCF7;
}

html, 
body {
  background-color: #EBFCF7;
}

.custom-navbar {
  background-color: #FFF; /* Your custom color */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);

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

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

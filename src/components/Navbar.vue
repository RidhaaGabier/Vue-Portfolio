<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <router-link to="/"
        ><img
          src="https://i.postimg.cc/fbt0Yv99/Logo-web-image.png"
          id="slideInLeft"
          alt="Ridhaa Gabier"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="navbar" class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li id="slideInLeft"><router-link to="/">Home </router-link></li>
          <li id="slideInLeft">
            <router-link to="/about">About </router-link>
          </li>
          <li id="slideInLeft">
            <router-link to="/project">Projects </router-link>
          </li>
          <li id="slideInLeft">
            <router-link to="/resume">Resume </router-link>
          </li>
          <li id="slideInLeft">
            <router-link to="/testimonial">Testimonial </router-link>
          </li>
          <li id="slideInLeft">
            <router-link to="/contact">Contact </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@keyframes slideInLeft {
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0);
  }
}

#slideInLeft {
  animation: slideInLeft 1s ease-in;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav {
  background: black;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  padding: 25px !important;
}

#navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}

#navbar li {
  padding: 0 25px;
  position: relative;
}

#navbar li a {
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: whitesmoke;
  transition: color 0.5s ease; /* Added transition property */
}

#navbar li a:hover,
#navbar li a.router-link-exact-active {
  color: white;
}

#navbar li a.router-link-exact-active::after,
#navbar li a:hover::after {
  content: "";
  width: 56%;
  height: 2px;
  background: whitesmoke;
  position: absolute;
  bottom: -4px;
  left: 20px;
  transition: width 0.3s ease; /* Added transition property for the width */
}

@keyframes underlineAnimation {
  from {
    width: 0;
  }
  to {
    width: 56%;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slideInLeft {
  animation: slideInLeft 1s ease-in;
}

#navbar li a.router-link-exact-active {
  animation: colorChange 0.5s ease; /* Apply color change animation to the active link */
  color:#38E54D ;
}

#navbar li a.router-link-exact-active::after,
#navbar li a:hover::after {
  content: "";
  width: 0;
  height: 2px;
  background: whitesmoke;
  position: absolute;
  bottom: -4px;
  left: 20px;
  transition: width 0.3s ease;
  animation: underlineAnimation 0.5s ease; /* Apply underline animation to the active link */
}

</style>
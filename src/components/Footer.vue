<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start bg-light text-muted">
    <!-- Section: Social media -->
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <!-- Left -->
      <div class="me-5 d-none d-lg-block" style="color: #000">
        <span>Get connected with me on social networks:</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a
          href="https://www.linkedin.com/in/ridhaa-gabier-08986b276/"
          target="_blank"
          class="me-4 text-reset"
        >
          <i class="fa-brands fa-linkedin" style="color: black"></i>
          </a>
        <a
          href="https://github.com/RidhaaGabier?tab=repositories"
          target="_blank"
          class="me-4 text-reset"
        >
          <i class="fab fa-github" style="color: black"></i>
        </a>
                <a
          href="mailto:2811rg@gmail.com"
          target="_blank"
          class="me-4 text-reset"
        >
         <i class="fa-solid fa-envelope" style="color: black"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5" style="color: #000">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Ridhaa Gabier
            </h6>
            <p>Aspiring Software Developer At Your Door Step!!</p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Projects</h6>
            <p>
              <router-link to="/project" class="text-reset">NodeJS</router-link>
              <router-link to="/project" class="text-reset"></router-link>
            </p>
            <p>
              <router-link to="/project" class="text-reset"
                >MySQL</router-link
              >
              <router-link to="/project" class="text-reset"></router-link>
            </p>
            <p>
              <router-link to="/project" class="text-reset"
                >JavaScript</router-link
              >
              <router-link to="/project" class="text-reset"></router-link>
            </p>
            <p>
              <router-link to="/project" class="text-reset">VueJS</router-link>
              <router-link to="/project" class="text-reset"></router-link>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <router-link to="/" class="text-reset"></router-link>
            </p>
            <p>
              <router-link to="/about" class="text-reset">About</router-link>
            </p>
            <p>
              <router-link to="/project" class="text-reset"
                >Projects</router-link
              >
            </p>
            <p>
              <router-link to="/contact" class="text-reset"
                >Contact</router-link
              >
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3"></i> Delft, Cape Town, WC 7100, ZA</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              2811rg@gmail.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 27 69 221 8142</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div
      class="text-center p-4"
      style="background-color: rgba(0, 0, 0, 0.05); color: #000"
    >
      © 2023 Copyright
    </div>

    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<style scoped>

/* .text-reset{

  text-decoration:none;
  
} */

</style>

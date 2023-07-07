<template>
  <div class="contact">
    <main id="main-Section">
      <div id="contact" class="row">
        <div class="col first">
          <div class="card left">
            <div class="hijab">
              <img
                src="https://i.postimg.cc/qBnMwVTy/C12-Ridhaa-Gabier-2.jpg"
                loading="lazy"
                class="pfp"
              />
            </div>

            <div class="text-center pb-3 add-pad bot">
              <h4><strong>Ridhaa Gabier</strong></h4>
              <em>Contact Details:</em> <br />
              <br />
              Number: 021 967 000 <br />
              Email: 2811rg@gmail.com<br />
              <br />
              <p>
                Lets get partnering <br />
                Aspiring Software Developer.
              </p>
            </div>
          </div>
        </div>

        <div id="form-box" class="col-md-8 p-2">
          <div class="card border-2 mt-5 second" id="contact-box">
            <form action="https://formspree.io/f/xknayqyj" method="POST">
              <h2
                id="slideInLeft"
                class="card p-3 heading-text pink-bg border-2 text-center"
                style="border: none"
              >
                Contact Me!
              </h2>
              <div class="input-ting">
                <label class="form-label heading-text">Name:</label>
                <input
                  type="text"
                  name="Name"
                  class="form-control light-bg border-2"
                  placeholder="Please enter your name"
                  required
                />
              </div>

              <div class="input-ting">
                <label class="form-label heading-text">Email:</label>
                <input
                  type="email"
                  name="Email"
                  class="form-control light-bg border-2"
                  placeholder="Please Enter your email"
                  required
                />
              </div>

              <div class="input-ting">
                <label class="form-label heading-text">Enter message:</label>
                <textarea
                  name="Message"
                  class="form-control light-bg border-2"
                  rows="5"
                  placeholder="We would like to hear from you"
                ></textarea>
              </div>
              <div class="bttn">
                <button type="submit" class="btn submit-btn submitting">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- contact form done -->
    </main>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  components: {},
};
</script>

<style scoped>
*{
  font-family: "Poppins";
}
/* Image styling for contact page */

.col {
  padding: 30px;
}

.pfp {
  width: 100%;
  border-radius: 50%;
  box-shadow: 8px 8px 15px whitesmoke, -4px -4px 15px silver;
  background: whitesmoke;
}
.bttn {
  width: 90%;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-ting {
  width: 90%;
}

.second {
  margin-bottom: 5rem;
  background-color: whitesmoke;
  color: black;
}

form h2 {
  background-color: green;
  color: white;
  margin: 5px;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 600px; */
  margin-bottom: 1px;
  padding-top: 20px;
  padding-bottom: 0px ;
  line-height: 65px;

}
#contact-box {
  margin-top: 1rem !important;
  padding-bottom: 0px;
}

.bot {
  padding-top: 1rem;
  background-color: whitesmoke;
  color: black;
}

.bot p {
  color: black;
}

.hijab img {
  width: 20rem;
  height: 27rem;
}

.submit-btn {
  width: 100%;
  position: relative;
  display: flex;
  margin-left: 0;
  margin-top: 80px !important;
}
#contact {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 20px;
}

.hijab {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  padding-top: 2rem;
  padding-bottom: 1.4rem;
}

#contactPage {
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
}

#main-Section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.submitting {
  background-color: green;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2.4rem;
  color: white;
}
.submitting:hover {
  box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFFCF2;
}

#form-box {
  margin-top: 28px;
  line-height: 40px;
}
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

@media (max-width: 300px) {
  .hijab img {
    width: 100%;
    height: 100%;
    border-style: none;
  }
  .hijab {
    padding: 10px;
  }

}
</style>

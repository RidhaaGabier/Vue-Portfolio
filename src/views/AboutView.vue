<template>
  <div class="heading">
    <h1 id="slideInLeft">About Me</h1>

    <div class="container-about">
      <section class="about">
        <div class="about-image">
          <img
            src="https://i.ibb.co/L8syvhq/C12-Ridhaa-Gabier-2.jpg"
            alt="Image"
            width="500"
  
          />
        </div>
        <div id="App" class="about-content">
          <div id="bounce" class="mb-1 gray-bg" :class="{scroller: showFlag}">
            <h2 class="m-heading">Software Developer</h2>
            <p>
              My name is <b class="text-success">Ridhaa Gabier </b>, I am an Aspiring <b class="text-success">Full Stack Software Developer</b>. I'm hard
              working and dedicated to achieve the goals my heart desires. I'm a
              <b class="text-success">trustworthy</b> and loyal companion and
              love working in groups.I am an
              <b class="text-success">asset</b> to my team and will ensure quick
              assistance to those in need.
            </p>

            <p>
              I consider myself a builder. I find it fascinating to learn how
              things work. It's my passion to strive towards success to exceed
              the expectations and to break beyond my limitations that my mind
              holds. My <b class="text-success">strength's</b> are that I'm a
              <b class="text-success">creative problem solver</b> and able to
              handle multiple tasks on a daily basis. I'm determined and may be
              competitive at times as there is always something one can learn. I
              am a dependable person who is great at
              <b class="text-success">time management</b>. I love learning new
              things and doing projects on the side for self interests. Despite
              all my qualities i am very
              <b class="text-success">empathic</b> towards my fellow colleges
              and people i work for in general.
            </p>

            <div class="mb-1 gray-bg" v-show="showFlag">
              <p>
                I enjoy online gaming and building up small computer projects. I
                truly have a passion for
                <b class="text-success">coding and designing websites</b> as i
                find it very enjoyable. I am skilled in in multiple aspects such
                as having knowledge about general
                <b class="text-success">hardware and software</b> and how it
                operates, able to work in a fast paced environment and know how
                to operate devices such as computers,laptops etc. I am quite
                skilled in
                <b class="text-success"
                  >HTML , CSS , Git , GitHub, Bootstrap, JavaScript, VueJS, Wordpress, MySQL and NodeJS</b
                >. Currently I am an intern, upskilling myself at
                <b class="text-success">Life Choices Studio</b> with an AWS Cloud Practitioner course.
              </p>

              <p
                style="
                  border-bottom: 5px solid black;
                  padding-bottom: 30px;
                  margin-bottom: 50px;
                "
              >
                I am experienced in a working environment as i worked in the
                past for a company called
                <b class="text-success">SOS Packaging Pty Ltd</b>.My position
                was an admin/receptionist and done liaising telephonically with
                clients,filling,post and data capturing.I have also promoted
                people via social media and worked as a part time streamer on
                <b class="text-success">YouTube</b> for my gaming channel.
              </p>
            </div>
          </div>
          <p class="hero_btn" @click="toggleShow" v-show="!showFlag">
            Show More
          </p>
          <p class="hero_btn" @click="toggleShow" v-show="showFlag">Show Less</p>

        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      showFlag: false,
    };
  },
  methods: {
    toggleShow() {
      this.showFlag = !this.showFlag;
    },
  },
};
</script>

<style scoped>
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

#slideInLeft {
  animation: slideInLeft 1s ease-in;
}

* {
  font-family: "Poppins";
}
.hero_btn {
  width: 170px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: green;
  background: black;
  border-radius: 40px 15px 40px 10px;
  text-transform: capitalize;
  letter-spacing: 0.3px;
  margin-top: 15px;
  text-decoration: none;
}
p {
  text-wrap: balance;
}
.hero_btn:hover {
  background: #38e54d;
  color: whitesmoke;
  transform: scale(1.02);
}

/* About Page */
.heading {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
}
.heading h1 {
  font-size: 50px;
  color: black;
  margin-bottom: 20px;
  position: relative;
}
.heading h1::after {
  content: "";
  margin: 0 auto;
  background-color: #333333;
  position: absolute;
  display: block;
  height: 4px;
  width: 100%;
}

.container-about {
  width: 90%;
  margin: 0 auto;
  padding: 10px 20px;
}

.about { 
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.scroller {
  overflow-y: scroll;
  max-height: 700px;
}
.scroller::-webkit-scrollbar {
  width: 5px;

}
.scroller::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: #999;
  border-radius: 5px;
}

.about-image {
  flex: 1;
  margin-right: 40px;
  overflow: hidden;
  height: 100%;
}
.about-image img {
  max-width: 100%;
  display: block;
  transition: 0.6 ease;
  height: auto;
}
.about-content {
  flex: 1;
}

.about-content h2 {
  font-size: 25px;
  margin-bottom: 40px;
}

.about-content p {
  font-size: 18px;

  line-height: 2;
}
#bounce {
  text-wrap: balance;
}
.about-content .read-more {
  display: inline-block;
  font-size: 20px;
  padding: 10px;
  text-decoration: none;
  border-radius: 20px;
  transition: 0.3s ease;
  background-color: #eb5e28;
  color: white;
}
.about-content .read-more:hover {
  box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#CCC5B9;
}
@media screen and (max-width: 300px) {
  .m-heading {
    padding-left: 40px;
  }

  .heading p {
    font-size: 15px;
    margin-bottom: 0px;
  }

  .about {
    padding: 2px;
    flex-direction: column;
  }

  .about-image {
    margin: 0px;
    margin-bottom: 15px;
  }

  .about-content {
    padding: 0px;
    font-size: 12px;
  }

  .about-content .read-more {
    font-size: 15px;
  }
  .heading h1 {
    font-size: 30px;
  }
  .scroller {
  overflow-y: scroll;
  max-height: 700px;
}
}
</style>

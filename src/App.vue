<template>
  <div>
    <v-app>
      <!-- <router-view /> -->
      <v-app-bar
    density="prominent"
    rounded
    class="responsive-app-bar"
  >
    <v-container fluid>
      <v-row align="center" justify="space-between" class="flex-wrap">
        <v-col cols="12" sm="4" md="3" class="d-flex justify-center justify-sm-start">
          <img
            src="/public/images/feeldxLOGO.jpg"
            alt=""
            style="max-height: 40px; width: auto;margin-top:30px;"
          />
        </v-col>
        <v-col
          cols="12"
          sm="8"
          md="9"
          class="d-flex align-center justify-center justify-sm-end flex-wrap"
        >
          <v-menu transition="slide-x-transition">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props" class="ma-1" small>
                About us
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in menuItem"
                :key="index"
              >
                <v-list-item-title class="font-weight-bold">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn class="ma-1" text small>NEWS</v-btn>

          <v-btn class="ma-0" icon small>
            <v-icon>mdi-phone</v-icon>
          </v-btn>

          <span class="ml-1 font-weight-medium hidden-xs-only hidden-sm-only">
            1800 333 539
          </span>
        </v-col>
      </v-row>

      <div class="d-flex overflow-auto px-2 justify-sm-end" style="white-space: nowrap;">
        <v-btn v-for="(item, i) in ['SERVICES', 'VALUE PROPOSITION', 'TECHNOLOGY', 'OUR WORK', 'CONTACT US']"
              :key="i"
              class="ma-1"
              text
              small
        >
          {{ item }}
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
        <v-row cols="12" sm="12"	xl="12">
          <video
            src="/public/video/feeldx.mp4"
            autoplay
            muted
            loop
            playsinline
            class="responsive-video"
          ></video>
        </v-row>
        <v-row class="my-10" align="center" justify="center">
          <v-col cols="12" md="4">
            <v-card class="pa-8" color="azure" variant="tonal">
              <div class="text-h3 mb-4 ml-4" style="font-size: 3rem;">
                Plan.
              </div>
              <div class="text-h3 mb-4 ml-4" style="font-size: 3rem;">
                Visualise.
              </div>
              <div class="text-h3 ml-4" style="font-size: 3rem;">
                Transform.
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <div class="pa-4">
              <h3 class="body-1">
                We push beyond visual representation, integrating and connecting with your project's
                requirements, bringing them to life and enhancing clarity to create a truly immersive experience.
              </h3>
            </div>
          </v-col>
        </v-row>
        <v-row class="my-10" align="center" justify="center">
          <v-col cols="12" md="4">
            <v-card class="pa-8" color="azure" variant="tonal">
              <div class="text-h4 ml-4" style="font-size: 2.5rem;">
                OUR SERVICES
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <div class="pa-4">
              <h3 class="body-1">
                FeelDX specialises in crafting immersive visual experiences through cutting-edge 3D visualisation and creative technologies.
                Tailoring specialised services to diverse sectors, our niche teams elevate project success by aligning with unique client needs.
                Storytelling is integral, woven into our content strategy established through a meticulous discovery process, resulting in engaging visual content.
                <br><br>
                Our user-centric design and development of interactive applications amplify the impact of communication. While maintaining enduring partnerships
                in construction, our dynamic team continues to evolve, creating high-impact and immersive content experiences for businesses in new and emerging markets.
              </h3>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" class="mb-10">
          <v-col cols="12" md="8" class="d-flex justify-center">
            <img
              src="/public/images/services.jpg"
              alt="Services"
              class="img-fluid"
              style="max-width: 100%; height: auto;"
            />
          </v-col>
        </v-row>
        <v-row justify="center" class="mb-6">
          <v-col cols="12" class="text-center">
            <div class="text-h4" style="font-size: 3rem;">
              OUR WORKS
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" class="px-4">
          <v-col cols="12" md="10" class="text-center">
            <h4 class="body-1">
              We are committed to enhancing user experiences, exploring innovative audience engagement methods,
              and maximising production efficiency by adopting cutting-edge creative technologies.
              Our design and development of interactive applications and visualisation tools are driven by a research-centric approach,
              ensuring they enhance the effectiveness of our communication methods.
              <br><br>
              Our solutions have powered important and impressive projects across a diverse range of industries.
            </h4>
          </v-col>
        </v-row>
        <v-row>
            <v-slide-group
              v-model="model"
              class="pa-4"
              center-active
              show-arrows
            >
              <v-slide-group-item key="1">
                <v-card class="ma-4" height="300" width="450">
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <img src="/public/images/image1.png" alt="" class="ma-1" style="max-width: 100%; max-height: 100%;" />
                    </v-scale-transition>
                  </div>
                </v-card>
              </v-slide-group-item>
              <v-slide-group-item key="2">
                <v-card class="ma-4" height="300" width="450">
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <img src="/public/images/image2.png" alt="" class="ma-1" style="max-width: 100%; max-height: 100%;" />
                    </v-scale-transition>
                  </div>
                </v-card>
              </v-slide-group-item>
              <v-slide-group-item key="3">
                <v-card class="ma-4" height="300" width="450">
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <img src="/public/images/image3.png" alt="" class="ma-1" style="max-width: 100%; max-height: 100%;" />
                    </v-scale-transition>
                  </div>
                </v-card>
              </v-slide-group-item>
              <v-slide-group-item key="4">
                <v-card class="ma-4" height="300" width="450">
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <img src="/public/images/image4.png" alt="" class="ma-1" style="max-width: 100%; max-height: 100%;" />
                    </v-scale-transition>
                  </div>
                </v-card>
              </v-slide-group-item>
              <v-slide-group-item key="5">
                <v-card class="ma-4" height="300" width="450">
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <img src="/public/images/image5.png" alt="" class="ma-1" style="max-width: 100%; max-height: 100%;" />
                    </v-scale-transition>
                  </div>
                </v-card>
              </v-slide-group-item>
              <v-slide-group-item key="6">
                <v-card class="ma-4" height="300" width="450">
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <img src="/public/images/image6.png" alt="" class="ma-1" style="max-width: 100%; max-height: 100%;" />
                    </v-scale-transition>
                  </div>
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
        </v-row>
        <v-row justify="center" class="mt-6">
          <v-col cols="auto">
            <v-btn href="https://www.feeldx.com/our-work" color="primary" variant="tonal" large>
              VIEW OUR WORK
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-footer class="text-center d-flex flex-column ga-2 py-4" color="#231e1e">
              <div class="d-flex ga-3">
                <v-btn
                  v-for="(iconItem, index) in icons"
                  :key="index"
                  :href="iconItem.url"
                  target="_blank"
                  density="comfortable"
                  variant="text"
                  icon
                >
                  <v-icon>{{ iconItem.icon }}</v-icon>
                </v-btn>
              </div>

              <v-divider class="my-2" thickness="2" width="50"></v-divider>
              <div class="text-caption font-weight-regular opacity-60">
              WATERMAN BUSINESS CENTRE
              </div>
              <div class="text-caption font-weight-regular opacity-60">
               Suite 70, 44 LAKEVIEW DR
              </div>
              <div class="text-caption font-weight-regular opacity-60">
               SCORESBY 3179
              </div>
              <div class="text-caption font-weight-regular opacity-60">
               1800 333 539
              </div>
              <v-divider class="my-2" thickness="2" width="50"></v-divider>

              <v-divider></v-divider>

              <div>
                {{ new Date().getFullYear() }} — <strong>Feeldx</strong>
              </div>
              <div>
                Terms of use | Privacy Policy
              </div>
            </v-footer>
        </v-row>
    </v-app>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      speeedBool:false,
      group: null,
      model: null,
      icons: [
        { icon: 'mdi-facebook', url: 'https://www.facebook.com/feeldx' },
        { icon: 'mdi-instagram', url: 'https://www.instagram.com/feeldx/' },
        { icon: 'mdi-linkedin', url: 'https://www.feeldx.com/contact-us' },
        { icon: 'mdi-email', url: 'mailto:contact@feeldx.com.au' }
      ],
      menuItem: [
        { title: 'WHO WE ARE' },
        { title: 'CAPABILITY STATEMENT' },
        { title: 'AEC' },
      ],
      items: [
        {
          title: 'Home',
          path: '/',
          icon: 'mdi-home'
        },
        {
          title: 'Company',
          path: '/Company',
          icon: 'mdi-information-outline'
        },
        {
          title: 'HeroSection',
          path: '/HeroSection',
          icon: 'mdi-information-outline'
        },
        {
          title: 'ProjectsSection',
          path: '/ProjectsSection',
          icon: 'mdi-information-outline'
        },
        {
          title: 'ContactSection',
          path: '/ContactSection',
          icon: 'mdi-information-outline'
        },
      ]
    }
  },
  method:{
      closeSpeedDial() {
        this.speeedBool = false;
      },
  },
}
</script>
<style scoped>
.responsive-video {
  width: 100%;
  height: 700px; /* default height for desktop/tablet */
  margin-top: 140px;
  /* object-fit: contain; */
}

.responsive-app-bar {
  padding-top: 1px;
  padding-bottom: 10px;
  /* padding-top: 8px;
  padding-bottom: 8px; */
}

.services-responsive{
  width: 100%;
}

@media (max-width: 600px) {
  .responsive-video {
    width:  420px; /* taller video on small screens (phones) */
    margin-top: -30px;
  }
  
}
@media (max-height: 600px) {
  .responsive-video {
    height:  100; /* taller video on small screens (phones) */
  }
}
@media (max-width: 600px) {
  .responsive-adjust {
    margin-top: -370px; /* or adjust as needed */
  }
}
@media (max-width: 600px) {
  .responsive-app-bar {
    margin-top: -12px; /* or adjust as needed */
    padding-bottom: 80px;
  }
}
@media (max-width: 600px) {
  .responsive-app-bar {
    font-size: 0.9rem;
  }
}
@media (max-width: 600px) {
  .v-btn {
    font-size: 0.75rem;
    padding-left: 6px;
    padding-right: 6px;
  }
}
@media (max-width: 600px) {
  .services-responsive{
    width: 30%;
  }
}
</style>

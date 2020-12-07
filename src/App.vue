<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark>
      <div class="logo d-flex align-center">
        <v-img
          alt="Chalet du steak Logo"
          class="shrink mr-4"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="40"/>
          <div class="font2 hidden-sm-and-down">
            Chalet du steak
          </div>
      </div>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          :href="hrefPhone"
          target="_blank"
          title="Tel"
          text>
          <v-icon class="mr-2">mdi-phone</v-icon>
          <span class="hidden-sm-and-down">{{ formatedPhone }}</span>
        </v-btn>
        <v-btn
          :href="href.messenger"
          target="_blank"
          title="Messenger"
          text>
          <v-icon>mdi-chat</v-icon>
        </v-btn>
        <v-btn
          :href="href.facebook"
          target="_blank"
          title="Facebook"
          text>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          :href="href.address"
          target="_blank"
          title="Adresse"
          text>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <header class="couv">
        <v-container class="text-center">
          <div class="category">Restaurant français</div>
          <h1 class="font2">Chalet du steak 54</h1>
          <div class="pres">Buffet à volonté</div>
        </v-container>
      </header>
      <section class="accent pt-12 pb-12">
        <v-container class="text-center">
          <h2 class="font2 mb-4">Bienvenue au <span class="text--color">chalet du steak</span></h2>
          <p>
            Notre restaurant vous accueille dans un cadre chaleureux et convivial
            pour que vous y passiez un agréable moment en famille ou entre amis.
          </p>
          <v-row class="spec">
            <v-col cols="12" md="4">
              <img class="icon" src="@/assets/restaurant.svg">
              <div class="name">Plats</div>
              <p>
                Des plats traditionnels maison préparés le jour même,
                des produits de qualité et des fruits de mer frais.
              </p>
            </v-col>
            <v-col cols="12" md="4">
              <img class="icon" src="@/assets/piece-of-cake.svg">
              <div class="name">Desserts</div>
              <p>
                Nos desserts sont préparés avec délicatesse par nos cuisiniers.
                Envie de fraîcheur ?
                Nous proposons des fruits de saisons ou des coupes de glace.
              </p>
            </v-col>
            <v-col cols="12" md="4">
              <img class="icon" src="@/assets/steak.svg">
              <div class="name">Grill</div>
              <p>Côte de bœuf, Entrecôte, Faux-filet, Bavette, Poire, Rumsteck, Onglet, Steak du boucher, Dinde, Poulet, Merguez, Chipolata, ....</p>
            </v-col>
          </v-row>
          <p>
            Notre chef cuistot est à votre disposition, afin de vous aider à choisir vos pièces de bœufs parmi les meilleures parties.
          </p>
          <p>
            Pour accompagner vos grillades, nous vous proposons également des légumes frais et de la friture.
          </p>
        </v-container>
      </section>
      <section class="bg2 pt-12 pb-12">
        <v-container class="text-center">
          <h2 class="font2 mb-8">Galerie <span class="text--color">photos</span></h2>
          <v-row>
            <v-col
              v-for="n in 12"
              :key="n"
              class="d-flex child-flex"
              cols="6"
              md="3">
              <v-dialog
                v-model="dialogPhotos[n]"
                max-width="80vw">
                <template v-slot:activator="{ on }">
                  <v-img
                    v-on="on"
                    :src="require(`@/assets/photos/${n}.jpg`)"
                    :lazy-src="require(`@/assets/photos/${n}.jpg`)"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    style="cursor: pointer;"/>
                </template>
                <v-card>
                  <v-img
                    :src="require(`@/assets/photos/${n}.jpg`)"
                    :lazy-src="require(`@/assets/photos/${n}.jpg`)"
                    class="grey lighten-2"
                    max-height="80vh"/>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <footer class="footer">
        <v-container>
          <v-row>
            <v-col cols="12" md="5">
              <table>
                <tr
                  class="opening"
                  v-for="(value, day) of opening"
                  :key="day"
                  :class="{'active': currentDay === day}">
                  <td class="day">{{ value.day }}</td>
                  <td class="am">
                    <span
                      v-for="(hours, hi) of value.am"
                      :key="hi">
                      {{ hours }}
                      <span v-if="hi + 1 < value.am.length">-</span>
                    </span>
                  </td>
                  <td class="pm">
                    <span
                      v-for="(hours, hi) of value.pm"
                      :key="hi">
                      {{ hours }}
                      <span v-if="hi + 1 < value.pm.length">-</span>
                    </span>
                  </td>
                </tr>
              </table>
            </v-col>
            <v-col cols="12" md="4" class="contact">
              <div class="item">
                <v-icon>mdi-phone</v-icon>
                <a
                  :href="hrefPhone"
                  target="_blank">
                  03 83 29 05 36
                </a>
              </div>
              <div class="item">
                <v-icon>mdi-map-marker</v-icon>
                <a
                  :href="href.address"
                  target="_blank">
                  Itinéraire
                </a>
              </div>
              <div class="item">
                <v-icon>mdi-chat</v-icon>
                <a
                  :href="href.messenger"
                  target="_blank">
                  Messenger
                </a>
              </div>
              <div class="item">
                <v-icon>mdi-facebook</v-icon>
                <a
                  :href="href.facebook"
                  target="_blank">
                  Facebook
                </a>
              </div>
            </v-col>
            <v-col cols="12" md="3" class="contact">
              <div>Chalet du Steak 54 ©</div>
              <p class="address mt-4">
                11 Rue des Tarbes,
                <br>
                54270 Essey-lès-Nancy
              </p>
            </v-col>
          </v-row>
        </v-container>
      </footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      phone: '+33383290536',
      href: {
        messenger: 'https://m.me/Chaletdusteak54/',
        facebook: 'https://www.facebook.com/Chaletdusteak54/',
        address: 'https://www.google.com/maps/dir/?api=1&amp;destination=48.707728692922%2C6.2478951008844&amp;fbclid=IwAR2D_csXDG7xfuuYwikqgw4F_6IilvPRaGhmntRiblVN-YXk11eX-v1OuK0',
      },
      dialogPhotos: [],
      opening: [
        {
          day: 'Lundi',
          am: ['12:00', '14:00'],
          pm: [],
        },
        {
          day: 'Mardi',
          am: ['12:00', '14:00'],
          pm: ['19:00', '22:00'],
        },
        {
          day: 'Mercredi',
          am: ['12:00', '14:00'],
          pm: ['19:00', '22:00'],
        },
        {
          day: 'Jeudi',
          am: ['12:00', '14:00'],
          pm: ['19:00', '22:00'],
        },
        {
          day: 'Vendredi',
          am: ['12:00', '14:00'],
          pm: ['19:00', '22:30'],
        },
        {
          day: 'Samedi',
          am: ['12:00', '14:30'],
          pm: ['19:00', '22:30'],
        },
        {
          day: 'Dimanche',
          am: ['12:00', '14:30'],
          pm: ['19:00', '22:00'],
        },
      ],
    }
  },
  computed: {
    currentDay() {
      const day = new Date().getDay()
      if (day === 0)
        return 6
      return day - 1
    },
    hrefPhone() {
      return `tel:${this.phone}`
    },
    formatedPhone() {
      return this.phone.replace(/\+33(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})+/, '0$1 $2 $3 $4 $5')
    },
  }
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}

.font2 {
  font-family: "Poppins";
}

.text--color {
  color: #FF9800;
}

.bg2 {
  background-color: #FF9800;
  color: #000;
  .text--color {
    color: #263238;
  }
}
</style>

<style lang="scss" scoped>
.logo {
  img {
    border-radius: 50%;
  }
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-size: 1.4rem;
  font-weight: 600;
}



.couv {
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-color: #263238;
  background-attachment: fixed;
  background-image: url(~@/assets/bg1.jpg);
  height: calc(100vh - 56px);
  @media (min-width:960px)  {
    height: calc(100vh - 64px);
  }

  .category {
    border: 1px solid rgba(255, 255, 255, 0.5);
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    padding: 0.2rem 0.8rem;
    margin-bottom: 1.6rem;
    @media (min-width:960px)  {
      font-size: 1.4rem;
    }
  }

  h1 {
    font-weight: 300;
    font-size: 2.4rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
    padding: 0 2rem;
    @media (min-width:960px)  {
      font-size: 4.8rem;
    }
  }

  .pres {
    display: flex;
    font-size: 1.4rem;
    justify-content: center;
    align-items: center;
    color: #ff9800;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.4rem;
    @media (min-width:960px)  {
      font-size: 2rem;
      &:before {
        content: "";
        display: block;
        height: 4px;
        flex: 1;
        background-color: #ff9800;
        margin-right: 4rem;
      }
      &:after {
        content: "";
        display: block;
        height: 4px;
        flex: 1;
        background-color: #ff9800;
        margin-left: 4rem;
      }
    }
  }
}

.spec {
  .icon {
    width: 6rem;
    margin-bottom: 0.8rem;
  }
  .name {
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
    font-weight: 500;
    color: #FF9800;
  }
}

.contact {
  display: flex;
  flex-direction: column;
  .address {
    margin-bottom: 0.6rem;
  }
  .item {
    display: flex;
    padding: 0.2rem 0;
    .v-icon {
      flex: 0 0 40px;
      display: flex;
      justify-content: flex-start;
    }
  }
}

.opening {
  &.active {
    font-weight: 700;
  }
  td {
    padding-right: 1rem;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  @media (min-width:960px)  {
  }
}
</style>

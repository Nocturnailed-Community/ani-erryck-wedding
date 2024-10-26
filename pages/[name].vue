<template>
  <div class="container">
    <transition name="slide">
      <div class="invitation" v-if="!showDetails">
        <h1 class="couple">Ani & Erryck</h1>
        <div class="footer">
          <p class="title1">SPECIAL INVITATION TO</p>
          <p class="guest-name">{{ name }}</p>
          <p class="title2 mb-1">We invite you to attend our wedding.</p>
          <button class="btn btn-light" @click="showDetails = true">
            <i class="bi bi-envelope-open me-1"></i>OPEN INVITATION
          </button>
        </div>
      </div>
      <InvitationDetails v-else />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "nuxt/app";
import InvitationDetails from "~/components/InvitationDetails.vue";

export default defineComponent({
  components: {
    InvitationDetails,
  },
  setup() {
    const route = useRoute();
    const name = (route.params.name as string).replace(/-/g, ' ');
    const showDetails = ref(false);

    return {
      name,
      showDetails,
    };
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.invitation {
  display: flex; /* Menggunakan flexbox */
  flex-direction: column; /* Menyusun konten secara vertikal */
  justify-content: space-between; /* Menyebar elemen secara vertikal */
  align-items: center; /* Memusatkan secara horizontal */
  width: 100vw;
  height: 100vh;
  background-image: url("~/assets/images/front-bg.jpg"); /* Gambar untuk desktop */
  background-size: cover;
  background-position: center;
}

.couple {
  font-family: "Imperial Script", cursive;
  font-size: 65px;
  margin-bottom: 15%;
  padding-top: 5%;
  color: white;
}

.footer {
  text-align: center;
  margin-bottom: 5%;
}

.btn {
  letter-spacing: 2px;
}

.guest-name {
  color: white;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 30px;
  margin-bottom: 0px;
}

.title1 {
  margin-top: 10%;
  color: white;
  letter-spacing: 5px;
}

.title2 {
  margin-bottom: 0%;
  color: white;
  letter-spacing: 0px;
  font-size: small;
  font-weight: 100;
}

@media (max-width: 768px) {
  .invitation {
    background-image: url("~/assets/images/front-bg-mobile.jpg"); /* Gambar untuk mobile */
  }
  .couple {
    padding-top: 10%;
  }
  .footer {
    margin-bottom: 10%;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.9s ease, opacity 0.9s ease;
}

.slide-enter,
  .slide-leave-to /* .slide-leave-active di versi <2.1.8 */ {
  transform: translateY(100%);
  opacity: 0;
}
</style>

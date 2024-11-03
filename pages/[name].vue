<template>
  <div class="container">
    <transition name="slide">
      <div class="invitation" v-if="!showDetails">
        <h1 class="couple">Ani & Erryck</h1>
        <div class="footer">
          <p class="title1">UNDANGAN SPESIAL UNTUK</p>
          <p class="guest-name">{{ name }}</p>
          <p class="title2 mb-1">
            Kami mengundang Anda untuk menghadiri pernikahan kami.
          </p>
          <button class="btn btn-light" @click="openInvitation">
            <i class="bi bi-envelope-open me-1"></i>BUKA UNDANGAN
          </button>
        </div>
      </div>
      <InvitationDetails v-else />
    </transition>

    <!-- Tombol Play/Pause Musik -->
    <button class="music-control" @click="toggleMusic">
      <i :class="isPlaying ? 'bi bi-pause-circle' : 'bi bi-play-circle'"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "nuxt/app";
import InvitationDetails from "~/components/InvitationDetails.vue";

export default defineComponent({
  components: {
    InvitationDetails,
  },
  setup() {
    const route = useRoute();
    const name = (route.params.name as string).replace(/-/g, " ");
    const showDetails = ref(false);
    const isPlaying = ref(false);
    const audio = ref<HTMLAudioElement | null>(null);

    // Inisialisasi audio saat komponen dimount
    onMounted(() => {
      audio.value = new Audio(
        new URL("~/assets/music/lagu.mp3", import.meta.url).href
      );
      audio.value.loop = true;
    });

    // Hentikan audio saat komponen di-unmount
    onUnmounted(() => {
      audio.value?.pause();
    });

    // Fungsi untuk membuka undangan dan memutar musik
    const openInvitation = () => {
      showDetails.value = true; // Tampilkan detail undangan
      toggleMusic(); // Memutar musik saat undangan dibuka
    };

    // Fungsi untuk toggle play/pause musik
    const toggleMusic = () => {
      if (audio.value) {
        if (isPlaying.value) {
          audio.value.pause();
        } else {
          audio.value.play().catch((error) => {
            console.warn("Error saat memulai musik:", error);
          });
        }
        isPlaying.value = !isPlaying.value;
      }
    };

    return {
      name,
      showDetails,
      isPlaying,
      openInvitation,
      toggleMusic,
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("~/assets/images/front-bg.jpg");
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

/* Gaya tombol musik */
.music-control {
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  font-size: 32px;
  color: #333;
  cursor: pointer;
  z-index: 1000;
  width: 50px;
  height: 50px;
}

.music-control:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 768px) {
  .invitation {
    background-image: url("~/assets/images/front-bg-mobile.jpg");
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
.slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>

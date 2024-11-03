<template>
  <div class="contain">
    <div class="invitation-header">
      <div
        class="background"
        :style="{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }"
        :class="{ fade: isFading }"
      ></div>
      <div class="content">
        <div class="mb-5">
          <p>Hi,</p>
          <h4 class="guest-name">{{ name }}</h4>
          <p class="greeting-guest">
            Kami mengundang Anda untuk merayakan pernikahan kami.
          </p>
        </div>
        <div class="mb-5">
          <p style="font-weight: bold">The Wedding of</p>
          <p class="couple">Ani & Erryck</p>
        </div>
        <div class="day-event mb-5">
          <h5>Minggu, 10 November 2024</h5>
          <h5>di Kp. Ciwalengke, Majalaya - Kab. Bandung</h5>
        </div>
        <div class="mb-5">
          <h3 style="font-weight: bold">Save the Date</h3>
          <div class="count" v-if="timeRemaining">
            <div class="time">
              <p>{{ timeRemaining.days }}</p>
              <p>Hari</p>
            </div>
            <p class="time-space">:</p>
            <div class="time">
              <p>{{ timeRemaining.hours }}</p>
              <p>Jam</p>
            </div>
            <p class="time-space">:</p>
            <div class="time">
              <p>{{ timeRemaining.minutes }}</p>
              <p>Menit</p>
            </div>
            <p class="time-space">:</p>
            <div class="time">
              <p>{{ timeRemaining.seconds }}</p>
              <p>Detik</p>
            </div>
          </div>
          <p v-else>The day has arrived!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "nuxt/app";

const route = useRoute();
const name = (route.params.name as string).replace(/-/g, " ");

const eventDate = new Date("2024-11-10T00:00:00").getTime();

const timeRemaining = ref<{
  days: number;
  hours: string;
  minutes: string;
  seconds: string;
} | null>(null);
let countdownInterval: ReturnType<typeof setInterval> | undefined;

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    timeRemaining.value = null;
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timeRemaining.value = {
    days,
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
};

const backgroundImages = [
  "/images/front-bg.jpg",
  "/images/front-bg-mobile.jpg",
  "/images/header-bg1.jpg",
  "/images/header-bg2.jpg",
  "/images/header-bg3.jpg",
];

const currentImageIndex = ref(0);
const isFading = ref(false); // Tambahkan state untuk transisi fade

const changeImage = () => {
  isFading.value = true; // Mulai efek fade

  setTimeout(() => {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % backgroundImages.length;
    isFading.value = false; // Selesai efek fade
  }, 1000); // Sesuaikan waktu dengan durasi transisi
};

onMounted(() => {
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
  setInterval(changeImage, 5000); // Ganti gambar setiap 5 detik
});

onBeforeUnmount(() => {
  clearInterval(countdownInterval);
});
</script>

<style scoped>
.invitation-header {
  position: relative; /* Membuat konteks posisi untuk elemen di dalamnya */
  width: 100vw;
  padding: 10%;
  /* overflow: hidden; Menghindari overflow */
  max-width: 100vw;
  background-color: grey;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease; /* Transisi untuk efek fade */
  z-index: 1; /* Menempatkan background di belakang */
  opacity: 1; /* Awalnya penuh */
}

.background.fade {
  opacity: 0.8;
}

.content {
  position: relative;
  z-index: 2; /* Menempatkan konten di depan background */
  color: white;
}

h5 {
  font-weight: 700;
  margin: 0px;
}

.time {
  color: white;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid white;
  flex-direction: column;
  padding: 5px;
  margin-right: 10px;
  width: 65px;
  height: 65px;
}

.time-space {
  margin-right: 10px;
}

.contain {
  color: white;
  background-color: grey;
  width: 100vw;
}

.day-event {
  font-weight: bold;
}

.count {
  font-weight: bold;
  display: flex;
  align-items: center;
}

p {
  margin: 0px;
}

.couple {
  font-family: "Imperial Script", cursive;
  font-size: 75px;
  letter-spacing: 3px;
  font-weight: 500;
}

.guest-name {
  color: white;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 30px;
  margin-bottom: 0px;
}

@keyframes zoom-out {
  0% {
    transform: scale(1.1); /* Zoom out sedikit */
  }
  100% {
    transform: scale(1); /* Kembali ke normal */
  }
}

/* Animasi zoom-in ketika gambar baru muncul */
@keyframes zoom-in {
  0% {
    transform: scale(1); /* Awal normal */
  }
  100% {
    transform: scale(1.1); /* Zoom-in */
  }
}
@media (max-width: 768px) {
  .invitation-header {
    padding: 6%;
  }
  .couple {
    font-size: 57px;
    letter-spacing: 1px;
  }
  h5 {
    font-weight: 300;
    font-size: medium;
    margin: 0px;
  }
  .guest-name {
    letter-spacing: 1px;
    font-size: 20px;
    margin-bottom: 0px;
  }
  .greeting-guest {
    font-size: small;
  }
}
</style>

<!-- <template>
  <div class="contain text-center">
    <h1 class="couple">Galeri Kami</h1>
    <div class="gallery-container">
      <div class="gallery-track" ref="galleryTrack">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          @click="openPreview(image)"
          class="gallery-image"
          alt="Galeri Image"
        />
      </div>
    </div>

    <div v-if="previewImage" class="preview-modal" @click="closePreview">
      <img :src="previewImage" class="preview-image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/images/front-bg.jpg",
        "/images/front-bg-mobile.jpg",
        "/images/header-bg1.jpg",
        "/images/header-bg2.jpg",
        "/images/header-bg3.jpg",
      ],
      previewImage: null,
    };
  },
  mounted() {
    // Animasi bergerak secara otomatis
    this.startScroll();
  },
  methods: {
    openPreview(image) {
      this.previewImage = image;
    },
    closePreview() {
      this.previewImage = null;
    },
    startScroll() {
      const track = this.$refs.galleryTrack;
      let scrollAmount = 0;

      setInterval(() => {
        scrollAmount -= 1; // Kecepatan scroll
        if (scrollAmount <= -track.scrollWidth / 2) {
          scrollAmount = 0;
        }
        track.style.transform = `translateX(${scrollAmount}px)`;
      }, 20); // Sesuaikan interval untuk kelancaran animasi
    },
  },
};
</script>

<style scoped>
.contain {
  width: 100vw;
  height: max-content;
}
.couple {
  font-family: "Imperial Script", cursive;
  font-size: 75px;
  letter-spacing: 3px;
  font-weight: 500;
  color: black;
  margin-bottom: 20px;
}
.gallery-container {
  overflow: hidden;
  width: 100vw;
  display: flex;
  justify-content: center;
}
.gallery-track {
  display: flex;
  gap: 10px;
  will-change: transform;
}
.gallery-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s;
}
.gallery-image:hover {
  transform: scale(1.1);
}
.preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.preview-image {
  max-width: 90vw;
  max-height: 90vh;
}

/* Responsive styling for mobile */
@media (max-width: 768px) {
  .gallery-image {
    width: 100px; /* Sesuaikan ukuran gambar untuk mobile */
    height: auto;
  }
  .couple {
    font-size: 50px;
  }
}
</style> -->

<template>
  <div class="contain text-center">
    <h1 class="couple">Galeri Kami</h1>

    <!-- Baris pertama -->
    <div class="gallery-container">
      <div class="gallery-track" ref="galleryTrack1">
        <img
          v-for="(image, index) in images"
          :key="'images1' + index"
          :src="image"
          @click="openPreview(image)"
          class="gallery-image"
          alt="Galeri Image"
        />
      </div>
    </div>

    <!-- Baris kedua -->
    <div class="gallery-container">
      <div class="gallery-track" ref="galleryTrack2">
        <img
          v-for="(image, index) in images2"
          :key="'images2' + index"
          :src="image"
          @click="openPreview(image)"
          class="gallery-image"
          alt="Galeri Image"
        />
      </div>
    </div>

    <div class="gallery-container">
      <div class="gallery-track" ref="galleryTrack3">
        <img
          v-for="(image, index) in images3"
          :key="'images3' + index"
          :src="image"
          @click="openPreview(image)"
          class="gallery-image"
          alt="Galeri Image"
        />
      </div>
    </div>

    <!-- Preview Modal -->
    <div v-if="previewImage" class="preview-modal" @click="closePreview">
      <img :src="previewImage" class="preview-image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/images/sma1.jpg",
        "/images/sma2.jpg",
        "/images/sma3.jpg",
        "/images/sma4.jpg",
        "/images/sma5.jpg",
        "/images/sma6.jpg",
      ],
      images2: [
        "/images/kuliah1.jpg",
        "/images/kuliah2.jpg",
        "/images/kuliah3.jpg",
        "/images/kuliah4.jpg",
        "/images/kuliah5.jpg",
        "/images/kuliah6.jpg",
      ],
      images3: [
        "/images/front-bg.jpg",
        "/images/front-bg-mobile.jpg",
        "/images/header-bg1.jpg",
        "/images/header-bg2.jpg",
        "/images/header-bg3.jpg",
        "/images/kerja1.jpg",
      ],
      previewImage: null,
    };
  },
  mounted() {
    this.startScroll(this.$refs.galleryTrack1);
    this.startScroll(this.$refs.galleryTrack2);
    this.startScroll(this.$refs.galleryTrack3);
  },
  methods: {
    openPreview(image) {
      this.previewImage = image;
    },
    closePreview() {
      this.previewImage = null;
    },
    startScroll(track) {
      let scrollAmount = 0;

      setInterval(() => {
        scrollAmount -= 1;
        if (scrollAmount <= -track.scrollWidth / 2) {
          scrollAmount = 0;
        }
        track.style.transform = `translateX(${scrollAmount}px)`;
      }, 20);
    },
  },
};
</script>

<style scoped>
.contain {
  width: 100vw;
  height: max-content;
  background: linear-gradient(to bottom, #faeeec, #ffffff);
}
.couple {
  padding-top: 20px;
  font-family: "Imperial Script", cursive;
  font-size: 75px;
  letter-spacing: 3px;
  font-weight: 500;
  color: black;
  margin-bottom: 20px;
}
.gallery-container {
  overflow: hidden;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.gallery-track {
  display: flex;
  gap: 10px;
  will-change: transform;
}
.gallery-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s;
}
.gallery-image:hover {
  transform: scale(1.1);
}
.preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.preview-image {
  max-width: 90vw;
  max-height: 90vh;
}

/* Responsive styling for mobile */
@media (max-width: 768px) {
  .gallery-image {
    width: 100%;
    height: 200px;
  }
  .couple {
    font-size: 50px;
  }
}
</style>

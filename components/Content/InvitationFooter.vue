<template>
  <div class="contain">
    <div class="text-center">
      <h3 class="couple">Terima Kasih</h3>
      <img class="ring-img mb-4" src="~/assets/images/tulips.png" alt="" />
      <p class="mb-3" style="font-style: italic">
        Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
        Bapak/Ibu/Saudara/i, berkenan hadir untuk memberikan doa restu kepada
        putra-putri kami.
      </p>
      <p style="font-style: italic">
        Atas kehadiran dan doa restunya kami ucapkan terima kasih.
      </p>
    </div>
    <footer class="text-center mt-5">
      <p class="text-white" style="font-size: 14px">
        &copy; 2024 Nocturnailed.com . All rights reserved.
      </p>
    </footer>
  </div>
</template>

<style scoped>
.contain {
  width: 100vw;
  background: linear-gradient(to bottom, #7a7a7a, #313131);
  color: white;
  padding: 10%;
}

.couple {
  padding-top: 20px;
  font-family: "Imperial Script", cursive;
  font-size: 75px;
  letter-spacing: 3px;
  font-weight: 500;
  margin: 0;
  line-height: normal;
}

p {
  margin: 0;
}

footer {
  margin-top: 20px; /* Spacing between the content and the footer */
}

img {
  width: 20%;
}

@media (max-width: 768px) {
  .contain {
    padding: 5%;
  }
  .couple {
    font-size: 50px;
  }
  img {
    width: 40%;
  }
}
</style>

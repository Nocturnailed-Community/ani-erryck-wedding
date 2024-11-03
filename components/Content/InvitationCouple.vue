<template>
  <div class="contain">
    <h1 class="couple pt-5 mb-5" style="text-align: center">Sang Mempelai</h1>
    <div class="content">
      <div class="col1">
        <h5 class="title1 mb-2">Erryck Norrys, S.Kom</h5>
        <p class="">Putra Tunggal Dari Pasangan</p>
        <p class="">Bapak Sutan Ratno</p>
        <p class="">&</p>
        <p class="mb-2">Ibu Danery</p>
        <p class="mb-2">Kp. Cihareuyheuy, Majalaya</p>
        <a
          href="https://www.instagram.com/errycknorrys"
          target="_blank"
          class="btn btn-outline-light"
          >@errycknorrys</a
        >
      </div>
      <div class="col2">
        <h5 class="title1 mb-2">Ani Royani, S.Pd</h5>
        <p class="">Putri Bungsu Dari Pasangan</p>
        <p class="">Bapak Sanen</p>
        <p class="">&</p>
        <p class="mb-2">Ibu Isah</p>
        <p class="mb-2">Kp. Ciwalengke, Majalaya</p>
        <a
          href="https://www.instagram.com/aniroy_29"
          target="_blank"
          class="btn btn-outline-light"
          >@aniroy_29</a
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <h1 class="arabic mb-3">
          ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
        </h1>
        <!-- <h2 class="mb-5">(gambar cincin)</h2> -->
        <img class="ring-img mb-3" src="~/assets/images/ring.png" alt="" />
        <p style="font-style: italic" class="mb-5">
          Dengan memohon rahmat dan ridho Allah SWT, Kami bermaksud mengundang
          Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan putra dan putri
          kami yang insya Allah akan dilaksanakan pada:
        </p>
        <div class="date mb-3">
          <h3 class="text-center" style="margin: 0">AHAD</h3>
          <div class="d-flex justify-content-center align-items-center">
            <div class="text-end" style="width: 50%">
              <hr class="hr-up" />
              <h3>November</h3>
              <hr />
            </div>
            <h1 class="mx-lg-3 mx-md-2 mx-sm-2" style="font-size: 55px">10</h1>
            <div class="text-start" style="width: 50%">
              <hr class="hr-up" />
              <h3>2024</h3>
              <hr />
            </div>
          </div>
          <a
            href="https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Erryck+Norrys+dan+Ani+Royani&dates=20241110T080000Z/20241110T120000Z&details=Acara+Pernikahan+Erryck+Norrys+dan+Ani+Royani&location=Kp.+Ciwalengke+RT+01/12,+Kec.+Majalaya+-+Kab.+Bandung"
            target="_blank"
            class="btn btn-outline-secondary mb-4 btn-invitation"
            >SIMPAN TANGGAL</a
          >
        </div>
        <div class="mb-4">
          <h5 style="margin: 0px">PUKUL</h5>
          <div class="time">
            <div class="text-center">
              <div class="hr-with-text">
                <hr />
                <h6>AKAD</h6>
                <hr />
              </div>
              <h6>08.00 - Selesai</h6>
              <hr />
            </div>
            <div class="text-center">
              <div class="hr-with-text">
                <hr />
                <h6>RESEPSI</h6>
                <hr />
              </div>
              <h6>10.00 - Selesai</h6>
              <hr />
            </div>
          </div>
        </div>
        <img class="ring-img mb-4" src="~/assets/images/tulips.png" alt="" />
        <div class="mb-3">
          <h5>BERTEMPAT DI</h5>
          <div class="hr-with-text">
            <hr />
            <h6>Kp. Ciwalengke RT 03/07, Kec. Majalaya - Kab. Bandung</h6>
            <hr />
          </div>
          <a
            href="https://maps.app.goo.gl/fUPNqhUWVMwc3dhh8"
            target="_blank"
            class="btn btn-outline-secondary mb-4 btn-invitation"
            ><i class="bi bi-map me-2"></i>GOOGLE MAPS</a
          >
        </div>
        <p style="font-style: italic" class="mb-3">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
          Bapak/Ibu/Saudara/i, berkenan hadir untuk memberikan doa restu kepada
          putra-putri kami.
        </p>
        <p style="font-style: italic" class="mb-3">
          Atas kehadiran dan doa restunya kami ucapkan terima kasih.
        </p>
        <h1 class="arabic mb-5">
          وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </h1>
        <h6>KAMI YANG BERBAHAGIA</h6>
        <p style="font-style: italic">Keluarga Bapak Sutan Ratno</p>
        <p style="font-style: italic" class="mb-2">Ibu Danery</p>
        <p style="font-style: italic" class="mb-2">&</p>
        <p style="font-style: italic">Keluarga Bapak Sanen</p>
        <p style="font-style: italic" class="">Ibu Isah</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-invitation {
  width: 30%;
  height: 100%;
}
.ring-img {
  width: 20%;
}
.arabic {
  font-family: "Amiri";
}
.time {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
}
.hr-with-text {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 10px; /* Sesuaikan jarak antara teks dan garis */
}
.hr-with-text hr {
  flex: 1;
  border: none;
  border-top: 2px solid black; /* Sesuaikan warna dan ketebalan garis */
}
.card {
  margin: 1% 15%;
  border-radius: 50px;
  opacity: 95%;
}
.card-body {
  padding: 10%;
}
.hr-up {
  margin-top: 5px;
}
.couple {
  font-family: "Imperial Script", cursive;
  font-size: 75px;
  letter-spacing: 3px;
  font-weight: 500;
  color: black;
  padding-top: 8px;
}
.title1 {
  font-family: "Imperial Script", cursive;
  font-weight: 600;
  font-size: xx-large;
}
.contain {
  padding-bottom: 10%;
  width: 100vw;
  height: max-content;
  color: white;
  background-image: url("~/assets/images/flowers-bg.svg"); /* Gambar untuk desktop */
  background-size: cover;
  background-position: center;
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0% 5% 5% 5%;
}
.col1 {
  /* height: 100vh; */
  border: 15px lightgrey solid;
  border-radius: 20%;
  text-align: center;
  margin: 0% 2% 0% 20%;
  padding: 60% 2% 2% 2%;
  background-image: url("~/assets/images/erick.jpg"); /* Gambar untuk desktop */
  background-size: cover;
  background-position: center;
}
.col2 {
  border: 15px lightgrey solid;
  border-radius: 20%;
  text-align: center;
  margin: 0% 20% 0% 2%;
  padding: 60% 2% 2% 2%;
  background-image: url("~/assets/images/ani-cantik.jpg"); /* Gambar untuk desktop */
  background-size: cover;
  background-position: center;
}
p {
  margin-bottom: 0px;
}
@media (max-width: 768px) {
  .couple {
    font-size: 50px;
  }
  .content {
    display: block;
    padding: 0%;
  }
  .col1 {
    margin: 0px 10px 0px 10px;
    padding: 90% 2% 2% 2%;
    margin-bottom: 10px;
    border-radius: 10%;
    border: 10px lightgrey solid;
  }
  .col2 {
    border: 10px lightgrey solid;
    margin: 0px 10px 0px 10px;
    padding: 90% 2% 2% 2%;
    border-radius: 10%;
  }
  .card {
    margin: 10% 10px;
    border-radius: 20px;
    opacity: 95%;
  }
  .card-body {
    padding: 15% 5%;
  }
  .arabic {
    font-size: 24px;
  }
  .ring-img {
    width: 30%;
  }
  .btn-invitation {
    width: 60%;
  }
}
</style>

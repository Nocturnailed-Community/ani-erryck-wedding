<template>
  <div class="atm-card">
    <div class="atm-card-header">
        <img :src="logoUrl" alt="Bank Logo" class="atm-card-logo" :style="{ width: logoWidth }" loading="lazy" />
    </div>
    <div class="atm-card-content">
      <p class="label">NOMOR REKENING</p>
      <p class="account-number">{{ accountNumber }}</p>
      <p class="label">NAMA REKENING</p>
      <p class="account-name">{{ accountName }}</p>
      <p class="bank-name">{{ bankName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  accountNumber: string;
  accountName: string;
  bankName: string;
  logoUrl: string;
  logoWidth: string;
}>();
</script>

<style scoped>
.atm-card {
  background-color: #1486c2;
  border-radius: 12px;
  padding: 16px 20px;
  width: 100%;
  max-width: 400px;
  height: 260px;
  color: #fff;
  font-family: Arial, sans-serif;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.atm-card-header {
  display: flex;
  justify-content: flex-end;
}

.atm-card-logo {
  /* width: 20%; */
  font-weight: bold;
}

.atm-card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px; /* Spasi antar elemen lebih kecil */
}

.label {
  font-size: 0.7em; /* Ukuran font lebih kecil */
  opacity: 0.8;
}

.account-number {
  font-size: 1.2em; /* Ukuran font lebih kecil */
  font-weight: bold;
  letter-spacing: 1px; /* Jarak huruf dikurangi */
  margin: 2px 0;
}

.account-name {
  font-size: 0.9em; /* Ukuran font lebih kecil */
  font-weight: bold;
}

.bank-name {
  font-size: 0.8em; /* Ukuran font lebih kecil */
  opacity: 0.9;
}

/* Background circle design */
.atm-card::before {
  content: "";
  position: absolute;
  top: 20%;
  left: 10%;
  width: 180px; /* Ukuran lingkaran disesuaikan */
  height: 180px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.atm-card::after {
  content: "";
  position: absolute;
  bottom: 15%;
  right: 10%;
  width: 130px; /* Ukuran lingkaran disesuaikan */
  height: 130px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
@media (max-width: 768px) {
  p {
    margin: 0px;
  }
  .atm-card {
    height: 210px;
  }
}
</style>

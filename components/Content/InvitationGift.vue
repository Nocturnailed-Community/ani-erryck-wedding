<template>
  <div></div>
  <div class="contain">
    <div class="text-center">
      <h3 class="couple">Wedding Gift</h3>
      <p>Terima kasih atas hadiah dan doa terbaik Anda!</p>
    </div>
    <div class="wedding-gift-container">
      <div class="account-container">
        <AtmCard
          logo-url='/images/logo-bjb-light.png'
          accountNumber="0121478951100"
          accountName="ANI ROYANI"
          bankName="Bank BJB"
          logoWidth="20%"
        />
        <button @click="copyAccountNumber('0121478951100')" class="btn btn-outline-light mt-3">
          📋 SALIN NO REKENING
        </button>
      </div>

      <div class="account-container">
        <AtmCard
        logo-url='/images/logo-mandiri-light.png'
          accountNumber="1300025092118"
          accountName="ERRYCK NORRYS"
          bankName="Bank Mandiri"
          logoWidth="30%"
        />
        <button @click="copyAccountNumber('1300025092118')" class="btn btn-outline-light mt-3">
          📋 SALIN NO REKENING
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AtmCard from "~/components/SupportComponent/AtmCard.vue";

const copyAccountNumber = (accountNumber: string) => {
  navigator.clipboard.writeText(accountNumber);
  alert("Nomor Rekening tersalin!");
};
</script>

<style scoped>
.contain {
  width: 100vw;
  background: linear-gradient(to bottom, #ffffff, #7a7a7a);
  border-color: transparent;
}
.couple {
  padding-top: 20px;
  font-family: "Imperial Script", cursive;
  font-size: 75px;
  letter-spacing: 3px;
  font-weight: 500;
  color: black;
  margin: 0px;
}
.wedding-gift-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 24px;
  text-align: center;
  width: 100vw;
  /* height: max-content; */
}

.account-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.copy-button {
  margin-top: 12px;
  padding: 8px 16px;
  background-color: #8c7c64;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s ease;
}

.copy-button:hover {
  background-color: #77684e;
}

.wedding-gift-message {
  background-color: #faeeec;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .wedding-gift-container {
    display: block;
  }
  .couple {
    font-size: 50px;
  }
  .account-container{
    margin-bottom:20px ;
  }
}
</style>

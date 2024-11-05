<template>
  <div class="contain">
    <h1 class="couple">Ucapan</h1>

    <div class="card shadow">
      <div class="card-header text-center text-white">
        Berikan Ucapan kepada mempelai.
      </div>
      <div class="card-body">
        <!-- Form to Add New Wish -->
        <form @submit.prevent="submitWish" class="mb-4 text-center">
          <div class="form-group mb-3">
            <input
              v-model="name"
              type="text"
              placeholder="Masukkan Nama"
              class="form-control"
              required
            />
          </div>
          <div class="form-group mb-3">
            <textarea
              v-model="wish"
              placeholder="Kirim Ucapan untuk Pengantin"
              class="form-control"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-outline-light btn-block" style="width: 50%;" >Kirim</button>
        </form>

        <!-- Display List of Wishes -->
        <div v-if="wishes.length" class="comment-section">
          <!-- <div v-for="wish in wishes" :key="wish.id" class="card mb-3">
            <div class="card-body">
              <h5 class="card-title text-dark">{{ wish.name }}</h5>
              <p class="card-text text-muted">{{ wish.wish }}</p>
            </div>
          </div> -->
          <div v-for="wish in wishes" :key="wish.id" class="comment">
            <div class="profile-pic">
              <i class="bi bi-chat-left-quote"></i>
            </div>
            <div class="comment-content">
              <p class="comment-name" style="margin-bottom: 0%;" >{{ wish.name }}</p>
              <p class="comment-text">{{ wish.wish }}</p>
            </div>
          </div>
        </div>
        <p v-else class="mb-4 text-white text-center">
          Belum ada ucapan. Jadilah orang pertama yang meninggalkannya!
        </p>

        <!-- Pagination Controls -->
        <div class="d-flex justify-content-center text-white">
          <button
            @click="currentPage > 1 && fetchWishes(currentPage - 1)"
            :disabled="currentPage === 1"
            class="btn btn-secondary me-2"
          >
            Previous
          </button>
          <span class="align-self-center"
            >Page {{ currentPage }} of {{ totalPages }}</span
          >
          <button
            @click="currentPage < totalPages && fetchWishes(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="btn btn-secondary ms-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useFetch } from "#app";

const name = ref("");
const wish = ref("");
const wishes = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const limit = 5; // Number of wishes per page

// Fetch existing wishes with pagination
const fetchWishes = async (page = 1) => {
  currentPage.value = page;
  const { data, error } = await useFetch(
    `/api/wishes/get-wishes?page=${page}&limit=${limit}`
  );

  if (!error.value) {
    wishes.value = data.value.wishes;
    totalPages.value = data.value.totalPages;
  }
};

onMounted(() => fetchWishes(currentPage.value));

// Function to submit a new wish
const submitWish = async () => {
  const response = await fetch("/api/wishes/post-wish", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name.value, wish: wish.value }),
  });

  const result = await response.json();

  if (result.success) {
    // Add the new wish to the list and reset the form
    wishes.value.unshift({
      id: result.id,
      name: name.value,
      wish: wish.value,
      timestamp: new Date().toISOString(),
    });
    name.value = "";
    wish.value = "";
    // Refetch the wishes to update the list
    fetchWishes(currentPage.value);
  } else {
    alert(result.error || "Failed to submit the wish");
  }
};
</script>

<style scoped>
.contain {
  width: 100vw;
  height: max-content;
  background: #7a7a7a;
  padding: 0px 100px 30px 100px;
  border-color: transparent;
}
.couple {
  padding-top: 20px;
  font-family: "Imperial Script", cursive;
  font-size: 75px;
  letter-spacing: 3px;
  font-weight: 500;
  color: white;
  /* margin-b: 0px; */
  text-align: center;
}
.card {
  width: 100%;
  background: #7a7a7a;
  border-color: white;
}
.card-body {
  padding: 50px;
}

.comment-section {
  /* max-width: 500px; */
  /* margin: 0 auto; */
  padding: 10px;
}

.comment {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color:transparent;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent; /* Warna latar belakang untuk ikon */
  color: white; /* Warna ikon */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
}

.profile-pic i {
  font-size: 30px; /* Ukuran ikon */
}

.comment-content {
  /* max-width: 400px; */
  word-wrap: break-word;
  word-break: break-word;
}

.comment-name {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  color: white;
}

.comment-text {
  font-size: 13px;
  color: white;
  margin: 5px 0 0;
}



@media (max-width: 768px) {
  .contain {
    padding: 10px;
  }
  .card-body {
    padding: 10px;
  }
  .couple {
    font-size: 50px;
  }
}
</style>

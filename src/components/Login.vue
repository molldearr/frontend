<template>
  <div class="flex items-center justify-center min-h-screen bg-pink-50">
    <div class="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg border-2 border-pink-300">

      <!-- Header -->
      <div class="flex flex-col items-center mb-6">
        <h1 class="text-2xl font-bold text-pink-600 mt-2">Login</h1>
        <p class="text-pink-500 text-sm mt-2 mb-4">Введите ваши данные</p>
      </div>

      <!-- Email -->
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full mb-4 p-3 rounded-lg border-2 border-pink-300 bg-pink-50 placeholder-pink-400 text-pink-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 outline-none transition"
      />

      <!-- Password -->
      <input
        v-model="password"
        type="password"
        placeholder="Пароль"
        class="w-full mb-4 p-3 rounded-lg border-2 border-pink-300 bg-pink-50 placeholder-pink-400 text-pink-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 outline-none transition"
      />

      <!-- Button -->
      <button
        @click="login"
        class="w-full py-3 rounded-lg bg-pink-500 text-white text-lg font-semibold shadow-md hover:bg-pink-600 active:bg-pink-700 transition"
      >
        Войти
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      localStorage.setItem("userId", this.email);
      window.location.reload();
    }
  }
};
</script>

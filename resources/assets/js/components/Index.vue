<template>
  <section>
    <div class="logo"></div>
    <div class="title"></div>
    <div class="subtitle">
      <p>Welcome to frontend confidence with vue!</p>
      <p>
        <router-link to="/about">To About page</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Index"
};
</script>
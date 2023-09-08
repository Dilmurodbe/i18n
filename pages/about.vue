
<template>
  <div>
    <h1>
    About Page</h1>
    <h1>{{ $t("hello") }}</h1>
    <h1>{{ $t("welcome") }}</h1>
    <NuxtLink :to="('/')">
    home page
  </NuxtLink>
  </div> 
</template>

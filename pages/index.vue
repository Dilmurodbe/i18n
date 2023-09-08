
<template>
  <div>
    <h1>{{ $t("hello") }}</h1>
    <h1>{{ $t("welcome") }}</h1>
    <NuxtLink :to="('/about')">
    About page
  </NuxtLink>
  </div> 
</template>

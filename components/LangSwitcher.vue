<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<template>
  
  <select class="select" v-model="language">
    <option
      v-for="item in locales"
      :key="typeof item === 'object' ? item.code : item"
      :value="typeof item === 'object' ? item.code : item"
    >
      {{ typeof item === "object" ? item.name : item }}
    </option>
  </select>
</template>
<style>
.select{
  padding: 5px 25px;
  border-radius: 10px;
}
</style>
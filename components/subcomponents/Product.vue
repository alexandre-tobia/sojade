<template>
  <div class="product position-relative">
    <img
      src="/assets/img/product_0_1.png"
      :alt="product.title"
      class="mb-3 position-relative product__img"
    >
    <p class="product__title t-white position-absolute w-100">{{ product.title }}</p>
    <img
      src="/assets/img/product_flowers.png"
      alt="Décoration produit"
      class="position-absolute product__flower"
    >
    <img
      src="/assets/img/product_arrow.png"
      alt="Flèche produit"
      class="position-absolute product__arrow"
    >
    <p class="product__subtitle t-white position-absolute w-100">{{ product.subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"]
};
</script>

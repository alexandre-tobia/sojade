<template>
  <div
    class="product position-relative"
    :class="{customProduct0: product.superclass, customProduct1: product.hyperclass}"
  >
    <div class="d-flex flex-column align-items-center">
      <img :src="product.url" :alt="product.title" class="mb-3 product__img">
      <div class="product__mask position-absolute">
        <p class="product__title t-white position-absolute w-100">{{ product.title }}</p>
        <img
          src="/assets/img/product_flowers.png"
          alt="Décoration produit"
          class="position-absolute product__flower"
        >
        <div class="product__arrow__container position-relative d-flex align-items-end flex-column">
          <img
            src="/assets/img/product_arrow.png"
            alt="Flèche produit"
            class="product__arrow position-relative mb-2"
          >
          <p
            class="product__subtitle t-white d-inline-block position-relative"
          >{{ product.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
  data() {
    return {
      customProduct0: false,
      customProduct1: false
    };
  }
};
</script>

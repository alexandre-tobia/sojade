<template>
  <div id="products">
    <div class="products__presentation py-5">
      <div class="container">
        <!-- PRODUCT TABS -->
        <div class="d-flex justify-content-md-around justify-content-center flex-wrap px-5">
          <h3
            class="mb-2 mb-md-0 t-white product__tab position-relative d-inline-block mx-3 mx-md-0"
            v-for="product in products"
            :key="product.id"
            @click="displayProducts(product)"
          >
            {{ product.tabName }}
            <div class="separator ml-2"></div>
          </h3>
        </div>
      </div>
      <!-- END PRODUCT TABS -->
      <img src="/assets/img/icon_bio.png" alt="Icon Bio" width="50" class="icon__bio my-4">
      <div
        class="d-none w-100"
        :class="{active: activeProduct === product.id}"
        v-for="product in products"
        :key="product.id"
      >
        <div class="d-flex flex-column justify-content-center">
          <p class="description mb-5 t-white text-center">{{ product.description }}</p>
          <div class="d-flex flex-column flex-wrap align-items-center px-md-5">
            <div class="d-flex flex-row flex-wrap align-items-center justify-content-center w-100">
              <div v-if="product.featured.length === 4" class="w-100">
                <Product
                  class="w-sm-100 width-25"
                  v-for="(p, index) in product.featured"
                  :key="index"
                  :product="p"
                  :class="{active: activeProduct === product.id}"
                />
              </div>
              <div
                v-else-if="product.featured.length === 3"
                class="w-100 d-flex justify-content-around flex-wrap"
              >
                <Product
                  class="w-33 w-sm-100"
                  v-for="(p, index) in product.featured"
                  :key="index"
                  :product="p"
                  :class="{active: activeProduct === product.id}"
                />
              </div>
              <div v-else class="w-100 d-flex justify-content-center">
                <Product
                  class="100"
                  v-for="(p, index) in product.featured"
                  :key="index"
                  :product="p"
                  :class="{active: activeProduct === product.id}"
                />
              </div>
            </div>
            <a
              href="http://www.sojade.fr/produits/"
              class="s-button bg-white t-p-green my-4"
              target="_blank"
            >Voir la gamme</a>
          </div>
        </div>
      </div>
    </div>
    <!-- PRODUCT RECEIPE -->
    <div class="w-100">
      <Receipe :receipe="currentProduct.receipe"/>
    </div>
  </div>
</template>

<script>
import json from "./receipe";
import Product from "./subcomponents/Product";
import Receipe from "./subcomponents/Receipe";
export default {
  name: "Products",
  components: { Product, Receipe },
  data() {
    return {
      products: [],
      activeProduct: 1,
      currentProduct: json[0]
    };
  },
  mounted() {
    this.products = json;
  },
  methods: {
    displayProducts(product) {
      this.activeProduct = product.id;
      this.currentProduct = product;
    }
  }
};
</script>

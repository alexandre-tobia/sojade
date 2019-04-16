<template>
  <div>
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="products__presentation pt-5">
        <div class="container">
          <div class="row justify-content-center p-0">
            <div class="col-8">
              <div class="d-flex flex-column justify-content-center">
                <!-- TABS -->
                <div
                  class="d-flex flex-row justify-content-center justify-content-md-between flex-wrap"
                >
                  <h3
                    class="mb-2 mb-md-0 mx-4 mx-md-0 t-white product__tab position-relative d-inline-block"
                    v-for="product in products"
                    :key="product.id"
                    @click="displayProducts(product.id)"
                  >
                    {{ product.tabName }}
                    <div class="separator ml-2"></div>
                  </h3>
                </div>
                <img
                  src="/assets/img/icon_bio.png"
                  alt="Icon Bio"
                  width="50"
                  class="icon__bio my-4"
                >
                <!-- END TABS -->
                <div
                  class="product"
                  :class="{active: activeProduct === product.id}"
                  v-for="product in products"
                  :key="product.id"
                >
                  <div class="d-flex flex-column align-items-center">
                    <p class="description mb-4 t-white text-center">{{ product.description }}</p>
                    <div class="d-flex flex-row justify-content-around flex-wrap w-100 mb-3">
                      <Product
                        v-for="(p, index) in product.featured"
                        :key="index"
                        :product="p"
                        :class="{active: activeProduct === product.id}"
                      />
                    </div>
                    <a :href="product.link" class="s-button bg-white t-p-green my-4">Voir la gamme</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- PRODUCT RECEIPE -->
      <div
        class="product w-100"
        :class="{active: activeProduct === product.id}"
        v-for="product in products"
        :key="product.id"
      >
        <Receipe :receipe="product.receipe" :class="{active: activeProduct === product.id}"/>
      </div>
    </div>
  </div>
</template>

<script>
import json from "./data";
import Product from "./subcomponents/Product";
import Receipe from "./subcomponents/Receipe";
export default {
  name: "Products",
  components: { Product, Receipe },
  data() {
    return {
      products: [],
      activeProduct: 1
    };
  },
  mounted() {
    console.log(json);
    this.products = json;
  },
  methods: {
    displayProducts(productId) {
      this.activeProduct = productId;
    }
  }
};
</script>

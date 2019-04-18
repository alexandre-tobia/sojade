<template>
  <div class="receipe">
    <div class="container-fluid p-0">
      <div class="row no-gutters">
        <div class="col-md-5 d-flex">
          <div
            class="receipe__image"
            :style="{ backgroundImage: `url('${receipe.receipeImage}')` }"
          ></div>
          <!-- <img src="/assets/img/receipe_4.jpg" :alt="receipe.name" class="receipe__image"> -->
        </div>
        <div class="col-md-7">
          <div class="row no-gutters">
            <div class="col-12">
              <div class="d-flex flex-column">
                <div class="receipe__content pt-3 bg-palelight d-flex flex-column">
                  <div class="title d-inline-block mb-3">
                    <h3
                      class="pb-0 m-0 position-relative d-inline-block t-p-green w-100 text-center"
                    >{{ receipe.name }}</h3>
                    <div class="separator my-3 t-p-green"></div>
                    <div
                      class="receipe_number d-flex flex-row align-items-center mb-4 justify-content-center"
                    >
                      <img
                        src="/assets/img/icon_people.png"
                        :alt="'Pour' + receipe.number + 'personnes'"
                        class="mr-3"
                      >
                      <p class="t-p-green mb-0 d-inline-block">Pour {{ receipe.number }} personnes</p>
                    </div>
                    <div
                      class="d-flex flex-row mb-3 w-100 justify-content-center"
                      v-if="receipe.cookTime != 0 || receipe.baking != 0"
                    >
                      <div v-if="receipe.cookTime != 0" class="mr-4">
                        <img
                          src="/assets/img/icon_time.png"
                          :alt="receipe.cookTime + 'minutes de préparation'"
                          class="mr-3"
                        >
                        <p class="t-p-green mb-0 d-inline-block">{{ receipe.cookTime }} minutes</p>
                      </div>
                      <div v-if="receipe.baking != 0">
                        <img
                          src="/assets/img/icon_bake.png"
                          :alt="receipe.baking + 'minutes de préparation'"
                          class="mr-3"
                        >
                        <p class="t-p-green mb-0 d-inline-block">{{ receipe.baking }} minutes</p>
                      </div>
                    </div>
                  </div>

                  <hooper
                    ref="hooper"
                    :infiniteScroll="true"
                    :wheelControl="false"
                    class="bg-paleyellow h-100"
                    style="display:inherit; max-height: 600px;"
                  >
                    <slide>
                      <div class="receipe__list my-5 mx-5 px-md-5">
                        <h4
                          class="ingredients position-relative d-inline-block mb-3 receipe__splash__after"
                          style="right: .3em;"
                        >Ingrédients</h4>
                        <ul
                          class="pl-0 d-flex flex-wrap justify-content-between"
                          v-if="receipe.ingredients.hasCategories == true"
                        >
                          <li
                            v-for="(category, itx) in receipe.ingredients.categories"
                            :key="itx"
                            class="mb-2"
                          >
                            <span class="t-p-green">{{ category.title }}</span>
                            <ul class="mb-2">
                              <li
                                class="t-mediumgrey mt-1 mb-2 d-flex flex-row align-items-center t-12px"
                                v-for="(need, nb) in category.needs"
                                :key="nb"
                              >
                                <span class="t-p-green mr-3">o</span>
                                {{ need }}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul v-else>
                          <li
                            class="t-mediumgrey mt-1 mb-2 d-flex flex-row align-items-center t-12px"
                            v-for="(need, nb) in receipe.ingredients.needs"
                            :key="nb"
                          >
                            <span class="t-p-green mr-3">o</span>
                            {{ need }}
                          </li>
                        </ul>
                      </div>
                    </slide>
                    <slide>
                      <div class="receipe__advices py-5 bg-paleyellow">
                        <div class="mx-5 px-md-5">
                          <h4
                            class="step__title position-relative d-inline-block mb-3 receipe__splash__after"
                            style="right: .5em;"
                          >Étapes de préparation</h4>
                          <ul class="pl-0" v-if="receipe.preparation.preparationHasSteps === true">
                            <li v-for="(steps, sts) in receipe.preparation.cook" :key="sts">
                              <span class="t-p-green">{{ steps.title }}</span>
                              <ul class="mb-2 d-flex flex-wrap justify-content-between">
                                <li
                                  class="t-mediumgrey mt-1 mb-2 d-flex flex-row t-12px"
                                  v-for="(step, st) in steps.list"
                                  :key="st"
                                >
                                  <span class="t-p-green mr-3">o</span>
                                  {{ step }}
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <ul class="pl-0" v-else>
                            <li
                              class="t-mediumgrey mt-1 mb-2 d-flex flex-row t-12px"
                              v-for="(step, st) in receipe.preparation.cook"
                              :key="st"
                            >
                              <span class="t-p-green mr-3">o</span>
                              {{ step }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </slide>
                    <slide v-if="receipe.advices.hasAdvices">
                      <div class="p-5 bg-paleyellow">
                        <h4
                          class="advices__title position-relative d-inline-block mb-3 receipe__splash__after"
                        >Conseils</h4>
                        <li class="t-mediumgrey mt-1 mb-2 d-flex flex-row t-12px">
                          <span class="t-p-green mr-3">o</span>
                          {{ receipe.advices.advice }}
                        </li>
                      </div>
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                  </hooper>
                  <!-- <div class="used__product">
                    <img src="/assets/img/used_product.png" alt="Produit utilisé">
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "Receipe",
  props: ["receipe"],
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },

  updated() {
    this.$refs.hooper.restart();
    this.$refs.hooper.slideTo(0);
  }
};
</script>

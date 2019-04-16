<template>
  <div>
    <Quiz></Quiz>
    <Products></Products>
    <div class="container py-5" id="concours">
      <Game/>
    </div>
  </div>
</template>

<script>
import Game from "./Game";
import Quiz from "./Quiz";
import Products from "./Products";
export default {
  components: { Game, Quiz, Products }
};
</script>

<template>
  <div id="quiz">
    <div v-if="currentQuestion < 6" class="container-fluid" id="quiz-container">
      <div class="row h-100">
        <div class="col-12 col-md-5 d-flex flex-column justify-content-center">
          <div
            v-show="currentQuestion > 1"
            class="text-uppercase t-mediumgrey t-12px previous__question"
            @click="previousQuestion"
          >Précédente</div>
          <div class="question__counter t-white position-relative my-2" v-if="currentQuestion != 0">
            <img src="/assets/img/quiz_counter.png" :alt="currentQuestion + '/5'">
            <h4 class="position-absolute counter__text">{{ currentQuestion }} / 5</h4>
          </div>
          <div class="title">
            <h2 class="pb-0 m-0 position-relative d-inline-block t-p-green">Le Quiz Bio</h2>
            <div class="separator my-3 t-p-green"></div>
          </div>
          <div class="content mt-4">
            <div v-if="currentQuestion != 0">
              <div
                class="w-100"
                v-for="question in questions"
                :key="question._id"
                :class="{active: currentQuestion === question._id }"
                style="display: none;"
              >
                <p class="t-p-green font-weight-bold">{{ question.question }}</p>
                <form @submit.prevent="nextStep" v-if="!hasBeenAnswered">
                  <div
                    class="form-check abc-checkbox abc-checkbox-circle my-2"
                    v-for="(choice, idx) in question.answers"
                    :key="idx"
                  >
                    <input
                      @change="selectAnswer(choice)"
                      class="form-check-input"
                      type="checkbox"
                      :id="'checkbox_' + idx + '_' + question._id"
                    >
                    <label
                      class="form-check-label"
                      :for="'checkbox_' + idx + '_' + question._id"
                    >{{ choice.answer }}</label>
                  </div>
                  <button
                    type="submit"
                    class="t-white s-button bg-s-green mx-0 my-2 py-3"
                  >Voir la réponse</button>
                </form>
                <div v-else class="w-100">
                  <p v-if="answer" class="d-flex flex-column w-100">
                    <span class="answer__correct font-weight-bold text-uppercase t-s-green">Exact !</span>
                    <span
                      class="t-14px w-100"
                      style="line-height: 100%;"
                    >{{ question.explaination.true }}</span>
                  </p>
                  <p v-else class="d-flex flex-column w-100">
                    <span class="answer__false font-weight-bold text-uppercase t-orange">Faux...</span>
                    <span
                      class="t-14px w-100"
                      style="line-height: 100%;"
                    >{{ question.explaination.false }}</span>
                  </p>

                  <button
                    class="s-button bg-s-green t-white mx-0"
                    @click="nextQuestion"
                  >Question suivante</button>
                </div>
              </div>
            </div>
            <div v-else>
              <p class="t-mediumgrey">
                Inscrivez-vous et tentez de remporter
                <br>3 produits SOJADE + 1 kit de graines à planter (3 plaquettes de tourbe + graines d’un mélange de
                fleurs sauvages) + 1 crayon à planter.
                <br>
                <br>Un tirage au sort désignera les 5 gagnants.
              </p>
              <button
                class="s-button bg-s-green t-white mx-0 p-3"
                @click="nextQuestion"
              >Commencer le quiz</button>
            </div>
          </div>
        </div>
        <div class="d-none d-md-flex col-md-7 px-5 flex-column justify-content-center">
          <div v-if="currentQuestion != 0">
            <div
              v-for="(question, itx) in questions"
              :key="itx"
              :class="{active: currentQuestion === question._id }"
              style="display: none;"
            >
              <img :src="question.picture" :alt="question._id" class="quiz__image">
            </div>
          </div>
          <div v-else>
            <img src="/assets/img/quiz_0.png" alt="Le Quiz Bio" class="quiz__image">
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container py-5" id="concours">
        <div
          v-show="currentQuestion > 1"
          class="text-uppercase t-mediumgrey t-12px previous__question"
          @click="previousQuestion"
        >Précédente</div>
        <Game/>
      </div>
    </div>
  </div>
</template>

<script>
import data from "./questions.js";
import Game from "./Game";

export default {
  name: "Quiz",
  components: { Game },
  data() {
    return {
      questions: [],
      activeQuestion: 1,
      answer: null,
      showAnswer: false,
      hasBeenAnswered: false,
      currentQuestion: 0
    };
  },
  mounted() {
    this.questions = data;
    console.log(this.currentQuestion);
  },
  methods: {
    reset() {
      this.hasBeenAnswered = false;
      this.answer = null;
    },
    selectAnswer(choice) {
      this.answer = choice.isValid;
    },
    nextStep() {
      if (this.answer != null) {
        this.hasBeenAnswered = true;
      }
    },

    nextQuestion() {
      this.reset();
      this.currentQuestion++;
    },

    previousQuestion() {
      this.currentQuestion--;
      if (this.currentQuestion < 0) {
        this.currentQuestion = 1;
      }
    }
  }
};
</script>

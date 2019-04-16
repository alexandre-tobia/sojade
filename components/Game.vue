<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-5">
        <form id="form" @submit.prevent="addUser">
          <input type="text" v-model="participant.lastname" placeholder="Nom">
          <input type="text" v-model="participant.firstname" placeholder="Prénom">
          <input type="date" v-model="participant.birthdate" placeholder="Date de naissance">
          <input type="number" v-model="participant.zipcode" placeholder="Code postal">
          <input type="text" v-model="participant.address" placeholder="Adresse">
          <input type="text" v-model="participant.city" placeholder="Ville">
          <input type="text" v-model="participant.email" placeholder="Mail">
          <input type="number" v-model="participant.phone" placeholder="Téléphone">
          <div class="form-group">
            <input type="checkbox" name="conditions" v-model="participant.conditions">
            <label
              for="conditions"
            >J'ai bien pris connaissance des conditions de participation et j'accepte le règlement du jeu concours</label>
          </div>
          <div class="form-group">
            <input type="checkbox" name="offers" v-model="participant.offers">
            <label for="offers">Je souhaite recevoir les offres de SOJADE et de ses partenaires</label>
          </div>
          <div class="form-group">
            <input type="checkbox" name="newsletter" v-model="participant.newsletter">
            <label
              for="newsletter"
            >Je m'inscris à la newsletter hebdomadaire de marieclaireidees.com</label>
          </div>
        </form>
      </div>
      <div class="col-7"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      participant: {
        firstname: "",
        lastname: "",
        birthdate: "",
        zipcode: "",
        address: "",
        city: "",
        email: "",
        phone: "",
        conditions: false,
        offers: false,
        newsletter: false
      }
    };
  }
};
</script>
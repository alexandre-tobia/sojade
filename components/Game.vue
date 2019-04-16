<template>
    <div class="row">
        <div class="col-md-6">
            <h2 class="pb-0 m-0 position-relative d-inline-block t-p-green">Inscription au jeu</h2>
            <div class="separator my-3 t-p-green"></div>
            <p class="font-weight-bold t-p-green">
                Inscrivez-vous et tentez de remporter
                <br>3 produits SOJADE + 1 kit de graines à planter (3 plaquettes de tourbe + graines d’un mélange de
                fleurs sauvages + mode d’emploi présentés dans une pochette en kraft avec logo Sojade) + 1 crayon à
                planter.
            </p>
            <form id="form" @submit.prevent="addUser">
                <div class="mb-4 d-flex flex-wrap inputs justify-content-between">
                    <input type="text" v-model="participant.lastname" placeholder="Nom" required>
                    <input type="text" v-model="participant.firstname" placeholder="Prénom" required>
                    <input
                            type="text"
                            v-model="participant.birthdate"
                            placeholder="Date de naissance"
                            required
                    >
                    <input type="text" v-model="participant.zipcode" placeholder="Code postal" required>
                    <input type="text" v-model="participant.address" placeholder="Adresse" required>
                    <input type="text" v-model="participant.city" placeholder="Ville" required>
                    <input type="text" v-model="participant.email" placeholder="Mail" required>
                    <input type="text" v-model="participant.phone" placeholder="Téléphone" required>
                </div>
                <div class="form-check abc-checkbox abc-checkbox-circle my-2">
                    <input
                            class="form-check-input"
                            id="checkbox1"
                            type="checkbox"
                            v-model="participant.conditions"
                            required
                    >
                    <label
                            class="form-check-label t-12px"
                            for="checkbox1"
                    >J'ai bien pris connaissance des conditions de participation et j'accepte le règlement du jeu
                        concours</label>
                </div>
                <div class="form-check abc-checkbox abc-checkbox-circle my-2">
                    <input
                            class="form-check-input"
                            id="checkbox2"
                            type="checkbox"
                            v-model="participant.offers"
                    >
                    <label
                            class="form-check-label t-12px"
                            for="checkbox2"
                    >Je souhaite recevoir les offres de SOJADE et de ses partenaires</label>
                </div>
                <div class="form-check abc-checkbox abc-checkbox-circle my-2">
                    <input
                            class="form-check-input"
                            id="checkbox3"
                            type="checkbox"
                            v-model="participant.newsletter"
                    >
                    <label
                            class="form-check-label t-12px"
                            for="checkbox3"
                    >Je m'inscris à la newssletter hebdomadaire de marieclaireidees.com</label>
                </div>
                <button @click="submit" class="t-white s-button bg-s-green mx-0 my-2 py-3">Envoyer</button>
            </form>
        </div>
        <div class="d-none d-md-block col-6 p-0">
            <img src="/assets/img/game_image.png" alt="Image jeu concours" class="w-100">
        </div>
    </div>
</template>

<script>
    export default {
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
        },
        methods: {
            submit() {
            }
        }
    };
</script>

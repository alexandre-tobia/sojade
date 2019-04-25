<template>
  <div>
    <div v-if="!hasBeenSubmitted">
      <div class="row">
        <div class="col-md-6">
          <h2 class="pb-0 m-0 position-relative d-inline-block t-p-green">Inscription au jeu</h2>
          <div class="separator my-3 t-p-green"></div>
          <p class="font-weight-bold t-p-green">
            Inscrivez-vous et tentez de remporter
            <br>3 produits SOJADE + 1 kit de graines à planter (3 plaquettes de tourbe + graines d’un
            mélange de
            fleurs sauvages) + 1
            crayon à
            planter.
          </p>
          <form id="form" @submit.prevent="submit">
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
            <div class="form-check abc-checkbox abc-checkbox-circle my-2 ml-3 ml-md-0">
              <input
                class="form-check-input"
                id="checkbox1"
                type="checkbox"
                v-model="participant.conditions"
                required
              >
              <label class="form-check-label t-12px" for="checkbox1">
                J'ai bien pris connaissance des conditions
                <br>de participation et
                <span
                  style="text-decoration: underline"
                  data-toggle="modal"
                  data-target="#modalReglement"
                >j'accepte le règlement du jeu concours</span>
              </label>
            </div>
            <div class="form-check abc-checkbox abc-checkbox-circle my-2 ml-3 ml-md-0">
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
            <div class="form-check abc-checkbox abc-checkbox-circle my-2 ml-3 ml-md-0">
              <input
                class="form-check-input"
                id="checkbox3"
                type="checkbox"
                v-model="participant.newsletter"
              >
              <label
                class="form-check-label t-12px"
                for="checkbox3"
              >Je m'inscris à la newsletter hebdomadaire de marieclaireidees.com</label>
            </div>
            <button type="submit" class="t-white s-button bg-s-green mx-0 my-2 py-3">Envoyer</button>
          </form>
        </div>
        <div class="d-none d-md-block col-6 p-0">
          <img src="/assets/img/game_image.png" alt="Image jeu concours" class="w-100">
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <h2
            class="pb-0 m-0 position-relative d-inline-block t-p-green"
          >Merci de votre participation !</h2>
          <div class="separator my-3 t-p-green"></div>
          <p class="font-weight-bold t-mediumgrey">
            En renseignant vos informations dans le formulaire,
            vous participez au tirage au sort pour gagner
            3 produits SOJADE + 1 kit de graines à planter
            (3 plaquettes de tourbe + graines d’un mélange de fleurs sauvages)
            + 1 crayon à planter.
          </p>
        </div>
        <div class="d-none d-md-block col-6 p-0">
          <img src="/assets/img/game_image.png" alt="Image jeu concours" class="w-100">
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modalReglement"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalReglementTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content" style="background: white">
          <div class="modal-header d-flex justify-content-between">
            <h5 class="modal-title" id="exampleModalLongTitle">Réglement du jeu</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3 class="text-center">Règlement du jeu SOJADE</h3>
            <h3>Société organisatrice</h3>
            <p>
              Marie Claire Album – SAS au capital de 4.347.640 € - 10, boulevard des Frères Voisin, 92792
              Issy
              les Moulineaux Cedex 9 –552 062 770 RCS Nanterre
            </p>
            <h3>Modalités de participation</h3>
            <p>
              Le jeu
              <strong>«SOJADE»</strong>, gratuit et sans obligation d’achat, sera ouvert aux
              personnes physiques
              majeures résidant sur le territoire français (métropole, Corse et Monaco compris) disposant
              d’un
              accès à Internet et d’une adresse électronique (E-mail), à l'exclusion des employés de la
              société organisatrice, des sociétés apparentées, des sous-traitants, des sociétés
              partenaires
              ainsi que des membres de leur famille.
            </p>
            <br>
            <p>
              Le jeu se déroulera du
              <strong>18 Avril au 16 Juin 2019</strong> inclus sur le site
              <a
                target="_blank"
                href="https://www.marieclaire.fr/idees/"
              >www.marieclaire.fr/idees/</a>
            </p>
            <h3>Le principe</h3>
            <p>
              Les internautes qui souhaitent participer au jeu pourront le faire selon les modalités
              détaillées ci-dessous, entre le 18 Avril et le 16 Juin 2019 via le site
              <a
                target="_blank"
                href="https://www.marieclaire.fr/idees/"
              >www.marieclaire.fr/idees/</a> à la page :
              <a
                target="_blank"
                href="https://www.marieclaire.fr/idees/sojade"
              >https://www.marieclaire.fr/idees/sojade</a>
              <br>
              <br>
            </p>
            <ul>
              <li class="mt-1">
                • se connecter sur la page web dédiée au jeu Disney, accessible sur le site
                www.marieclaire.fr/idees/
              </li>
              <li class="mt-1">
                • compléter le formulaire d’inscription mis en ligne en précisant
                <br>impérativement
                les
                informations suivantes du formulaire :
                <br>Nom
                Prénom
                Email
                Adresse
                Code postal
                Localité
              </li>
              <li class="mt-1">
                • cocher la case « J'ai bien pris connaissance des conditions de
                participation et
                j'accepte
                le
                règlement du jeu concours »,
              </li>
              <li
                class="mt-1"
              >• En option, cocher la case « Je souhaite recevoir les offres de SOJADE»</li>
              <li class="mt-1">
                • En option, cocher la case « Je m'inscris à la newsletter hebdomadaire de
                Marie Claire
                idées »
              </li>
              <li class="mt-1">• cliquer sur « ENVOI » pour valider l’inscription au jeu concours.</li>
            </ul>
            <p>La participation ne sera prise en compte qu’une fois le formulaire d’inscription validé.</p>
            <br>
            <p>
              Une seule participation par personne sera prise en considération (même nom et même prénom),
              et
              il ne pourra y avoir qu'un seul gagnant par foyer (même adresse).
            </p>
            <br>
            <p>
              Chaque Participant doit renseigner l'ensemble des zones de saisie, à l’exception de celles
              mentionnées comme n'étant pas obligatoires.
            </p>
            <br>
            <p>
              Les Participants s'engagent à compléter de bonne foi le formulaire d'inscription mis à leur
              disposition et à transmettre à la Société organisatrice des informations exactes.
            </p>
            <br>
            <p>
              Le Participant est informé et accepte que les informations saisies dans le formulaire
              d'inscription valent preuve de son identité. Les informations saisies par le Participant
              l'engagent dès leur validation.
            </p>
            <br>
            <p>
              La Société organisatrice se réserve le droit de vérifier l'exactitude des données fournies
              par
              les participants en demandant des pièces justificatives d’identité et d’adresse. La Société
              organisatrice se réserve le droit d’annuler toute participation dans l’hypothèse d’une
              discordance entre les informations déclarées lors du remplissage du formulaire et les pièces
              produites.
            </p>
            <br>
            <h3>Détermination des gagnants</h3>
            <p>
              Il y aura au total
              <strong>5 gagnants</strong>, qui seront déterminés par tirage au sort
              dans les 8 jours qui
              suivent la clôture du jeu par la Société organisatrice, parmi l’ensemble des participants
              dûment
              inscrits avant les dates et heure limites de participation.
            </p>
            <br>
            <p>Il ne sera fait aucun envoi par courrier de la description du lot et du nom des gagnants.</p>
            <br>
            <p>
              L’organisateur se réserve le droit de faire toutes les vérifications utiles en ce qui
              concerne
              l'identité et l'adresse des participants, en demandant des pièces justificatives d’identité
              et
              d’adresse. Toute indication d'identité ou d'adresse fausse entraînera l'élimination de la
              participation.
            </p>
            <br>
            <p>
              Les dotations seront envoyées aux gagnants par la société partenaire à laquelle la société
              organisatrice transmettra les noms et coordonnées des gagnants.
            </p>
            <br>

            <h3>Dotations</h3>
            <p>
              3 produits SOJADE + 1 kit de graines à planter (3 plaquettes de tourbe + graines d’un
              mélange de
              fleurs sauvages) + 1 crayon à planter. La totalité du lot est valorisé à 15,00 € TTC environ.
            </p>
            <br>
            <p>
              Chaque dotation est nominative et ne peut être revendue. Les lots offerts ne pourront pas
              être
              échangés à la demande des gagnants contre des espèces ou d'autres lots.
            </p>
            <br>
            <p>
              Les dotations seront envoyées aux gagnants par la société partenaire à laquelle la société
              organisatrice transmettra les noms et coordonnées des gagnants.
            </p>
            <br>
            <p>
              Les 5 gagnants recevront leur lot par envoi postal directement à l’adresse qu’ils auront
              communiquée.
            </p>
            <br>
            <p>
              Chaque lot est strictement limité à sa désignation. Il ne peut donner lieu à aucune
              contestation
              d’aucune sorte, ni à son remplacement ou échange pour quelque cause que ce soit.
            </p>
            <br>
            <p>
              La société organisatrice pourra remplacer le lot annoncé par un lot de valeur équivalente si
              des
              circonstances extérieures l’y contraignent.
            </p>
            <hr>

            <h3>Modalités de remboursement</h3>
            <p>
              Les participants par Internet (à l'exclusion des connexions par câble, ADSL ou tout autre
              accès
              haut débit à Internet) ayant joué depuis le territoire français (métropole et Départements
              d'Outre-Mer) pourront, s'ils le souhaitent, se faire rembourser la somme qu'ils auront
              dépensé
              pour jouer (forfaitairement 0,25 euro), ainsi que le timbre de leur demande de remboursement
              sur
              demande conjointe (timbre tarif vitesse lente sur la base d'un poids total de 20 grammes).
            </p>
            <br>
            <p>
              Toute demande de remboursement devra être faite, au plus tard 30 jours après la
              participation,
              par écrit à : Marie Claire idées – Jeu «SOJADE», 10, boulevard des Frères Voisin - 92130
              ISSY
              LES MOULINEAUX et doit être accompagnée d’un RIB ou d’un RIP.
            </p>
            <br>
            <p>
              Le participant y indiquera clairement et impérativement la mention Jeu
              <strong>«SOJADE»</strong>,, ses nom,
              prénom et adresse complète ainsi que :
            </p>
            <br>
            <ul>
              <li class="mt-1">• La date et l'heure de participation ;</li>
              <li class="mt-1">• L'adresse e-mail indiquée lors de la participation ;</li>
              <li class="mt-1">
                • Une copie de la facture de l'opérateur téléphonique et/ou fournisseur
                d'accès Internet
                au
                nom
                du participant et détaillant la connexion concernée (à l'exclusion des connexions par
                câble,
                ADSL ou tout autre accès haut débit à Internet).
              </li>
            </ul>

            <p>Ne seront pas prises en compte les demandes de remboursement :</p>

            <p>- Postées plus de 60 jours après la date de participation au jeu;</p>
            <p>- Ne correspondant à aucune inscription de coordonnées sur les fichiers informatiques ;</p>
            <p>- Faites pour un participant par une autre personne ;</p>
            <p>
              - Incomplètes (coordonnées incomplètes, absence du nom du jeu; absence de la date de
              participation, absence de la date et de l'heure de participation, de l'adresse e-mail, et de
              la
              copie de la facture détaillant la connexion concernée).
            </p>

            <h3>Loi Informatique et Libertés</h3>
            <p>
              Les informations nominatives recueillies dans le cadre du présent Jeu sont destinées à la
              société organisatrice, membre du groupe Marie Claire afin de fidélisation et de prospection
              par
              animation marketing. Elles sont nécessaires pour mémoriser les participations au jeu et
              permettre l'attribution des lots.
            </p>
            <br>
            <p>
              Les participants sont informés que les données personnelles les concernant et enregistrées
              dans
              le cadre de ce Jeu sont nécessaires à la prise en compte de leur participation et à
              l’organisation du Jeu. Elles ne seront pas utilisées à d’autres fins, ni conservées à
              l’issue du Jeu.
            </p>
            <br>
            <p>
              Les données personnelles des gagnants seront communiquées à la société partenaire, SOJADE,
              et à
              ses prestataires logistiques, à seule fin d’envoi des dotations.
            </p>
            <br>
            <p>
              Seront également transmises à la société Partenaire les données personnelles des
              participants
              qui auront expressément demandé à recevoir des communications et/ou des offres commerciales
              de
              SOJADE en cochant la case du formulaire prévue à cet effet.
            </p>
            <br>
            <p>
              La Société organisatrice s'engage à prendre toutes mesures techniques et organisationnelles
              qu’elle estime utiles et appropriées au regard de la nature des données, afin de garantir la
              sécurité et la confidentialité des données personnelles collectées et, notamment d’empêcher
              qu’elles ne soient déformées, endommagées, ou que des tiers non autorisés y aient accès.
            </p>
            <br>
            <p>
              Conformément à la règlementation application en matière de données personnelles, en ce
              compris
              le règlement européen n°2016/679, les participants bénéficient des droits d’accès, de
              rectification, d’effacement, d’opposition, à la portabilité des données et à la limitation
              des
              traitements sur les données personnelles les concernant.
            </p>
            <br>
            <p>
              L’exercice de ces droits se fera par écrit à l’adresse mentionnée ci-dessus ou par email à
              <a
                href="mailto:dpo-jeuxgmc@gmc.tm.fr"
              >po-jeuxgmc@gmc.tm.fr</a>.
            </p>
            <br>
            <p>
              Les données personnelles des participants étant nécessaires à la gestion du Jeu, tout
              participant demandant la suppression de ses données avant la fin du Jeu sera exclu du Jeu.
            </p>
            <br>
            <p>
              Pour plus d’informations vous pouvez consulter notre Politique de Confidentialité sur le
              site
              <a
                target="_blank"
                href="http://www.magicmaman.com"
              >www.magicmaman.com</a>
            </p>
            <br>
            <p>Il ne sera fait aucun envoi par courrier de la description du lot et du nom des gagnants.</p>
            <br>
            <p></p>
            <h3>Réclamations</h3>
            <p>Toute réclamation devra se faire par écrit à :</p>
            <br>
            <p>
              Magicmaman jeu «SOJADE», 10 boulevard des Frères Voisin, 92792 Issy-les-Moulineaux Cedex 9,
              en
              indiquant le nom du jeu, les : nom, prénom, adresse complète et adresse mail du participant
              ; et
              cela dans un délai d’un (1) mois après la clôture du jeu. Aucune réclamation ne sera
              acceptée
              passé ce délai.
            </p>
            <br>

            <h3>Responsabilités</h3>
            <p>
              La société organisatrice est responsable de la remise du lot aux gagnants. Le lot ne pourra
              plus
              être réclamé après un délai d’un (1) mois suivant la clôture du jeu.
            </p>
            <br>
            <p>
              La société organisatrice ne pourra en aucun cas être tenue responsable du dysfonctionnement
              du
              réseau Internet, du bon envoi et de la bonne réception des mails, de l'avarie des services
              postaux, de la mauvaise diffusion du jeu, de sa suspension ou de son annulation.
            </p>
            <br>
            <p>
              Toute tentative par un participant ou par toute personne, d’endommager volontairement un
              site
              web constitue une atteinte à la réglementation civile et pénale et la société organisatrice
              se
              réserve le droit de poursuivre tous agissements de cette nature.
            </p>
            <br>
            <p>
              La Société organisatrice ne saurait encourir aucune responsabilité du fait de l’organisation
              de
              ce jeu pour une raison dont l’origine serait extérieure à son action, et notamment si en cas
              de
              force majeure ou d’événements indépendants de leur volonté (par exemple, si le jeu ne
              pouvait se
              dérouler convenablement du fait d’un virus, d’un bug, d’une intervention d’un tiers non
              autorisé, d’une fraude, de problèmes techniques et/ou postaux), elle était amenée à annuler
              le
              présent jeu, à l’écourter, le proroger, le reporter.
            </p>
            <br>

            <h3>Le règlement</h3>
            <p>
              Toute participation à ce jeu implique l’acceptation pure et simple et sans réserve du
              présent
              règlement, la renonciation à tout recours concernant les conditions d’organisation et le
              déroulement du jeu, ses résultats et l’attribution des prix.
            </p>
            <br>
            <p>Le règlement est consultable dans son intégralité sur la page dédiée au jeu :</p>
            <br>
            <p>
              <a
                target="_blank"
                href="https://www.marieclaire.fr/idees/sojade"
              >https://www.marieclaire.fr/idees/sojade</a>
            </p>
            <br>
            <p>
              Il en ira de même pour tout(e) éventuel(le) avenant ou modification apporté(e) au présent
              règlement. Les cas non prévus dans le règlement seront tranchés par la société
              organisatrice, et
              sa décision sera sans appel.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { participantsCollection } from "../assets/fireConfig";

export default {
  props: ["question"],
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
      },
      isEmailValid: false,
      hasBeenSubmitted: false
    };
  },
  methods: {
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    isValid: function() {
      var validation = this.validEmail(this.participant.email);
      return !validation
        ? (this.isEmailValid = false)
        : (this.isEmailValid = true);
    },
    submit: function() {
      if (this.isValid) {
        participantsCollection.add(this.participant).then(() => {
          this.participant = {};
          this.hasBeenSubmitted = true;
        });
      }
    }
  }
};
</script>

<script>
export default {
  name: 'AdvancedSearchPage',
  data() {
    return {
      cardMasters: [
        {
          img: '/img/generic-avatar.jpg',
          name: 'Kevin Luca Bochenski Badellino',
          gameSystem: 'Dungeons and Dragons',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus eos expedita soluta autem, hic, eveniet magnam qui dolorum amet et totam nobis animi ipsam fugit quaerat optio, vitae tempora',
        },
        {
          img: '/img/generic-avatar.jpg',
          name: 'Alex Chihaia',
          gameSystem: 'Dungeons and Dragons',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus eos expedita soluta autem, hic, eveniet magnam qui dolorum amet et totam nobis animi ipsam fugit quaerat optio, vitae tempora',
        },
        {
          img: '/img/generic-avatar.jpg',
          name: 'Giacomo Rebussi',
          gameSystem: 'Dungeons and Dragons',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus eos expedita soluta autem, hic, eveniet magnam qui dolorum amet et totam nobis animi ipsam fugit quaerat optio, vitae tempora',
        },
        {
          img: '/img/generic-avatar.jpg',
          name: 'Gaetano Panìco',
          gameSystem: 'Dungeons and Dragons',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus eos expedita soluta autem, hic, eveniet magnam qui dolorum amet et totam nobis animi ipsam fugit quaerat optio, vitae tempora',
        },
        {
          img: 'img/generic-avatar.jpg',
          name: 'Diego Romeo',
          gameSystem: 'Dungeons and Dragons',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus eos expedita soluta autem, hic, eveniet magnam qui dolorum amet et totam nobis animi ipsam fugit quaerat optio, vitae tempora',
        },
      ],
    };
  },
};
</script>

<template>
  <main>
    <div class="container-fluid">
      <!-- row top -->
      <div class="row mx-auto mt-2 align-items-center" id="row-one">
        <!-- col for select -->
        <div class="col-6 py-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <!-- /col for select -->
        <!-- col for checkbox -->
        <div
          class="col-6 d-flex gap-3 align-items-center justify-content-center py-3"
        >
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1"
              >Dungeons and Dragons</label
            >
          </div>
        </div>
        <!-- /col for checkbox -->
        <!-- button search -->
        <div class="text-center py-3">
          <button class="btn button"><strong>Search</strong></button>
        </div>
        <!-- /button search -->
      </div>
      <!-- /row top -->

      <!-- row bottom -->
      <div class="row">
        <!-- col per immagine e dati -->
        <div class="col">
          <div class="mt-4 mb-3">
            <ul>
              <!-- v-for sul array  -->
              <li v-for="li in cardMasters" class="d-flex py-2 px-2">
                <!-- immagine -->
                <div class="container-img">
                  <img class="img-fluid" :src="li.img" :alt="li.name" />
                </div>
                <!-- /immagine -->
                <!-- dati del array -->
                <div class="ms-3">
                  <h4>Name: {{ li.name }}</h4>
                  <h5><strong>Game System: </strong>{{ li.gameSystem }}</h5>
                  <p><strong>Description: </strong> {{ li.description }}</p>
                </div>
                <!-- /dati del array -->
              </li>
              <!-- /v-for sul array  -->
            </ul>
          </div>
        </div>
        <!-- /col per immagine e dati -->
      </div>
      <!-- /row bottom -->
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '../scss/helpers/variables' as *;

#row-one {
  border: 2px solid $contrast-color;
}

button {
  background-color: $contrast-color;
  color: $light-color;
  border: 1px solid $contrast-color;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 5px 20px;
}

button:hover {
  background-color: $light-color;
  color: $contrast-color;
  border-color: $contrast-color;
}
</style>

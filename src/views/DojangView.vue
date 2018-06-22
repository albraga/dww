<template>
  <div class="container">
    <hr>
    <div class="row">
      <div class="col">
        <button @click="toggleEnable2">asyncAwait</button>
      </div>
      <div class="col">
        <button @click="toggleEnable3">jQuery</button>
      </div>
      <div class="col">
        <button @click="toggleEnable4">Promise</button>
      </div>
      <div class="col">
        <button @click="toggleEnable5">Componentes</button>
      </div>
      <div class="col">
        <button @click="toggleEnable6">Fetch</button>
      </div>
      <div class="col">
        <button @click="toggleEnable7">Axios</button>
      </div>
      <div class="col">
        <button @click="toggleEnable8">Vanilla</button>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col" v-if="isEnable2">
        <async-await></async-await>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col" v-if="isEnable3">
        <jquery></jquery>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col" v-if="isEnable4">
        <promise></promise>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col" v-if="isEnable5">
        <componentes></componentes>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col" v-if="isEnable6">
        <fetch></fetch>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col" v-if="isEnable7">
        <axios></axios>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col" v-if="isEnable8">
        <vanilla></vanilla>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  
  import Jquery from '../dojang_components/Jquery.vue'
  import Promise from '../dojang_components/Promise.vue'
  import Componentes from '../dojang_components/Componentes.vue'
  import Fetch from '../dojang_components/Fetch.vue'
  import Axios from '../dojang_components/Axios.vue'
  import Vanilla from '../dojang_components/Vanilla.vue'
  import AsyncAwait from '../dojang_components/AsyncAwait.vue'

  export default {
    data() {
      return {
        isEnable2: false,
        isEnable3: false,
        isEnable4: false,
        isEnable5: false,
        isEnable6: false,
        isEnable7: false,
        isEnable8: false
      }
    },
    components: {
      'async-await': AsyncAwait,
      'jquery': Jquery,
      'promise': Promise,
      'componentes': Componentes,
      'fetch': Fetch,
      'axios': Axios,
      'vanilla': Vanilla
    },
    methods: {
      toggleEnable2() {
        this.isEnable2 = !this.isEnable2
      },
       toggleEnable3() {
        this.isEnable3 = !this.isEnable3
      },
      toggleEnable4() {
        this.isEnable4 = !this.isEnable4
      },
      toggleEnable5() {
        this.isEnable5 = !this.isEnable5
      },
      toggleEnable6() {
        this.isEnable6 = !this.isEnable6
      },
      toggleEnable7() {
        this.isEnable7 = !this.isEnable7
      },
      toggleEnable8() {
        this.isEnable8 = !this.isEnable8
      }
    }
  }
</script>

<style>

</style>
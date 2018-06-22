<template>
  <div v-cloak>
    <hr>
    <div v-text="html_"></div>
    <div v-html="html_"></div>
    <hr>
    <p id="pnativo">{{ title }}</p>
    <p id="autor" class="animated slideInLeft">{{ author }}</p>
    <hr>
    <p>From outside: {{ foutside }} </p>
    <hr>
    <p>{{ this.$store.getters.getmsg }}</p>
    <button class="btn btn-primary" @click="setmsg_sync">Sync</button>
    <button v-on:click="setmsg_async">Async</button>
    <hr>
    <p> {{ finside }} </p>
    <input v-model="finside">
    <hr>
    <p> {{ doMyMixin }} </p>
    <hr>
    <button @click="counter++"> --- {{ counter }} --- </button>
  </div>
</template>

<script>
  import Vue from 'vue'
  

  document.title = 'novo título'

  const myMixin = {
    data() {
      return {
        doMyMixin: 'do meu mixin...'
      }
    }
  }

  //global mixin
  Vue.mixin({
    created() {
      document.title = 'from global mixin...'
    }
  })

	export default {
    props: ['foutside','twowaybinding'],
    mixins: [myMixin],
    data() {
      return {
        finside: 'from inside',
        counter: 0,
        html_: '<p>parágrafo</p>'
      }
    },
    computed: mapState([
      'title',
      'author'
    ]),
    watch: {
      counter: function() {
        console.log('clicou...')
      }
    },
    methods: {
      setmsg_sync() {
        this.$store.commit('msgMutation', this.finside);
        setTimeout(() => {
          this.$router.push('/about');
        }, 1000)
      },
      //dispatch calls an action
      setmsg_async() {
        this.$store.dispatch('msgAction', this.finside + ' setmsg_async()');
      }
    },
    mounted() {
      document.querySelector('#autor').setAttribute('style', 'color: blue')
      document.getElementById('filho').style.backgroundColor = 'gray'
      let p = document.getElementById('pnativo');
      p.addEventListener('click', function() {
        p.innerHTML = 'novo título no p'
        p.classList.add('classe');
      });
    }
  }
  
</script>

<style>
.classe {
  color: red;
}
</style>
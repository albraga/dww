<template>
  <div>
    <objeto></objeto>
    <slote nome="componente Slote: Braga">5</slote>
  </div>
</template>

<script>
  import Vue from 'vue'

  const Objeto = {
    template: `<div>componente: const objeto = {...</div>`
  }

  Vue.component('slote', {
    render(createElement) {
      return createElement(`h${this.$slots.default[0].text}`, {
        'class': 'nome-da-classe',
        on: {
          click(e) {
            console.log('clicado!')
          }
        }
      }, this.nome)
    },
    props: ['nome']
  })

	export default {
    components: {
      Objeto
    }
  }

  </script>
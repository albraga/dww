<template>
	<div>
		{{ cidade }}
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			cidade: ''
		}
	},
	mounted() {
		getCity(90210, self = this)
	}
}

function getCity(zip, self) {
	axios.get(`https://ziptasticapi.com/${zip}`)
    .then(resp => {
      self.cidade = resp.data.city
    }).catch(error => {
      self.cidade = 'not found...'
  })
}
</script>


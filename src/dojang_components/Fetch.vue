<template>
	<div> 
		{{ cidade }}
	</div>
</template>

<script>

export default {
	data() {
		return {
			cidade: ''
		}
	},
	mounted() {
		getCity(90510, self = this)
	}
}

function getCity(zip, self) {
	fetch(`https://ziptasticapi.com/${zip}`)
		.then(function(response) {
			return response.json()
		})
		.then(function(myJson) {
			self.cidade = myJson.city
		})
}
</script>

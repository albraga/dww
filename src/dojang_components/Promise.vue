<template>
	<div>
		<p> Promise (par): {{ prometido }} </p>
		<p> erro: {{ erro }} </p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			prometido: '',
			erro: ''
		}
	},
	mounted() {
		prometoPar().then(result => this.prometido = result)
		.catch(err => this.erro = err)
	}
}

function prometoPar() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (getRandomInt(3)%2 === 0) {
			resolve('res...olvido')
			} else {
				reject('impar')
			}
		}, 2000)
	})
}

// 0 to max -1
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
</script>

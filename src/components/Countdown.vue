<template>
	<div>
		<label for="desc">Descrição do deep Work</label>
		<input type="text" name="desc" v-model="descricao"> <br> {{ descricao }}
		{{ duracaoHoras | setDoisDigitos }}:{{ duracaoMinutos | setDoisDigitos }}:{{ duracaoSegundos | setDoisDigitos }}
		<div v-if="isFormEnabled">
			<input type="radio" name="tempo" @click="setTrinta"> bloquear 30 horas<br>
			<input type="radio" name="tempo" @click="setVinte"> bloquear 20 horas<br>
			<input type="radio" name="tempo" @click="setUma"> bloquear 1 hora
		</div>
		<hr>
    {{ horas | setDoisDigitos }}:{{ minutos | setDoisDigitos }}:{{ segundos | setDoisDigitos }}
		<button v-bind:disabled="isStopDisabled" @click="stop">Stop</button>
		<button v-bind:disabled="isStartDisabled" @click="start">Start</button>
		<hr>
		<input type="file" id="input"><button @click="carregar">Load</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tempoInicial: 0,
				tempoRestante: 0,
				tempoEmSegundos: 0,
				horas: 0,
				minutos: 0,
				segundos: 0,
				oscilador: {},
				isStopDisabled: true,
				isStartDisabled: true,
				isFormEnabled: true,
				duracao: 0,
				duracaoHoras: 0,
				duracaoMinutos: 0,
				duracaoSegundos: 0,
				descricao: ''
			}
		},
		computed: {
		},
		methods: {
			stop() {
				this.isStopDisabled = true
				this.isStartDisabled = false
				salvarArquivo(this.descricao.replace(/\s/g,'')+'.json', `{
					"descricao":"${this.descricao}",
					"tempoInicial":${this.tempoInicial},
					"tempoEmSegundos":${this.tempoEmSegundos}
					}`)
				clearInterval(this.oscilador)
				this.oscilador = {}
			},
			start() {
				this.isStartDisabled = true
				this.isStopDisabled = false
				decreaseTime(self = this)
			},
			setTrinta() {
				this.horas = 30
				this.minutos = 60
				this.segundos = 60
				this.tempoEmSegundos = this.horas * this.minutos * this.minutos
				this.tempoInicial = this.tempoEmSegundos
				this.isStartDisabled = false
				this.isFormEnabled = false
			},
			setVinte() {
				this.horas = 20
				this.minutos = 60
				this.segundos = 60
				this.tempoEmSegundos = this.horas * this.minutos * this.minutos
				this.tempoInicial = this.tempoEmSegundos
				this.isStartDisabled = false
				this.isFormEnabled = false
			},
			setUma() {
				this.horas = 1
				this.minutos = 60
				this.segundos = 60
				this.tempoEmSegundos = this.horas * this.minutos * this.minutos
				this.tempoInicial = this.tempoEmSegundos
				this.isStartDisabled = false
				this.isFormEnabled = false
			},
			carregar() {
				let blb = document.getElementById('input').files[0]
				let reader = new FileReader()
				reader.addEventListener('loadend', (e) => {
  				const text = e.srcElement.result
  				this.descricao = JSON.parse(text).descricao
					this.tempoInicial = JSON.parse(text).tempoInicial
					this.tempoEmSegundos= JSON.parse(text).tempoEmSegundos
				})
				reader.readAsText(blb)
				this.isStartDisabled = false
			}
		},
		watch: {
			tempoEmSegundos() {
				convertSeconds(self = this)
				convertDuracaoSeconds(self = this)
			},
			segundos() {
				this.duracao = this.tempoInicial - this.tempoRestante
			}
		},
		filters: {
			setDoisDigitos(value) {
				return value < 10 ? '0' + value : value
			}
		}
	}

	function decreaseTime(self) {
		self.oscilador = setInterval( () => {
			if (self.tempoEmSegundos > 0)
			self.tempoEmSegundos--
			self.tempoRestante = self.tempoEmSegundos
		}, 1000)
	}
	function convertSeconds(self) {
		self.horas = Math.floor(self.tempoEmSegundos / 3600)
		self.minutos = Math.floor(self.tempoEmSegundos / 60) % 60
		self.segundos = self.tempoEmSegundos % 60
	}

	function convertDuracaoSeconds(self) {
		self.duracaoHoras = Math.floor(self.duracao / 3600)
		self.duracaoMinutos = Math.floor(self.duracao / 60) % 60
		self.duracaoSegundos = self.duracao % 60
	}

	function salvarArquivo(filename, data) {
    let blob = new Blob([data], {type: 'text/json'})
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename)
    }
    else{
        let elem = window.document.createElement('a')
        elem.href = window.URL.createObjectURL(blob)
        elem.download = filename        
        document.body.appendChild(elem)
        elem.click()       
        document.body.removeChild(elem)
    }
	}

</script>
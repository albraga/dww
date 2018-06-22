<template>
	<div>
		<nav class="nav nav-pills nav-fill">
    <router-link class="nav-item" to="/">Home</router-link>
		<router-link class="nav-item" to="/about">Sobre</router-link>
		<router-link class="nav-item" to="/contact">Contato</router-link>
		<router-link class="nav-item" to="/dojang">Dojang</router-link>
		<router-link class="nav-item" to="/dww">Deep Work Watcher</router-link>
		</nav>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

	export default {

	}

</script>

<style>


</style>

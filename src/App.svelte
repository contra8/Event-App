<script>
	import ContentWrapper from './components/ContentWrapper.svelte';
	import Header from "./components/Header.svelte";
</script>

<main>
	<Header />
	<ContentWrapper />
</main>

<style>

	:global(body) {
		padding: 0px;
		font-family: Helvetica;
		/*font-weight: 700;*/
	}

	main {
		padding: 0;
		margin: 0 auto;
		display: grid;
	}
</style>
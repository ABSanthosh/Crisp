<script>
	import { ThemeStore as theme } from '$store/ThemeStore';
	import { onMount } from 'svelte';
	onMount(() => {
		theme.subscribe((value) => {
			if (document) {
				document.documentElement.setAttribute('data-theme', value);
			}
		});
	});
</script>

<svelte:head>
	<title>Crisp</title>
	<meta charset="utf-8" />
	<meta name="color-scheme" content={$theme} />
	<meta
		content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
		name="viewport"
	/>

	<link rel="stylesheet" href="/theme/light.css" />
	<link rel="stylesheet" href="/theme/dark.css" />
</svelte:head>
<slot />

<style lang="scss" global>
	@import 'src/styles/root/global.scss';
</style>

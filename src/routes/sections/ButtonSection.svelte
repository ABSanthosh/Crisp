<script lang="ts">
	import ClassSection from '$components/ClassSection.svelte';
	import CodeSnippet from '$lib/Code';

	import Highlight, { HighlightSvelte } from 'svelte-highlight';
	import scss from 'svelte-highlight/languages/scss';
	import { xml } from 'svelte-highlight/languages';
	import github from 'svelte-highlight/styles/github';
	import githubDark from 'svelte-highlight/styles/github-dark';

	import { ThemeStore as theme } from '$store/ThemeStore';
</script>

<svelte:head>
	{@html $theme === 'light' ? github : githubDark}
</svelte:head>

<ClassSection name="Button" neededTabs={['html', 'scss', 'svelte']}>
	<svelte:fragment slot="demo">
		<button class="ButtonSection--button CrispButton">Default</button>
		<button class="ButtonSection--button CrispButton" data-type="dark"> Dark </button>
		<button class="ButtonSection--button CrispButton" data-type="black-outline">
			Black Outline
		</button>
		<button class="ButtonSection--button CrispButton" data-type="danger"> Danger </button>
		<button class="ButtonSection--button CrispButton" data-type="success"> Success </button>
	</svelte:fragment>
	<svelte:fragment slot="svelte">
		<HighlightSvelte code={CodeSnippet.button.svelte} />
	</svelte:fragment>
	<svelte:fragment slot="html">
		<Highlight language={xml} code={CodeSnippet.button.html} />
	</svelte:fragment>
	<svelte:fragment slot="scss">
		<Highlight language={scss} code={CodeSnippet.button.scss} />
	</svelte:fragment>
</ClassSection>

<style lang="scss">
	.ButtonSection--button {
		--crp-button-width: 120px;
	}

	:global(.hljs) {
		background-color: transparent !important;
		padding: 0 !important;
	}
</style>

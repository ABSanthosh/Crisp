<script lang="ts">
	import ClassSection from '$components/ClassSection.svelte';

	import Highlight from 'svelte-highlight';
	import scss from 'svelte-highlight/languages/scss';
	import { xml } from 'svelte-highlight/languages';
	import CodeSnippet from '$lib/Code';
</script>

<ClassSection name="Toggle" neededTabs={['html', 'scss']}>
	<svelte:fragment slot="demo">
		<label class="CrispToggle">
			<input type="checkbox" />
			<div />
		</label>
	</svelte:fragment>
	<svelte:fragment slot="html">
		<Highlight language={xml} code={CodeSnippet.toggle.html} />
	</svelte:fragment>
	<svelte:fragment slot="scss">
		<Highlight language={scss} code={CodeSnippet.toggle.scss} />
	</svelte:fragment>
</ClassSection>

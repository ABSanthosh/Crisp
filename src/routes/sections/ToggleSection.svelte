<script lang="ts">
	import ClassSection from '$components/ClassSection.svelte';
</script>

<ClassSection name="Toggle" >
	<svelte:fragment slot="demo">
		<label class="CrispToggle">
			<input type="checkbox" />
			<div />
		</label>
	</svelte:fragment>
</ClassSection>

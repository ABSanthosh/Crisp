<script lang="ts">
	import ClassSection from '$components/ClassSection.svelte';
	</script>



<ClassSection name="Button">
	<svelte:fragment slot="demo">
		<button class="ButtonSection--button CrispButton">Default</button>
		<button class="ButtonSection--button CrispButton" data-type="dark"> Dark </button>
		<button class="ButtonSection--button CrispButton" data-type="black-outline">
			Black Outline
		</button>
		<button class="ButtonSection--button CrispButton" data-type="danger"> Danger </button>
		<button class="ButtonSection--button CrispButton" data-type="success"> Success </button>
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

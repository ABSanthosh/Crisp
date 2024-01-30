<script lang="ts">
	import ClassSection from '$components/ClassSection.svelte';
</script>

<ClassSection name="Input">
	<svelte:fragment slot="demo">
		<input class="CrispInput" placeholder="Text" type="text" />
		<input class="CrispInput" placeholder="Number" type="number" />
		<div class="Row--center gap-10 w-100">
			<input class="CrispInput" placeholder="Date" type="date" />
			<input class="CrispInput" placeholder="Time" type="time" />
			<input class="CrispInput" placeholder="Week" type="week" />
		</div>

		<div class="Row--center gap-10 w-100">
			<input class="CrispInput" placeholder="Month" type="month" />
			<input class="CrispInput" placeholder="Datetime-local" type="datetime-local" />
			<input class="CrispInput" placeholder="Color" type="color" />
		</div>

		<label class="CrispLabel">
			<p data-required>Label</p>
			<input class="CrispInput" placeholder="Default label input" type="text" />
		</label>

		<label class="CrispLabel" data-direction="row" data-align="center">
			<p data-required>Datetime-local</p>
			<input class="CrispInput" placeholder="Datetime-local" type="datetime-local" />
		</label>

		<label class="CrispLabel" data-direction="row" data-align="center">
			<p>Label</p>
			<input class="CrispInput" placeholder="Error" data-error type="text" />
		</label>
	</svelte:fragment>
</ClassSection>

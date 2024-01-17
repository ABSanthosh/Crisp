<script>
	import ButtonSection from './sections/ButtonSection.svelte';
</script>

<main class="Home">
	<section class="Home__hero">
		<h1 class="Home__hero--title">Crisp</h1>
		<p class="Home__hero--subtitle">A collection useful of SCSS utility classes</p>
		<a
			class="CrispButton"
			href="https://github.com/ABSanthosh/Crisp"
			target="_blank"
			rel="noopener noreferrer"
		>
			Github
		</a>
	</section>
	<ButtonSection />
</main>

<style lang="scss">
	.Home {
		gap: 96px;
		padding: 0 24px;
		margin: 100px 0 400px 0;
		max-width: 618px;
		@include box($height: auto);
		@include make-flex($just: flex-start);

		&__hero {
			gap: 30px;
			@include box($height: auto);
			@include make-flex($dir: column, $just: center, $align: center);

			&--title {
				color: #4ebf59;
				font-size: 150px;
				font-weight: 500;
				text-align: center;
				text-decoration: none;
				font-family: 'Grape Nuts', cursive;
			}

			&--subtitle {
				font-size: 19px;
				text-align: center;
			}
		}
	}
</style>

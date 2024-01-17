<main class="Home">
	<section class="Home__hero">
		<h1 class="Home__hero--title">Crisp</h1>
		<p class="Home__hero--subtitle">A collection useful of SCSS utility classes</p>
	</section>
</main>

<style lang="scss">
	.Home {
		@include box();
		overflow: auto;
		padding-top: 64px;
		background-image: radial-gradient(#ddd 1px, transparent 0),
			radial-gradient(#ddd 1px, transparent 0);
		background-position:
			0 0,
			25px 25px;
		background-size: 50px 50px;
		@include make-flex($just: flex-start);

		&__hero {
			@include box($height: 50%);
			gap: 30px;
			@include make-flex($dir: column, $just: center, $align: center);

			&--title {
				font-family: 'Grape Nuts', cursive;
				font-size: 180px;
				font-weight: 900;
				color: #4ebf59;
				text-decoration: none;
			}

			&--subtitle {
				font-size: 25px;
				color: #6a6a6a;
			}
		}
	}
</style>

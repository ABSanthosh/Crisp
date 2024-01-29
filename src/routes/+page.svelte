<script lang="ts">
	import { onMount } from 'svelte';
	import ButtonSection from './sections/ButtonSection.svelte';
	import MenuSection from './sections/MenuSection.svelte';
	import ToggleSection from './sections/ToggleSection.svelte';

	$: isSticky = false;
	onMount(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 45) {
				isSticky = true;
			} else {
				isSticky = false;
			}
		});
	});
</script>

<main class="Home">
	<section class="Home__hero" class:sticky={isSticky}>
		<h1 class="Home__hero--title" class:sticky={isSticky}>Crisp</h1>
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
	<ToggleSection />
	<MenuSection />
</main>

<style lang="scss">
	.Home {
		gap: 96px;
		padding: 0 24px;
		max-width: 618px;
		margin: 100px 0 200px 0;
		@include box($height: unset);
		@include make-flex($just: flex-start);

		&__hero {
			gap: 30px;
			@include box($height: auto);
			@include make-flex($dir: column, $just: center, $align: center);

			&.sticky {
				margin-top: 90px;
			}

			&--title {
				color: #4ebf59;
				font-size: 150px;
				font-weight: 500;
				text-align: center;
				text-decoration: none;
				font-family: 'Grape Nuts', cursive;

				transition:
				font-size 0.2s,
				background-color 0.2s;
				
				&.sticky {
					top: 0;
					width: 100%;
					transition:
						font-size 0.2s,
						background-color 0;
					position: fixed;
					background-color: var(--blurBG);
					backdrop-filter: blur(15px) saturate(86%);
					border-bottom: 1px solid var(--border);
					font-size: 35px;
					font-weight: 500;
					z-index: 10;
				}
			}

			&--subtitle {
				font-size: 19px;
				text-align: center;
			}
		}
	}
</style>

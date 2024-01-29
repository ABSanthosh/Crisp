<script lang="ts">
	import Icon from '$lib/Icons';
	import { ThemeStore as theme } from '$store/ThemeStore';
	export let { name } = $$props as {
		name: string;
	};
</script>

<section class="ClassSection">
	<div class="ClassSection__content">
		<h3>
			<a href="#{name}">{name}</a>

			<button class="CrispButton" on:click={() => theme.set($theme === 'light' ? 'dark' : 'light')}>
				{@html $theme === 'light' ? Icon.moon : Icon.sun}
			</button>
		</h3>
		<div class="ClassSection__demo">
			<slot name="demo" />
		</div>
	</div>
</section>

<style lang="scss">
	.ClassSection {
		gap: 48px;
		@include box($height: auto);
		@include make-flex();

		&__content {
			gap: 16px;
			@include box($height: auto);
			@include make-flex($dir: column, $just: flex-start);

			& > h3 {
				@include box($height: auto);
				@include make-flex($dir: row, $just: space-between);

				& > button {
					padding: 4px;
					@include box(32px, 32px);
					:global(svg) {
						@include box(18px);
						:global(*) {
							color: black;
						}
					}
				}
			}
		}
		&__demo {
			@include make-flex($dir: row);
			@include box($height: auto);
			min-height: 150px;

			gap: 10px;
			padding: 15px;
			flex-wrap: wrap;
			align-content: center;
			background-position:
				0 0,
				25px 25px;
			background-size: 50px 50px;
			// @include make-flex($just: flex-start, $align: flex-start);
			border-radius: 5px;

			background-color: var(--demoBG);
			border: var(--demoBorder);
			background-image: radial-gradient(var(--demoImageColor) 1px, transparent 0),
				radial-gradient(var(--demoImageColor) 1px, transparent 0);

			// &.dark {
			// 	background-color: var(--demoBG);
			// 	border: var(--demoBorder);
			// 	background-image: radial-gradient(#585858 1px, transparent 0),
			// 		radial-gradient(#585858 1px, transparent 0);
			// }
		}
	}
</style>

<script lang="ts">
	import ClassSection from '$components/ClassSection.svelte';
	import { clickOutside } from '$lib/ClickOutside';

	/**
	 * direction   align
	 * bottom      [left, center, right]
	 * top         [left, center, right]
	 * left        [top, center, bottom]
	 * right       [top, center, bottom]
	 */

	$: align = 'right';
	$: direction = 'bottom';

	$: alignOpen = false;
	$: directionOpen = false;
</script>

<ClassSection name="Menu">
	<svelte:fragment slot="demo">
		<div class="Controls">
			<details class="CrispMenu Demo" open>
				<summary> Menu </summary>
				<div class="CrispMenu__content Demo__content" data-align={align} data-direction={direction}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</div>
			</details>
			<div class="Controls__options">
				<h4>Variations</h4>
				<details
					class="CrispMenu"
					use:clickOutside
					bind:open={alignOpen}
					on:outclick={() => (alignOpen = false)}
				>
					<summary>data-direction='{direction}'</summary>
					<div class="CrispMenu__content">
						<button
							class="CrispButton"
							class:active={direction === 'top'}
							on:click={() => {
								direction = 'top';
								if (align === 'top' || align === 'bottom') align = 'left';
							}}
						>
							top
						</button>
						<button
							class="CrispButton"
							class:active={direction === 'bottom'}
							on:click={() => {
								direction = 'bottom';
								if (align === 'top' || align === 'bottom') align = 'left';
							}}
						>
							bottom
						</button>
						<button
							class="CrispButton"
							class:active={direction === 'left'}
							on:click={() => {
								direction = 'left';
								if (align === 'right' || align === 'left') align = 'top';
							}}
						>
							left
						</button>
						<button
							class="CrispButton"
							class:active={direction === 'right'}
							on:click={() => {
								direction = 'right';
								if (align === 'right' || align === 'left') align = 'top';
							}}
						>
							right
						</button>
					</div>
				</details>
				<details
					class="CrispMenu"
					use:clickOutside
					bind:open={directionOpen}
					on:outclick={() => (directionOpen = false)}
				>
					<summary>data-align='{align}'</summary>
					<div class="CrispMenu__content">
						{#if direction === 'top' || direction === 'bottom'}
							<button
								class="CrispButton"
								on:click={() => (align = 'left')}
								class:active={align === 'left'}
							>
								left
							</button>

							<button
								class="CrispButton"
								on:click={() => (align = 'center')}
								class:active={align === 'center'}
							>
								center
							</button>
							<button
								class="CrispButton"
								on:click={() => (align = 'right')}
								class:active={align === 'right'}
							>
								right
							</button>
						{:else}
							<button
								class="CrispButton"
								on:click={() => (align = 'top')}
								class:active={align === 'top'}
							>
								top
							</button>
							<button
								class="CrispButton"
								on:click={() => (align = 'center')}
								class:active={align === 'center'}
							>
								center
							</button>
							<button
								class="CrispButton"
								on:click={() => (align = 'bottom')}
								class:active={align === 'bottom'}
							>
								bottom
							</button>
						{/if}
					</div>
				</details>
			</div>
		</div>
	</svelte:fragment>

</ClassSection>

<style lang="scss">
	.Demo {
		&__content {
			@include box(240px, auto);
		}
	}
	.Controls {
		gap: 10px;
		@include box();
		@include make-flex($dir: row, $just: space-between, $align: flex-start);

		@include respondAt(750px) {
			align-items: center;
			flex-direction: column;
			height: 250px;
		}

		.CrispMenu {
			--crp-menu-width: 220px;
		}
		&__options {
			gap: 10px;
			@include make-flex($just: flex-start, $align: center);

			.CrispMenu__content {
				@include box(100%, auto);
			}
			.CrispButton {
				--crp-button-width: 100%;

				&.active {
					--crp-button-color: #fff;
					--crp-button-background-color: #4ebf59;
				}
			}
		}
	}
</style>

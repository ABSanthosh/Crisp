<script lang="ts">
	import Icon from '$lib/Icons';
	import { ThemeStore as theme } from '$store/ThemeStore';
	export let { name, neededTabs } = $$props as {
		name: string;
		neededTabs: Array<'html' | 'scss' | 'svelte'>;
	};

	$: tabs = ['html', 'scss', 'svelte'].filter((tab) =>
		neededTabs.includes(tab as 'html' | 'scss' | 'svelte')
	);
	$: tabState = tabs[0] as (typeof tabs)[number];
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
		<!-- <div class="ClassSection__source">
			<div class="ClassSection__source--tabs">
				{#each tabs as tab}
					<button
						class="ClassSection__source--tab"
						class:active={tabState === tab}
						on:click={() => (tabState = tab)}
					>
						{tab}
					</button>
				{/each}
			</div>
			<pre>
        {#if tabState === 'html'}
					<code class="language-html">
						<slot name="html" />
					</code>
				{:else if tabState === 'svelte'}
					<code class="language-svelte">
						<slot name="svelte" />
          </code>
				{:else if tabState === 'scss'}
					<code class="language-scss">
            <slot name="scss" />
          </code>
				{/if}
      </pre>
		</div> -->
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

		&__source {
			--__active-bg: var(--codeBG);
			--__active-border: var(--codeBorder);

			@include box($height: auto);
			&--tabs {
				@include make-flex($dir: row, $just: flex-start);

				& > button {
					@include box($height: auto);
					border-radius: 0;
					padding: 8px 16px;
					outline: none;
					cursor: pointer;
					border: 1px solid transparent;

					&.active {
						background-color: var(--__active-bg);
						border-top: 1px solid var(--__active-border);
						border-left: 1px solid var(--__active-border);
						border-right: 1px solid var(--__active-border);
					}

					&:not(.active) {
						color: var(--codeDisableColor);
						background-color: var(--codeDisableBG);
						border-bottom: 1px solid var(--__active-border);
					}

					&:first-child {
						border-radius: 5px 0 0 0;
					}

					&:last-child {
						border-radius: 0 5px 0 0;
					}
				}
			}

			& > pre {
				overflow: auto;
				// max-height: 500px;
				border-radius: 0 0 5px 5px;
				@include box();
				overflow-y: auto;
			max-height: 430px;

				padding: 16px 24px 80px 24px;
				font-family: 'Space Mono', monospace;
				font-size: 15px;
				border: 1px solid var(--__active-border);
				border-top: 0px solid transparent;
				background-color: var(--__active-bg);

				& > code {
					@include box($height: auto);
					@include make-flex($just: flex-start, $align: flex-start);
				}
			}
		}
	}
</style>

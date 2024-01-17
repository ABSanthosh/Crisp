<header class="HeaderWrapper">
	<nav class="Header">
		<a class="Header__logo" href="/"> Crisp </a>
	</nav>
</header>

<style lang="scss">
	.HeaderWrapper {
		top: 0;
		left: 0;
		right: 0;
		gap: 10px;
		z-index: 5;
		position: fixed;
		@include box(100%, 64px);
		@include make-flex($dir: row);

		backdrop-filter: var(--blur);
		background-color: var(--blurDarkBG);

		border-bottom: 1px solid #e7edf1;
	}

	.Header {
		@include box();

		max-width: 1440px;
		padding: 16px 20px;
		@include make-flex($dir: row, $just: space-between);
		// background-color: antiquewhite;

    &__logo {
      font-family: 'Grape Nuts', cursive;
      font-size: 30px;
      font-weight: 600;
      color: #4ebf59;
      text-decoration: none;
    }
	}
</style>

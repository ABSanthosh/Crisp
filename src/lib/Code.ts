const CodeSnippet = {
	button: {
		svelte: ``,
		html: `<button class="CrispButton">
  Default
</button>
<button class="CrispButton" data-type="dark">
  Dark
</button>
<button class="CrispButton" data-type="black-outline">
  Black Outline
</button>
<button class="CrispButton" data-type="danger"> 
  Danger
</button>
<button class="CrispButton" data-type="success">
  Success
</button>
`,
		scss: `.CrispButton {
  --crp-button-gap: 10px;
  --crp-button-width: auto;
  --crp-button-height: 32px;
  --crp-button-font-size: 15px;
  --crp-button-padding-top: 8px;
  --crp-button-border-radius: 6px;
  --crp-button-padding-left: 10px;
  --crp-button-padding-right: 10px;
  --crp-button-padding-bottom: 8px;

  &:not(&[data-type]) {
    --crp-button-color: #11181c;
    --crp-button-color-hover: #11181c;

    --crp-button-background-color: #fbfcfd;
    --crp-button-background-color-hover: #f1f3f5;

    --crp-button-border: 1px solid #dfe3e6;
    --crp-button-border-hover: 1px solid #d7dbdf;

    --crp-button-box-shadow: 
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
      rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  &[data-type='dark'] {
    --crp-button-color: #ededed;
    --crp-button-color-hover: #ededed;

    --crp-button-background-color: #2e2e2e;
    --crp-button-background-color-hover: #343434;

    --crp-button-border: 1px solid #3e3e3e;
    --crp-button-border-hover: 1px solid #505050;

    --crp-button-box-shadow: 
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
      rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  &[data-type='black-outline'] {
    --crp-button-color: #ffffff;
    --crp-button-color-hover: #000000;

    --crp-button-background-color: #000000;
    --crp-button-background-color-hover: #ffffff;

    --crp-button-border: 1px solid #ffffff;
    --crp-button-border-hover: 1px solid #000000;

    --crp-button-box-shadow: transparent;
  }

  &[data-type='danger'] {
    --crp-button-color: #11181c;
    --crp-button-color-hover: #ffffff;

    --crp-button-background-color: #fbfcfd;
    --crp-button-background-color-hover: #ff605c;

    --crp-button-border: 1px solid #dfe3e6;
    --crp-button-border-hover: 1px solid #ff605c;

    --crp-button-box-shadow: transparent;
  }

  &[data-type='success'] {
    --crp-button-color: #11181c;
    --crp-button-color-hover: #ffffff;

    --crp-button-background-color: #fbfcfd;
    --crp-button-background-color-hover: #3ecf8e;

    --crp-button-border: 1px solid #dfe3e6;
    --crp-button-border-hover: 1px solid #3ecf8e;

    --crp-button-box-shadow: transparent;
  }

  // Basic
  gap: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  font-size: var(--crp-button-font-size);
  transition: all 0.15s ease-in-out;
  border-radius: var(--crp-button-border-radius);

  // Padding
  padding-top: var(--crp-button-padding-top);
  padding-left: var(--crp-button-padding-left);
  padding-right: var(--crp-button-padding-right);
  padding-bottom: var(--crp-button-padding-bottom);

  // Layout
  @include make-flex($dir: row);
  @include box(
    var(--crp-button-width), 
    var(--crp-button-height)
  );

  // Color
  color: var(--crp-button-color);
  border: var(--crp-button-border);
  box-shadow: var(--crp-button-box-shadow);
  background-color: var(--crp-button-background-color);

  &:hover:not(:disabled) {
    color: var(--crp-button-color-hover);
    border: var(--crp-button-border-hover);
    background-color: 
      var(--crp-button-background-color-hover);
  }

  &:disabled {
    cursor: not-allowed;
  }
}      
`
	},
	toggle: {
		svelte: ``,
		html: `<label class="CrispToggle">
  <input type="checkbox" />
  <div />
</label>`,
		scss: `.CrispToggle {
  --crp-toggle-height: 20px;
  --crp-toggle-width: 40px;
  --crp-toggle-active-color: #4cd964;
  --crp-toggle-inactive-color: #c6c5c2;

  cursor: pointer;
  font-size: 20px;
  border-radius: 1em;
  position: relative;
  display: inline-block;
  background-size: 200% 200%;
  background-position: right;
  transition: background-position 300ms;
  background-image: linear-gradient(
    to right,
    var(--crp-toggle-active-color) 50%,
    var(--crp-toggle-inactive-color) 0
  );
  @include box(
    var(--crp-toggle-width), 
    var(--crp-toggle-height)
  );

  &:has(input[type='checkbox']:checked) {
    background-position: left;
  }

  & > input {
    opacity: 0;
    @include box();
    cursor: pointer;
    position: absolute;

    &:checked + div {
      left: calc(100% - 20px);
    }
  }

  & > div {
    left: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    transition: all 300ms;
    @include box(20px, 20px);
    box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
  }
}
`
	},
	menu: {
		svelte: ``,
		html: `<details class="CrispMenu">
<summary> Menu </summary>
<div class="CrispMenu__content" 
  data-align={align} 
  data-direction={direction}
>
  Lorem ipsum dolor sit amet 
  consectetur, adipisicing elit.
</div>
</details>    
`,
		scss: `.CrispButton {
  --crp-button-gap: 10px;
  --crp-button-width: auto;
  --crp-button-height: 32px;
  --crp-button-font-size: 15px;
  --crp-button-padding-top: 8px;
  --crp-button-border-radius: 6px;
  --crp-button-padding-left: 10px;
  --crp-button-padding-right: 10px;
  --crp-button-padding-bottom: 8px;

  &:not(&[data-type]) {
    --crp-button-color: #11181c;
    --crp-button-color-hover: #11181c;

    --crp-button-background-color: #fbfcfd;
    --crp-button-background-color-hover: #f1f3f5;

    --crp-button-border: 1px solid #dfe3e6;
    --crp-button-border-hover: 1px solid #d7dbdf;

    --crp-button-box-shadow: #00000000 0px 0px 0px 0px, #00000000 0px 0px 0px 0px,
      #0000000d 0px 1px 2px 0px;
  }

  &[data-type='dark'] {
    --crp-button-color: #ededed;
    --crp-button-color-hover: #ededed;

    --crp-button-background-color: #2e2e2e;
    --crp-button-background-color-hover: #343434;

    --crp-button-border: 1px solid #3e3e3e;
    --crp-button-border-hover: 1px solid #505050;

    --crp-button-box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  &[data-type='black-outline'] {
    --crp-button-color: #ffffff;
    --crp-button-color-hover: #000000;

    --crp-button-background-color: #000000;
    --crp-button-background-color-hover: #ffffff;

    --crp-button-border: 1px solid #ffffff;
    --crp-button-border-hover: 1px solid #000000;

    --crp-button-box-shadow: transparent;
  }

  &[data-type='danger'] {
    --crp-button-color: #11181c;
    --crp-button-color-hover: #ffffff;

    --crp-button-background-color: #fbfcfd;
    --crp-button-background-color-hover: #ff605c;

    --crp-button-border: 1px solid #dfe3e6;
    --crp-button-border-hover: 1px solid #ff605c;

    --crp-button-box-shadow: transparent;
  }

  &[data-type='success'] {
    --crp-button-color: #11181c;
    --crp-button-color-hover: #ffffff;

    --crp-button-background-color: #fbfcfd;
    --crp-button-background-color-hover: #3ecf8e;

    --crp-button-border: 1px solid #dfe3e6;
    --crp-button-border-hover: 1px solid #3ecf8e;

    --crp-button-box-shadow: transparent;
  }

  // Basic
  gap: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  font-size: var(--crp-button-font-size);
  transition: all 0.15s ease-in-out;
  border-radius: var(--crp-button-border-radius);

  // Padding
  padding-top: var(--crp-button-padding-top);
  padding-left: var(--crp-button-padding-left);
  padding-right: var(--crp-button-padding-right);
  padding-bottom: var(--crp-button-padding-bottom);

  // Layout
  @include make-flex($dir: row);
  @include box(var(--crp-button-width), var(--crp-button-height));

  // Color
  color: var(--crp-button-color);
  border: var(--crp-button-border);
  box-shadow: var(--crp-button-box-shadow);
  background-color: var(--crp-button-background-color);

  &:hover:not(:disabled) {
    color: var(--crp-button-color-hover);
    border: var(--crp-button-border-hover);
    background-color: var(--crp-button-background-color-hover);
  }

  &:disabled {
    cursor: not-allowed;
  }
}`
	}
};

export default CodeSnippet;

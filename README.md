<p align="center" width="100%">
<br/>
<br/>
<img src="./static/Crisp.svg" alt="Crisp" width="60%" />
<br/>
<br/>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/82b14d31-3e23-46c3-90a5-d8ca95932fe3/deploy-status)](https://app.netlify.com/sites/crisp-scss/deploys)

Crisp is a collection of SCSS utility classes designed to facilitate the implementation of lightweight and minimalistic HTML components. With a focus on simplicity and modularity, Crisp provides a set of utility classes that can be easily integrated into your projects.

## Table of Contents

- [ToDo](#todo)
- [Getting Started](#getting-started)
- [Utility Classes](#utility-classes)
  - [Button](#button)
  - [Toggle](#toggle)
  - [Menu](#menu)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)
- [License](#license)

## ToDo

- [ ] Add Icons support
  - Use `data-icon` attribute selector, add icons as svg from [Lucid Icons](https://lucide.dev/icons/) or [Radix Icons](https://www.radix-ui.com/icons) and add them as background image.
- [ ] Toggle -> Switch
  - Use design inspiration from [this(sizes and design)](https://www.radix-ui.com/themes/docs/components/switch)
- [x] Menu
  - [x] standard menu items style(from icloud)
- [ ] [Checkbox](https://unruffled-hoover-de9320.netlify.app/?path=/story/data-input-checkbox--default) (icloud style too)
- [ ] Input: Icloud style default, [variations, sizes, ](https://unruffled-hoover-de9320.netlify.app/?path=/story/data-input-input--error-state)
- [ ] [Radio](https://unruffled-hoover-de9320.netlify.app/?path=/story/data-input-radio--default) (icloud style too)
- [ ] Select
- [ ] [Divider](https://unruffled-hoover-de9320.netlify.app/?path=/story/utilities-divider--default)
- [ ] Loader: iOS style, supabase style
- [ ] Popover
- [ ] [Modal](https://unruffled-hoover-de9320.netlify.app/?path=/story/overlays-modal--with-vertical-layout)
- [ ] Pane
  - [ ] Left
  - [ ] Right

## Getting Started

To get started with Crisp, you need scss(or if you prefer, convert the scss files to css) and that's it! These are mostly just visual sugar to semantic HTML elements, to make it do things that usually need js to achieve.

```bash
yarn add sass
```

And you need `_mixins.scss` for the utility classes to work incase you're not using css because these are used in the utility classes.

```scss
@mixin respondAt($breakpoint) {
	@media (max-width: $breakpoint) {
		@content;
	}
}

@mixin box($width: 100%, $height: 100%) {
	width: $width;
	height: $height;
}

@mixin make-flex($dir: column, $align: center, $just: center) {
	display: flex;
	flex-direction: $dir;
	align-items: $align;
	justify-content: $just;
}
```

## Utility Classes

| Type   | data attributes             | css variables                                                      |
| ------ | --------------------------- | ------------------------------------------------------------------ |
| Button | `data-type='dark'`          | `--crp-button-gap: 10px;`                                          |
|        | `data-type='black-outline'` | `--crp-button-width: auto;`                                        |
|        | `data-type='danger'`        | `--crp-button-height: 32px;`                                       |
|        | `data-type='success'`       | `--crp-button-font-size: 15px;`                                    |
|        |                             | `--crp-button-padding-top: 8px;`                                   |
|        |                             | `--crp-button-border-radius: 6px;`                                 |
|        |                             | `--crp-button-padding-left: 10px;`                                 |
|        |                             | `--crp-button-padding-right: 10px;`                                |
|        |                             | `--crp-button-padding-bottom: 8px;`                                |
|        |                             | `--crp-button-color: #11181c;`                                     |
|        |                             | `--crp-button-color-hover: #11181c;`                               |
|        |                             | `--crp-button-background-color: #fbfcfd;`                          |
|        |                             | `--crp-button-background-color-hover: #f1f3f5;`                    |
|        |                             | `--crp-button-border: 1px solid #dfe3e6;`                          |
|        |                             | `--crp-button-border-hover: 1px solid #d7dbdf;`                    |
|        |                             | `--crp-button-box-shadow: ...`                                     |
| Toggle | [default]                   | `--crp-toggle-height: 20px;`                                       |
|        |                             | `--crp-toggle-width: 40px;`                                        |
|        |                             | `--crp-toggle-active-color: #4cd964;`                              |
|        |                             | `--crp-toggle-inactive-color: #c6c5c2;`                            |
|        |                             | `--crp-toggle-box-shadow: ...`                                     |
| Menu   | data-direction='left'       | `--crp-menu-width: auto;`                                          |
|        | data-direction='right'      | `--crp-menu-height: 32px;`                                         |
|        | data-direction='top'        | `--crp-menu-min-width: 150px;`                                     |
|        | data-direction='bottom'     | `--crp-menu-offset: 8px;`                                          |
|        |                             | `--crp-menu-icon: url(...)`                                        |
|        |                             | `--crp-menu-color: #11181c;`                                       |
|        |                             | `--crp-menu-color-hover: #11181c;`                                 |
|        |                             | `--crp-menu-background-color: #fbfcfd;`                            |
|        |                             | `--crp-menu-background-color-hover: #f1f3f5;`                      |
|        |                             | `--crp-menu-border: 1px solid #dfe3e6;`                            |
|        |                             | `--crp-menu-border-hover: 1px solid #d7dbdf;`                      |
|        |                             | `--crp-menu-box-shadow: ...`                                       |
|        |                             | `--crp-menu-content-border-radius: 12px;`                          |
|        |                             | `--crp-menu-content-border: 0.2px solid rgba(201, 201, 201, 0.4);` |
|        |                             | `--crp-menu-content-padding: 5px;`                                 |
|        |                             | `--crp-menu-content-item-border-radius: 7px;`                      |
# intl-tel-material

component compatible with react.js, vue.js, vanilla.js and many others

_Built with [lit-element](https://lit-element.polymer-project.org/)_

![alt text](https://raw.githubusercontent.com/mrozkosz/intl-tel-material/master/src/assets/image1.png)

# Install

Before you start, please look at the [DEMO](https://codesandbox.io/) project
There are two ways to use this component. For simple projects or just to get started fast, we recommend using the component by script tag. If your project is using npm then we recommend using the npm package.

### Script tag

- Put this script tag in the head of your index.html:

```js
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@matthew2097/intl-tel-material/docs/intl-tel-material.bundled.min.js"
></script>
```

### NPM

- Run `npm i @matthew2097/intl-tel-material`
- import with `import '@matthew2097/intl-tel-material'`
- put this code in your project:

Then you can use the element `<intl-tel></intl-tel>` anywhere in your template, JSX, html etc.
live demo: null

## API

### Properties

| Property | Attribute | Type     | Default            |
| -------- | --------- | -------- | ------------------ |
| `id`     | `id`      | `String` | `"phone"`          |
| `label`  | `label`   | `String` | `"Numer telefonu"` |
| `value`  | `value`   | `String` | `""`               |

##### Example

#

```html
<intl-tel id="phone" label="Phone number" value="+48600307428"></intl-tel>
```

### Methods

| name      | Description   |
| --------- | ------------- |
| `clear()` | `Clear input` |

Interactions with the methods requires a reference to the element itself, if using webcomponents or a library like Lit-Element or Fast-Element, this can be done easily within the if using the component from the browser

#### EventListener

```typescript
const component = document.querySelector('intl-tel');

component.addEventListener('change', (e) => {
  console.log(e.detail);
});
```

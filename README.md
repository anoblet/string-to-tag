# string-to-tag

Usage:
```
import { css, html } from "lit-element"

const simple = "My string...";
strToTag(simple, html)

// Retain context
const binded = "Test ${this.myProp}";
strToTag.bind(this)(binded, html)

// CSS
const _css = ":host { background: red }";
strToTag(_css, css)
```

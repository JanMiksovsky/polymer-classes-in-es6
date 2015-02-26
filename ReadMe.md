This is quick experiment to try creating a custom element class using ES6's
`class` syntax. This relies on the [Polymer 0.8 preview release](https://github.com/Polymer/polymer/tree/0.8-preview) and the [Traceur](https://github.com/google/traceur-compiler) transpiler.

## Demo

A simple [demo](https://JanMiksovsky.github.io/polymer-classes-in-es6) shows
a "Hello, world" element created with Polymer 0.8 as an ES6 class. _Requires Google Chrome._

## Thoughts

* Creating an element class with `class` feels good.

* Polymer's standard (ES5) syntax for defining the element tag is to define a
  `is` member on the prototype.

```
Polymer({
  is: "my-element"
});
```

The minimal definition of classes in ES6 don't (seem to?) support the
definition of a prototype member so succinctly. Instead, a getter is probably
the closest that can be managed:

```
class MyElement extends PolymerElement{

  get is() {
    return "my-element";
  }
}
```

That feels clunky. Suggestions for improvements welcome.

* Finally, it'd be nice if classes could be auto-registered. ES6 classes don't
appear to support a static constructor/initialization function, so it's unclear
how this could be achieved. The demo shows use of a static method called
`register`:

```
MyElement.register();
```

To me, this feels cleaner than

```
document.registerElement( "my-element", MyElement );
```

This is quick experiment to try creating a custom element class using ES6's `class` syntax. The Polymer team has already signaled an interest in supporting this ability someday; this repo simply explores the extent to which that's possible today.

This experiment relies on [Polymer 1.x](https://github.com/Polymer/polymer) and the [Traceur](https://github.com/google/traceur-compiler) transpiler.

## Demo

A simple [demo](https://JanMiksovsky.github.io/polymer-classes-in-es6?dom=shadow) shows
a "Hello, world" element created with Polymer as an ES6 class. _Requires Google Chrome._

## Thoughts

* Creating an element class with `class` feels good!

```
class GreetElement extends PolymerElement {
};
```

* In an effort to make element definition as DRY as possible, by default an
element class with the Pascal case name `FooElement` will result in a custom element whose tag name is the hypenated, lowercase name `foo-element`. If a custom tag name is desired, override the `is` getter:

```
class BoringElement extends PolymerElement {
  get is() {
    return "awesome-element";
  }
}
```

* It'd be nice if classes could be auto-registered. ES6 classes don't appear to support a static constructor/initialization function, so it's unclear how this could be achieved. The demo shows use of a static method called `register`:

```
GreetElement.register();
```

While it's too bad this explicit registration step is required — there's little
point in creating a custom element class unless you're going to register it —
at least this feels cleaner and more DRY than

```
document.registerElement( "my-element", MyElement );
```

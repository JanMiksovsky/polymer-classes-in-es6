/* Base class for defining custom elements. */
let PolymerElementBase = Polymer.Class({ is: 'polymer-element' });

class PolymerElement extends PolymerElementBase {

  /*
   * The default tag name for element converts Pascal-case class name FooElement
   * into hyphenated lowercase name foo-element. To define a custom tag name for
   * a class, override this is() getter to just return the name as a hard-coded
   * string ("my-element" or whatever).
   */
  static get defaultElementName() {
    let className = this.name;
    let upperCaseWordsRegex = /([A-Z][^A-Z]+)/g;
    let words = [];
    let match = upperCaseWordsRegex.exec( className );
    while ( match ) {
      words.push( match[1].toLowerCase() );
      match = upperCaseWordsRegex.exec( className );
    }
    return words.join( "-" );
  }

  static register() {
    if (this.prototype.is == null || this.prototype.is === 'polymer-element') {
      // The following call to registerCallback will invoke some constructor
      // shenanigans. Before that happens, we use the real constructor to
      // compute a default element name.
      this.prototype.is = this.defaultElementName;
    }

    // Try to force the usual Polymer registration to happen. This is a pure
    // hack, with no guarantees that this does everything the way Polymer
    // normally would. At the moment (8/13/15), however, it does appear to work.
    this.prototype.registerCallback();
    document.registerElement( this.prototype.is, this );
  }

};

export default PolymerElement;

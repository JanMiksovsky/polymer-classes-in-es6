/* Base class for defining custom elements. */
class PolymerElement extends Polymer.Class({}) {

  /*
   * The default tag name for element converts Pascal-case class name FooElement
   * into hyphenated lowercase name foo-element. To define a custom tag name for
   * a class, override this is() getter to just return the name as a hard-coded
   * string ("my-element" or whatever).
   */
  get is() {
    let className = this.constructor.name;
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
    document.registerElement( this.prototype.is, this );
  }

};

export default PolymerElement;

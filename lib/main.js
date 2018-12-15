const path = require("path");
const plgCompiler = require("plg-compiler");

exports.activate = function () {
  atom.grammars.addInjectionPoint('source.sibelius_plg', {
    type: 'function',
    language (valueSyntaxNode) {
      return 'manuscript'
    },
    content (valueSyntaxNode) {
      return valueSyntaxNode;
    }
  });
}

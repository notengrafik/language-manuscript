exports.activate = function () {
  atom.grammars.addInjectionPoint('source.sibelius_plg', {
    type: 'value',
    language (valueSyntaxNode) {
      if (valueSyntaxNode.text.match(/\s*\([^")]*\)\s*\{[^"]+\}\s*/)) {
        return 'manuscript'
      }
    },
    content (valueSyntaxNode) {
      return valueSyntaxNode;
    }
  });
}

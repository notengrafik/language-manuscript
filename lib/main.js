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

  atom.workspace.observeTextEditors(function(editor) {
    const filePath = editor.buffer.file.getPath();
    const fileExtension = path.extname(filePath);
    switch (fileExtension) {
      case '.msd':
      case '.plg':
        editor.onDidSave(function() {
          try {
            plgCompiler.compilePlg(filePath);
          } catch(e) {
            return atom.notifications.addError(e.message);
          }
          atom.notifications.addSuccess("Compiled plg");
        });
    }
  });
}

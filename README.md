# Sibelius ManuScript support in Atom

Adds syntax highlighting for ManuScript files in the following forms:

* Sibelius' plg format
* mss files generated by [Tido's plgToMSS](https://github.com/tido/plgToMSS/)
* msd files generated by [Tido's plgToMSS](https://github.com/tido/plgToMSS/)

This requires [tree-sitter-manuscript](https://github.com/notengrafik/tree-sitter-manuscript/) to be installed:

    git clone git@github.com:notengrafik/tree-sitter-manuscript.git
    cd tree-sitter-manuscript
    npm install -g

language-mansucript's `package.json` exptects to find the installed tree-sitter-manuscript at `/usr/local/lib/node_modules/tree-sitter-manuscript`. Modify this path in `package.json` to match your system.
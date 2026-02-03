(TeX-add-style-hook
 "enkherdene_bolormaa"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("fullpage" "empty")))
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "href")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (TeX-run-style-hooks
    "latexsym"
    "amsmath"
    "amssymb"
    "charter"
    "color"
    "calc"
    "hyperref"
    "titlesec"
    "fullpage"
    "xstring")
   (TeX-add-symbols
    '("section" 1)
    '("resheader" 6))
   (LaTeX-add-color-definecolors
    "my-gray"
    "url-gray"))
 :latex)


CSSParser.prototype.kINHERIT = "inherit",

CSSParser.prototype.kBORDER_WIDTH_NAMES = {
  "thin": true,
  "medium": true,
  "thick": true
};

CSSParser.prototype.kBORDER_STYLE_NAMES = {
  "none": true,
  "hidden": true,
  "dotted": true,
  "dashed": true,
  "solid": true,
  "double": true,
  "groove": true,
  "ridge": true,
  "inset": true,
  "outset": true
};

CSSParser.prototype.kCOLOR_NAMES = {
  "transparent": true,
  
  "black": true,
  "silver": true,
  "gray": true,
  "white": true,
  "maroon": true,
  "red": true,
  "purple": true,
  "fuchsia": true,
  "green": true,
  "lime": true,
  "olive": true,
  "yellow": true,
  "navy": true,
  "blue": true,
  "teal": true,
  "aqua": true,
  
  "aliceblue": true,
  "antiquewhite": true,
  "aquamarine": true,
  "azure": true,
  "beige": true,
  "bisque": true,
  "blanchedalmond": true,
  "blueviolet": true,
  "brown": true,
  "burlywood": true,
  "cadetblue": true,
  "chartreuse": true,
  "chocolate": true,
  "coral": true,
  "cornflowerblue": true,
  "cornsilk": true,
  "crimson": true,
  "cyan": true,
  "darkblue": true,
  "darkcyan": true,
  "darkgoldenrod": true,
  "darkgray": true,
  "darkgreen": true,
  "darkgrey": true,
  "darkkhaki": true,
  "darkmagenta": true,
  "darkolivegreen": true,
  "darkorange": true,
  "darkorchid": true,
  "darkred": true,
  "darksalmon": true,
  "darkseagreen": true,
  "darkslateblue": true,
  "darkslategray": true,
  "darkslategrey": true,
  "darkturquoise": true,
  "darkviolet": true,
  "deeppink": true,
  "deepskyblue": true,
  "dimgray": true,
  "dimgrey": true,
  "dodgerblue": true,
  "firebrick": true,
  "floralwhite": true,
  "forestgreen": true,
  "gainsboro": true,
  "ghostwhite": true,
  "gold": true,
  "goldenrod": true,
  "greenyellow": true,
  "grey": true,
  "honeydew": true,
  "hotpink": true,
  "indianred": true,
  "indigo": true,
  "ivory": true,
  "khaki": true,
  "lavender": true,
  "lavenderblush": true,
  "lawngreen": true,
  "lemonchiffon": true,
  "lightblue": true,
  "lightcoral": true,
  "lightcyan": true,
  "lightgoldenrodyellow": true,
  "lightgray": true,
  "lightgreen": true,
  "lightgrey": true,
  "lightpink": true,
  "lightsalmon": true,
  "lightseagreen": true,
  "lightskyblue": true,
  "lightslategray": true,
  "lightslategrey": true,
  "lightsteelblue": true,
  "lightyellow": true,
  "limegreen": true,
  "linen": true,
  "magenta": true,
  "mediumaquamarine": true,
  "mediumblue": true,
  "mediumorchid": true,
  "mediumpurple": true,
  "mediumseagreen": true,
  "mediumslateblue": true,
  "mediumspringgreen": true,
  "mediumturquoise": true,
  "mediumvioletred": true,
  "midnightblue": true,
  "mintcream": true,
  "mistyrose": true,
  "moccasin": true,
  "navajowhite": true,
  "oldlace": true,
  "olivedrab": true,
  "orange": true,
  "orangered": true,
  "orchid": true,
  "palegoldenrod": true,
  "palegreen": true,
  "paleturquoise": true,
  "palevioletred": true,
  "papayawhip": true,
  "peachpuff": true,
  "peru": true,
  "pink": true,
  "plum": true,
  "powderblue": true,
  "rosybrown": true,
  "royalblue": true,
  "saddlebrown": true,
  "salmon": true,
  "sandybrown": true,
  "seagreen": true,
  "seashell": true,
  "sienna": true,
  "skyblue": true,
  "slateblue": true,
  "slategray": true,
  "slategrey": true,
  "snow": true,
  "springgreen": true,
  "steelblue": true,
  "tan": true,
  "thistle": true,
  "tomato": true,
  "turquoise": true,
  "violet": true,
  "wheat": true,
  "whitesmoke": true,
  "yellowgreen": true,
  
  "activeborder": true,
  "activecaption": true,
  "appworkspace": true,
  "background": true,
  "buttonface": true,
  "buttonhighlight": true,
  "buttonshadow": true,
  "buttontext": true,
  "captiontext": true,
  "graytext": true,
  "highlight": true,
  "highlighttext": true,
  "inactiveborder": true,
  "inactivecaption": true,
  "inactivecaptiontext": true,
  "infobackground": true,
  "infotext": true,
  "menu": true,
  "menutext": true,
  "scrollbar": true,
  "threeddarkshadow": true,
  "threedface": true,
  "threedhighlight": true,
  "threedlightshadow": true,
  "threedshadow": true,
  "window": true,
  "windowframe": true,
  "windowtext": true
};

CSSParser.prototype.kLIST_STYLE_TYPE_NAMES = {
  "decimal": true,
  "decimal-leading-zero": true,
  "lower-roman": true,
  "upper-roman": true,
  "georgian": true,
  "armenian": true,
  "lower-latin": true,
  "lower-alpha": true,
  "upper-latin": true,
  "upper-alpha": true,
  "lower-greek": true,
  
  "disc": true,
  "circle": true,
  "square": true,
  "none": true,
  
  /* CSS 3 */
  "box": true,
  "check": true,
  "diamond": true,
  "hyphen": true,
  
  "lower-armenian": true,
  "cjk-ideographic": true,
  "ethiopic-numeric": true,
  "hebrew": true,
  "japanese-formal": true,
  "japanese-informal": true,
  "simp-chinese-formal": true,
  "simp-chinese-informal": true,
  "syriac": true,
  "tamil": true,
  "trad-chinese-formal": true,
  "trad-chinese-informal": true,
  "upper-armenian": true,
  "arabic-indic": true,
  "binary": true,
  "bengali": true,
  "cambodian": true,
  "khmer": true,
  "devanagari": true,
  "gujarati": true,
  "gurmukhi": true,
  "kannada": true,
  "lower-hexadecimal": true,
  "lao": true,
  "malayalam": true,
  "mongolian": true,
  "myanmar": true,
  "octal": true,
  "oriya": true,
  "persian": true,
  "urdu": true,
  "telugu": true,
  "tibetan": true,
  "upper-hexadecimal": true,
  "afar": true,
  "ethiopic-halehame-aa-et": true,
  "ethiopic-halehame-am-et": true,
  "amharic-abegede": true,
  "ehiopic-abegede-am-et": true,
  "cjk-earthly-branch": true,
  "cjk-heavenly-stem": true,
  "ethiopic": true,
  "ethiopic-abegede": true,
  "ethiopic-abegede-gez": true,
  "hangul-consonant": true,
  "hangul": true,
  "hiragana-iroha": true,
  "hiragana": true,
  "katakana-iroha": true,
  "katakana": true,
  "lower-norwegian": true,
  "oromo": true,
  "ethiopic-halehame-om-et": true,
  "sidama": true,
  "ethiopic-halehame-sid-et": true,
  "somali": true,
  "ethiopic-halehame-so-et": true,
  "tigre": true,
  "ethiopic-halehame-tig": true,
  "tigrinya-er-abegede": true,
  "ethiopic-abegede-ti-er": true,
  "tigrinya-et": true,
  "ethiopic-halehame-ti-et": true,
  "upper-greek": true,
  "asterisks": true,
  "footnotes": true,
  "circled-decimal": true,
  "circled-lower-latin": true,
  "circled-upper-latin": true,
  "dotted-decimal": true,
  "double-circled-decimal": true,
  "filled-circled-decimal": true,
  "parenthesised-decimal": true,
  "parenthesised-lower-latin": true
};


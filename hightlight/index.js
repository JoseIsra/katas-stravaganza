const lang = {
  js: {
    equa: /(\b=\b)/g,
    quot: /((&#39;.*?&#39;)|(&#34;.*?&#34;)|(".*?(?<!\\)")|('.*?(?<!\\)')|`)/g,
    comm: /((\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*))/g,
    logi: /(%=|%|\-|\+|\*|&amp;{1,2}|\|{1,2}|&lt;=|&gt;=|&lt;|&gt;|!={1,2}|={2,3})/g,
    numb: /(\d+(\.\d+)?(e\d+)?)/g,
    func: /(?<=^|\s*)(async|await|console|alert|Math|Object|Array|String|class(?!\s*\=)|function)(?=\b)/g,
    decl: /(?<=^|\s*)(var|let|const)/g,
    pare: /(\(|\))/g,
    squa: /(\[|\])/g,
    curl: /(\{|\})/g,
  },
  html: {
    tags: /(?<=&lt;(?:\/)?)(\w+)(?=\s|\&gt;)/g,
    // Props order matters! Here I rely on "tags"
    // being already applied in the previous iteration
    angl: /(&lt;\/?|&gt;)/g,
    attr: /((?<=<i class=html_tags>\w+<\/i>)[^<]+)/g,
  },
};

const highLite = (el) => {
  const dataLang = el.dataset.lang; // Detect "js", "html", "py", "bash", ...
  const langObj = lang[dataLang]; // Extract object from lang regexes dictionary
  let html = el.innerHTML;
  Object.keys(langObj).forEach(function (key) {
    html = html.replace(langObj[key], `<i class=${dataLang}_${key}>$1</i>`);
  });
  el.previousElementSibling.innerHTML = html; // Finally, show highlights!
};

const editors = document.querySelectorAll(".highLite_editable");
editors.forEach((el) => {
  el.contentEditable = true;
  el.spellcheck = false;
  el.autocorrect = "off";
  el.autocapitalize = "off";
  el.addEventListener("input", () => highLite(el));
  highLite(el); // Init!
});

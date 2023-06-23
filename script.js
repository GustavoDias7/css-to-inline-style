for (let h = 0; h < document.styleSheets.length; h++) {
  const { cssRules } = document.styleSheets[h];
  for (let i = 0; i < cssRules.length; i++) {
    const { selectorText } = cssRules[i];

    const isClassOrId = selectorText[0] === "." || selectorText[0] === "#";
    if (!isClassOrId) continue;

    const $elements = document.querySelectorAll(selectorText);

    $elements.forEach(($el) => {
      for (let j = 0; j < cssRules[i].style.length; j++) {
        const property = cssRules[i].style[j];
        $el.style[property] = cssRules[i].style[property];
      }
      $el.removeAttribute("class");
      $el.removeAttribute("id");
    });
  }
}

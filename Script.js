const el = document.getElementById("text");

if (el) {
  const text = el.innerText;
  el.innerText = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      el.innerText += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
}

function contarPalabras() {
  const texto = document.getElementById("texto").value;
  const palabras = texto.trim().split(/\s+/).filter(p => p.length > 0).length;
  document.getElementById("contador").innerText = palabras;
}

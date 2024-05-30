function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag imagem
  const img = document.querySelector ("#profile img")

  //substituir a imagem
  //se tiver light mode, adicionar a imagem light 
if(html.classList.contains("light")) {
  img.setAttribute("scr", "./assets/avatar-light.png")
} else {
  //se tiver sem light mode, manter a imagem normal 
  img.setAttribute("scr", "./assets/avatar.png")
}
}
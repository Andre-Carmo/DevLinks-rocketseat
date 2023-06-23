function togglemode() {
 const html = document.documentElement
  /**if (html.classlist.contains('light')) {
      html.classlist.remove('light')
    }
    else {
      html.classlist.add('light')
    } */
  html.classList.toggle('light')
  
  // const img = document.querySelector("#img")
  if (html.classList.contains('light')) {
    img.setAttribute("src","imagens/avatar.png")
    
  }
  else {
    img.setAttribute("src","imagens/avatar-light.png")
  }
}

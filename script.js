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
    // img.setAttribute("src","./imgsite/avatar-light.png")
    document.getElementById("img").src = "./imgsite/avatar-light.png"
    
  }
  else {
    // img.setAttribute("src","./imgsite/avatar.png")
    document.getElementById("img").src = "./imgsite/avatar.png"
  }
}

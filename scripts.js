function toggleReceta(event) {
    const titulo = event.currentTarget;
    const contenido = titulo.nextElementSibling;
    const triangulo = titulo.querySelector(".triangulo");

    contenido.style.display = contenido.style.display === "none" ? "block" : "none";
    triangulo.innerHTML = contenido.style.display === "none" ? "&#x25B6;" : "&#x25BC;";
}

function filtrarRecetas() {
    const busqueda = document.getElementById("busqueda");
    const textoBusqueda = busqueda.value.toLowerCase();
    const recetas = document.getElementsByClassName("receta");

    for (const receta of recetas) {
        const titulo = receta.querySelector(".titulo h3");
        const textoTitulo = titulo.textContent.toLowerCase();

        if (textoTitulo.includes(textoBusqueda)) {
            receta.style.display = "block";
        } else {
            receta.style.display = "none";
        }
    }
}

function toggleConsejo(event) {
    const titulo = event.currentTarget;
    const contenido = titulo.nextElementSibling;
    const triangulo = titulo.querySelector(".triangulo");

    contenido.style.display = contenido.style.display === "none" ? "block" : "none";
    triangulo.innerHTML = contenido.style.display === "none" ? "&#x25B6;" : "&#x25BC;";
}

function filtrarConsejos() {
    const busqueda = document.getElementById("busqueda");
    const textoBusqueda = busqueda.value.toLowerCase();
    const consejos = document.getElementsByClassName("consejo");

    for (const consejo of consejos) {
        const titulo = consejo.querySelector(".titulo h4");
        const textoTitulo = titulo.textContent.toLowerCase();

        if (textoTitulo.includes(textoBusqueda)) {
            consejo.style.display = "block";
        } else {
            consejo.style.display = "none";
        }
    }
}

let expandido = false;
/* Función exp-cont consejo  */
function expandirContraer() {
    const consejos = document.getElementsByClassName("consejo");
    const boton = document.getElementById("expandir-contraer");

    for (const consejo of consejos) {
        const titulo = consejo.querySelector(".titulo");
        const contenido = titulo.nextElementSibling;
        const triangulo = titulo.querySelector(".triangulo");

        if (!expandido) {
            contenido.style.display = "block";
            triangulo.innerHTML = "&#x25BC;";
        } else {
            contenido.style.display = "none";
            triangulo.innerHTML = "&#x25B6;";
        }
    }

    expandido = !expandido;
    boton.textContent = expandido ? "Contraer todo" : "Expandir todo";
}
/* Función exp-cont receta  */
function expandirContraerR() {
    const consejos = document.getElementsByClassName("receta");
    const boton = document.getElementById("expandir-contraer");

    for (const consejo of consejos) {
        const titulo = consejo.querySelector(".titulo");
        const contenido = titulo.nextElementSibling;
        const triangulo = titulo.querySelector(".triangulo");

        if (!expandido) {
            contenido.style.display = "block";
            triangulo.innerHTML = "&#x25BC;";
        } else {
            contenido.style.display = "none";
            triangulo.innerHTML = "&#x25B6;";
        }
    }

    expandido = !expandido;
    boton.textContent = expandido ? "Contraer todo" : "Expandir todo";
}




function toggleRecipe(element) {
    let content = element.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

  function openModal() {
    document.getElementById('infoModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
  }

  window.onclick = function(event) {
    var modal = document.getElementById('infoModal');
    if (event.target == modal) {
      closeModal();
    }
  }

function filtrarPizarrones() {
            const busqueda = document.getElementById("busqueda");
            const textoBusqueda = busqueda.value.toLowerCase();
            const pizarrones = document.getElementsByClassName("pizarron");

            for (const pizarron of pizarrones) {
                const keywords = pizarron.querySelector(".keywords").textContent.toLowerCase();

                if (keywords.includes(textoBusqueda)) {
                    pizarron.style.display = "block";
                } else {
                    pizarron.style.display = "none";
                }
            }
}
        

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });


  // Esta función se llama cuando haces clic en una imagen
function showPopup(src) {
    var popup = document.getElementById('popup');
    var popupImage = document.getElementById('popupImage');
    popupImage.src = src;
    popup.style.display = 'block';
  }
  
  // Esta función se llama cuando haces clic en el pop-up
  function hidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
  // Aquí es donde agregas los event listeners a las imágenes
  var images = document.getElementsByClassName('pizarron-imagen');
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function(e) {
      showPopup(e.target.src);
    });
  }
  
  // Y aquí es donde agregas el event listener al pop-up
  document.getElementById('popup').style.display = 'none';

  document.getElementById('popup').addEventListener('click', hidePopup);
  
// Esta función se llama cuando se carga la página y llena el menú desplegable con las keywords
function fillDropdown() {
    var items = document.getElementsByClassName('pizarron');
    var keywords = new Set();
  
    for (var i = 0; i < items.length; i++) {
      var itemKeywords = items[i].getElementsByClassName('keywords')[0].innerText.split(', ');
      for (var j = 0; j < itemKeywords.length; j++) {
        keywords.add(itemKeywords[j]);
      }
    }
  
    var dropdown = document.getElementById('keywordDropdown');
  
    // Añade la opción "Todo" al inicio del menú desplegable
    var allOption = document.createElement('option');
    allOption.value = 'Todo';
    allOption.text = 'Todo';
    dropdown.add(allOption);
  
    keywords.forEach(function(keyword) {
      var option = document.createElement('option');
      option.value = keyword;
      option.text = keyword;
      dropdown.add(option);
    });
  }
  
  // Esta función se llama cuando se selecciona una keyword del menú desplegable y filtra los items
  function filterByKeyword() {
    var selectedKeyword = document.getElementById('keywordDropdown').value;
    var items = document.getElementsByClassName('pizarron');
  
    for (var i = 0; i < items.length; i++) {
      var keywords = items[i].getElementsByClassName('keywords')[0].innerText;
      if (selectedKeyword === 'Todo' || keywords.includes(selectedKeyword)) {
        items[i].style.display = '';
      } else {
        items[i].style.display = 'none';
      }
    }
  }
  
  // Llama a fillDropdown cuando se carga la página
  window.onload = fillDropdown;
  
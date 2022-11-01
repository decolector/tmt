
    function generarHaiku(){

      var objetos = ['nubes', 'gotas', 'piedras', 'noches', 'hojas']
      var verbos = ['lloran', 'caen', 'flotan', 'giran', 'vuelan']
      var adjetivos = ["silenciosas", "vanidosas", "luminosas", "cadenciosas", "perezosas"]
      var lugares = ["lago", "rio", "viento", "cielo", "patio", "solar", "valle"]
      var reacciones = ["pienso", "lloro", "sonrío", "respiro", "miro"]
      var caracter = ["hondo", "claro", "inmenso", "lento", "triste"]
      var imgs = [
        "https://www.lookslikefilm.com/wp-content/uploads/2019/02/Paul-Wilson1.jpg",
        "https://www.lookslikefilm.com/wp-content/uploads/2019/02/Alex-James.jpg",
        "https://www.lookslikefilm.com/wp-content/uploads/2019/02/Florian-Wenzel-Kopie.jpg"
      ]
      var linea1 = "Las " + objetos[randomInt(0,objetos.length - 1)] + " " + verbos[randomInt(0,verbos.length - 1)]
      var linea2 = adjetivos[randomInt(0, adjetivos.length - 1)] + " en el " + lugares[randomInt(0, lugares.length - 1)]
      var linea3 = reacciones[randomInt(0, reacciones.length -1)] + " " + caracter[randomInt(0, caracter.length - 1)]

      var haiku = linea1 + "<br>" + linea2 + "<br> " + linea3

      var elemento = document.getElementById("haiku")
      elemento.style.backgroundImage = "url('" + imgs[randomInt(0, imgs.length - 1)] + "')";
      elemento.innerHTML = haiku

      console.log(haiku)
    }
    function randomInt(bajo, alto){
        bajo = Math.ceil(bajo);
        alto = Math.floor(alto);
        return Math.floor(Math.random() * (alto - bajo + 1)) + bajo;
    }

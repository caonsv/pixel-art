var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado'),
  paleta = document.getElementById('paleta'),
  grillaPixels = document.getElementById('grilla-pixeles'),
  indicadorColor = document.getElementById('indicador-de-color'),
  clicked = false


colorPersonalizado.addEventListener('change',
  () => {
    colorActual = colorPersonalizado.value;
    colorPersonalizado.style.backgroundColor = colorActual
    indicadorColor.style.backgroundColor = colorActual
  })


function listaColores() {
  for (i = 0; i < nombreColores.length; i++) {
    var nuevoColor = document.createElement('div')
    nuevoColor.style.backgroundColor = nombreColores[i]
    nuevoColor.className = 'color-paleta'
    paleta.appendChild(nuevoColor).addEventListener('click', cambiarColorSeleccionado)
  }
}

function listaPixel() {
  for (i = 0; i < 1749; i++) {
    var nuevoPixel = document.createElement('div')
    nuevoPixel.classList.add("pixel-suelto")
    grillaPixels.appendChild(nuevoPixel)

    nuevoPixel.addEventListener('mousedown', (e) => {
      clicked = true
      pintarColorSeleccionado(e)
    })

    nuevoPixel.addEventListener('mouseup', () => {
      clicked = false
    })

    nuevoPixel.addEventListener('mousemove', (e) => {
      pintarColorSeleccionado(e)
    })
  }
}

function limpiarPintura() {
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < 1749; i++) {
    $($pixeles[i]).animate({
      backgroundColor: '#FFFFFF'
    }, 1000)
  }
}


function cambiarColorSeleccionado(e) {
  indicadorColor.style.backgroundColor = e.target.style.backgroundColor
}

function pintarColorSeleccionado(elem) {
  clicked ? elem.path[0].style.backgroundColor = indicadorColor.style.backgroundColor : null
}



listaColores()
listaPixel()
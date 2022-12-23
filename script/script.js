//Arreglo con paises iniciales
const paises = [{
    nombre: "Guatemala",
    bandera: "https://bit.ly/3Bwr2rm",
    capital: "Ciudad de Guatemala",
    idioma_oficial: "Español",
    moneda: "Quetzal"
  },
  {
    nombre: "Argentina",
    bandera: "https://bit.ly/3BEJC0y",
    capital: "Buenos Aires",
    idioma_oficial: "Español",
    moneda: "Peso"
  },
  {
    nombre: "Francia",
    bandera: "https://bit.ly/3HFZ7t5",
    capital: "Paris",
    idioma_oficial: "Frances",
    moneda: "Euro"
  },
  {
    nombre: "El Salvador",
    bandera: "https://bit.ly/3uRN5F6",
    capital: "San Salvador",
    idioma_oficial: "Español",
    moneda: "Dolar"
  },
  {
    nombre: "Honduras",
    bandera: "https://bit.ly/3UWcrMM",
    capital: "Tegucigalpa",
    idioma_oficial: "Español",
    moneda: "Lempira"
  }
];

/* --PRUEBA
paises.nombre = 'prueba';
paises.bandera = 'prueba';
paises.capital = 's';
paises.idioma_oficial = 'a';
paises.moneda = 's';
for (let i = 0; i < paises.length; i++) {
  console.log(paises[i].nombre);
}
*/


//funcion para agregar listeners a los botones
function agregarMonitores() {
  //TODO
  document.querySelector('#mostrarPaises').addEventListener('click', mostrarPaises);
  document.querySelector('#agregarPais').addEventListener('click', agregarPais);
}
agregarMonitores();


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
  //TODO
  let info = document.querySelector('#info');
  info.innerHTML = '';
  for (let i = 0; i < paises.length; i++) {
    info.innerHTML += `
    <table class="table table-responsive">
                    <thead>
                      <tr class="table-warning">
                        <th scope="col">NOMBRE</th>
                        <th scope="col">CAPITAL</th>
                        <th scope="col">IDIOMA</th>
                        <th scope="col">MONEDA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="table-info">
                        <th scope="row">${paises[i].nombre}</th>
                        <td>${paises[i].capital}</td>
                        <td>${paises[i].idioma_oficial}</td>
                        <td>${paises[i].moneda}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                     <tr>
                        <td colspan="4" class="text-center">
                        <img src="${paises[i].bandera}">
                        </td>
                      </tr>
                    </tfoot>
     </table>
    `
  }
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
  let nombrepais = prompt('Ingrese Nombre del Pais');
  let capital = prompt('Ingrese la Capital del Pais');
  let idioma = prompt('Ingrese el Idioma del Pais');
  let moneda = prompt('Ingrese la Moneda del Pais');
  let bandera = prompt('Ingrese el link de la Bandera del Pais');

  //let datos = [nombrepais,capital,idioma,moneda,bandera];
  if (nombrepais == '' || capital == '' || idioma == '' || moneda == '' || bandera == '') {
    Swal.fire({
      icon: 'error',
      title: 'No se logro ingresar la información',
      text: 'Hay campos vacios!, Por favor Intenta de nuevo'
    })

  }
  else if (nombrepais == null || capital == null || idioma == null || moneda == null || bandera == null) {
    Swal.fire({
      icon: 'error',
      title: 'No se logro ingresar la información',
      text: 'Hay valores tipo null!, Por favor Intenta de nuevo'
    })

  } else {
    Swal.fire(
      'Bien!',
      'Se registo la información correctamente',
      'success'
    )
    paises.push({
      nombre: nombrepais,
      bandera: bandera,
      capital: capital,
      idioma_oficial: idioma,
      moneda: moneda
    });
  }

  /* PRUEBAS
     paises.push(datos);
     for(let pais of paises)
     {
       console.log(pais);
     }
  */
}
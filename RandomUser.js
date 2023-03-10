/** Defino constantes y las igualo al elemento correspondiente por id **/
const nombre = document.querySelector('#Nombre');
const apellido = document.querySelector('#Apellido');
const foto = document.querySelector('#Foto');
const edad = document.querySelector('#Edad');
const ubicacion = document.querySelector('#Ubicacion');
const email = document.querySelector('#Email');
const celular = document.querySelector('#Celular');
const telefono = document.querySelector('#Telefono');

/** Con fetch realizo una solicitud a la web randomuser y con los datos obtenidos modifico los elematos almacenados en las constantes **/
fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(datos => usuario(datos.results[0]))
    .catch(err => console.error(err));
const usuario = (datos) => {
    nombre.textContent = datos.name.first;
    apellido.textContent = datos.name.last;
    foto.src = datos.picture.large;
    edad.textContent = datos.dob.age;
    ubicacion.textContent = datos.location.country + ', ' + datos.location.state + ', ' + datos.location.city;
    email.textContent = datos.email;
    celular.textContent = datos.cell;
    telefono.textContent = datos.phone;
}

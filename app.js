//selecciono lo del html 
const carrito= document.querySelector('#carrito');
const contenedorCarrito=document.querySelector('#lista-carrito tbody');
const vaciarCarritobtn=document.querySelector('#vaciar-carrito');
const listaCursos=document.querySelector('#lista-cursos');
let articulosCarrito=[];

//que este atenta a los eventos 
cargarEventListeners();
function cargarEventListeners() {
    //cuando agregas un curso presionando agregar carrito 
    //cuando hago click en lista curso 
    //console.log("estoy en cargar evento");
    listaCursos.addEventListener('click',agregarCurso);
}

function  agregarCurso(e){
    //previene lo que el boton hace por defecto 
    //pasamos del padre al hijo para luego leer la info
    e.preventDefault();
if(e.target.classList.contains('agregar-carrito')) {
    //ir de padre en padre 
    const seleccionado=e.target.parentElement.parentElement;
    leerdatoscurso(seleccionado);

}
}


//traversing the dom
//lee el contenido del html al que le dimos click y extrae la info del  curso 
// va a ser llamada por agregar carrito
function leerdatoscurso(curso) {
    const infocurso= {
     imagen:curso.querySelector('img').src,
     titulo:curso.querySelector('h4').textContent,
     precio:curso.querySelector('.precio span').textContent,
     id:curso.querySelector('a').getAttribute('data-id'),

    }
    console.log(infocurso);
    //una vez seleccionado, y ya con los datos del curso los puedo poner en un carrito en un array
    articulosCarrito=[...articulosCarrito,infocurso];
    console.log(articulosCarrito);
    carritoHTML();
}
//para que se muestre el carrito de compras en el html 
function carritoHTML(){
    
    //iterar el array para que por cada iteracion se agregue al carrito
    //me trae un curso que seria un objeto, se pone en las tblae body
    //por cada recorrido me trae un curso, creo un tr, armo el codigo 
    articulosCarrito.forEach(curso =>{
        const row=document.createElement('tr');
        row.innerHTML=`
            <td>
            ${curso.titulo}
            </td>
        `;
        contenedorCarrito.appendChild(row);
    });
}



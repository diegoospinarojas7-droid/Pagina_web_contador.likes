const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const tablaBody = document.getElementById("tabla-body");

let likes = 0;


boton.addEventListener("click", () => {
    likes++;
    
   
    textoContador.textContent = likes;

    
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const horaExacta = `${horas}:${minutos}:${segundos}`;

    const nuevaFila = document.createElement("tr");
    
    const celdaClic = document.createElement("td");
    celdaClic.textContent = likes;

    const celdaHora = document.createElement("td");
    celdaHora.textContent = horaExacta;

   
    nuevaFila.appendChild(celdaClic);
    nuevaFila.appendChild(celdaHora);

   
    tablaBody.prepend(nuevaFila);
});
const url ="https://lemarudev.github.io/mi-proyecto-web/proyecto_final/proyecto.json"
function buscar(){
    var arma=document.getElementById("buscador").value;
    console.log("ID"+arma);

    fetch(url)
    .then(function(response){
        return response.json();    
    })

    .then(function(data){
        long=data.elements.length;
        console.log("lenght:"+long);
        console.log(data.elements);
        arma=parseInt(arma);
        var res=data.elements.filter(item=>item.id===arma);
        console.log("res:"+res);

        var nom=document.getElementById("nombre");
        nom.innerHTML=res[0].nombre;

        var desc=document.getElementById("descripción");
        desc.innerHTML="<b> </b>"+res[0].descripción;


        var rol=document.getElementById("rol");
        rol.innerHTML="<b>rol: </b>"+res[0].rol;


        var dificultad=document.getElementById("dificultad");
        dificultad.innerHTML="<b>dificultad: </b>"+res[0].dificultad;


        var foto=document.getElementById("icon");
        foto.src=res[0].icon;

        console.log(nombre)
        console.log(descripcion)
        console.log(rol)
        console.log(dificultad)
        console.log(icon)
    })
    .catch(function(error){
        console.log(error);           
    });

    function adjuntar(padre,hijo){
        return padre.appendChild(hijo);
    }
}
import React,{useState,useEffect} from 'react';
function CargarContactos({resultados}){
    const [contacto, setContacto] = useState([]);
    const getContacto=()=>{
      fetch("http://www.raydelto.org/agenda.php"
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setContacto(myJson)
        });
    }
    useEffect(()=>{
        getContacto()
      },[])
    return (
      
        
        <div className="Lista">
          <div class="separador1"></div>
        {
            contacto && contacto.length>0 && contacto.map((item)=><p className="Contacto">{item.nombre} {item.apellido}, {item.telefono}</p>)
        }
        
        </div>
        
        

);
}
export default CargarContactos;
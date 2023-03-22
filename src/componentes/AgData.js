function Enviar(){
    var TxtNombre = document.getElementById('TxtNombre')
    var TxtApellido = document.getElementById('TxtApellido')
    var TxtTelefono = document.getElementById('TxtTelefono')
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                apellido: TxtApellido.value,
                telefono: TxtTelefono.value,
                nombre: TxtNombre.value
            })
        };
        fetch('http://www.raydelto.org/agenda.php', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        alert("Se ha registrado el contacto")
     
}

function FormularioDeEnvio(){
    return(
<form>
    <center>Agregar contactos</center>
    
  <label>
    Nombre :
    <input type="text" id="TxtNombre"/>
    Apellido :
    <input type="text" id="TxtApellido"/>
    Telefono :
    <input type="text" id="TxtTelefono"/>
  </label>
  <input type="submit" onClick={Enviar} />
  
</form>


    );

}
export default FormularioDeEnvio;
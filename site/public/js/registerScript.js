
window.addEventListener("load", function(){


    let nombre = document.querySelector("#nombre")
    let apellido = document.querySelector("#apellido")
    let telefono = document.querySelector("#telefono")
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let repPassword = document.querySelector("#repPassword")
    let provincia = document.querySelector("#provincia")
    let localidad = document.querySelector("#localidad")


    const errors = []

            nombre.addEventListener('blur', function(){
                if(nombre.value == "") {
                errors.push("Este campo no puede estar vacio")
                nombre.parentElement.querySelector(".error").innerHTML = ("Este campo no puede estar vacio")
                console.log(errors);
                }else if(nombre.value.length <= 2){
                    errors.push("Este campo debe tener mas de 2 caracteres")
                    nombre.parentElement.querySelector(".error").innerHTML = ("Este campo debe tener mas de 2 caracteres")
                }
                else {
                    nombre.parentElement.querySelector(".error").innerHTML = ("")
                }
                
            })

            apellido.addEventListener('blur', function(){
                if(apellido.value == "") {
                errors.push("Este campo no puede estar vacio")
                apellido.parentElement.querySelector(".error").innerHTML = ("Este campo no puede estar vacio")
                console.log(errors);
                }else if(apellido.value.length <= 2){
                    errors.push("Este campo debe tener mas de 2 caracteres")
                    apellido.parentElement.querySelector(".error").innerHTML = ("Este campo debe tener mas de 2 caracteres")
                }
                else {
                    apellido.parentElement.querySelector(".error").innerHTML = ("")
                }
                
            })

            email.addEventListener('blur', function(){
                // input email
                const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
                const test = emailRegex.test(email.value)
                if(email.value == ""){
                errors.push("Este campo no puede estar vacio")
                email.parentElement.querySelector(".error").innerHTML = ("Este campo no puede estar vacio")
                }
                else if(!test){
                errors.push("Debe ser un correo electronico valido")
                email.parentElement.querySelector(".error").innerHTML = ("Debe ser un correo electronico valido")
                }else {
                email.parentElement.querySelector(".error").innerHTML = ("")
                }
                
            })

            telefono.addEventListener('blur', function(){
                // input Telefono
                if (telefono.value == "") {
                  errors.push("Este campo no puede estar vacio")
                  telefono.parentElement.querySelector(".error").innerHTML = ("Este campo no puede estar vacio")
                }else {
                    telefono.parentElement.querySelector(".error").innerHTML = ("")
                }
          })

            password.addEventListener('blur', function(){
                // input Contraceña 
            let passRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
            let testpassword = passRegex.test(password.value)
            console.log(password)
            if(password.value == ""){
                errors.push("Este campo no puede estar vacio")
                password.parentElement.querySelector(".error").innerHTML = ("Este campo no puede estar vacio")
            }else if (password.value.length < 8){
                errors.push("La contraseña debe tener al menos 8 caracteres")
                password.parentElement.querySelector(".error").innerHTML = ("La contraseña debe terner al menos 8 caracteres")
            }else if(!testpassword){
                errors.push("La contraseña debe tener * numeros,caracteres especiales,mayusculas y minusculas")
                password.parentElement.querySelector(".error").innerHTML = ("La contraseña debe tener * numeros,caracteres especiales,mayusculas y minusculas")
            }else {
                password.parentElement.querySelector(".error").innerHTML = ("")
            }
        })

        repPassword.addEventListener('blur', function(){
            if(repPassword.value != password.value){
            //errors.push("Las constraseñas deben coincidir")
            repPassword.parentElement.querySelector(".error").innerHTML = ("Las constraseñas deben coincidir")
            }else {
                repPassword.parentElement.querySelector(".error").innerHTML = ("")
            }
        })


        // input Provincia y Localidad

        provincia.addEventListener("change", async function() {
            const nombreProvincia= provincia.value
    
              console.log(nombreProvincia)
      
              const localidadesFETCH = await fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${nombreProvincia}&campos=id,nombre&max=100`)
              const localidadesJSON = await localidadesFETCH.json()
              const localidades = await localidadesJSON.municipios
    
              localidad.innerHTML = "<option selected>Seleccione una opcion</option>"
    
              if (localidades.length > 0) {
                for (let i = 0; i < localidades.length; i ++) {
                    localidad.innerHTML +=  `<option value="${localidades[i].nombre}">` + localidades[i].nombre + "</option>"
                }
              } else {
                console.log("llego aca")
                const localidadesFETCH = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${nombreProvincia}&campos=nombre&max=100`)
                const localidadesJSON = await localidadesFETCH.json()
                const localidades = await localidadesJSON.localidades
    
                for (let i = 0; i < localidades.length; i ++) {
                    localidad.innerHTML +=  `<option value="${localidades[i].nombre}">` + localidades[i].nombre + "</option>"
                }
              }
            
          })
})
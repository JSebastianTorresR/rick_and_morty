function validation(validar){
    const emailValidator = /^\S+@\S+.\S+$/
    if(!emailValidator.test(validar.email) && 0==validar.email.length>=35){
        return{
            ...validar,
            email: "debe ingresar un email valido"
        }
    } 
}
import React, {useState} from 'react'
import Button from '@mui/material/Button';

const ContactForm = () => {

    const [contacto, setContacto] = useState({
        nombre: "",
        email: "",
    });
    const [error, setError] = useState({error: false, mensaje: ""});
    const [isSended, setIsSended] = useState(false);

    const handleChange = (e, input) => {
        setContacto({...contacto, [input]: e.target.value.trim()}); //se usa trim para eliminar espacios en blanco
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contacto.nombre === "" || contacto.email === "") {
            setError({error: true, mensaje: "Todos los campos son obligatorios"});
            return;
        }else if(contacto.nombre.length < 5){
            setError({error: true, mensaje: "El nombre debe tener al menos 5 caracteres"});
            return;
        } else if (!isValidEmail(contacto.email)) {
          setError({
            error: true,
            mensaje: "El email es invalido",
          });
          return;
        } else {
          setError({error: false, mensaje: ""});
          setIsSended(true);
        }
    };

    return (
      <div className="form-box">
        {error.error && (
          <p className="error">
            Por favor chequea que la información sea correcta: <br />
            {error.mensaje}
          </p>
        )}
        {isSended && (
          <>
            <h2>Gracias {contacto.nombre}, por tu contacto.</h2>
            <p>Te contactaremos cuanto antes via email</p>
          </>
        )}
        {!isSended && (
          <form className="form" onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              onChange={(e) => handleChange(e, "nombre")}
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={(e) => handleChange(e, "email")}
            />
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </form>
        )}
      </div>
    );
}

export default ContactForm
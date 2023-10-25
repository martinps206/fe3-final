import React from 'react'
import Container from '@mui/material/Container';
import ContactForm from './ContactForm';
const ContactoContainer = () => {
  return (
    <Container maxWidth="sm" sx={{paddingTop: "80px", paddingBottom:"80px"}}>
        <h1>Contacto</h1>
        <ContactForm/>
    </Container>
  );
}

export default ContactoContainer;

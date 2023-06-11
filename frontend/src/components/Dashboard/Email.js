import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useGlobalContext } from "../../context/globalContext";

const Email = () => {
    const {totalBalance} = useGlobalContext();
const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8oy58wg', 'template_6kzij19', form.current, '-XGfXJhiUtD0XgwV9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
   <div onSubmit={sendEmail}>
          if({totalBalance() <= 1000})
   </div>
  )
}

export default Email

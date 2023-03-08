import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from './containers';
import { Alert } from '@mui/material';
import './Contact.scss';

const init = {
  fullname: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [value, setValue] = useState(init);
  const [success, setSuccess] = useState(null);

  function handleForm(e) {
    e.preventDefault();
    emailjs
      .send('service_5pvk7hc', 'template_7g0crf7', value, '-M-UeZAYV4Xx8HG9D')
      .then(
        function (response) {
          setValue(init);
          setSuccess('success');
        },
        function (error) {
          setValue(init);
          setSuccess('error');
        }
      );

    setTimeout(() => {
      setSuccess(null);
    }, 4000);
  }

  return (
    <form className='contact' onSubmit={handleForm}>
      <span>
        <input
          type='text'
          name='fullname'
          onChange={(e) => setValue({ ...value, fullname: e.target.value })}
          value={value.fullname}
          maxLength={50}
          autoComplete='off'
          placeholder='fullname'
          required
        />
        <input
          type='email'
          name='email'
          onChange={(e) => setValue({ ...value, email: e.target.value })}
          value={value.email}
          maxLength={50}
          autoComplete='off'
          placeholder='email'
          required
        />
        <textarea
          name='message'
          onChange={(e) => setValue({ ...value, message: e.target.value })}
          value={value.message}
          rows={3}
          maxLength={500}
          autoComplete='off'
          placeholder='message'
        ></textarea>
        <Button>Send</Button>
      </span>

      <span className='alert'>
        {success !== null &&
          (success === 'error' ? (
            <Alert variant='filled' severity='error'>
              Message NOT sent, We sorry.
            </Alert>
          ) : (
            <Alert variant='filled' severity='success'>
              Message sent succesfully. Congratulations!
            </Alert>
          ))}
      </span>
    </form>
  );
};

export default Contact;

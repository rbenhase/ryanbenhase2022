import { useState } from "react"
import Head from "next/head"
import styled from "styled-components"
import { encode, validateEmail } from "../utilities"

const StyledForm = styled.form`

  div.field {
    font-size:120%;
    margin-top:1.5rem;

    label {
      display:block;
      font-weight:600;
      color: ${({theme}) => theme.brightPurple};
    }

    input {
      padding: .5rem .5rem;
      font-size:1.2rem;
      display:block;
      width:100%;
    }
    textarea {
      padding: .5rem .5rem;
      display:block;
      width:100%;
      height:10rem;
      font-size:1rem;
      font-family: "Source Sans Pro", sans-serif;
      font-weight:600;
    }
  }
  .error {
    color:red;
    font-size:120%;
    font-weight:600;
    padding:.5rem 0;
    height:2.5rem;
  }
  .actions {
    input {
      font-size:120%;
      padding: 1rem 1.5rem;
      color: ${({theme}) => theme.white};
      background-color: ${({theme}) => theme.brightPurple};
      border:0;
      margin:0 .25rem .25rem 0;
      text-transform:uppercase;
      letter-spacing:.25rem;
      font-family: "Source Sans Pro", sans-serif;
      cursor:pointer;

      &:hover {
        background-color: ${({theme}) => theme.purple};
      }
    }
  }
`

export default function Contact() {

  const [formError, setFormError] = useState(false) 
  const [formConfimation, setFormConfirmation] = useState(false) 

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.name.value === "" || e.target.email.value === "" || e.target.message.value === "") {
      setFormError("All fields are required.")
    } else if (!validateEmail(e.target.email.value)) {
      setFormError("You seem to have entered an invalid email address.")
    } else {
  
      const data = {
        "form-name": "Contact",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
      }
  
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data)
      })
        .then(() => {
          setFormConfirmation( "Thank you! Your message has been sent.")
        })
        .catch(() => setFormError( "Sorry, an error occurred while submitting." ) )
    }
  }

  return (
    <>
      <Head>
        <title>Ryan Benhase // Cincinnati, OH</title>
        <meta name="description" content="Strategic thinker, creative problem solver, developer, and marketer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Get in Touch</h1>
        <section>
          <h2>Send me an email</h2>
          {formConfimation ? 
            <div className="confirmation">
              {formConfimation}
            </div>
          : 
            <StyledForm onSubmit={handleSubmit} method="post" action="" name="Contact" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact" />
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <div className="error">
                {formError ? formError : null }
              </div>
              <div className="actions">
                <input type="submit" value="Send Message" className="special" />
                <input type="reset" value="Reset" />
              </div>
            </StyledForm>
          }
        </section>
      </main>
    </>    
  )
}

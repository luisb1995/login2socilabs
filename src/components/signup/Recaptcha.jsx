import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import styles from "@/styles/signup/signup.module.css"

export default function Recaptcha() {
  return (
    <>
          <section className={styles.recaptcha}>
                
                  <ReCAPTCHA sitekey="6LdGWyMqAAAAAMl0anAIuoUlTWpHenzRtdbUiHvG" className={styles.recapt}/>                            
                                                
          </section>
    </>
  )
}
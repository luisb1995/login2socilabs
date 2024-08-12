"use client"
import React from 'react'
import Link from 'next/link'
import styles2 from "@/styles/signin/signin.module.css"
import styles from "@/styles/signup/signup.module.css"
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { TbWorldWww } from "react-icons/tb";
import { useState, useEffect } from "react";
import PaisesSelect from "@/components/signup/PaisesSelect";
import PhoneSelect from "@/components/signup/PhoneSelect";
import Recaptcha from "@/components/signup/Recaptcha";

function SignUppage() {

    const [phone, setPhone] = useState('');   
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <section className={styles.registerContainer}>

        <form action="" className={styles.form}>
                  
                  <h1 className={styles.titleCrearCuenta}>Crear Cuenta</h1>

                  <label htmlFor="nameApell" className={styles.label}> 
                      <FaRegUser  className={styles.iconUser}/>
                      <input type="text" id="nameApell"  placeholder="Nombre y Apellido" className={styles.input} required/>
                  </label>

                  <label htmlFor="ema" className={styles.label}> 
                      <HiOutlineMail className={styles.iconEmail}/>
                      <input type="email" id="ema"  placeholder="Email" className={styles.input} required />
                  </label>

                  <label htmlFor="pass" className={styles.label}> 
                      <RiLockPasswordLine className={styles.iconPass}/>
                      <input type="password" id="pass"  placeholder="Contraseña" className={styles.input} required/>
                  </label>

                  <label htmlFor="rePass"className={styles.label} > 
                      <RiLockPasswordLine className={styles.iconPass}/>
                      <input type="password" id="rePass"  placeholder="Repita su contraseña" className={styles.input} required />
                  </label>

                  <PaisesSelect isFocused={isFocused} setIsFocused={setIsFocused} 
                                                        selectedCountry={selectedCountry}    
                                                        setSelectedCountry={setSelectedCountry}  />  
                
                   <PhoneSelect phone={phone} setPhone={setPhone} isFocused={isFocused} setIsFocused={setIsFocused}/>

                   <label htmlFor="nameLab" className={styles.label}> 
                                <ImLab  className={styles.iconLabR}/>
                                <input type="text" id="nameLab"  placeholder="Nombre del laboratorioa" className={styles.input} required/>
                    </label>

                    <span className={styles.titleLab}>Nombre de la pagina de su laboratorio en la nube: </span>

                    <div className={styles.divN}>
                                <TbWorldWww className={styles.iconWWWR}/>
                                
                                <div className={styles.nameUrl} >

                                        <label htmlFor="npagin" className={styles.label}> 

                                                 <input type="text" required id="npagin"  placeholder="pagina" className={styles.input2}   />
                                                
                                                 <div className={styles.titlePagin}>.socilabcloud.com</div>  

                                        </label>

                                 </div>

                    </div>

                    <Recaptcha/>

                    <section className={styles.SectionTermYcond}>
                            
                             <input type="checkbox"  className={styles.termsConditionsInput} name="terms-and-conditions" required/> 

                               <span className={styles.spanTermyCond}>Al registrarse usted acepta nuestra <Link href="" className={styles.link}>
                                      política de privacidad </Link> y los
                                      <Link href="" className={styles.link}>  términos de uso.</Link> 

                                </span>
                                            
                    </section>   

                    <button className={styles.btnCrearCuenta}>Crear Cuenta</button> 

        </form>
    </section>
  )
}

export default SignUppage

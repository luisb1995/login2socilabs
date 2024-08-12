"use client"
import Select from 'react-select';
import { Suspense } from 'react';
import Image from "next/image";
import {countries }from "@/db/country"
import { GiWorld } from "react-icons/gi";
import styles from "@/styles/signup/signup.module.css"
import "@/app/globals.css"


export default function PaisesSelect({isFocused,setIsFocused,selectedCountry,setSelectedCountry}) {

    const id = 'mi pais';

        const handleFocus = () => {
        setIsFocused(!isFocused);
        };
        const handleChange = (newValue) => {
        if (newValue) {
            setSelectedCountry(newValue); // Update the state with the new value
        } else {
            setSelectedCountry(null);
        }
        };

        
        

  return (
    <>
        <label htmlFor="pais" className={styles.label2}>

                  <GiWorld className={styles.iconWorldR}/>


                   <select id="countries" label="Seleccione su pais" required placeholder="seleccione su pais" className={styles.select}>

                        <option value="">Seleccione un país</option>

                        { countries.map(({value,label})=>(                       
                            
                                                                        
                                            <option key={value} className={styles.option} >
                                        
                                                {label}
                                            </option>
                                        
                            )                              
                                         
                    )}
                   
                </select> 
                
                  
         </label>
    </>
  )
}

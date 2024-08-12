import React from 'react'
import PhoneInput from 'react-phone-input-2';
import styles from "@/styles/signup/signup.module.css"
import 'react-phone-input-2/lib/style.css'
import "@/app/globals.css"

export default function PhoneSelect({phone , setPhone, isFocused, setIsFocused}) {
    const handleFocus = () => {
        setIsFocused(!isFocused);
      };
  return (
    <>
                        <PhoneInput
                              country={"ar"}
                              value={phone}
                              onChange={(e)=>setPhone(e)}
                              placeholder="Telefono"
                              containerStyle={{ width:"420px"}}
                              inputClass={`phone-input ${isFocused ? "focused" : "" }`}
                              buttonClass='phone-button'
                              dropdownClass="phone-dropdown"
                              dropdownStyle={{width:"320px"}}
                              inputStyle={{borderColor:"rgba(39, 71, 125, 0.6)", height:"40px" , width:"345px", marginLeft:"55px",paddingLeft:"10px" , borderRadius:"12px" }}
                              buttonStyle={{borderRadius:"8px",  background:"white", height:"35px", alignSelf:"center" , padding: "0px", marginLeft:"12px"}}
                              onlyCountries={['ar', 'bo', 'br', 'cl', 'co', 'cr', 'cu', 'do', 'ec', 'sv', 'gt', 'hn', 'mx', "ni",  'pa', 'py','pe', 'pr', 'uy', 've']}
                              containerClass="phone-input-container"
                              onFocus={handleFocus}
                              onBlur={handleFocus}
                         /> 
      
    </>
  )
}
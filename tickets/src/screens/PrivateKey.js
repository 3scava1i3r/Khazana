import React , { useState,useContext } from 'react'
import {useHistory } from "react-router-dom";
import {Box , Button } from '@material-ui/core'
import { PrivateKey , Mnemonic} from '@hashgraph/sdk'
import {LoginContext} from "./LoginContext";

import './PrivateKey.css'


export default function PK() {
    
    const {setPrKey,prKey} = useContext(LoginContext);
    // const [PrKey , SetPrKey ] = useState('');
    const history = useHistory();
    
    const inputEvent = (e) => {
        /* console.log(e.target.value); */
        setPrKey(e.target.value)
    
    }
    
    /* media milk rally thought afford gas monitor close box slow employ marine quality jacket orbit trigger cancel try above weird save prepare snow slim */
    
    
    const onSubmit = async (e) => {
       
        
        // e.preventDefault(); 
        if(prKey.length <= 94 && prKey.length!=null){
            history.push("/login")
            alert("Error Login!!")
        }else{
            history.push("/home")
        }
        // const privateKey = PrivateKey.fromString(prKey); 
        // console.log(privateKey.toString());   
        // const publicKey = privateKey.publicKey;
        // console.log(publicKey.toString());
        // SetPrKey('')
        /* const mnemonic = await Mnemonic.generate(); */
        /* var i;
        for(i=0;i<24;i++){
            console.log(mnemonic.words[i])
        } */
        
        
    }

    return (
        
     
        <div className="screen1">
          
             <form>
                <Box className ="box" component="div" m={1}>
               
                <input type="text" id="inn" onChange={inputEvent} value={prKey} placeholder="Enter Your PivateKey"/>
                <Button onClick={onSubmit} type="submit" id ="l" variant="contained" color="primary" title="hh">Login</Button>
                </Box>
            </form>
        </div>
       
    )
}

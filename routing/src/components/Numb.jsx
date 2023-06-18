import React from 'react'
import { useParams } from "react-router-dom";

const Numb = () => {
    const {num, color1, color2} = useParams();
    // const {color1} = useParams();
    // const {color2} = useParams();
    let text
    if(isNaN(num))
        text = "Word"
    else
        text = "Number"

        return (
            <>
                <h1 style={{backgroundColor: color2, color: color1}}>The {text} is: {num}</h1>
            </>
        )

    if (isNaN(+num)){
        return (
            <>
                <h1 style={{backgroundColor: color2, color: color1}}>The World is: {num}</h1>
            </>
        )
    }else{
        return (
            <>
                <h1 style={{backgroundColor: color2, color: color1}}>The Number is: {num}</h1>
            </>
    )
}}

export default Numb
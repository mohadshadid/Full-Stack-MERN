import React from 'react'
import { useParams } from "react-router-dom";

const Numb = () => {
    const {num} = useParams();
    const {color1} = useParams();
    const {color2} = useParams();
    if (isNaN(+num)){
        return (
            <>
                <h1>The World is: {num}</h1>
            </>
        )
    }else{
        return (
            <>
                <h1>The Number is: {num}</h1>
            </>
    )
}}

export default Numb
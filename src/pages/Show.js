import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {

    const { id } = useParams();
    // console.log('params', params);

        const [show,setShow] =useState(null);
        useEffect(()=>{

            apiGet(`/shows/${id}?emded[]=seasons&embed[]=cast`).then(results=>{
                setShow(results);
            })

        },[id])

        console.log('show',show);

    return <div> this is Show page. </div>

}

export default Show;

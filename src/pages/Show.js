import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {

    const { id } = useParams();
    // console.log('params', params);
    const [show, setShow] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        let isMounted = true;

        apiGet(`/shows/${id}?emded[]=seasons&embed[]=cast`)
            .then(results => {
                    if (isMounted) {
                        setShow(results);
                        setisLoading(false);
                    }
            })
            .catch(err => {
                if (isMounted) {
                    setError(err.message);
                    setisLoading(false);
                }
            });


        return () => {
            isMounted = false;
        }
    }, [id]);

    console.log('show', show);

    if (isLoading) {
        return <div>Data is being loaded</div>
    }

    if (error) {
        return <div>Error occured</div>
    }

    return <div> {isLoading}this is Show page. </div>

}

export default Show;

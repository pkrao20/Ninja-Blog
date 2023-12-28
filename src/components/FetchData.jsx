import { useState,useEffect } from "react";

const FetchData = (Url) => {
    const [Data, setData] = useState(null);
    const [Ispending, setIspending] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        setTimeout(() => {
            fetch(Url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('The page that you are looking for does not exist');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIspending(false);
                    setError(null);
                }
                )
                .catch(err => {
                    setError(err.message);
                    setIspending(false);
                })

        }, 10);
    }, [Url]);
    return {Data,Ispending,error};
}
export default FetchData;


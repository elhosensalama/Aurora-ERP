import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const aboter = new AbortController();

        fetch(url, {
            signal: aboter.signal,
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error('errror');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;

import { useState, useEffect } from 'react';

interface UseFetchResult {
    data: any | null;
    isPending: boolean;
    error: any | null;
}

const useFetch = (url: string): UseFetchResult => {
    const [data, setData] = useState<any | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<any | null>(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                // fetch the data from the endpoint which returns a promise, attach a then method to it to either throw the error message or return the json response.
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching users data');
                    }
                    return res.json();
                })
                // if the data is fetched successfully and there's no error, set the data state to the data, set the pending state to false, and set the error state to null.
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                // if there's an error set the pending state to false to stop the fetching process and return the error message.
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;

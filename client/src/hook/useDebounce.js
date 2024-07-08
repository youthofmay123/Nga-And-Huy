import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebouceValue] = useState(value);

    useEffect(() => {
        const hanler = setTimeout(() => setDebouceValue(value), delay);

        return () => clearTimeout(hanler);
    }, [value]);

    return debounceValue;
}

export default useDebounce;

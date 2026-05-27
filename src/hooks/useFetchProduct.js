import { useState, useEffect } from "react";

function useFetchProduct(productId) {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchProduct() {
            try {
                setIsLoading(true);
                const response = await fetch(`http://localhost:3000/products/${productId}`);
                if (!response.ok) throw new Error();
                const data = await response.json();
                setProduct(data);
            } catch {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchProduct();
    }, [productId]);

    return { product, isLoading, isError };
}

export default useFetchProduct;
                        
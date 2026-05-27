import { useState, useEffect } from "react";

function useFetchReview(productId) {
    const [reviews, setReviews] = useState([]);
    const [isReviewLoading, setIsReviewLoading] = useState(true);
    const [isReviewError, setIsReviewError] = useState(false);

    useEffect(() => {
        async function fetchReviews() {
            try {
                setIsReviewLoading(true);
                const response = await fetch(`http://localhost:3000/reviews?productId=${productId}`);
                if (!response.ok) throw new Error();
                const data = await response.json();
                setReviews(data);
            } catch {
                setIsReviewError(true);
            } finally {
                setIsReviewLoading(false);
            }
        }
        fetchReviews();
    }, [productId]);

    return { reviews, isReviewLoading, isReviewError };
}

export default useFetchReview;

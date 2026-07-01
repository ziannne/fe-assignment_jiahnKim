import { useParams } from "react-router";
import useFetchProduct from "../hooks/useFetchProduct";
import useFetchReview from "../hooks/useFetchReview";
import styles from "./ProductDetail.module.css";

function StarRating({ rating }) {
    return (
        <span className={styles.stars}>
            {"★".repeat(rating)}{"☆".repeat(5 - rating)}
        </span>
    );
}

const ProductDetail = () => {
    const { productId } = useParams();
    const { product, isLoading, isError } = useFetchProduct(productId);
    const { reviews, isReviewLoading, isReviewError } = useFetchReview(productId);

    if (isLoading) return <p className={styles.loading}>불러오는 중...</p>;
    if (isError || !product) return <p className={styles.error}>상품을 찾을 수 없습니다.</p>;

    return (
        <div className={styles.container}>
            <div className={styles.productSection}>
                <div className={styles.imageWrap}>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.infoWrap}>
                    <div className={styles.category}>{product.category}</div>
                    <div className={styles.name}>{product.name}</div>
                    <div className={styles.price}>{product.price.toLocaleString()}원</div>
                    <hr className={styles.divider} />
                    <p className={styles.description}>{product.description}</p>
                    <button className={styles.buyButton}>구매하기</button>
                </div>
            </div>

            <div className={styles.reviewSection}>
                <h3 className={styles.reviewTitle}>
                    리뷰
                    <span className={styles.reviewCount}>({reviews.length})</span>
                </h3>
                {isReviewLoading ? (
                    <p className={styles.emptyReview}>리뷰 불러오는 중...</p>
                ) : isReviewError ? (
                    <p className={styles.emptyReview}>리뷰를 불러오지 못했습니다.</p>
                ) : reviews.length === 0 ? (
                    <p className={styles.emptyReview}>아직 작성된 리뷰가 없습니다.</p>
                ) : (
                    <ul className={styles.reviewList}>
                        {reviews.map((review) => (
                            <li key={review.id} className={styles.reviewItem}>
                                <div className={styles.reviewHeader}>
                                    <span className={styles.reviewUsername}>{review.username}</span>
                                    <StarRating rating={review.rating} />
                                </div>
                                <p className={styles.reviewText}>{review.text}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
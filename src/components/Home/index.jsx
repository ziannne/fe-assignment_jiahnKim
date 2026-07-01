import { useNavigate } from "react-router";
import styles from "./Home.module.css";

import useFetchProducts from "../../hooks/useFetchProducts";

const Home = () => {
    const { products } = useFetchProducts();
    const navigate = useNavigate();

    return (<>
        <ul className={styles.categoryList}>
            <li>전체</li>
            <li>상의</li>
            <li>하의</li>
            <li>신발</li>
            <li>가방</li>
            <li>악세서리</li>
        </ul>
        <h3>상품 목록({products.length})</h3>
        <div className={styles.productList}>
            {products.map(({id, category, image, name, price})=> {
               return (
                <div key={id} className={styles.productListItem} onClick={() => navigate(`/products/${id}`)} style={{ cursor: "pointer" }}>
                    <img src={image} alt={name} />
                    <div className={styles.productInfo}>
                        <div className={styles.productCategory}>{category}</div>
                        <div className={styles.productName}>{name}</div>
                        <div className={styles.productPrice}>{price.toLocaleString()}원</div>
                    </div>
                </div>
                );
            })}
        </div>
    </>
    )
};


export default Home;
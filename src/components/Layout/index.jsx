import { Outlet, Link } from "react-router-dom";

import styles from "./Layout.module.css";

const Layout = () => {
    return(
        <div className={styles.page}>
            <div className={styles.container}>
                <Link to="/">
                    <h1>Shop</h1>
                </Link>
                <Outlet />
            </div>
        </div>

    );
};

export default Layout;
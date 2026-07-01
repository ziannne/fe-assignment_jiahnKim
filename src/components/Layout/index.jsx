import { Outlet, Link} from "react-router";

import styles from "./Layout.module.css";

const Layout = () => {
    return(
        <div className={styles.container}>
           <Link to="/">
            <h1>Shop</h1>
            </Link> 
            <Outlet />
        </div>

    );
};

export default Layout;
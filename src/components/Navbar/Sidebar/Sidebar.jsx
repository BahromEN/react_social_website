
import styles from './Sidebar.module.css';
const Sidebar = (props) => {
    return (
        <div className={styles.sidebarItem}>
            <div>
                <img className={styles.userImage} src="https://cdn-icons-png.flaticon.com/512/880/880594.png" />
            </div>
            <div>
                {props.names}
            </div>

        </div>
    );
}

export default Sidebar;
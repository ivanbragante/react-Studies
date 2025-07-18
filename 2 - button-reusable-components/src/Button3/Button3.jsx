// Essa é o modular, onde é criado uma pasta contendo o jsx e o css

import styles from './Button3.module.css'

function Button3(){
    
    return(
        <button className={styles.button3}>Button 3 - Module</button>
    );
}

export default Button3
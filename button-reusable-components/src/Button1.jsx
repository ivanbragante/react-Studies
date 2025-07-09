// Essa é a in-line onde os "-" devem ser substituidos por camelCase
// E o ";" deve ser substituido por ","
function Button1(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    
    return(
        <button style={styles}>Button 1 - In-line</button>
    );
}

export default Button1
// Temos algumas formas de estilizar componentes com CSS
// Globalmente, com módulos e in-line


import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3/Button3";

function App() {
 return(
  <>
  <div className="buttons">
    <Button1/>
    <Button2/>
    <Button3/>
  </div>
    
  </>
 );
}

export default App

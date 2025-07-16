import Student from "./Student";

function App() {
 return(
  <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>      
      <Student name="Jorge" age={12} isStudent={true}/>      
      {/* Default props: */}
      <Student />  
  </>
 );
}


export default App


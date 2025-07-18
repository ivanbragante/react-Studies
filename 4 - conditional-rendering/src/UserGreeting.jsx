import PropTypes from 'prop-types';

function UserGreeting({ isLoggedIn = false, username = "Guest" }){
    // Option 1
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to continue</h2>
    // }

    // Option 2
    // return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : 
    //                           <h2 className="login-prompt">Please log in to continue</h2>
    //                         );

    // Option 3
    const welcomeMessage =  <h2 className="welcome-message">
                             Welcome {username}
                            </h2>
    const loginPrompt   =   <h2 className="login-prompt">
                             Please log in to continue
                            </h2>

    return(isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
} 


export default UserGreeting
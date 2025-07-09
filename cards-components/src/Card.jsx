import profilePic from './assets/profile-pic.jpeg'

function Card(){
    
    return(
        <div className="card">
            <img className="img-card" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Teste</h2>
            <p className="card-text">I make code and play games</p>
        </div>
    );
}

export default Card
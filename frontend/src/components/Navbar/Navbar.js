import ModalLogin from '../Modale/ModalLogin';
import './Navbar.css';

function OpenModal() {
    var modallogin = document.getElementById('Modal');
    modallogin.showModal();
}

function OpenModal2() {
    var modallogin2 = document.getElementById('Modal2');
    modallogin2.showModal();
}

function Logout() {
    var loginButton = document.getElementById('loginButton');
    loginButton.style.display = 'block';
    var registerButton = document.getElementById('createAccount');
    registerButton.style.display = 'block';
    var logoutButton = document.getElementById('logout');
    logoutButton.style.display = 'none';
    
}

function Navbar(){
    return(
        <div className="navv" style={{
            display: 'flex',
            justifyContext: 'space-around'
            
        }}>
            <div style={{
                marginTop: '50px',
                marginLeft: '45px'
            }}
            className="Logo" >
                    <img src="Logo.png"/> 
            </div>

            <div style={{
                flex: '1 1 auto'
            }}>
            </div>

            <div style={{
                marginTop: '2.5vw',
                marginRight: '21',
            }}
            className="Login" id="loginButton">
                <p onClick={OpenModal2}>Logare</p>
            </div>

            <div style={{
                flex: '0 1 auto'
            }}>
            </div>

            <div style={{
                marginTop: '2.5vw',
                marginRight: '99px',
                marginLeft: '21px'
            }}
            className="CreareCont" id="createAccount">
                <p onClick={OpenModal}>Creare cont</p>
             </div>

             <div style={{
                display: 'none',
                marginTop: '66px',
                marginRight: '99px',
                marginLeft: '21px'
            }}
            className="CreareCont" id="logout">
                <p onClick={Logout}>Logout</p>
             </div>

        </div> 
    )
}

export default Navbar;
import './Navbar.css';
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
                marginTop: '66px',
                marginRight: '21',
            }}
            className="Login">
                <a href=''>Logare</a> 
            </div>

            <div style={{
                flex: '0 1 auto'
            }}>
            </div>

            <div style={{
                marginTop: '66px',
                marginRight: '99px',
                marginLeft: '21px'
            }}
            className="CreareCont">
                <a href=''>Creare cont</a>
             </div>

        </div> 
    )
}

export default Navbar;
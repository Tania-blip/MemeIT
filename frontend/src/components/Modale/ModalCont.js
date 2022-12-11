import './ModalCont.css';
import React, { useState } from 'react';
function closeModal2() {
    var modallogin2 = document.getElementById('Modal2');
    modallogin2.close();
}

const ModalCont = props =>{
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
      localStorage.setItem('Name', name);
      localStorage.setItem('Password', pwd);
    var loginButton = document.getElementById('loginButton');
    loginButton.style.display = 'none';
    var registerButton = document.getElementById('createAccount');
    registerButton.style.display = 'none';
    var logoutButton = document.getElementById('logout');
    logoutButton.style.display = 'block';
   };
   const remove = () => {
      localStorage.removeItem('Name');
      localStorage.removeItem('Password');
   };
   if (typeof name !== 'undefined' && name !== null){
    console.log("exista")
   }
    return(
        <>
        <div className='chestialba2'>
        <div style={{
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <div>
            <img src="Logo.png" alt="logoInModal2"/>
            </div>
            <div style={{
                flex: '1 1 auto'
            }}
            ></div>
            <div>
            <img style={{
                marginRight: '1vw'
            }}
            onClick={closeModal2} src="close.png" alt="close"/>
            </div>
        </div>
        <div className='chestiamov2'>
            <div className='modalLogin2'>
                <div className='modalLoginContent2'>
                    <div className='modalLoginHeader2'>
                        Welcome back
                    </div>
                    <div className='modalLoginBody2'>
                        <form>
                            <div>
                                <label className='label2M'>Username</label>
                            </div>
                            <input 
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='input2M' />
                        </form>
                        <form>
                            <div>
                                <label className='label2M'>Parolă</label>
                            </div>
                            <input 
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            className='input2M' placeholder='parolă'/>
                        </form>
                    </div>
                    <div className='modalLoginFooter2'>
                        <button onClick={handle} className='buttonCreareaCont2'>Logare</button>
                    </div>

                    {localStorage.getItem('Name')}
                    {localStorage.getItem('Password') }
                    {localStorage.removeItem('Name')}
                    {localStorage.removeItem('Password')}
                    
                


                

                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default ModalCont;
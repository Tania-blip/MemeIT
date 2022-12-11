import './ModalLogin.css';

function closeModal() {
    var modallogin = document.getElementById('Modal');
    modallogin.close();
}



const ModalLogin = props =>{
    return(
    <>
    <div className='chestialba'>
        <div style={{
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <div>
            <img src="Logo.png" alt="logoInModal"/>
            </div>
            <div style={{
                flex: '1 1 auto'
            }}
            ></div>
            <div>
            <img style={{
                marginRight: '1vw'
            }}
            onClick={closeModal} src="close.png" alt="close"/>
            </div>
        </div>
        <div className='chestiamov'>
            <div className='modalLogin'>
                <div className='modalLoginContent'>
                    <div className='modalLoginHeader'>
                        Welcome
                    </div>
                    <div className='modalLoginBody'>
                        <form>
                            <div>
                                <label className='label1M'>Username</label>
                            </div>
                            <input className='input1M' placeholder='username'/>
                        </form>
                        <form>
                            <div>
                                <label className='label1M'>Email</label>
                            </div>
                            <input className='input1M' placeholder='email'/>
                        </form>
                        <form>
                            <div>
                                <label className='label1M'>Parolă</label>
                            </div>
                            <input className='input1M' placeholder='parolă'/>
                        </form>
                    </div>
                    <div className='modalLoginFooter'>
                        <button className='buttonCreareaCont'>Creare cont</button>
                    </div>
                

                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default ModalLogin;
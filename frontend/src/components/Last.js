import './Last.css';
function Last(){
    return(
        <>
        <div className="container">
            <div className="imagini" style={{
                display: 'flex'
            }}>
                <img className="InstaImg" src="insta.png" alt="insta" />
                <img className="AltcevaImg"src="altceva.png" alt="altceva"/>
                <img className="FacebookImg" src="facebook.png" alt="facebook"/>
            </div>
            <div className="txt">
                Copyright 2022 | La muncă, nu la întins mâna.
            </div>
        </div>
        
        </>
    )
}
export default Last;
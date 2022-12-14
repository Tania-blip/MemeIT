import './Last.css';
function Last(){
    return(
        <>
        <div className="container">
            <div className="imagini" style={{
                display: 'flex'
            }}>
                <a href='https://www.instagram.com/lsacbucuresti/?__coig_restricted=1'>
                    <img className="InstaImg" src="insta.png" alt="insta" />
                </a>
                <a href='https://www.twitch.tv/lsac_bucuresti'>
                    <img className="AltcevaImg"src="altceva.png" alt="altceva"/>
                </a>
                <a href='https://www.facebook.com/LsacBucuresti/'>
                    <img className="FacebookImg" src="facebook.png" alt="facebook"/>
                </a>
                
            </div>
            <div className="txt">
                Copyright 2022 | La muncă, nu la întins mâna.
            </div>
        </div>
        
        </>
    )
}
export default Last;
import './Page3.css';
function Page3(){
    return(
        <>
        <div className="Text">
            Most Viewed
        </div>
        <div style={{
            display: 'flex'
        }}>
            <img className="primaImg" src="meme1.png"/>
            <img className="aDouaImg" src="meme2.png"/>
            <img className="aTreiaImg" src="meme3.png"/>
        </div>
        </>
    )
}
export default Page3;
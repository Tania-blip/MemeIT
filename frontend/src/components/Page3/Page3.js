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
            <img className="primaImg" src="meme1.png" alt="img1"/>
            <img className="aDouaImg" src="meme2.png" alt="img2"/>
            <img className="aTreiaImg" src="meme3.png" alt="img3"/>
        </div>
        </>
    )
}
export default Page3;
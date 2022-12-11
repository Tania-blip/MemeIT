import './Page1.css';

function scrollInPenis() {
const element = document.getElementById('pagina2');
console.log("Varfu");
if (element) {
  element.scrollIntoView({ behavior: 'smooth' });
}
}
function Page1(){
    return(
    <>
    <div style={{
        display: 'flex',
    }}>
    <div style={{
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
    <div className="TextMare">
        Partajarea de meme-uri nu a
        fost niciodata mai simpla!
    </div>

    <div className="TextMic"> 
        Platforma ideală pentru studenții de la Politehnică, 
        amuzați de câte materii o să pice semestrul asta.
    </div>
    
    <div className="meme">
        
      <button 
      className="aText" 
      onClick={scrollInPenis}>Upload a MEME</button>
      
        
    </div>
    </div>

    <div className="ImagineMare" style={{
        flexGrow: '1',
        display: 'flex',
        justifyContent: 'center'
    }}>
        <img className="Imagine" src="WhySoSalty.png" alt="imaginePrincipala"/>
    </div>
    </div>
    </>

        
    )
}

export default Page1;
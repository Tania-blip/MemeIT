import './Page2.css';
function Page2(){
    return(
        <div id="pagina2" className="fundal">    
            <div className="paginaAlba">
                <div style={{
                    display: 'flex'
                }}
                >
                    <div className="stanga">
                        <div className="textSus">
                        Ai tupeu și crezi că ești amuzant?
                        </div>
                        <div className="textJos">
                        Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem meme-ul.
                        </div>
                    </div>
                    <div className="dreapta">
                        <div className="caseta1">
                            <form>
                                <div>
                                    <label>
                                        Descriere
                                    </label>
                                </div>
                                
                                <input className="input1" placeholder="descriere"/>  
                            </form>
                        </div>
                        <div className="caseta2">
                            <form>
                                {/*todo */}
                                <label className="memeLabel">
                                     Meme (jpg, jpeg, png, gif) 
                                </label>  
                                <input  type="file" accept="image/png, image/jpeg, image/jpg, image/gif" /> 
                                <button type = "submit" className = "ButonTrimitere"> Trimite</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default Page2;
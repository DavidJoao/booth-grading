function Location(){
    return(
    <div>
        <div class="mx-auto" style={{ position:'relative', textAlign:'right', height:'50%', width:'90%'}} className="d-flex flex-column mx-auto">
            <div class="mx-auto mt-5 pb-5" style={{ height:'50%', display:'flex', justifyContent:'center' }}>
                <iframe style={{borderRadius:'5px'}} width="110%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=2149%20W%20Carson%20Mesa%20Rd,%20Acton,%20CA%2093510&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe><a href="https://www.whatismyip-address.com/divi-discount/"></a><br></br>
                <a href="https://www.embedgooglemap.net"></a>
            </div>
                <div style={{marginLeft:'3%', display:'flex', flexDirection:'column', alignItems:"center"}}>
                    <h4 style={{color:'white'}}>Address:</h4>
                    <p style={{color:'white'}}>2149 Carson Mesa Rd. Acton, Ca 93510</p>
                    <h4 style={{color:'white'}}>Hours</h4>
                    <p style={{color:'white'}}>Monday—Friday: 7:30AM–5:00PM <br></br>Saturday & Sunday: Closed</p>
                </div>
        </div>
    </div>
    )
}

export default Location
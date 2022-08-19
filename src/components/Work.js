import Gallery from "./Gallery"
import Description from "./Description"

function Work(){
    return(
        <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}} className="mx-auto">
            <div className="d-sm-flex flex-sm-colum flex-md-column flex-lg-row align-items-sm-center m-5" style={{width:'100%', display:'flex', justifyContent:'center'}}>
                <div className="d-sm-flex flex-sm-colum flex-md-column flex-lg-row align-items-sm-center m-5">
                    <Description title={"Excavations"} description={"We do this and that bla bla"} />
                    <Gallery first={"https://i.ibb.co/KW5KgHS/IMG-0660.jpg"} second={"https://i.ibb.co/rc9dRZR/IMG-0434.jpg"} third={"https://i.ibb.co/pXXMrvC/IMG-0927.jpg"} />
                </div>
            </div>
            <div className="d-sm-flex flex-sm-colum flex-md-column-reverse flex-lg-row align-items-sm-center m-5" style={{width:'100%', display:'flex', justifyContent:'center', paddingBottom:'3%', backgroundColor:"#39454a", boxShadow:"0px 2px 29px 8px rgba(0,0,0,0.75"}}>
                <div className="d-sm-flex flex-sm-colum flex-md-column flex-lg-row-reverse align-items-sm-center m-5">
                    <Description title={"Subdrain"} description={"We do this and that bla bla"}  />
                    <Gallery first={"https://i.ibb.co/VDPnN0K/IMG-1191.jpg"} second={"https://i.ibb.co/rQ1z4jk/IMG-0444.jpg"} third={"https://i.ibb.co/fHfVmZC/IMG-0682.jpg"} />
                </div>
            </div>
            <div className="d-sm-flex flex-sm-column flex-md-column flex-lg-row align-items-sm-center m-5">
                <Description title={"Grading"} description={"We do this and that bla bla"} />
                <Gallery first={"https://i.ibb.co/Vqx2DG4/IMG-1050.jpg"} second={"https://i.ibb.co/VM0hKWY/IMG-0711.jpg"} third={"https://i.ibb.co/C8Q7m7W/IMG-1301.jpg"} />
            </div>
        </div>
    )
}

export default Work
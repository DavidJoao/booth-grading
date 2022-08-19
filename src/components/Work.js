import Gallery from "./Gallery"
import Description from "./Description"

function Work(){
    return(
        <div style={{width:'90%', display:'flex', flexDirection:'column', alignItems:'center'}} className="mx-auto">
            <div className="d-sm-flex flex-sm-colum flex-md-row align-items-sm-center m-5">
                <Description title={"Excavations"} description={"We do this and that bla bla"} />
                <Gallery />
            </div>
            <div className="d-sm-flex flex-sm-colum flex-md-row-reverse align-items-sm-center m-5">
                <Description title={"Excavations"} description={"We do this and that bla bla"} />
                <Gallery />
            </div>
            <div className="d-sm-flex flex-sm-column flex-md-row align-items-sm-center m-5">
                <Description title={"Excavations"} description={"We do this and that bla bla"} />
                <Gallery />
            </div>
        </div>
    )
}

export default Work
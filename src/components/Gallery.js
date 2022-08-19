import { Carousel } from 'react-bootstrap'
 
function Gallery( {first, second, third} ){
    return(
        <Carousel style={{width:'100%', paddingLeft:'15%', paddingRight:'15%'}} className="mx-auto">
                <Carousel.Item>
                    <img
                    style={{width:'50vh', height:"50vh", borderRadius:'5px', border:'2px solid white', boxShadow:'3px 2px 42px 14px rgba(0,0,0,0.75)'}}
                    className="d-block"
                    src={first}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{width:'50vh', height:"50vh", borderRadius:'5px', border:'2px solid white', boxShadow:'3px 2px 42px 14px rgba(0,0,0,0.75)'}}
                    className="d-block"
                    src={second}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{width:'50vh', height:"50vh", borderRadius:'5px', border:'2px solid white', boxShadow:'3px 2px 42px 14px rgba(0,0,0,0.75)'}}
                    className="d-block"
                    src={third}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
    )
}

export default Gallery
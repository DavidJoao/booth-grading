import { Carousel } from 'react-bootstrap'
 
function Gallery(){
    return(
        <Carousel style={{width:'100%'}} className="mx-auto">
                <Carousel.Item>
                    <img
                    style={{}}
                    className="d-block w-100"
                    src="https://www.blach.com/wp-content/uploads/2019/05/Homepage_Construction_Workers_Hero1-1.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.blach.com/wp-content/uploads/2019/05/Homepage_Construction_Workers_Hero1-1.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.blach.com/wp-content/uploads/2019/05/Homepage_Construction_Workers_Hero1-1.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
    )
}

export default Gallery
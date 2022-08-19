import { ListGroup, Card } from 'react-bootstrap'
import Location from "./Location"

function About(){
    return(
        <div className='pb-5'>
                <h1 style={{color:'white', textAlign:'center', margin:'5% 0 5% 0'}}>Quality & Dependability a Standard Since 1978</h1>
            <div className='m-5 d-sm-flex flex-sm-column flex-md-row'>
                <Card style={{backgroundColor:'#252529',  padding:'3%', borderColor:"#39454a", boxShadow:"-1px 0px 55px -1px rgba(0,0,0,1)"}} className="mb-4 m-md-3">
                    <p style={{color:'white'}}>Booth Grading and Excavating is a family owned and operated business that started in 1978 with Roger Booth as an owner/ operator.</p>
                </Card>
                <Card style={{backgroundColor:'#252529', padding:'3%', borderColor:"#39454a", boxShadow:"-1px 0px 55px -1px rgba(0,0,0,1)"}} className="mb-4 m-md-3">
                    <p style={{color:'white', padding:'3%' }}>Our commitment to our work has allowed us to grow and expand while still maintaining the utmost level of quality in our work, as well as dependability you can trust.</p>
                </Card>
                <Card style={{backgroundColor:'#252529', padding:'3%', borderColor:"#39454a", boxShadow:"-1px 0px 55px -1px rgba(0,0,0,1)"}} className="mb-4 m-md-3">
                    <p style={{color:'white'}}>Located in Los Angeles County, we currently bid construction projects in the greater Los Angeles area, including, Beverly Hills, Santa Monica, Malibu, Pacific Palisades, and many of the surrounding cities.</p>
                </Card>
            </div>
            <div className="m-5 mb-0 d-sm-flex flex-sm-column" style={{paddingBottom:'5%', backgroundColor:'#39454a', padding:'3%', borderRadius:'5px', boxShadow:' -2px 29px 95px -14px rgba(0,0,0,0.75)'}}>
                <h3 style={{color:'white'}}>Our work is specialized in custom residential homes with the following services:</h3>
                <ListGroup style={{border:"1px solid black", backgroundColor:'#252529', borderRadius:'5px'}} variant="flush">
                    <ListGroup.Item style={{border:"1px solid #39454a", backgroundColor:'#252529', color:'white'}}>Demolition <br></br>- Including Green Demo</ListGroup.Item>
                    <ListGroup.Item style={{border:"1px solid #39454a", backgroundColor:'#252529', color:'white'}}>Grading and Excavating</ListGroup.Item>
                    <ListGroup.Item style={{border:"1px solid #39454a", backgroundColor:'#252529', color:'white'}}>Backfill</ListGroup.Item>
                    <ListGroup.Item style={{border:"1px solid #39454a", backgroundColor:'#252529', color:'white'}}>Erosion Control</ListGroup.Item>
                    <ListGroup.Item style={{border:"1px solid #39454a", backgroundColor:'#252529', color:'white'}}>Drainage including: <br></br>- Sub-drain <br></br> - Area drains <br></br> - Rain water recycling systems</ListGroup.Item>
                </ListGroup>
                <h2 style={{color:'white', textAlign:'center', marginTop:'3%'}}>Find Us</h2>
                <Location />
            </div>
        </div>
    )
}

export default About
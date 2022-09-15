import Staff from './Staff'
import { InputGroup, Form, Button } from 'react-bootstrap'

function Contact(){
    return(
        <div className='mb-5' style={{height:'auto', width:"100%", display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}>
            <h1 style={{color:'white', textAlign:'center'}} className="m-5">Contact Us</h1>
            <div className='mx-auto p-5 d-flex flex-column flex-md-row w-100'>
                <Staff name={"Veronica Rivera"} phone={"+1 (661)-382-9051"} position={"Secretary"} />
                <Staff name={"Byanka Arceo"} phone={"+1 (661)-618-0129 "} position={"Secretary"} />
            </div>
            <h3 style={{color:'white', textAlign:'center'}}>Or send us an email</h3>
            <div style={{width:'100%', border:'1px solid white', padding:'5%', width:'80%', margin:'0 auto', borderRadius:'10px', boxShadow:'-2px 2px 30px 0px rgba(255,255,255,0.75)'}} className="mt-5">
                <form style={{margin:'0 auto', width:'70%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3"> Name </InputGroup.Text>
                    <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3"> Email </InputGroup.Text>
                    <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3"> Phone </InputGroup.Text>
                    <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Message</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
                <Button style={{marginTop:'4%', width:'40%'}} variant="secondary">Submit</Button>{' '}
                </form>

            </div>
        </div>
    )
}

export default Contact
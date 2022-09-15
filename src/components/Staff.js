import { Card } from 'react-bootstrap' 

function Staff( {name, position, phone} ){
    return(
        <Card style={{ width: '100%', marginBottom:"5%", marginRight:'1%', marginLeft:'1%' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{position}</Card.Subtitle>
          <Card.Text>Phone: {phone}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Staff
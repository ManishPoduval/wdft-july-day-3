import React from 'react'
import { Button, Card } from 'react-bootstrap';

function ShoppingItem(props) {

    let containerStyle = {
        border: '1px solid black',
        padding: '5px',
        margin: '5px',
        width: '300px'
    }

    let myButton = {
        margin: '5px'
    }

    let myText = {
        textDecoration: props.item.completed ? 'line-through': ''
    }

    return (
        <Card style={containerStyle}>
        <Card.Body>
          <Card.Title style={myText}>{props.item.title}</Card.Title>
          <Button 
            style={myButton} 
            onClick={() => props.onCheck(props.index)} 
            variant="primary">Check</Button>
          <Button 
            style={myButton} 
            onClick={() => props.onDelete(props.index)} 
            variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    )
}


export default ShoppingItem
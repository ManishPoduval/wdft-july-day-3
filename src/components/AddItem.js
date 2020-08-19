import React from 'react'
import { Button } from 'react-bootstrap';

function AddItem(props) {

    let myButton = {
        margin: '15px'
    }


    return (
            <form onSubmit={props.onAdd}>
                <input name="item" type="text"></input>
                <Button style={myButton} variant="light" type="submit">Add Item</Button>
            </form>
    )
}

export default AddItem

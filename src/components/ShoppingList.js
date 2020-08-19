import React from 'react'
import ShoppingItem from './ShoppingItem'

function ShoppingList(props) {
    let containerStyle = {
        display: 'flex', 
        flexWrap: 'wrap'
    }
    return (
        <div style={containerStyle}>
            {
                props.items.map((item, index) => {
                    return <ShoppingItem 
                    key={'a'+index}
                    onDelete={props.onDelete} 
                    onCheck={props.onCheck}
                    item={item} 
                    index={index}
                    />
                })
            }
        </div>
    )
}

export default ShoppingList
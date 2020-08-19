import React from 'react';
import AddItem from './components/AddItem';
import ShoppingList from './components/ShoppingList';
import Spinner from './components/Spinner'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'


class App extends React.Component {

  state = {
    items: [], 
    filteredItems:[],
    isLoading: true,
  }

  handleAddItem = (event) => {
    event.preventDefault() // always do this with submit events
    let itemName = event.currentTarget.item.value
    let newItems = [{title:itemName, completed: false}, ...this.state.items]
    this.setState({
      items: newItems,
      filteredItems: newItems
    })   
  }

  handleDeleteItem = (index) => {
    let cloneItems = [...this.state.items]
    cloneItems.splice(index, 1)
    this.setState({
      items: cloneItems,
      filteredItems: cloneItems
    })  
  }

  handleCheckItem = (index) => {
    let cloneItems = [...this.state.items] 
    cloneItems[index].completed = !cloneItems[index].completed
    this.setState({
      items: cloneItems,
      filteredItems: cloneItems
    }) 
  }

  handleSearch = (e) => {
    let searchName = e.currentTarget.value
    let cloneItems = this.state.items.filter((item) => {
      return item.title.startsWith(searchName)
    })

    this.setState({
      filteredItems: cloneItems
    }) 
    
  }
   
  componentDidMount(){
    console.log('Component has mounted')
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => {
          this.setState({
            items: res.data, 
            filteredItems: res.data,
            isLoading: false,
          })
      })
    }, 5000)
  }

  componentDidUpdate(){
    console.log('Component has updated !!! ')
  }

  render(){
    return (
      <div >
        <AddItem onAdd={this.handleAddItem} />
        <input 
          type="text" 
          onChange={this.handleSearch}
          placeholder="Search for an item">
        </input>
        { this.state.isLoading &&  <Spinner /> }
        <ShoppingList 
          onDelete={this.handleDeleteItem} 
          onCheck={this.handleCheckItem}
          items={this.state.filteredItems} 
        />
      </div>
    );
  }  
}

export default App;

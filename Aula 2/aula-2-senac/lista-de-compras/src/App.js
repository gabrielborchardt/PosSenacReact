import React from 'react';
import './App.css';
import Form from './components/Form'
import Input from './components/Input'
import List from './components/List'
import ListItem from './components/ListItem'
import Button from './components/Button'

class App extends React.Component {
  state = {
    item: '',
    list: []
  }

  handleItemChange = event => {
    this.setState({
      item: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { list, item } = this.state
    const newList = this.orderList([...list, item])
    if (!this.state.item) return
    this.setState({
      list: newList,
      item: ''
    })
  }

  deleteItem = index => {
    this.setState({
      list: this.state.list.filter((_, i) => i !== index)
    })
  }

  orderList = list => {
    return list.reverse()
  }

  render () {
    const { item, list } = this.state
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <Input value={item} onChange={this.handleItemChange} />
          <List>
            {
              list.map((listItem, index) => {
                return (
                  <ListItem onClick={() => this.deleteItem(index)} key={index}>
                    {listItem}
                  </ListItem>
                )
              })
            }
          <Button>Adicionar</Button>
          </List>
        </Form>
      </div>
    );
  }
}


export default App;

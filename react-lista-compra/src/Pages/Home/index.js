import React, { Fragment } from 'react'
import { getCategories } from '../../services/categories'
import Select from '../../components/Select'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Label from '../../components/Label'
import Form from '../../components/Form'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import './Home.css'

class Home extends React.Component {
  
  state = {
    item: '',
    list: [],
    options: null,
    selectedOption: null,
  }

  componentDidMount = async event =>{

    try {
      const response = await getCategories()
      this.setState({
        options: response.data.map( category => ({value: category.id, label: category.name}))
      })
    } catch (error) {
      console.log(error);
    }

  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleItemChange = event => {
    this.setState({
      item: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { list, item, selectedOption } = this.state
    const newItem = `${selectedOption.label}: ${item}`
    const newList = this.orderList([...list, newItem])
    if (!this.state.selectedOption) return
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
    const { item, list, options, selectedOption } = this.state

    return (
      <Fragment>
        <div className="container">
          <Form onSubmit={this.handleSubmit}>
            
            <Label>Selecione uma categoria</Label>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />        

            <Label>Digite seu produto:</Label>
            <Input value={item} onChange={this.handleItemChange} />

            <Button>Adicionar</Button>
          </Form>
        </div>
        
        <div>
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
          </List>
        </div>
      </Fragment>
    );
  }
}


export default Home;

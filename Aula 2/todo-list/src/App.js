import React, {Component, Fragment} from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button';
import List from './components/List';

class App extends Component{
  state = {
    task: '',
    list: []
  }

  handleChange = event => {
    this.setState({
      task: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { task, list } = this.state
    
    if (!task) return

    this.setState({
      list: [task, ...list],
      task: ''
    })
  }

  handleClickItem = index =>{
    this.setState({
      list: this.state.list.filter((_,i) => {
        return index !== i
      })
    })
  }

  render(){
    const { task, list } = this.state
    return(
      <Fragment>
        <div className='container'>
          <form onSubmit={this.handleSubmit} className='form'>
            <label htmlFor='#tarefa'>
              Tarefa
            </label>
            <Input
              id='tarefa'
              value={task}
              onChange={this.handleChange}
              />
            <Button>+</Button>
          </form>
        </div>
        <div>
          <List data={list} handleClickItem={this.handleClickItem}></List>
        </div>
      </Fragment>
    )
  }
}

export default App
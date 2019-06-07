import React, { Component } from "react";
import { connect } from "react-redux";
import { registerItem } from "../../redux/modules/items";

class ItemForm extends Component {
  state = {
    itemName: "",
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { itemName } = this.state;
    const { registerItem, category } = this.props
    await registerItem(category, itemName);
    this.setState({
      itemName: ''
    })
  };

  handleChange = event => {
    this.setState({
      itemName: event.target.value,
    });
  };

  render() {
    const { itemName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={itemName} name='item' onChange={this.handleChange} />
        <button>+</button>
      </form>
    );
  }
}

export default connect(
  state => {
      return {
          category: state.categories.selectedCategory
      }
  },
  {
    registerItem,
  }
)(ItemForm);

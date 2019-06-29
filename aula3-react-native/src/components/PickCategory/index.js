import React from 'react'
import { Picker, ActivityIndicator } from "react-native"
import { getCategories } from '../../services/category'

class PickCategory extends React.Component {
    state = {
        category: null,
        isLoading: true,
        hasError: false,
        categories: []
    }

    async componentDidMount () {
        try {
            const response = await getCategories()
            this.setState({
                categories: response.data
            })
        } catch (error) {
            console.log(error)
        } finally {
            this.setState({
                isLoading: false
            })
        }
    }

    render () {
        if (this.state.isLoading) {
            return <ActivityIndicator color='#000' size='large' />
        }
        return (
            <Picker
                selectedValue={this.state.category}
                style={{height: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({category: itemValue})
                }>
                    {
                        this.state.categories.map(
                            category => {
                                return (
                                    <Picker.Item
                                        key={category.id}
                                        label={category.name}
                                        value={category.id}
                                    />
                                )
                            }
                        )
                    }
                
            </Picker>
        )
    }
}

export default PickCategory
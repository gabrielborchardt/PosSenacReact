import React from 'react'
import { Picker } from "react-native"

class PickerGender extends React.Component {
    state = {
        gender: 'M'
    }

    handleChange = (gender) => {
        this.setState({gender: gender})
        this.props.gender(gender)
    }

    render () {
        return (
            <Picker
            style={{width: 200, height: 44}} itemStyle={{height: 44}}
                selectedValue={this.props.initialValue ? this.props.initialValue : this.state.gender}
                onValueChange={(itemValue, itemIndex) => this.handleChange(itemValue)}>
                <Picker.Item label="Masculino" value="M" />
                <Picker.Item label="Feminino" value="F" />
            </Picker>
        )
    }
}

export default PickerGender
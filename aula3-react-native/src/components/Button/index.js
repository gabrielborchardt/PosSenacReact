import React from 'react';
import styled from 'styled-components';

const Button = ({children, ...props}) => {
    return (
        <TouchableOpacity {...props}>
            <Text>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const TouchableOpacity = styled.TouchableOpacity`
  padding-vertical: 10px;
  width: 250px;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #ffffff;
  borderRadius: 10px;
  margin: 10px;
`

const Text = styled.Text`
  color: #000000;
`

export default Button
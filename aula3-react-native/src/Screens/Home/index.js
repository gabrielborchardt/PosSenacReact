import React, { Component } from 'react';
import styled from 'styled-components';

class Login extends Component {
    render() {
        return (
            <Container>
                <Text>
                    Home
                </Text>
            </Container>
        )
    }
}

const Container = styled.View`
  flex: 1;
  backgroundColor: #000000;
  alignItems: center;
  justifyContent: center;
`

const Text = styled.Text`
  color: #ffffff;
`

export default Login
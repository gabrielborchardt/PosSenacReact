import React from 'react';
import styled from 'styled-components';

const Container = ({...props}) => {
    return (
        <View {...props}>
        </View>
    )
}

const View = styled.View`
  flex: 1;
  backgroundColor: #993399;
  alignItems: center;
  justifyContent: center;
`

export default Container
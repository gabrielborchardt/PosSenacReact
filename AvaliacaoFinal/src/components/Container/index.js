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
  backgroundColor: #f5f5f5;
  alignItems: center;
  justifyContent: center;
`

export default Container
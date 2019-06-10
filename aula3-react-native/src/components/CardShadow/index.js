import React from 'react';
import styled from 'styled-components';

const CardShadow = ({...props}) => {
    return (
        <View {...props}>
        </View>
    )
}

const View = styled.View`
  box-shadow: 2px 2px 2px black;
`

export default CardShadow
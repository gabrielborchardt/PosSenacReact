import React from 'react';
import styled from 'styled-components';

const Text = ({...props}) => {
    return (
        <StyledText {...props}>
        </StyledText>
    )
}

const StyledText = styled.Text`
    color: #ffffff;
`

export default Text
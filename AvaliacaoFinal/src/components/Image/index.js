import React from 'react';
import styled from 'styled-components';

const Image = ({...props}) => {
    return (
        <StyledImage {...props}>
        </StyledImage>
    )
}

const StyledImage = styled.Image`
  width: 256px;
  height: 256px;
`

export default Image
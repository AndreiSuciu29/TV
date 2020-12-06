import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledTypography = styled(Typography)<{ type?: string }>`
    & {
        background-color: #fff;
        font-weight: ${props => props.type === 'header' ? 700 : 400 } !important;
        padding-right: ${props => props.type === 'header' ? '20px' : 0 };
    }
`;

export {
    StyledTypography
};

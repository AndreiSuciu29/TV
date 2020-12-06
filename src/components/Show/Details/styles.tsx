import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledTypography = styled(Typography)<{ header?: boolean }>`
    & {
        background-color: #fff;
        font-weight: ${props => props.header ? 700 : 400 } !important;
        padding-right: ${props => props.header ? '20px' : 0 };
    }
`;

export {
    StyledTypography
};

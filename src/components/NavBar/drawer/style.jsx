import styled from 'styled-components'

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export const IconBtn = styled(IconButton)`
    display: none !important;
    margin-right: 30px !important;
    @media (max-width:768px) {
        display: block !important;
    }
`

export const Menu = styled(MenuIcon)`
    color: white !important;
    display: none !important;
    @media (max-width:768px) {
        display: block !important;
    }
`





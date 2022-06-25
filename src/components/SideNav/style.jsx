import styled from 'styled-components'
// Icons
import DashboarIc from '@mui/icons-material/DashboardCustomizeOutlined';
import CleanIc from '@mui/icons-material/CleanHandsOutlined';
import RocketIc from '@mui/icons-material/RocketLaunchOutlined';
import LocalIc from '@mui/icons-material/LocalPhoneRounded';

export const MyIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 3%;
    height: 100vh;
    color: white;
    margin-top: 8%;
    columns: inherit;
    position: absolute;
    margin-left: 1%;
    margin-top: -2%;
    padding: 15px;
    @media (max-width:840px) {
        display: none;
    }
`

export const Dashboard = styled(DashboarIc)`
    background-color: #9090905c !important;
    cursor: pointer !important;
    padding: 8px !important;
    border-radius: 50% !important;
    width: 40px !important;
    height: 40px !important;
    margin: 15px !important;
    transition: all ease 0.5s !important;
    &:hover{
        transition: all ease 0.5s;
        transform: scale(1.3);
    }
`

export const Clean = styled(CleanIc)`
    background-color: #9090905c !important;
    cursor: pointer !important;
    padding: 8px !important;
    border-radius: 50% !important;
    width: 40px !important;
    height: 40px !important;
    margin: 15px !important;
    transition: all ease 0.5s !important;
    &:hover{
        transition: all ease 0.5s;
        transform: scale(1.3);
    }
`

export const Rocket = styled(RocketIc)`
    background-color: #9090905c !important;
    cursor: pointer !important;
    padding: 8px !important;
    border-radius: 50% !important;
    width: 40px !important;
    height: 40px !important;
    margin: 15px !important;
    transition: all ease 0.5s !important;
    &:hover{
        transition: all ease 0.5s;
        transform: scale(1.3);
    }
`

export const Local = styled(LocalIc)`
    background-color: #9090905c !important;
    cursor: pointer !important;
    padding: 8px !important;
    border-radius: 50% !important;
    width: 40px !important;
    height: 40px !important;
    margin: 15px !important;
    transition: all ease 0.5s !important;
    &:hover{
        transition: all ease 0.5s;
        transform: scale(1.3);
    }
`


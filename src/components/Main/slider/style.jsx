import styled from 'styled-components'

export const SlideDiv = styled.div`
    height: 283px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;
    @media (max-width:1025px) {
        transform: scale(0.9);
    }
    @media (max-width:830px) {
        transform: scale(0.8);
    }
    @media (max-width:768px) {
        flex-direction: column;
        transform: scale(0.7);
        height: 600px;
        align-items: center;
        justify-content: space-around;
    }
    @media (max-width:518px) {
        transform: scale(0.6);
        width: 100%;
        height: 700px;
    }
`

export const SlideImg = styled.img`
    width: 478.13px;
    height: 283px;
    object-fit: contain;
    border-radius: 10px;
`

export const SlideTextDiv = styled.div`
    display: flex;
    width: 100%;
    width: 400px;
    height: 100%;
    align-items: center;
    padding: 0 30px;
    border-radius: 20px;
`

export const SlideText = styled.p`
    width: 100%;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;
    color: #FFFFFF;
    @media screen {
     font-size: 15px;
    }
`

export const MiniDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

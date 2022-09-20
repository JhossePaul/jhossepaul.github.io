import styled from 'styled-components'

export const Main = styled.div`
    box-sizing: border-box;
    display: block;
    line-height: 24px;
    text-size-adjust: 100%;
    position: relative;
    margin: 0 24.5px;
    padding: 0 12;
`

export const MainTitleContainer = styled.div`
    color: #45505b;
    text-align: center;
    display: block;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    box-sizing: border-box;
    padding-top: 0;
    padding-bottom: 30px;
`

export const MainTitle = styled.h2`
    display: block;
    text-size: 34px;
    padding-bottom: 20px;
    padding-top: 0;
    margin-top: 0;
    margin-bottom: 20px;
    line-height: 1.2;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    &:before {
        content: "";
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);
    }
    &:after {
        content: "";
        position: absolute;
        display: block;
        width: 40px;
        height: 3px;
        background: #0563bb;
        bottom: 0;
        left: calc(50% - 20px);
    }
`
import styled from 'styled-components'

export const Main = styled.div`
    display: block;
    line-height: 24px;
    margin-left: 100px;
    box-sizing: border-box;
`

export const Section = styled.section`
    display: block;
    font-size: 16;
    overflow: hidden;
    line-height: 24px;
    padding: 60px 0;
    text-align: start;
    text-size-adjust: 100%;
`

export const SectionTitle = styled.div`
    display: flex;
    padding-bottom: 30px;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    text-size-adjust: 100%;
    h2 {
        font-size: 34px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 20px;
        padding-bottom: 20px;
        position: relative;
        color: #45505b;
        &:before{
            content: '';
            position: absolute;
            display: block;
            width: 120px;
            height: 1px;
            background: #ddd;
            bottom: 1px;
            left: calc(50% - 60px);
        }
        &:after{
            content: '';
            position: absolute;
            display: block;
            width: 40px;
            height: 3px;
            background: #0563bb;
            bottom: 0;
            left: calc(50% - 20px);
        }
    }
`

export const Hero = styled.section`
    text-align: start;
    text-size-adjust: 100%;
    justify-content: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100vh;
    /* background: url(https://code-cache.com/en/wp-content/uploads/2021/09/code9.jpg) top right no-repeat; */ 
    background-size: cover;
    position: relative;
    padding: 60px 0;
    padding-left: 160px;
    &:before {
        content: "";
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
    }
    h1 {
        margin: 0;
        font-size: 64px;
        font-weight: 700;
        line-height: 56px;
        color: #45505b;
    }
    p {
        color: #0563bb;
        letter-spacing: 1px;
    }
`

export const SectionColumn = styled.div`
    display: block;
    position: relative;
    box-sizing: border-box;
    text-adjust: 100%;
    flex-basis: 50%;
`

export const SectionContainer = styled.div`
    diplay: block;
    color: #272829;
    line-height: 24px;
    padding: 0 12px;
    margin: 0 8px;
    box-sizing: border-box;
    max-width: 960px;
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    transform: translateZ(0) scale(1);
`

export const SectionContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 24px;
    margin: 0 -12px;
    text-align: start;
    box-sizing: border-box;
    h3 {
        font-weight: 700;
        font-size: 26px;
        color: #272829;
    }
`

export const TooltipText = styled.div`
    visibility: hidden;
    width: 90%;
    background-color: rgba(0, 0, 0, .8);
    color: #fff;
    padding: 10px 10px;
    border-radius: 6px;
    position: absolute;
    top: -5%;
    max-height: 140%;
    overflow: scroll;
    text-align: left;
    z-index: 1;
`

export const ResumeItem = styled.div`
    box-sizing: border-box;
    padding: 0 0 0 20px;
    margin-top: -2px;
    border-left: 2px solid #0563bb;
    position: relative;
    &:hover ${TooltipText} {
        visibility: visible;
    }
    h4 {
        margin: 0 0 10px 0;
        line-height: 18px;
        box-sizing: border-box;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        font-family: "Poppins", sans-serif;
        color: #0563bb;
        margin-bottom: 10px;
    }
    h5 {
        margin: 0 0 10px 0;
        box-sizing: border-box;
        font-size: 16px;
        display: inline-block;
        font-weight: 600;
        margin-bottom: 10px;
    }
    p {
        margin: 0 0 16px 0;
    }
    &:before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50px;
        left: -9px;
        top: 0;
        background: #fff;
        border: 2px solid #0563bb;
    }
`

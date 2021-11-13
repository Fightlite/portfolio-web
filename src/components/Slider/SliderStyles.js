import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background1: '#0B1221';
  overflow: hidden;
`

export const Img = styled.img`
  position: absolute;
  max-width: 100vw;
`

export const Next = styled.span`
right: 0;
top: calc(50% - 20px);
position: absolute;
color: gray;
border-radius: 30px;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
user-select: none;
cursor: pointer;
font-weight: bold;
font-size: 36px;
z-index: 2;
`
export const Prev = styled.span`
left: 0;
top: calc(50% - 20px);
position: absolute;
color: gray;
border-radius: 30px;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
user-select: none;
cursor: pointer;
font-weight: bold;
font-size: 36px;
z-index: 2;
`

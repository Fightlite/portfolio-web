import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 220px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;

  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    height: 100%;
    max-height: 160px;
    object-fit: cover;
  }

    @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    height: 100%;
    max-height: 220px;
    object-fit: cover;
  }
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
grid-auto-rows: 1fr;
padding: 3rem 0;
align-items: start;
column-gap: 2rem;
row-gap: 4rem;

@media ${props => props.theme.breakpoints.md} {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding-bottom: 50px;
}

@media ${(props) => props.theme.breakpoints.sm} {
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  row-gap: 4rem;
  padding: 2rem;
  padding-bottom: 40px;
}

`
export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 10px;
  width: 400px;
  height: 100%;
  background-color: #131C2E;
  transition: transform .3s ease-out;

  &:hover {
  box-shadow: 3px 3px 10px rgba(182, 182, 182, 0.3);
  transform: scale(1.05);
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 280px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 40px;
  justify-content: space-between;

  @media ${props => props.theme.breakpoints.md} {
    padding: 20px 20px;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};

  @media ${props => props.theme.breakpoints.md} {
    font-size: 2rem;
  }
`;

export const Hr = styled.hr`
  width: 60px;
  height: 5px;
  border-radius: 10px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
`;

export const CardInfo = styled.p`
  flex: 1 0 auto;
  width: 100%;
  color: rgba(255,255,255,0.6);
  font-size: 2rem;
  line-height: 24px;
  text-align: justify;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  `
  export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.8rem;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.6rem;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`

export const UtilityList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ExternalLinks = styled.a`
  background-image: linear-gradient(90deg, #00C0FF 0%,  #B133FF 50%, #00C0FF 100%);
  border-radius:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 1.8rem;
  padding: .2rem .2rem;
  color: white;

  &:after{
    content:attr(alt);
    border-radius:50px;
    padding: 1rem 1.5rem;
    
    background-color:#131C2E;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  &:hover{
    animation:slidebg 2s linear infinite;
  }
  @keyframes slidebg {
    to {
      background-position:20vw;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.4rem;
    padding: .2rem .2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
    padding: .2rem .2rem;
  }
`;

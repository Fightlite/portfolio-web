
import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 40px;

  @media ${props => props.theme.breakpoints.md} {
    margin-bottom: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    margin-bottom: 0;
  }
`
export const ImageContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 20px 20px 20px 0;
  align-items: center;

  @media ${props => props.theme.breakpoints.md} {
    padding: 0 20px 0 0;
    max-height: 280px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 90%;
    padding: 20px 0;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;
`
export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: justify;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 20px;

  @media ${props => props.theme.breakpoints.md} {
    padding: 0 0 0 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 90%;
    padding: 20px 0 0 0;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
`

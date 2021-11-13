import styled from "styled-components"

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;
padding-top: 40px;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`


export const Thank = styled.p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  	align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		justify-content: center;
		padding-left: 16px;
	}
	@media ${props => props.theme.breakpoints.sm}{
		flex-direction: row;
		justify-content: center;
		padding-left: 16px;
	}
`


export const LinkList = styled.ul`
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  	display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  	padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 24px 4px 24px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.md} {
		font-size: 14px;
		line-height: 14px;
		margin-bottom: 14px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		font-size: 12px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`

export const Slogan = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	padding-top: 40px;

`

export const SloganText = styled.p`
	font-size: 24px;
	letter-spacing: 0.02em;
	font-weight: 600;
	line-height: 40px;
	padding-top: 10px;
	background: linear-gradient(270deg, #1CB6D0 0%, #9B65DC 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 20px;
	}
`

export const Copyright = styled.p`
	font-size: 16px;
	text-align: center;
	color: rgba(255, 255, 255, 0.4);
	margin-top: 40px;
	margin-bottom: 50px;

	@media ${props => props.theme.breakpoints.md} {
		margin-top: 30px;
	}

	@media ${props => props.theme.breakpoints.sm} {
		margin-top: 20px;
	}
`

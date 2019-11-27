import React from 'react'
import styled from 'styled-components'


const Header = styled.h1`
	animation: left 1s ease-in-out;

	@keyframes left {
		from {
			transform: translateX(100%);
		}

		to {
			transform: translateX(0);
		}
	}
`
const Card = styled.div`
	width: 270px;
	height: 270px;
	background: transparent;
	
`

const SubContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const Actions = styled.div`

`

const SubHeader = styled.div`
	width: 100%;
	text-align: center;
`

const SubActionsBody = styled.div`
	width: 100%;
	height: 65%;
`

const SubActionsMini = styled.div`
	width: 100%;
	height: 20%;
	background: transparent;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	a {
		height: 100%;
		width: 100%;
		text-align: center;
		padding: 15px 0;
		text-decoration: none;
		font-size: 2rem;
		color: #fff;
	}

	a:hover {
		background: rgb(52, 52, 52);
		color: #fff;
	}
`

const LinkDiv = styled.div`
	height: 100%;
	width: 100%;
	text-align: center;
	padding: 15px 0;
`

const MinDiv = styled.div`
	width: 100%;
	background: rgb(32, 32, 32, 0.5);
	overflow: hidden;
    text-align: center;
    font-size: 24px;
`

const ImgDiv = styled.div`
	width: 100%;
	height: 100%;
	background-image: url("https://pluralsight.imgix.net/paths/python-7be70baaac.png");
	background-position: center;
  	background-size: cover;
	

	.card-image:hover {
		transform: scale(1.2);
	}
`


const SpanDiv = styled.span`
    color: red;
`

const FooterDiv = styled.div`
	margin-left: 50%;
	transform: translate(-50%);
	text-align: center;
	font-size: 34px;
	color: white;
	text-transform: uppercase;
`
const About = () => {
    return (
        <div className="container">
            <MinDiv>
                <Header>ABOUT >></Header>
            </MinDiv>
            <br/>
            <SubContainer>
                <MinDiv>
                    23 y/o Graduate from <SpanDiv>Tarlac State University.</SpanDiv><br/>
                    Currently working as Sr. Software Developer and now Full Stack Developer at BGC.
                </MinDiv>
            </SubContainer>
        </div>
    )
}

export default About;
import React, { Component} from 'react'
import styled from 'styled-components'
import { Link, Redirect	 } from 'react-router-dom'
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";


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

const ALink = styled.a`
	color: #fff;
	text-decoration: none;
`

const FooterDiv = styled.div`
	margin-left: 50%;
	transform: translate(-50%);
	text-align: center;
	font-size: 34px;
	color: white;
	text-transform: uppercase;
`

export default class Projects extends Component {
	state = {
		redirect: false
	}

	redirectHanlder = () => {
		this.setState(prevState => {
			return { redirect: !prevState }
		})

		if (this.state) {
			return <Redirect to="https://www.github.com/"/>
		}
	}

	render() {
		return (
			<div className="container">
				<MinDiv>
					<Header>PROJECTS >></Header>
				</MinDiv>
				<br/>
				<SubContainer>
					<Card>
						<SubHeader>
							<h4>LetsFacts! (Flutter)</h4>
						</SubHeader>
						<SubActionsBody>
							<Player 
								width={'100%'} 
								height={'100%'} 
								fluid={false} 
								playsInline 
								poster={'https://udemy-images.udemy.com/course/750x422/1719462_5050.jpg'}
								src={require('../Theme/videos/dart-project.MP4')}/>
							
						</SubActionsBody>
						<SubActionsMini>
							<a target="_blank" href="https://github.com/nincas/letsfacts">Github</a>
							<a>Project</a>
						</SubActionsMini>
					</Card>

					<Card>
						<SubHeader>
							<h4>Accounting System (Python)</h4>
						</SubHeader>
						<SubActionsBody>
							<ImgDiv className="card-image"/>
						</SubActionsBody>
						<SubActionsMini>
							<a target="_blank" href="https://github.com/nincas/job_order">Github</a>
							<a>Project</a>
						</SubActionsMini>
					</Card>

					<Card>
						<SubHeader>
							<h4>Employee Monitoring System (PHP)</h4>
						</SubHeader>
						<SubActionsBody/>
						<SubActionsMini>
							<a>Github</a>
							<a target="_blank" href="http://onin.uphero.com/manpower/">Project</a>
						</SubActionsMini>
					</Card>

					<Card>
						<SubHeader>
							<h4>HAPPI Data Raw conversion</h4>
						</SubHeader>
						<SubActionsBody/>
						<SubActionsMini>
							<a target="_blank" href="https://github.com/nincas/happi_raw_data_converter">Github</a>
							<a>Project</a>
						</SubActionsMini>
					</Card>			
				</SubContainer>
				<hr/>
				<FooterDiv>
					<MinDiv>
						<ALink target="_blank" href="https://github.com/nincas">SEE More..</ALink>
					</MinDiv>
				</FooterDiv>
			</div>
		)
	}
}

import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faInfoCircle, faMapMarkerAlt, faCode, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'


const Container = styled.div`
	h1 {
		animation: LeftRight 1s ease-in-out;
		overflow: hidden;
		letter-spacing: 1rem !important;
	}

	@keyframes LeftRight {
		from {
			transform: translateX(100%);
		}

		to {
			transform: translateX(0);
		}
	}
`

const BlockQuote = styled.blockquote`
	font-size: 2rem;
`

const SpanTxt = styled.span`
	color: yellow !important;
	letter-spacing: 0.5rem;
`

const HeaderDiv = styled.div`
	overflow: hidden;
	background: rgb(32, 32, 32, 0.5);
	animation: blink 1s ease;

	@keyframes blink {
		from {
			transform: scale3d(0, 0, 0);
		}

		to {
			transform: scale3d(1, 1, 1);
		}
	}
`

export default function Index() {
  return (
    <div className="container">
		<Container className="jumbotron">
			<HeaderDiv className="display-4"><h1  style={{fontSize: "10rem"}}>NNOCSUPNN >></h1></HeaderDiv>
			<p className="lead">
				<BlockQuote>
					<SpanTxt><FontAwesomeIcon icon={faCode}/> FULLSTACK DEVELOPER</SpanTxt>
					<br/>
					<SpanTxt><FontAwesomeIcon icon={faMapMarkerAlt}/> 5th Ave. BGC, Taguig City</SpanTxt>
				</BlockQuote>
			</p>
			
			<p className="lead">
				<FontAwesomeIcon icon={faQuoteLeft}/> .. Paid to learn"
			</p>
		</Container>
    </div>
  )
}

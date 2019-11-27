import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'


const Container = styled.div`
    font-size: 3rem;
    font-weight: normal !important;
    width: 50%;
    margin: auto;
    align-items: center;
    display: flex;
    flex-direction: column;

    input {
        width: 100%;
        margin-bottom: 10px;
        background: transparent;
        text-align: center;
    }

    textarea {
        width: 100%;
        margin-bottom: 10px;
        background: transparent;
        text-align: center;
    }

    button {
        width: 100%;
        font-size: 2rem;
        color: #fff;
        background: rgb(52, 52, 52);
    }

    button:hover {
        background: #fff;
        color: #333;
    }

    h1 {
        animation: ${props => props.clicked ? 'right' : 'left'} 1s ease;
	    overflow: hidden;
    }
	
	@keyframes left {
        from {
            transform: translateX(100%);
        }

        to {
            transform: translateX(0);
        }
    }


    @keyframes right {
        from {
            transform: translateX(0%);
        }

        to {
            transform: translateX(100%);
        }
    }
`

const spacer = styled.div`
    flex: 1;
`

const SendButton = styled.button`
    color: ${props => props.sent} !important;
`

const MinDiv = styled.div`
	width: 100%;
	background: rgb(32, 32, 32, 0.5);
	overflow: hidden;
	text-align: center;
`

class Contact extends Component {
    state = {
        position: 0,
        clicked: false
    }

    handleSend = (e) => {
        this.setState(prevState => {
            return { position: 100, clicked: true }
        })

        alert('Not working. Sorry! :)')
    }

    render () {
        return (
            <div className="container">
                <Container position={this.state.position} clicked={this.state.clicked}>
                    <MinDiv><h1>SEND ME SOME LOVE! >></h1></MinDiv>
                    <hr/>
                    Tel No. +639568534856
                    <form action="/">
                        <input type="email" required placeholder="Enter email" name="email" />
                        <spacer/>
                        <textarea placeholder="Enter message" name="message" maxLength="255"/>
                        <spacer/>
                        <SendButton type="submit" onClick={this.handleSend}>Send!</SendButton>
                    </form>
                </Container>
            </div>
        )
    }
}

export default Contact;
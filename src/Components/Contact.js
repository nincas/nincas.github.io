import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from 'react-helmet'
import * as emailjs from 'emailjs-com'
import Popup from "reactjs-popup";

const Container = styled.div`
    font-size: 3rem;
    font-weight: normal !important;
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

const LoaderDiv = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 8px solid rgb(78, 78, 78);
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    animation: Loading 1s ease infinite;
    top: 45%;
    transform: translateY(50%);
    position: absolute;

    @keyframes Loading {
        from {
            transform: rotate(360deg);
        }

        to {
            transform: rotate(0deg);
        }
    }
`

const PreLoaderDiv = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 8px dotted white;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    animation: PreLoading 1s ease-in-out infinite;
    top: 45%;
    transform: translateY(50%);
    position: absolute;

    @keyframes PreLoading {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
`

const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50%;
    margin-right: 50%;
`

const LoadingText = styled.h3`
    padding-top: 30px;
    text-align: center;
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

const SpanTitle = styled.span`
   
`

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            message: '',
            templateId: 'nnocsupnn',
            apiKey: 'user_rT7mAsiVnygIkV53L2Mvn',
            sending: false,
            sent: false
        }
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    };

    resetForm = () => {
        this.setState({
            email: '',
            message: ''
        })
    };

    handleSend = (e) => {
        e.preventDefault()
        const { email, message, templateId, apiKey } = this.state

        let templateParams = {
            from_name: email,
            to_name: 'onin',
            subject: 'nnocsupnn - inquiry',
            reply_to: email,
            message_html: message
        };

        this.setState({
            sending: true,
            sent: false
        });

        emailjs.send(
            'gmail',
            templateId,
            templateParams,
            apiKey
        ).then(function(response) {
            this.setState({
                sending: false,
                sent: true
            });

            this.resetForm();
        }.bind(this), function(error) {
            console.log('FAILED...', error);
        }.bind(this));
    };

    handleModal = (current) => {
        return !current;
    }

    render () {
        const fragment = (<React.Fragment></React.Fragment>);
        return (
            <div className="container">
                {
                    this.state.sending === true ?
                    <LoaderContainer>
                        <LoaderDiv/>
                        <PreLoaderDiv/>
                    </LoaderContainer>
                    : fragment
                }


                {
                    this.state.sent === true ?
                    <Popup open={this.handleModal.bind(this, this.state.sent)} modal closeOnDocumentClick>
                        <SpanTitle>Thank You! <FontAwesomeIcon icon={faHeart}/></SpanTitle>
                    </Popup>
                        :
                        fragment
                }
                <Helmet>
                    <title>Contact</title>
                </Helmet>
                <Container>
                    <MinDiv><h1>SEND ME SOME LOVE! >></h1></MinDiv>
                    <hr/>
                    Tel No. +639568534856
                    <form onSubmit={this.handleSend.bind(this)}>
                        <input type="email" required placeholder="Enter email" name="email" onChange={this.handleChange.bind(this, 'email')} />
                        <textarea placeholder="Enter message" name="message" maxLength="255" onChange={this.handleChange.bind(this, 'message')}/>
                        <SendButton >Send!</SendButton>
                    </form>
                </Container>
            </div>
        )
    }
}

export default Contact;
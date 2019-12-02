import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=VT323');
    @import "~video-react/styles/scss/video-react";
    
    body {
        padding-left: 120px;
        padding-right: 120px;
        font-family: 'VT323', monospace;
        background: url(${require('./images/bg-image.jpg')}) fixed center no-repeat;
        background-size: cover;
        color: #fff !important;
        height: 100vh;
    }

    textarea {
        resize: none;
        max-width: 100%;
        max-height: 500px;
        height: 200px;
    }

    .jumbotron {
        background: transparent;
    }

    html {
       
    }

    .container {
        margin-top: 70px;
        padding-bottom: 100px;
    }

    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        margin-top: 100px;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(32,32,32, 0.5);
        color: white;
     }

     .fa {
        padding: 10px;
        font-size: 10px;
        width: 33px;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
    }

    .fa:hover {
        opacity: 0.7;
        color:white;
        text-decoration: none;
    }

    .fa-facebook {
        background: #3B5998;
        color: white;
    }
    .fa-instagram {
        background: #125688;
        color: white;
    }
    .fa-google {
        background: #dd4b39;
        color: white;
    }
    
    .fa-linkedin {
        background: #0077B5;
        color: white;
    }

    .fa-github {
        background: #333333;
        color: white;
    }

    body {
        padding-left: 0;
        padding-right: 0;
        width: 100%;
    }

    ul {
        list-style: none !important;
    }
    
    .popup-content {
        width: 33% !important;
        border-radius: 1em;
        background: linear-gradient(to right bottom, transparent, 45%, #26282b, #333) !important;
        color: #fff;
        font-size: 30px !important;
        text-align: center;
        height: 33% !important;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        #headerName h1 {
            font-size: 24px !important;    
        }
        
        .popup-content {
            width: 95% !important;
            height: 40% !important;
        }
    }
`
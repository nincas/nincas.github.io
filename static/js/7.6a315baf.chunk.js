(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(n,t,e){"use strict";e.r(t);var r=e(19),a=e(20),o=e(22),i=e(21),c=e(23),l=e(5),u=e(0),m=e.n(u),s=e(6),f=(e(7),e(8),e(53));function d(){var n=Object(l.a)(["\n\twidth: 100%;\n\tbackground: rgb(32, 32, 32, 0.5);\n\toverflow: hidden;\n\ttext-align: center;\n"]);return d=function(){return n},n}function b(){var n=Object(l.a)(["\n    color: "," !important;\n"]);return b=function(){return n},n}function p(){var n=Object(l.a)(["\n    flex: 1;\n"]);return p=function(){return n},n}function h(){var n=Object(l.a)(["\n    font-size: 3rem;\n    font-weight: normal !important;\n    margin: auto;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n\n    input {\n        width: 100%;\n        margin-bottom: 10px;\n        background: transparent;\n        text-align: center;\n    }\n\n    textarea {\n        width: 100%;\n        margin-bottom: 10px;\n        background: transparent;\n        text-align: center;\n    }\n\n    button {\n        width: 100%;\n        font-size: 2rem;\n        color: #fff;\n        background: rgb(52, 52, 52);\n    }\n\n    button:hover {\n        background: #fff;\n        color: #333;\n    }\n\n    h1 {\n        animation: "," 1s ease;\n\t    overflow: hidden;\n    }\n\t\n\t@keyframes left {\n        from {\n            transform: translateX(100%);\n        }\n\n        to {\n            transform: translateX(0);\n        }\n    }\n\n\n    @keyframes right {\n        from {\n            transform: translateX(0%);\n        }\n\n        to {\n            transform: translateX(100%);\n        }\n    }\n"]);return h=function(){return n},n}var g=s.b.div(h(),function(n){return n.clicked?"right":"left"}),E=(s.b.div(p()),s.b.button(b(),function(n){return n.sent})),k=s.b.div(d()),v=function(n){function t(){var n,e;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=Object(o.a)(this,(n=Object(i.a)(t)).call.apply(n,[this].concat(c)))).state={position:0,clicked:!1},e.handleSend=function(n){e.setState(function(n){return{position:100,clicked:!0}}),alert("Not working. Sorry! :)")},e}return Object(c.a)(t,n),Object(a.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"container"},m.a.createElement(f.Helmet,null,m.a.createElement("title",null,"Contact")),m.a.createElement(g,{position:this.state.position,clicked:this.state.clicked},m.a.createElement(k,null,m.a.createElement("h1",null,"SEND ME SOME LOVE! >>")),m.a.createElement("hr",null),"Tel No. +639568534856",m.a.createElement("form",{action:"/"},m.a.createElement("input",{type:"email",required:!0,placeholder:"Enter email",name:"email"}),m.a.createElement("spacer",null),m.a.createElement("textarea",{placeholder:"Enter message",name:"message",maxLength:"255"}),m.a.createElement("spacer",null),m.a.createElement(E,{type:"submit",onClick:this.handleSend},"Send!"))))}}]),t}(u.Component);t.default=v}}]);
//# sourceMappingURL=7.6a315baf.chunk.js.map
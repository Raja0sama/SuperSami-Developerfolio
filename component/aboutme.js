import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import "../static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "../static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import "./aboutme.css"
export default class Aboutme extends React.Component {
    render(){
      return (
        <div>
    <div  className="ACon" id="About" >
        <div className="row" >
            <div className="col-md-6 Acon1">
                <div className="container">
                    <h1 className="Acon1h1" >ABOUT ME</h1>
      <p className="Acon1P" >{this.props.data.desc}</p>
                        <a href={this.props.data.resume}>
                        <button className="btn btn-primary" type="button">Check Out MY CV</button>
                        </a>
                </div>
            </div>
            <div className="col-md-6 Acon2"
                >s
            </div>
            <div className="col-md-6 Acon3" 
                >
            </div>
            <div className="col-md-6 Acon4" 
                >
                <div className="row">
                    <div className="col-md-6 Acon41">
                        <div className="container">
                            <h1>
                                EAT<br />
                                CODE<br/>
                                REPEAT<br/>
                            </h1>
                        </div>
                    </div>
                    <div className="col-md-6 Acon42"
                       >
                    </div>
                </div>
            </div>
        </div>
    </div>
          </div>
      )
    }
    }
    

import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import "../static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "../static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import "./cover.css"
export default class Cover extends React.Component {
    render(){
      return (
        <div>
   <header className="masthead mastheadss" >
        <div className="intro-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                    <img className="rounded-circle Covimg" src="/static/img/47484878_1945989028853880_5831096228116430848_o.jpg" />
                    <h1 className="brand-heading CovH1" >
                    <strong>I AM</strong>
                    <span data-bs-hover-animate="bounce"  >
                    <br/>
      <strong>&lt;{this.props.data.h1}/&gt;</strong>
                    <br/></span>
                    <strong>{this.props.data.hl}</strong>
                    </h1>
                        <p className="intro-text"></p><a className="btn btn-link btn-circle" role="button" href="#about"><i className="fa fa-angle-double-down animated"></i></a></div>
                </div>
            </div>
        </div>
    </header>
          
        </div>
      )
    }
    }
    

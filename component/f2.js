import Link from 'next/link'
import React from 'react'
import "../static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "../static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import "./f1.css"
export default class F2 extends React.Component {

  render() {
    return (
      <div>     
  
      <div class="row">
      <div  class="d-none d-md-block col pad"><img src={this.props.data.img}  /></div>
      <div class="col" style={{backgroundColor:"rgb(255,255,255)"}}>
          <div class="jumbotron" style={{backgroundColor:"rgb(255,255,255)",color:'black'}}>
              <h1 style={{color:'rgb(255,17,17)'}}>{this.props.data.title[0]}&nbsp;<span style={{color:'black'}}>{this.props.data.title[1]}</span></h1>
              <p style={{color:'black'}}>{this.props.data.desc}</p>
              <p>
         {
         this.props.data.data.map((e)=>(
           <span>
           {e} <br/></span>
         ))
         }</p>

              <p><a class="btn btn-primary" role="button" style={{color:'white'}}>VIDEO</a>
              <a class="btn btn-primary" role="button" style={{color:'white'}}>Source Code</a>
              </p>
          </div>
      </div>
  </div></div>

    )
  }
}

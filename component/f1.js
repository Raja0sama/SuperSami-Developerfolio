import Link from 'next/link'
import React from 'react'
import "../static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "../static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import "./f1.css"
export default class F1 extends React.Component {

  render() {
    return (
      <div>     
         <div id="Work" >
      <section>
        <div
          className="jumbotron text-center A1">
          <h1> HIGHTLIGHTED 
            <span className="A2" >Work</span>
          </h1>
          <p
           className="A3" >My work that worth your attention</p>
          <p></p>
        </div>
      </section></div>
      <div class="row">
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

              <p><a href={this.props.data.button[1]} class="btn btn-primary" role="button" style={{color:'white'}}>{this.props.data.button[0]}</a></p>
          </div>
      </div>
      <div  class="d-none d-md-block col-7 pad"><img src={this.props.data.img} /></div>
  </div></div>

    )
  }
}

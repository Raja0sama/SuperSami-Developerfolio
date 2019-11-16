import Link from 'next/link'
import React from 'react'
import "../static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "../static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import "./Portfolio.css"
import YouTube from 'react-youtube';
import "./work.css"

export default class Porfolio extends React.Component {

  render() {
    console.log(this.props)
    const opts = {
      height: '200',
      width: '350',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (
      <div>
           <div className="projects-clean P1">
           <section>
          <div
            className="jumbotron text-center A1">
            <h1 >MY
              <span className="A2" >Work</span>
            </h1>
            <p
             className="A3" >Always hungry</p>
            <p></p>
          </div>
        </section>

        <div className="container " >
          
        
            <div className="row projects">

         {
             this.props.data.data.map((row,index)=>(
               row.embed === false ?
                (
                  <div key={'a'+index} className="col-sm-6 col-lg-4 item">
                 
                  <div key={'a'+index} class="card" >
                  <img class="card-img-top" src={'/static/img/'+row.img+'.png'} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">{row.title}</h5>
                    <p class="card-text">{row.des}</p>
                  </div>
                  </div>
               </div>


                ):(
                <div key={'a'+index} className="col-sm-6 col-lg-4 item">
              <div key={'a'+index} class="card" >
                <YouTube class="card-img-top"
                      videoId={row.embedlink}
                      opts={opts}
                      onReady={this._onReady}
                    />            <div class="card-body">
              <h5 class="card-title">{row.title}</h5>
              <p class="card-text">{row.des}</p>
            </div>
            </div>
             </div>

           
             )
              
             
              ))
            

        }

         </div>

       
        </div>
    </div>
      </div>
    )
  }
}

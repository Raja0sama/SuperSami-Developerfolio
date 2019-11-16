import Head from 'next/head'
import React from 'react'
import "../static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "../static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import "./reactnative.css"

const data =[
"hideLeft","hideLeft","hideLeft","hideLeft","hideLeft","prevLeftSecond","prev","selected","next","nextRightSecond","hideRight","hideRight","hideRight","hideRight",
]
export default class ReactNative extends React.Component {
    componentDidMount(){
        function moveToSelected(element) {

            if (element == "next") {
              var selected = $(".selected").next();
            } else if (element == "prev") {
              var selected = $(".selected").prev();
            } else {
              var selected = element;
            }
          
            var next = $(selected).next();
            var prev = $(selected).prev();
            var prevSecond = $(prev).prev();
            var nextSecond = $(next).next();
          
            $(selected).removeClass().addClass("selected");
          
            $(prev).removeClass().addClass("prev");
            $(next).removeClass().addClass("next");
          
            $(nextSecond).removeClass().addClass("nextRightSecond");
            $(prevSecond).removeClass().addClass("prevLeftSecond");
          
            $(nextSecond).nextAll().removeClass().addClass('hideRight');
            $(prevSecond).prevAll().removeClass().addClass('hideLeft');
          
          }
          $(document).ready(function() {
        
          // Eventos teclado
          $(document).keydown(function(e) {
              switch(e.which) {
                  case 37: // left
                  moveToSelected('prev');
                  break;
          
                  case 39: // right
                  moveToSelected('next');
                  break;
          
                  default: return;
              }
              e.preventDefault();
          });
          
          $('#carousel div').click(function() {
            moveToSelected($(this));
          });
          
          $('#prev').click(function() {
            moveToSelected('prev');
          });
          
          $('#next').click(function() {
            moveToSelected('next');
          });
        });
        
    }
  render() {
    
    return (
      <div>
          <Head>
              <script src="static/data.js"></script>
          </Head>
  <main>
  <div id="Work" >
      <section>
        <div
          className="jumbotron text-center A1">
          <h1> REACT 
            <span className="A2" >NATIVE</span>
          </h1>
          <p
           className="A3" >UI of some app that i have created in past ❤</p>
          <p></p>
        </div>
      </section></div>
    <div className="container">
    <div id="carousel">

{
    data.map((e,i)=>{
        return (
            <div class={e}>
            <img src={"static/img/"+(i+1)+".png"}/>
          </div>
        )
    })
}

   {/* <div class="hideLeft">
    <img src="https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg"/>
  </div>

  <div class="prevLeftSecond">
    <img src="https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg"/>
  </div>

  <div class="prev">
    <img src="https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg"/>
  </div>

  <div class="selected">
    <img src="https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg"/>
  </div>

  <div class="next">
    <img src="https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg"/>
  </div>

  <div class="nextRightSecond">
    <img src="https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg"/>
  </div>

  <div class="hideRight">
    <img src="https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg"/>
  </div> */}

</div>

    </div>

<div  class="d-flex justify-content-center" style={{paddingBottom:20}}>
  <button className={"btn btn-primary"} id="prev">Prev</button>
  <button  className={"btn btn-primary"} id="next">Next</button>
</div>

</main>
     </div>

    )
  }
}

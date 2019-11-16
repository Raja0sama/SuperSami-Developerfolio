import Link from 'next/link'
import React from 'react'
import "../static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "../static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import "./work.css"
export default class Header extends React.Component {

  render() {
    return (
      <div id="Work" >
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
        <div>
          <div className="row A4">
            <div
              className="col-md-4 A5 "
              >
              <h1 className="text-center shake-little shake-constant shake-constant--hover"><Link as="/Portfolio/Websites" title={'Websites Gallery'} href={{ pathname: 'about', query: { name: 'websites' }}}>
              <a className="A6" >WEBSITES</a>
              </Link>
              </h1>
            </div>
            <div
              className="col-md-4 A7"
              >
               <h1 className="text-center shake-slow shake-constant shake-constant--hover"><Link as="/Portfolio/MobileApps" title={'Native Mobile Apps Gallery'} href={{ pathname: 'about', query: { name: 'mobileApps' }}}>
              <a className="A6" >Mobiles</a>
              </Link>
              </h1>
            </div>
            <div
              className="col-md-4 A9"
             >
              <h1 className="text-center A10 shake-rotate shake-constant shake-constant--hover">
                <a href="#" className="A20" >DESKTOP</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

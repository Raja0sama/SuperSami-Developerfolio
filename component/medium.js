import React from 'react'
import "../static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "../static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import './work.css';
import './features.css';
import './medium.css';
import axios from 'axios'

export default class Medium extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : null
        }
    }
    componentDidMount(){
                axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40'+this.props.data)
        .then( (response) => {
            // handle success
          this.setState({data : response.data})
            
            console.log(this.state)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }
  render() {
    

    return (
        <div>
            {this.state.data == null ? (<p>Gathering Medium Data</p>) : (
 <div className="features-clean" id="Skills">
 <div className="container">
     <div className="intro">
         <h2 className="text-center">
             MY&nbsp;<span className="F1">Medium</span>
         </h2>
         <p className="text-center">All The Medium Post that i have written. </p>
     </div>
     <div className="row features">
     {this.state.data.items.map((a,i)=>  {
         if(a.categories.length == 0 ){(
             <p></p>
         )
         }else{
             return (
            <div class="col-sm-6">
             <div class="card" >
             <img class="card-img-top img" src={a.thumbnail} alt="Card image cap"/>
             <div class="card-body">
                 <h5 class="card-title">{a.title}</h5>
                 <a href={a.link} class="btn btn-primary">View Post on Medium</a>
             </div>
             </div>
             </div>
             )
         }
             
     })}
    
     </div>
 </div>
</div>
            )}
       
    </div>
    )
  }
}

import React from 'react';
import '../static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a';
import '../static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c';
import './work.css';
import './features.css';


export default class Features extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			Query: []
		};
	}
	

	render() {
		return (
			<div>
				<div className="features-clean" id="Skills">
					<div className="container">
						<div className="intro">
							<h2 className="text-center">
								MY&nbsp;<span className="F1">{this.props.data.h1}</span>
							</h2>
							<p className="text-center">{this.props.data.p} </p>
						</div>
						<div className="row features">
						{this.props.data.list.map((item,index)=> 
							<div className="col-sm-6 col-lg-4">
						
								<div class="card cardss">
								<div class="card-body">
									<h5 class="card-title">	<strong>{item.title}</strong>
								</h5>
									<span class="card-text">{item.desc}</span>
									<br/><br/>
										{item.url ?(<button onClick={()=> window.location.href = item.url} class="btn btn-light" type="button">Show case App  <i class="fa fa-arrow-right" aria-hidden="true"></i>
</button>):(<div></div>)}
									
								</div>
								</div>
							</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

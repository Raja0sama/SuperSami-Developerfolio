import React from 'react';
import Head from 'next/head';
import '../../static1/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a';
import '../../static1/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c';
import Header from '../../component/header';
import Footer from '../../component/footer';
import Porfolio from '../../component/Portfolio';
import json from '../../profile.json';
export default class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			Query: [],
			data: {}
		};
		if (this.props.name == 'websites') {
			this.data('website');
		} else if (this.props.name == 'mobileApps') {
			this.data('mobileapp');
		}
	}

	static async getInitialProps({ query }) {
		// pid = 'hello-nextjs'
		const { website } = query;

		// const postContent = await fetch(
		//   `https://api.example.com/post/${encodeURIComponent(pid)}`
		// ).then(r => r.text())

		return { website };
	}
	check(web) {
		if (web == 'websites' || web == 'Websites' ) {
			return {
				name: 'Website',
				desc: 'Webiste that i have created so far',
				data: json.work.list.website
			};
		} else if (web == 'mobileApps' || web == 'MobileApps' ) {
			return {
				name: 'Native Mobile Apps',
				desc: 'Android So far That i am allowed to list',
				data: json.work.list.mobileapp
			};
		}
	}
	render() {
		return (
			<div>
				<section>
					<Head>
						<title>Portfolio</title>
						<link
							rel="stylesheet"
							href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
						/>
						<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:700" />
						<link
							rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
						/>
						<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
						<link
							rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
						/>
						<link
							rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.min.css"
						/>
					</Head>

					<Header data={json.name} />
					<Porfolio data={this.check(this.props.website)} />
					<Footer />
				</section>
			</div>
		);
	}
}

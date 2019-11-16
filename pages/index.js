import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import "../static1/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "../static1/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import Header from '../component/header'
import Footer from '../component/footer'
import ReactNative from '../component/reactnative'
import F1 from '../component/f1'
import F2 from '../component/f2'
import Cover from '../component/cover'
import Aboutme from '../component/aboutme'
import Work from '../component/work'
import Features from '../component/features'
import Testi from '../component/testi'
import Medium from '../component/medium'
import json from '../profile.json'

// console.log("Here we have env variable "+process.build.env.apiKey);

export default class Index extends React.Component {

  constructor(props) {
		super(props);
    this.state = {
      visitors : 0
    }
	}

  render(){
    const a = {h1:json.h1,hl:json.headline}
    const b = {desc : json.descrption, resume : json.resume}
  return (
    <div>
      <Head>
    <title>SuperSami - Software Developer</title>
    <link rel="icon" type="image/x-icon" href="/static/favicon.png" />
    <meta name="google-site-verification" content="IouCV5KEwIGs4g0WCbw7aAr1AP6TJQc7p5DmzdajlLM" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:700"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.min.css"/>
      </Head>
<Header data={json.name}/>
<Cover data={a}/>
<Aboutme data={b}/>
<F1 data={json.high1}/>
<F2  data={json.high1}/>
{/* <ReactNative/> */}
<Work/>
<Features data={json.skill}/>
<Medium data={json.medium}/>
<Testi/>
<Footer/>
    </div>
  )
}
}

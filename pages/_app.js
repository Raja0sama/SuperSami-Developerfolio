import React from 'react';
import App, { Container } from 'next/app';
import NProgress from 'nprogress'
import Router from 'next/router'
import "../static/nprogress.css"
import NextSeo from 'next-seo';
import Head from 'next/head'

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', url => {
    NProgress.start()
  })
  Router.events.on('routeChangeComplete', () => {
    setTimeout(()=>{ NProgress.done()},3000)  
   })
  Router.events.on('routeChangeError', () => {
    setTimeout(()=>{ NProgress.done()},3000)  
   })


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
             <Head>
              <script src="static/data.js"></script>
          </Head>
           <NextSeo
      config={{
        title: 'Raja Osama | Software Developer | Freelancer',
        description: 'I am a developer that can work with many programming technologies for e.g Node.js,Next.js,Laravel,Python,C#,Java,Angular',
        canonical: 'https://super-sami.com/',
        tags: ['Raja Osama', 'Rajaosama', 'rajaosama','Software Developer','software developer','supersami','super sami','python developer','android developer','android expert','react js developer','react-native developer', 'react native developer','react.js deverloper','react native expert','freelancer','C# developer','winform developer','desktop application developer','website developer','php developer','front-end developer','javascript expert','asp.net developer','Node.js expert','node js developer','node js freelancer','website developer freelancer','Mobile application developer','cross platform developer','cross-platform developer'],
        authors: [
          'https://www.example.com/authors/@firstnameA-lastnameA',
        ],
        openGraph: {
          url: 'https://super-sami.com/',
          title: 'Raja Osama Freelancer Software Developer',
          description: 'Have expertise in various Websites Development technologies such as core           PHP or Framework Laravel, React.js or Its framework Next.js, and ASP.net,          also a pro In Android Development using Java language and can make a kind of           Android App. I can also build Cross-platform to React native via which I can          create any kind of Android, IOS, OSX, and Windows software.',
          type: 'profile',
          profile: {
            firstName: 'Raja',
            lastName: 'Osama',
            username: 'Rajaosama123',
            gender: 'male',
          },
          images: [
            {
              url: 'https://super-sami.com/static/img/47484878_1945989028853880_5831096228116430848_o.jpg',
              width: 850,
              height: 650,
              alt: 'Profile Photo',
            },
          ],
        },
      }}
    />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
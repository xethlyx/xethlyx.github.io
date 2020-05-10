import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import NavBar from '../components/navbar';
import Background from '../background.webp';
import ButtonArrow from '../components/buttonArrow';


const Index = () => (
	<React.Fragment>
		<Head>
			<title>Home | XETHLYX</title>
			<meta property="og:title" content="Homepage" />
		</Head>
		<NavBar selected="home" transparent={true}/>
		<div className="main-cover" style={{
			background: `var(--background) url(${Background}) no-repeat center center`,
			backgroundSize: 'cover'
		}}>
			<div className="cover-float">
				<div className="spacer"></div>
				<h1>xethlyx</h1>
				<h2>aspiring jack of all trades developer</h2>
				<div className="button-container">
					<Link href="/contact"><button>Contact me<ButtonArrow /></button></Link>
					<Link href="/projects"><button className="muted wide">See my projects<ButtonArrow /></button></Link>
				</div>
			</div>
		</div>
		<div className="main-footer">
			<div className="footer-float">
				<h3>About xethlyx</h3>
				<p>Hello! Welcome to my personal web page. It's quite deserted, you're better off trying to find me on Discord (xethlyx#8616). I do various types of programming in my free time, including this website that is currently loaded in your browser.</p>
			</div>
		</div>
	</React.Fragment>
);

export default Index;
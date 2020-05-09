import React from 'react';
import Head from 'next/head';
import NavBar from '../components/navbar';
import ButtonArrow from '../components/buttonArrow';
import Link from 'next/link';

const Contact = () => (
    <React.Fragment>
		<Head>
			<title>Contact | XETHLYX</title>
		</Head>
		<NavBar selected="contact" transparent={false}/>
    	<div className="contact">
			<h3>Looking for me?</h3>
			<p>Please use the links below.</p>
		</div>
		<div className="contact-card-container">
			<div className="contact-card">
				<div className="contact-card-header" style={{backgroundColor: '#7B44FF'}}></div>
				<div className="content">
					<h3>Github</h3>
					<p>My projects are on here. If you want to reach me regarding the projects, this would be a good first place to go.</p>
					<a href="https://github.com/xethlyx" className="button muted">View my projects<ButtonArrow /></a>
				</div>
			</div>
			<div className="contact-card large">
				<div className="contact-card-header" style={{backgroundColor: '#2A86FF'}}></div>
				<div className="content">
					<h3>Discord</h3>
					<p>If you need me for whatever reason, I'm almost always reachable at xethlyx#8616.</p>
					<img src="/discord.svg" className="big" />
					<a className="button" href="https://discord.com/">Ping me<ButtonArrow /></a>
				</div>
			</div>
			<div className="contact-card">
				<div className="contact-card-header" style={{backgroundColor: '#41D5D5'}}></div>
				<div className="content">
					<h3>Instagram</h3>
					<p>No. Don't even try.</p>
					<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="button muted">Get rick rolled<ButtonArrow /></a>
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default Contact;
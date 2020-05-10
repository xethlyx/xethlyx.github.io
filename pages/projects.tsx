import React from 'react';
import Head from 'next/head';
import NavBar from '../components/navbar';
import ButtonArrow from '../components/buttonArrow';

const Projects = () => (
	<React.Fragment>
		<Head>
			<title>Projects | XETHLYX</title>
			<meta property="og:title" content="Projects" />
			<meta property="og:description" content="If you're looking for my projects, you can find them on Github. This page is currently unfinished." />
			<meta name="description" content="If you're looking for my projects, you can find them on Github. This page is currently unfinished."/>
		</Head>
		<NavBar selected="projects" transparent={false}/>
		<div className="contact">
			<h3>Unfinished</h3>
			<p>This page is unfinished. If you want to view my projects, feel free to head over to my github page.</p>
			<a href="https://github.com/xethlyx" className="button">Visit my Github <ButtonArrow /></a>
		</div>
	</React.Fragment>
    
);

export default Projects;
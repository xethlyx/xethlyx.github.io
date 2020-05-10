import React, { useEffect } from 'react';
import Head from 'next/head';

import Link from 'next/link';
import Logo from './logo.svg';

const NavBar = ({selected, transparent}: {selected: string, transparent: boolean}) => {
	useEffect(() => {
		const header = document.getElementById('header');

		window.addEventListener('scroll', (event) => {
			if (!header) return;

			if (window.scrollY > 0) {
				header.classList.add('undocked')
			} else {
				header.classList.remove('undocked');
			}
		});
	}, []);

	const toggleNavbar = () => {
		const header = document.getElementById('header');

		if (!header) return;

		if (header.classList.contains('open')) {
			header.classList.remove('open');
		} else {
			header.classList.add('open');
		}

		return false;
	}

	return (
		<header id="header">
			<Head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
			</Head>
			<a href="javascript:void(0)" className="icon" onClick={toggleNavbar}>
				<i className="fa fa-bars"></i>
			</a>
			<ul>
				<li className="space-bottom"><Link href="/"><a><img src={Logo} alt="xethlyx" /></a></Link></li>
				<li className={selected === 'home' ? 'active' : ''}><Link href="/"><a>Home</a></Link></li>
				<li className={selected === 'contact' ? 'active' : ''}><Link href="/contact"><a>Contact</a></Link></li>
				<li className={selected === 'projects' ? 'active' : ''}><Link href="/projects"><a>Projects</a></Link></li>
			</ul>
			
		</header>
	)
}

export default NavBar;
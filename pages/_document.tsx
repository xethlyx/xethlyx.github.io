import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
	return (
	  <Html lang="en">
		<Head>
			<link rel="shortcut icon" href="/favicon.ico" />
			<link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
			<link rel="icon" type="image/png" href="/favicon-128.png" sizes="128x128" />
			<link rel="icon" type="image/png" href="/favicon-167.png" sizes="167x167" />
			<link rel="icon" type="image/png" href="/favicon-180.png" sizes="180x180" />
			<link rel="apple-touch-icon" type="image/png" href="/favicon-180.png" sizes="180x180" />
			<link rel="icon" type="image/png" href="/favicon-192.png" sizes="192x192" />
			<link rel="icon" type="image/png" href="/favicon-196.png" sizes="196x196" />
			<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet" />

			<meta name="theme-color" content="#348cff" />

			<meta property="og:site_name" content="XETHLYX" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="/icon-max.png" />

			<meta name="keywords" content="xethlyx" />
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	  </Html>
	);
  }
}
export default MyDocument;
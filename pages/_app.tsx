import '../style.css';
import '../mobile.css';

import Head from 'next/head';

function App({ Component, pageProps }: any) {
	return <>
		<Head>
			<title>Some Title</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
		<Component {...pageProps} />
	</>
}

export default App;
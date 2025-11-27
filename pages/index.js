import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'


export default function Home() {
return (
<div>
<Head>
<title>Reze-Chan — Privacy Native Meme Revolution</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
<Header />
<main>
<Hero />
<Features />
</main>
<Footer />
</div>
)
}
```

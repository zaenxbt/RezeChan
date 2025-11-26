import './globals.css'


export const metadata = {
title: 'Reze-Chan — Privacy Native Meme Revolution',
description: 'Reze-Chan landing powered by x402 Protocol',
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="bg-black text-white antialiased">{children}</body>
</html>
)
}

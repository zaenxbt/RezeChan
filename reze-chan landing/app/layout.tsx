import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
title: 'Reze-Chan — Privacy Native Revolution',
description: 'The Privacy Native Meme Revolution powered by x402 Protocol.',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
```

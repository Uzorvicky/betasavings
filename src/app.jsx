import * as React from 'react';
import { createRoot } from 'react-dom/client';
import 'primeicons/primeicons.css';
import { MemoryRouter, } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
// import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import 'primereact/resources/themes/tailwind-light/theme.css'
// import Tailwind from 'primereact/passthrough/tailwind';
import App from './Application';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
    <PrimeReactProvider  
    // value={{ unstyled: true, pt: Tailwind }}
    >
        <MemoryRouter basename="/">
            <App />
        </MemoryRouter>
    </PrimeReactProvider>
</React.StrictMode>)
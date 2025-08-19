import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
    <HashRouter basename="/lenax-site/">
        <App />
    </HashRouter>
);

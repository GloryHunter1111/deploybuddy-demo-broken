   import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

   const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
   const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
   const analyticsId = import.meta.env.VITE_ANALYTICS_ID

   function Home() {
     return <h1>Demo app</h1>
   }

   function About() {
     return <h1>About</h1>
   }

   export default function App() {
     return (
       <BrowserRouter>
         <nav>
           <Link to="/">Home</Link> <Link to="/about">About</Link>
         </nav>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
         </Routes>
         <small>{supabaseUrl && supabaseAnonKey && analyticsId ? 'ready' : 'missing config'}</small>
       </BrowserRouter>
     )
   }

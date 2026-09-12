import { Suspense, useState } from 'react';
import './App.css';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import type { Technologie } from './type/technologie';

const dataFetch = async (): Promise<Technologie[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  const [technologiesPromise] = useState(() => dataFetch());
  return (
    <>
      <Nav />

      <Hero />

      <Suspense fallback={<h2>Loading.....</h2>}>
        <CardSection technologiesPromise={technologiesPromise} />
      </Suspense>

      <Footer />

    </>
  )
}

export default App

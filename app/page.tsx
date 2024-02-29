'use client'
import Footer from "@/components/Footer/Footer";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  return (
    <div className="home-frame">
      <div className="home">
        <div className="home-banner">
          <img src="/Pikachu.png" alt="banner" />
        </div>
        <div className="home-info-box">
          <div className="home-info">
            <h1>Find all your favorite Pokemon</h1>
            <h2>You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>
            <Button variant="solid" color="success" onPress={() => router.push('/pokedex')}>See Pokemons</Button>
          </div>
        </div>
      </div>
      <div className="footer-buffer"></div>
      <Footer />
    </div>
  );
}

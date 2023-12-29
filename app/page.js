
import Navbar from '@/src/utils/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/utils/components/Hero/Hero';
import BrandingVideo from '@/src/utils/components/BrandingVideo/BrandingVideo';
export default function Home() {

  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <BrandingVideo/>
    </div>
  );
}

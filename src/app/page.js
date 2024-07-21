// import Image from "next/image";
import LandingHero from "./_components/LandingHero";
import LogoContainer from "./_components/LogoContainer";
import DevTechnologies from "./_components/DevTechnologies";
import ProjectShowcase from "./_components/ProjectShowcase";
import ProjectDiscussion from "./_components/ProjectDiscussion";
import ApplicationDevelopmentStages from "./_components/ApplicationDevelopmentStages";
import OurTeam from "./_components/OurTeam";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import NavbarMobile from "./_components/NavbarMobile";
import FaqSection from "./_components/FaqSection";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <title>MY COMPANY | Innovative Mobile Solutions</title>
        <meta name="description" content="Explore our top-notch app development services. From idea to launch, we provide comprehensive solutions for mobile and web apps. Get in touch to build your next big project!" />
        <meta name="keywords" content="app development, mobile app development, web app development, custom software, app design, app development company" />
        <meta name="author" content="My Company" />
        <meta property="og:title" content="Top App Development Services | Innovative Mobile Solutions" />
        <meta property="og:description" content="Explore our top-notch app development services. From idea to launch, we provide comprehensive solutions for mobile and web apps. Get in touch to build your next big project!" />
        <meta property="og:image" content="/images/preview-image.jpg" />
        <meta property="og:url" content="https://mycompany.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="My Company" />
        <link rel="canonical" href="https://mycompany.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex min-h-screen flex-col items-center justify-between py-10 px-15">

        <div className="hidden md:block w-[90%] z-50">
          <Navbar />
        </div>
        <div className="md:hidden w-[90%]">
          <NavbarMobile />
        </div>
        <LandingHero />
        <LogoContainer />
        <DevTechnologies />
        <ProjectShowcase />
        <ProjectDiscussion />
        <ApplicationDevelopmentStages />
        <OurTeam />
        <FaqSection />
        <Footer />
      </main>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../components/headerComponent";
import { HeroComponent } from "../components/content/heroComponent";
import { SkillBarComponent } from "../components/content/skillbarComponent";
import { OtherComponent } from "../components/content/otherComponent";
import { ProjectComponent } from "../components/content/projectComponent";
import { FooterComponent } from "../components/footerComponent";
import { AboutComponent } from "../components/content/aboutComponent";
import Gambar1 from "../assets/image/gambar1.png";
import LoadingScreen from "../components/content/loadingScreen";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [statusNavbar, setStatusNavbar] = useState(false);

  useEffect(() => {
    // Fungsi untuk melakukan preloading gambar
    const preloadImages = async () => {
      try {
        const imageUrls = [Gambar1];  
        const promises = imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve();
            img.onerror = reject();
          });
        });

        await Promise.all(promises);
        setIsLoading(false); // Setelah semua gambar berhasil di-load, atur isLoading menjadi false
      } catch (error) {
        console.error("Error while preloading images:", error);
      }
    };

    preloadImages();
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setStatusNavbar(true);
    } else {
      setStatusNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  console.log(statusNavbar);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <HeaderComponent status={statusNavbar} />
          <HeroComponent Gambar1={Gambar1} />
          <AboutComponent />
          <SkillBarComponent />
          <br />
          <br />
          <ProjectComponent />
          <OtherComponent />
          <FooterComponent />
        </div>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

import "./App.css";
import { SERVER_URL } from "./config/constants";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import getMainColor from "./utils/getMainColor";

function App() {
  const [hexColorArray, setHexColorArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const hasResultColorData = hexColorArray.length > 0;

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });

    const checkIsMobile = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const fetchRgbData = async (url) => {
    setLoading(true);
    setHexColorArray([]);
    const checkedUrl = checkUrl(url);
    setInputUrl(checkedUrl);

    const encodedUrl = encodeURIComponent(checkedUrl);
    const response = await fetch(`${SERVER_URL}/crawl/${encodedUrl}`);
    const jsonResponseData = await response.json();
    const mainColor = getMainColor(jsonResponseData["data"]) || [];

    setHexColorArray(mainColor);
    setLoading(false);
  };

  const checkUrl = (url) => {
    if (!url) {
      return "";
    }
    if (url.startsWith("https://") || url.startsWith("http://")) {
      return url;
    }
    if (url.startsWith("www.")) {
      return `https://${url}`;
    }
    return `https://www.${url}`;
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-10 md:h-12 bg-mainBgColor text-white flex items-center p-4 z-50">
        <h1 className="text-xl font-bold">
          <img
            src="/whitelogo.png"
            alt="Logo"
            className="w-6 ml-6 mb-1 mr-2 h-auto inline-block"
          />
          color-x
        </h1>
      </header>

      <main>
        {isMobile ? (
          <div className="min-h-screen flex items-center justify-center text-white bg-black px-4 text-center">
            <p className="text-2xl">
              모바일 화면은 현재 준비 중입니다. <br /> 데스크탑에서
              이용해주세요.
            </p>
          </div>
        ) : hasResultColorData || loading ? (
          <ResultPage
            hexColorArray={hexColorArray}
            inputUrl={inputUrl}
            loading={loading}
            onSearch={fetchRgbData}
          />
        ) : (
          <HomePage
            onSearch={fetchRgbData}
            loading={loading}
          />
        )}
      </main>
    </>
  );
}

export default App;

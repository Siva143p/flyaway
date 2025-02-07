import { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
    script.async = true;
    document.head.appendChild(script);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXX');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
};

export default Analytics;

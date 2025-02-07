import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    window.Tawk_LoadStart = new Date();

    var Tawk_API = Tawk_API || {};
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/671f02212480f5b4f594e8dc/1ib8i0ljm";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null;
};

export default TawkToChat;

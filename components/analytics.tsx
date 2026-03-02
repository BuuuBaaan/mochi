import Script from "next/script";

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <>
      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      ) : null}
      {plausibleDomain ? (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}
      <Script id="analytics-events" strategy="afterInteractive">
        {`
          (function () {
            function emit(name, payload) {
              try {
                if (typeof window.gtag === "function") {
                  window.gtag("event", name, payload);
                }
                if (typeof window.plausible === "function") {
                  window.plausible(name, { props: payload });
                }
              } catch (_) {}
            }

            document.addEventListener("click", function (event) {
              var el = event.target instanceof Element ? event.target.closest("[data-track-event]") : null;
              if (!el) return;

              var name = el.getAttribute("data-track-event");
              if (!name) return;

              var payload = {
                label: el.getAttribute("data-track-label") || (el.textContent || "").trim().slice(0, 90),
                href: el.getAttribute("data-track-href") || el.getAttribute("href") || "",
                variant: el.getAttribute("data-track-variant") || "",
                path: window.location.pathname,
              };

              emit(name, payload);
            });

            document.addEventListener("submit", function (event) {
              var form = event.target;
              if (!(form instanceof HTMLFormElement)) return;
              var name = form.getAttribute("data-track-submit");
              if (!name) return;
              emit(name, {
                form: name,
                path: window.location.pathname,
              });
            });
          })();
        `}
      </Script>
    </>
  );
}

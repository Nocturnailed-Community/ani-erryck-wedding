// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Ani & Erryck Wedding",
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity:
            "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Imperial+Script&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Amiri&display=swap",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js",
          integrity:
            "sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy",
          crossorigin: "anonymous",
          defer: true,
        },
        {
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
          integrity:
            "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r",
          crossorigin: "anonymous",
          defer: true,
        },
      ],
    },
  },
});

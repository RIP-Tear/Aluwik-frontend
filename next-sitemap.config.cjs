/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://aluwik.pl",
  generateRobotsTxt: true,
  outDir: "./out",
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://aluwik.pl/sitemap.xml"],
  },
  transform: async (config, path) => {
    // Strona główna - najwyższy priorytet
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Strony ofert - wysoki priorytet
    if (path.startsWith("/oferta/") && path !== "/oferta/") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // Strona oferty główna
    if (path === "/oferta/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // Artykuły blogowe
    if (path.startsWith("/blog/") && path !== "/blog/") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    }

    // Strona bloga główna
    if (path === "/blog/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Strona kontaktu
    if (path === "/kontakt/") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Strona o firmie
    if (path === "/o-firmie/") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    }

    // Realizacje
    if (path === "/realizacje/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Pozostałe strony
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

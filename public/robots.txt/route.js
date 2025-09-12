// app/api/robots/route.js
export async function GET(request) {
    const domain = "https://oceantechzone.in"; // your .in domain

    const robotsTxt = `
User-agent: *
Disallow:

# Allow all pages to be crawled
Allow: /

# Sitemap location
Sitemap: https://www.oceantechzone.in/sitemap.xml
  `.trim();

    return new Response(robotsTxt, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}

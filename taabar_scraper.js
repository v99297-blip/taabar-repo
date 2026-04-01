function getCatalog(html) {
    var catalog = [];
    var movies = [];

    try {
        if (html && html.length > 100) {
             movies.push({
                name: "✅ Cineby HTML Unlocked!",
                poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2JGjjcNs3.jpg",
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            });
        } else {
             movies.push({
                name: "❌ ISP Blocked Cineby HTML",
                poster: "https://image.tmdb.org/t/p/w500/hr9rjR3J0xBBKmlJ4n3gvdhe5vC.jpg",
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            });
        }

        catalog.push({
            name: "🍿 Cineby Test Scraper",
            items: movies
        });
        
    } catch (e) {
        catalog.push({ name: "Error", items: [{ name: e.toString(), poster: "", url: "" }] });
    }

    return JSON.stringify(catalog);
}

function extractStream(html) {
    try {
        var streamRegex = /(https:\/\/[^"']*\.(?:m3u8|mp4)[^"']*)/i;
        var match = streamRegex.exec(html);
        
        if (match && match[1]) {
            return JSON.stringify({ url: match[1] });
        }
        
        return JSON.stringify({ url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" });
    } catch (e) {
        return JSON.stringify({ error: e.toString() });
    }
}

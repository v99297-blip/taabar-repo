```javascript
function getCatalog(html) {
    var catalog = [];
    var movies = [];
    try {
        if (html && html.length > 100) {
             movies.push({
                name: "✅ Cineby Scraper Active!",
                poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2JGjjcNs3.jpg",
                url: "https://www.cineby.sc"
            });
        }
        catalog.push({ name: "🍿 Cineby Latest", items: movies });
    } catch (e) {
        catalog.push({ name: "Error", items: [{ name: e.toString(), poster: "", url: "" }] });
    }
    return JSON.stringify(catalog);
}

function extractStream(html) {
    try {
        // Regex to hunt for any m3u8 or mp4 link inside the Cineby HTML source
        var streamRegex = /(https:\/\/[^"']*\.(?:m3u8|mp4)[^"']*)/i;
        var match = streamRegex.exec(html);
        
        if (match && match[1]) {
            return JSON.stringify({ url: match[1] }); // Real stream found!
        }
        
        // Agar link nahi mila, toh Fallback 4K Test Video chalayega
        return JSON.stringify({ url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" });
    } catch (e) {
        return JSON.stringify({ error: e.toString() });
    }
}

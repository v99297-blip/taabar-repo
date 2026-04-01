function getCatalog(html) {
    var catalog = [];
    var movies = [];

    try {
        // Asli Hacker Regex: Ye HTML mein se 'src' (poster) aur 'alt' (title) nikalega!
        var regex = /<img[^>]*src=["']([^"']+)["'][^>]*class=["'][^"']*movieCard[^"']*["'][^>]*alt=["']([^"']+)["']/gi;
        var match;
        var count = 0;

        // Jab tak movies milti rahengi (Max 20 movies)
        while ((match = regex.exec(html)) !== null && count < 20) {
            var posterUrl = match[1];
            var title = match[2];

            // Agar poster link incomplete hai toh fix karo
            if (posterUrl.startsWith('/')) {
                posterUrl = "https://www.cineby.sc" + posterUrl;
            }

            movies.push({
                name: title,
                poster: posterUrl,
                // Abhi video link dummy rakha hai test ke liye
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" 
            });
            count++;
        }

        if (movies.length > 0) {
            catalog.push({ name: "🔥 Cineby Trending", items: movies });
        } else {
            catalog.push({ name: "❌ No Movies", items: [{ name: "Regex fail ya ISP Block", poster: "", url: "" }] });
        }
        
    } catch (e) {
        catalog.push({ name: "Error", items: [{ name: e.toString(), poster: "", url: "" }] });
    }

    return JSON.stringify(catalog);
}

function extractStream(html) {
    try {
        return JSON.stringify({ url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" });
    } catch (e) {
        return JSON.stringify({ error: e.toString() });
    }
}

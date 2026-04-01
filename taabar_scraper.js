function getCatalog(html) {
    var catalog = [];
    var movies = [];

    try {
        // Native Dart code se churaya gaya Netmirror ka Regex Pattern!
        var regex = /href=["']([^"']+)["'][^>]*>[\s\S]*?<img[^>]*(?:data-src|src)=["']([^"']+)["'][^>]*alt=["']([^"']+)["']/gi;
        var match;
        var count = 0;

        while ((match = regex.exec(html)) !== null && count < 20) {
            var streamUrl = match[1];
            var posterUrl = match[2];
            var title = match[3];

            // Agar URL aadhi hai toh uske aage netmirror.app laga do
            if (posterUrl.startsWith('/')) posterUrl = "https://netmirror.app" + posterUrl;
            if (streamUrl.startsWith('/')) streamUrl = "https://netmirror.app" + streamUrl;

            movies.push({
                name: title,
                poster: posterUrl,
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" // Abhi bhi test video rakhi hai testing ke liye
            });
            count++;
        }

        if (movies.length > 0) {
            catalog.push({ name: "🔥 Netmirror Exclusives", items: movies });
        } else {
            catalog.push({ name: "❌ No Movies", items: [{ name: "HTML nahi mila ya Regex fail", poster: "https://image.tmdb.org/t/p/w500/hr9rjR3J0xBBKmlJ4n3gvdhe5vC.jpg", url: "" }] });
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

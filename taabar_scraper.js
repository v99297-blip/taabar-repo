// 🚀 Taabar Master Scraper v1.0
function getCatalog() {
    // Yahan hum hardcoded ya fetch karke movies ki list bhej sakte hain
    const data = [
        {
            title: "🔥 Taabar Cloud Hits",
            items: [
                {
                    title: "Big Buck Bunny (4K Test)",
                    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/800px-Big_buck_bunny_poster_big.jpg",
                    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
                    sourceId: "taabar_cloud"
                },
                {
                    title: "Sintel (Cloud Stream)",
                    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Sintel_poster.jpg/800px-Sintel_poster.jpg",
                    streamUrl: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
                    sourceId: "taabar_cloud"
                }
            ]
        }
    ];
    return JSON.stringify(data);
}

function extractLink(url) {
    // Yahan hum complicated links ko bypass karne ka logic likhenge aage
    return url; 
}
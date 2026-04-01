function getCatalog(html) {
    var catalog = [];
    var movies = [];

    try {
        // App Flutter se HTML string bhejegi. Hum check kar rahe hain ki HTML aaya ya nahi.
        if (html && html.length > 100) {
             movies.push({
                name: "✅ Cineby HTML Loaded Successfully!",
                poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2JGjjcNs3.jpg", // Dune 2 Poster
                url: "https://www.cineby.sc"
            });
        } else {
             movies.push({
                name: "❌ Error: HTML nahi aaya bhai!",
                poster: "",
                url: ""
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

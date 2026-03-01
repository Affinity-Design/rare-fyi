const login = "accounts@affinitydesign.ca";
const password = "500230fac9f967cf";
const auth = Buffer.from(`${login}:${password}`).toString('base64');

const keywords = ["Base Chain airdrop", "Fair launch crypto", "Basenames utility", "AI trading bot", "Rare Coin Base"];

async function checkKeywords() {
  const response = await fetch("https://api.dataforseo.com/v3/keywords_data/google/search_volume/task_post", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify([{
      keywords: keywords,
      location_name: "United States",
      language_name: "English"
    }])
  });

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

checkKeywords();

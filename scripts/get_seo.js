const login = "accounts@affinitydesign.ca";
const password = "500230fac9f967cf";
const auth = Buffer.from(`${login}:${password}`).toString('base64');
const taskId = "03011947-8951-0110-0000-4e0d072acf6a";

async function getResults() {
  const response = await fetch(`https://api.dataforseo.com/v3/keywords_data/google/search_volume/task_get/${taskId}`, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

getResults();

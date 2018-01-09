const url = "https://app.akira.md/api/system_status";

fetch(url).then(response => {
  response.json().then(data => {
    console.log(data);
    return data;
  });
});

export default fetch;

async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

function getUrl() {
  return "https://script.google.com/macros/s/AKfycbxyer2mur0NimGBX5LnVbjwiRKabG7scORLrsaOd-4G/exec";
}

// GASのurlにクエリパラメータ（?sheetName=シート名&cell=セル名）を付ける
function runGet() {
  const url = 
    getUrl() + "?sheetName=シート1&cell=A1";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetchData(url, options);
}

function runPost(){
  // GASのurl
  const url = getUrl();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sheet: "シート名",
      cell: "セル名",
      value: "値",
    }),
  };
  fetchData(url, options);
}

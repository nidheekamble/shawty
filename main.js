var endPoint = "https://www.jsonstore.io/b198970ae4af630ad693075a720ac4b703881b951d47af7b1e3ba686de367116";

function getRandomString() {
  var _randomString = Math.random.toString(32).substring(2.5) + Math.random.toString(32).substring(2.5);
  return _randomString;
}

function getURL() {
  var URLinput = document.getElementById("URLinput").value;
  var hasProtocol = URLinput.startsWith("https://") || URLinput.startsWith("http://") || URLinput.startsWith("ftp://");
  if(!hasProtocol)
  {
    var correctedURL = "http://"+URLinput;
    return correctedURL;
  }
  else
    return URLinput;
}

function generateHash() {
  if (window.location.hash = "")
  {
    window.location.hash = getrandom();
  }
}

function sendRequest(url) {
  this.url = url;
  $.ajax({
    'url': endPoint+"/"+window.location.hash.substr(1),
    'type': 'POST',
    'data': JSON.stringify(this.url),
    'dataType': 'json',
    ‘contentType’: ‘application/json; charset=utf-8’
  });
}

function shortenURL() {
  var URLinput = getURL();
  generateHash();
  sendRequest(URLinput);
}

var newHash = window.location.hash.substr(1);
if (window.location.hash != "") {
  $.getJSON(endpoint + "/" + newHash, 
      function (data) {
        data = data["result"];
        if (data != null) {
          window.location.href = data;
        }
  });
}

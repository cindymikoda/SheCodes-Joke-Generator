function ShowResponse(response) {
  console.log(response.data.answer);
}
//________________________🌐 API info
let apiKey = "o763ft69073f5418a00d1de2884aa32b";
let context =
  "You are a helpful assistant for a website. Be polite and friendly. Keep your answers short and clear. Avoid technical jargon. If you don’t know something, admit it.";
let prompt = "Generate a joke about learning to code.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

//________________________📦 AXIOS RESPONSE
axios.get(apiUrl).then(ShowResponse);

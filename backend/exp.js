
// const tf = require('@tensorflow/tfjs');
const tf1 = require('@tensorflow/tfjs-node');
global.fetch = require('node-fetch')


const test = async () => {
  const model1 = await tf1.loadLayersModel('file:///home/louardi/Documents/model1/model.json')
  // file:///home/louardi/Downloads/model(7).json
  // const model1 = await tf1.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/iris_v1/model.json')

  console.log(model1.summary());

}

const model1 = test()














// console.log(model1.summary());
// console.log(log)
// await model.save('file:///home/louardi/project__glossaire/backend/hhh.json');
// console.log(model.summary());
// console.log(model.predict(tf.ones([1, 4])).print());
// return model
// https://drive.google.com/file/d/1ulf1Tb2oOnrsVve2KGrHNuOZs8smiByU/view?usp=sharing
// https://drive.google.com/file/d/1ulf1Tb2oOnrsVve2KGrHNuOZs8smiByU/view?usp=sharing
// console.log(String.fromCharCode(parseInt(, 16)));
// function unicodeToChar(text) {
//   return text.replace(/\\u[\dA-F]{4}/gi,
//     function (match) {
//       return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
//     });
// }
// console.log(unicodeToChar('\u0627\u0644\u0628\u0631\u062a \u0627\u064a\u0646\u0634\u062a\u0627\u064a\u0646'));
// working but not great
//https://ar.wikipedia.org/w/api.php?action=query&prop=revisions&titles=%D8%A7%D9%84%D8%A8%D8%B1%D8%AA_%D8%A7%D9%8A%D9%86%D8%B4%D8%AA%D8%A7%D9%8A%D9%86&formatversion=2&prop=extracts
// $json_string = file_get_contents("http://".$cible.".wikipedia.org/w/api.php?action=query&prop=extracts&format=json&titles=".$texte); 
// $parsed_json = json_decode($json_string, true);
// import fetch from 'node-fetch';
// import fs from "fs"
// const response = await fetch('http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&formatversion=2&titles=standard deviation');
// const body = await response.json();
// fs.writeFile("data.html", Object.values(body.query.pages)[0].extract, (err) => {
//   console.log(err);
// })
// console.log("body\n\n\n\n\n", body, "\n\n\n\n\n")
// console.log(Object.values(body.query.pages)[0].extract);
// https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&titles=value
// https://ar.wikipedia.org/w/api.php?format=json&action=query&formatversion=2&prop=extracts&titles=%D8%A7%D9%86%D8%AD%D8%B1%D8%A7%D9%81%20%D9%85%D8%B9%D9%8A%D8%A7%D8%B1%D9%8A
// exintro=1
// https://ar.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=1&explaintext=1&formatversion=2&titles=%D8%A7%D9%86%D8%AD%D8%B1%D8%A7%D9%81%20%D9%85%D8%B9%D9%8A%D8%A7%D8%B1%D9%8A



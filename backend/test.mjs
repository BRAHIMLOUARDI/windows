import fetch from "node-fetch";



const test = async () => {
  const model = await fetch('https://drive.google.com/uc?id=1FOHtzq_wF-cXUgW-h6dyMwbWfD6NmpkZ&export=download')

  console.log(await model.json());
}
test()


// https://drive.google.com/file/d/1FOHtzq_wF-cXUgW-h6dyMwbWfD6NmpkZ/view?usp=sharing



https://drive.google.com/uc?id=1FOHtzq_wF-cXUgW-h6dyMwbWfD6NmpkZ&export=download
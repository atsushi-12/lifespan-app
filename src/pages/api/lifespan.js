export default async function handler(req, res) {
  const { nationality } = req.query;
  // APIからvalueの値を取得
  const response = await fetch(`https://api.worldbank.org/v2/country/${nationality}/indicator/SP.DYN.LE00.IN?format=json&per_page=2000&date=2015:2015`);
  const data = await response.json();
  const value = data;

  res.status(200).json({ value });
}







// export default async function handler(req, res) {
//   const responce =await
//   fetch('https://api.worldbank.org/v2/country/JPN;KOR;CHN;IND;USA;CAN;COL;MEX;PHL/indicator/SP.DYN.LE00.IN?format=json&per_page=2000&date=2010:2015')
//   const posts = await responce.json()
//   res.status(200).json({ posts })
//   }

//   export async function fetchImages(breed) {
//     const response = await fetch(
//         `https://dog.ceo/api/breed/${breed}/images/random/12`
//     );
//     const data = await response.json();
//     return data.message;
// }

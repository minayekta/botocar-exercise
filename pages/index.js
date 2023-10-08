import HomePage from "../components/templates/HomePage";


export default function Home() {
  return (
 <HomePage/>
  )
}
// export async function getStaticProps (){
//   const res = await fetch('http://localhost:4000/data');
//   const data = await res.json()
//   console.log(data)
//   return({
//     props:{
//       data
//     }
//   })
// }
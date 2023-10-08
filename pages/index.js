

export default function Home( { data }) {
  console.log(data)
  return (
    <div >
      Boto Food
    </div>
  )
}
export async function getStaticProps (){
  const res = await fetch('http://localhost:4000/data');
  const data = await res.json()
  console.log(data)
  return({
    props:{
      data
    }
  })
}
import MenuPage from "../../components/templates/MenuPage";

function Menu() {
    return (
        <>
        <MenuPage/>
        </>
    )
}

export default Menu
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
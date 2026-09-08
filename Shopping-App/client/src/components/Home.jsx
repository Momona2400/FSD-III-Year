import Item from "./Item"
const Home = () => {
  const itemData = [
    {image:"",title:"ReactJS", price:100},
    {image:"",title:"NodeJS", price:100},
    {image:"",title:"ExpressJS", price:100},
    {image:"",title:"ReactJS", price:100},
    {image:"",title:"NodeJS", price:100},
    {image:"",title:"ExpressJS", price:100},
  ]
  return (
    <div className="home">
      {
        itemData.map((item, index)=>{
          return <Item key={index} props={item} />
        })
      }
    </div>
  )
}

export default Home

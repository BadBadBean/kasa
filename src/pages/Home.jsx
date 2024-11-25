import Banner from "../components/Banner"
import Card from "../components/Card"

export default function Home() {
    return (
    <>
      <div>
        <Banner 
          backgroundImage='./src/assets/images/home_banner.png'
          text="Chez vous, partout et ailleurs"
        />
      </div>
      <Card />
    </>
  )
}
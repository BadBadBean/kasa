import Banner from "../components/Banner"
import Collapse from "../components/Collapse"

export default function About() {
    return (
    <>
      <div>
        <Banner 
          backgroundImage='./src/assets/images/about_banner.png'
        />
    </div>
    <Collapse />
    </>
  )
}
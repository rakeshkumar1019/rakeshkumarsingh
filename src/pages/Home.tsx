import DeveloperSection from "../components/DeveloperSection"
import DividerCom from "../components/DividerCom"
import Projects from "../components/Projects"

const Home = () => {
  return (
    <>
      <div className="md:px-20">
        <DeveloperSection />
        <DividerCom />
         <Projects />
      </div>
    </>
  )
}

export default Home

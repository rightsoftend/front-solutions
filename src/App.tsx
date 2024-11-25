import NeonText from './components/text/1-neon'
import Hover1 from './components/images/effects/1-hover/1-hover'
import ModernButton from './components/buttons/modern'
import './App.css'
import InputBorderGradient from './components/inputs/border-gradient'
import Accordeon1 from './components/accordeons/1-solution'
//import SVGComponent from './components/images/svg'

const accordeonData = {
  name: "name",
  items: [
    {
      title: "Question 1",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Question 2",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Question 3",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Question 4",
      description: "Lorem ipsum dolor sit amet",
    },
  ]
}

function App() {
  return (
    <div className='flex flex-col'>
      <Accordeon1 name={accordeonData.name} items={accordeonData.items} />
      <InputBorderGradient />
      <ModernButton />
      <NeonText text="Text"/>
      <Hover1 />
    </div>
  )
}

export default App

import NeonText from './components/text/1-neon'
import Hover1 from './components/images/effects/1-hover/1-hover'
import ModernButton from './components/buttons/modern'
import './App.css'
import InputBorderGradient from './components/inputs/border-gradient'
import Accordion1 from './components/accordions/1-solution'
import Accordion2 from './components/accordions/2-solution'
//import SVGComponent from './components/images/svg'

const accordionData = {
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
      <Accordion2 name={accordionData.name} items={accordionData.items} />
      <Accordion1 name={accordionData.name} items={accordionData.items} />
      <InputBorderGradient />
      <ModernButton />
      <NeonText text="Text"/>
      <Hover1 />
    </div>
  )
}

export default App

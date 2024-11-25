import NeonText from './components/text/1-neon'
import Hover1 from './components/images/effects/1-hover/1-hover'
import ModernButton from './components/buttons/modern'
import './App.css'
import InputBorderGradient from './components/inputs/border-gradient'
import { accordionData1, accordionData2 } from './data/accordions'
import Accordion1 from './components/accordions/1-solution'
import Accordion2 from './components/accordions/2-solution'
//import SVGComponent from './components/images/svg'




function App() {
  return (
    <div className='flex flex-col'>
      <Accordion1 name={accordionData2.name} items={accordionData2.items} />
      <Accordion2 name={accordionData1.name} items={accordionData1.items} />
      <InputBorderGradient />
      <ModernButton />
      <NeonText text="Text"/>
      <Hover1 />
    </div>
  )
}

export default App


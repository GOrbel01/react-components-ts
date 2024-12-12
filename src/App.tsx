import './App.css'
import Accordion from './components/Accordion'
import './assets/css/fonts.css'

export interface IAccordion {
  head: string;
  mainP: string;
  listItems: Array<String>;
}

function App() {
  const listItems = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'libero nam aspernatur voluptatum, alias, rerum sed labore quidem cupiditate repudiandae',
    'Eius quo officiis dicta maxime ut suscipit minima nisi at laboriosam',
    'small lorem some test you know cool stuff'
  ]

  const head = 'Placeholder text 101'

  const mainP = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Cumque similique voluptatem pariatur nesciunt nostrum laudantium totam perspiciatis
                 optio molestiae aliquid delectus eaque quaerat deserunt, animi, minima inventore maxime magni qui!`

  const accItem: IAccordion = {
    listItems: listItems,
    head: head,
    mainP: mainP
  }

  const accList: Array<IAccordion> = [
    accItem,
    accItem,
    accItem,
    accItem
  ]

  return (
    <div>
      <Accordion accList={accList}></Accordion>
    </div>
  )
}

export default App

import '../assets/css/fonts.css'
import {IAccordionItem} from './Accordion'


const AccordionItem: React.FC<IAccordionItem> = ( {props, id, open, updateOpen} ) =>  {
    const {head, mainP,listItems} = props
    const itemDisplay = !listItems ? [] : listItems

    let css = open ? 'acc-item open' : 'acc-item';
    return (
        <div className={css}>
            <p className='number'>0{id+1}</p>
            <p className="headtext">{head}</p>
            <svg onClick={() => updateOpen(id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="down-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

            <div className='hidden-box'>
                <p>{mainP}</p>

                <ul>
                    {itemDisplay.map((element,id) => (
                        <li key={id}>{element}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AccordionItem
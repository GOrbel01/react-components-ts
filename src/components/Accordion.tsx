import '../components/css/Accordion.css'
import AccordionItem from './AccordionItem'
import {IAccordion} from '../App'
import { useState } from 'react'

export type id = {
    id: number;
}

export interface IAccordionItem {
    props: IAccordion;
    id: number;
    open: boolean;
    updateOpen: (index: number) => void;
}

const Accordion = ( {accList}: { accList: Array<IAccordion> } ) => {
    const [open,setOpen]  = useState(Array(accList.length).fill(false))

    const updateStatus = (pressIndex: number) => {
        setOpen(open.map((element, index) => pressIndex === index ? !element : element))
    }

    return (
        <div className='accordion'> 
            {accList.map((element,id) => (
                <AccordionItem props={element} id={id} updateOpen={updateStatus} open={open[id]} key={id}></AccordionItem>
            ))}
        </div>
    )
}

export default Accordion
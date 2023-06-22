import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {Accordion,AccordionDetails,AccordionSummary, Typography} from '@mui/material'
import { useState } from 'react'
const MuiAccordion = () => {
    const [expanded,setExpanded] = useState<string|boolean>(false);
    const handleChange = (
        isExpended:boolean,
        panel:string
    ) => {
        console.log(isExpended);
        setExpanded(isExpended?panel:false);
        console.log(isExpended);

    }
  return (
    <div>
        <Accordion expanded={expanded==='panel1'} onChange={(event,isExpended)=>handleChange(isExpended,'panel1')}>
            <AccordionSummary
            id='panel1-header' 
            aria-controls='panel1-content' 
            expandIcon={<ExpandMoreIcon/>}>
            <Typography>Accordion1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem magnam blanditiis, architecto deserunt suscipit omnis 
                    totam exercitationem ex voluptatem cupiditate?
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded==='panel2'} onChange={(event,isExpended)=>handleChange(isExpended,'panel2')}>
            <AccordionSummary
            id='panel2-header' 
            aria-controls='panel2-content' 
            expandIcon={<ExpandMoreIcon/>}>
            <Typography>Accordion2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem magnam blanditiis, architecto deserunt suscipit omnis 
                    totam exercitationem ex voluptatem cupiditate?
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded==='panel3'} onChange={(event,isExpended)=>handleChange(isExpended,'panel3')}>
            <AccordionSummary
            id='panel3-header' 
            aria-controls='panel3-content' 
            expandIcon={<ExpandMoreIcon/>}>
            <Typography>Accordion3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem magnam blanditiis, architecto deserunt suscipit omnis 
                    totam exercitationem ex voluptatem cupiditate?
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordion
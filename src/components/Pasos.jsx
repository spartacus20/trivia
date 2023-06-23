import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel/StepLabel';


function Pasos({ index }) {
    
   

    const Steps = () => {
        const steps = [];
        for (let i = 0; i < 15; i++) {
            steps.push(<Step key={i}>
                <StepLabel></StepLabel>
            </Step>)

        }
        return steps;
    }



    return (
        <div className='mt-[50px] mb-[100px] px-56'>

            <Stepper alternativeLabel activeStep={index} >
                {Steps()}
            </Stepper>





        </div>
    )
}

export default Pasos
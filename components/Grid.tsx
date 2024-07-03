import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridData } from '@/data/GridData'

const Grid = () => {
  return (
    <section id='projects'>
        <BentoGrid>
            {gridData.map
            ((item, i) =>(
                <BentoGridItem 
                id={item.id} key={item.id} title={item.title} description={item.description}/>
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
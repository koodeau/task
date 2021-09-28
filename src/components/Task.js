import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import "./style.scss"

export default function Task() {
    return (
        <>
          <div className="task p-0 m-0">
              <StaticImage className="p-0 m-0" src="../images/Task.svg" alt="Task Image" />
          </div>  
        </>
    )
}

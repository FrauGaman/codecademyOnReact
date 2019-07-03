import React from 'react'
import Career from '../../config/coursesCareer'

function CareerCourse() {

  return(
    <div>
      <div className="courseImgBox">
        {Career.careerPath.filter(item => item.theme.includes(3)).map(item =>
          <div key={item.title}>
            {/*{item.title}*/}
            <img src={item.img} alt={item.title}/>
          </div>
          // <img key={item.title} src={require(item.img)} alt={item.title}/>
        )}
      </div>
    </div>
  )
}

export default CareerCourse
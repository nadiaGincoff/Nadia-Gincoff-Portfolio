import React from 'react'

const Title = () => {
    return(
        <div>
            <h1>Skills</h1>
        </div>
    )
}

const IconSkill = () => {
    return(
        <div>
            <div>HTML5</div>
            <div>CSS3</div>
            <div>Javascript</div>
            <div>ReactJS</div>
            <div>GitHub</div>
        </div>
    )
}

const Skills = () => {
    return(
        <div>
            <Title />
            <IconSkill />
        </div>
    )
}

export default Skills;
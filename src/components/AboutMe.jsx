import React from 'react' 
import GoHomeButton from './GoHomeButton'
import NavigationBar from './NavigationBar'
import Skills from './Skills'

const DescriptionAboutMe = () => {
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quis officia cumque maiores provident placeat quaerat quos perferendis laboriosam libero quam, tempore distinctio, ratione aspernatur nam dolor quidem id necessitatibus.
                Consequuntur eligendi esse, sapiente iure exercitationem repellat totam officiis fugiat sint accusantium, incidunt enim! Fugiat non saepe provident vero, vel, dignissimos perspiciatis quia corrupti mollitia, aliquid quae repellat soluta fugit?
                Eum perferendis sunt sint voluptatem vitae quis cum autem necessitatibus corporis, corrupti doloremque quisquam! Laboriosam nihil modi atque ut enim architecto, quasi eius aperiam totam dicta blanditiis veritatis quam et.
            </p>
        </div>
    )
}

const AboutMe = () => {
    return (
        <div>
          
            <div>
                <GoHomeButton />
                <NavigationBar />
            </div>
            <h1>About me JEJEJE</h1>
            <div><DescriptionAboutMe /></div>
            <div><Skills /></div>
            
        </div>
    )
}

export default AboutMe



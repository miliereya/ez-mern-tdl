import s from './AboutPage.module.css'

export const AboutPage = () => {
    return (
        <div>
            <h2>Just a simple to-do-list. <br></br><br></br> Testing MERN</h2>
            <p>MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. </p>
            <ul>
                <li>MongoDB - document database</li>
                <li>Express(.js) - Node.js web framework</li>
                <li>React(.js) - a client-side JavaScript framework</li>
                <li>Node(.js) - the premier JavaScript web server</li>
            </ul>
        </div>
    )
}
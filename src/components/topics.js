import React from 'react'
class Topic extends React.Component {
    render() {
        return (
            <div className="bookInfo">
                <h1>Javascript all 6 books set</h1>
                <ul>
                    <li><br></br>
                    <img src={require('../img/cover.jpg')}></img>
                    <h1>JS: Up & Going</h1>
                    <h2>Kyle Simpson</h2>
                    <a href="http://93.174.95.29/main/D48A77FB3368B23DDA646FFD5962963B"><p>Download</p></a>
                    </li>
                    <li><br></br>
                    <img src={require('../img/cover (1).jpg')}></img>
                    <h1>JS: Scope and Closures</h1>
                    <h2>Kyle Simpson</h2>
                    <a href="http://93.174.95.29/main/BA76323ABCE39E9AC4F8D112804E17B5"><p>Download</p></a>
                    </li>
                    <li><br></br>
                    <img src={require('../img/cover (2).jpg')}></img>
                    <h1>JS: This & Object Prototypes</h1>
                    <h2>Kyle Simpson</h2>
                    <a href="http://93.174.95.29/main/D38E4AAC2E1560A2E08AC0624E7FE117"><p>Download</p></a>
                    </li>
                    <li><br></br>
                    <img src={require('../img/cover (3).jpg')}></img>
                    <h1>JS: Types and Grammer</h1>
                    <h2>Kyle Simpson</h2>
                    <a href="http://93.174.95.29/main/D4007D9FEDC92548782A3AAC702C25E6"><p>Download</p></a>
                    </li>
                    <li><br></br>
                    <img src={require('../img/cover (4).jpg')}></img>
                    <h1>JS: Async and Performance</h1>
                    <h2>Kyle Simpson</h2>
                    <a href="http://93.174.95.29/main/1348AC0286AD9F57C11BD7ECE8D632B7"><p>Download</p></a>
                    </li>
                    <li><br></br>
                    <img src={require('../img/cover (5).jpg')}></img>
                    <h1>JS: ES6 and Beyond</h1>
                    <h2>Kyle Simpson</h2>
                    <a href="http://93.174.95.29/main/DC8C53BE8BA720997FC08CF17E8F50BA"><p>Download</p></a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Topic;

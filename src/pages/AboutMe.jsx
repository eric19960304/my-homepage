import '../main.css';
import '../theme.css';

const AboutMe = () => {
    return (
            <div className="w3-main">

                {/* main-content: shift it to the right by 250 pixels when the sidebar is visible */}
                <div 
                    className="main-content" 
                    style={{
                        marginLeft: "250px"
                    }}
                >
                <div className="w3-row w3-padding-64">
                    <div className="w3-twothird w3-container">

                    <h1 className="w3-text-teal">About Me</h1>
                    <br />

                    <a href="images/choco1.jpg" target="_blank"><img className="cat-image" src="images/choco1.jpg"/></a>
                    <a href="images/choco2.png" target="_blank"><img className="cat-image" src="images/choco2.png"/></a>

                    <p>- A software engineer living in Taiwan with a furry feline predator (👆).</p>
                    <p>- Grew up in Hong Kong, worked in Japan about 5 years, now in Taipei.</p>
                    <p>- Enjoy video game (LOL, Elden Ring, MH Wilds, POE 2, ETS 2, Minecraft, etc.), snowboarding and cycling.</p>
                    <br/><br/>

                    <h3 className="w3-text-teal">Work Experience</h3>
                    <ul>
                        <li>Software Engineer at <i>Google Taiwan</i> (2025 Apr - current)</li>
                        <li>Full Stack Engineer at <i>Indeed Japan</i> (2022 Jul - 2025 Feb)</li>
                        <li>Backend Developer at <i>Crypto.com</i> (2021 Sep - 2022 Jul)</li>
                        <li>Full Stack Engineer at <i>AXA Life Japan (2021 Jan - 2021 Sep)</i></li>
                        <li>Backend Engineer at <i>Yahoo! Japan</i> (2019 Oct - 2020 Dec)</li>
                        <li>Student Research Assistant at <i>The University of Hong Kong</i> (2019 Jun - 2019 Jul)</li>
                        <li>Software Engineer Intern at <i>Fano Labs</i> (2018 May - 2018 Aug)</li>
                    </ul>
                    <br />

                    <h3 className="w3-text-teal">Education</h3>
                    
                    <p>
                        <b>The University of Texas at Austin</b>
                        <ul>
                        <li>Master of Science in Computer Science 
                            (<a href="https://cdso.utexas.edu/mscs" target="_blank">online program</a>)
                        </li>
                        <li>2021 - 2024</li>
                        <li>List of courses taken</li>
                        <ul>
                            <li>Natural Language Processing</li>
                            <li>Online Learning and Optimization</li>
                            <li>Parallel Systems</li>
                            <li>Algorithms</li>
                            <li>Android Programming</li>
                            <li>Automated Logical Reasoning</li>
                            <li>Advanced Operating Systems</li>
                            <li>Implementation of Programming Languages</li>
                            <li>Deep Learning</li>
                            <li>Advanced Linear Algebra for Computation</li>
                        </ul>
                        </ul>
                    </p>
                    
                    <p>
                        <b>The University of Hong Kong</b>
                        <ul>
                        <li>Bachelor of Engineering in Computer Science</li>
                        <li>2016 - 2019</li>
                        <li>List of CS courses taken</li>
                        <ul>
                            <li>Interactive Mobile Application Design and Programming</li>
                            <li>Final Year Project</li>
                            <li>System Architecture and Distributed Computing</li>
                            <li>Artificial Intelligence</li>
                            <li>Principles of Programming Languages</li>
                            <li>Programming Technologies and Tools</li>
                            <li>Machine Learning</li>
                            <li>Design and Analysis of Algorithms</li>
                            <li>Introduction to Data Structures and Algorithms</li>
                            <li>Functional Programming</li>
                            <li>Modern Technologies on World Wide Web</li>
                            <li>Implementation, Testing and Maintenance of Software Systems</li>
                            <li>Software Engineering</li>
                            <li>Legal Aspects of Computing</li>
                            <li>Computer and Communication Networks</li>
                            <li>Principles of Operating System</li>
                            <li>Cyber Security</li>
                            <li>Discrete Mathematics</li>
                        </ul>
                        </ul>
                    </p>

                    </div>
                </div>
                </div> 
                {/* END main-content */}


                <footer id="myFooter">
                <div className="w3-container w3-theme-l2 w3-padding-32">
                </div>

                </footer>

            </div>
    );
};

export default AboutMe; 
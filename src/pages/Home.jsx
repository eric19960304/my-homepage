import "../main.css";
import "../theme.css";

const Home = () => {
  return (
    <div className="w3-main">
      {/* main-content: shift it to the right by 250 pixels when the sidebar is visible  */}
      <div
        className="main-content"
        style={{
          marginLeft: "250px",
        }}
      >
        <div className="w3-row w3-padding-64">
          <div className="w3-twothird w3-container">
            <h1 className="w3-text-teal">Hello</h1>
            <p>
              I&apos;m Eric (or Chi Ho Lau in Chinese), a full stack developer
              who enjoy crafting software for solving real world problems or
              just to have fun. <br />
              Following are some of my past/recent projects.
              <br />
              <br />
            </p>
            <br />

            <h1 className="w3-text-teal">My Projects</h1>
            <br />

            {/* CrossGPT */}
            <h3>
              <a
                href="https://github.com/eric19960304/crossgpt"
                target="_blank"
              >
                <i>CrossGPT</i>
              </a>
            </h3>
            <ul>
              <li>2024 Sep ~ current</li>
              <li>
                A multi-platform LLM chat client hosting on a raspberry pi 4B
                which is built on top of an &nbsp;
                <a href="https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web">
                  open source project
                </a>
                , allowing myself and my friend to pay much less for using
                latest models from OpenAPI, Gemini, XAi, etc.
              </li>
              <li>AWS EC2, Docker + Next.js</li>
            </ul>

            <a href="images/crossgpt/demo.png" target="_blank">
              <img
                className="showcase"
                src="images/crossgpt/demo.png"
                width="65%"
              />
            </a>
            <br />
            <br />
            <hr />

            {/* Kana Listening Test */}
            <h3>
              <a
                href="https://github.com/eric19960304/kana-listening-test"
                target="_blank"
              >
                <i>Kana Listening Test (Flutter App)</i>
              </a>
            </h3>
            <ul>
              <li>2020 Jan</li>
              <li>
                A Japanese Vocabulary Testing App that randomly draws Japanese
                Vocabulary from N5 to N1 level, providing pronunciation and
                answer checking.
              </li>
              <li>Written in Flutter for both iOS and Android</li>
              <li>
                It is now on Play Store! (not on App Store, but can compile from
                source)
              </li>
              <a
                href="https://play.google.com/store/apps/details?id=com.eric19960304.kana_listening"
                target="_blank"
              >
                <img
                  src="https://raw.githubusercontent.com/eric19960304/Kana-Listening/master/demo/google_icon.png"
                  width="15%"
                />{" "}
              </a>
              <br />
            </ul>

            <a href="images/kana/1.png" target="_blank">
              <img className="showcase" src="images/kana/1.png" width="20%" />
            </a>
            <a href="images/kana/2.png" target="_blank">
              <img className="showcase" src="images/kana/2.png" width="20%" />
            </a>
            <a href="images/kana/3.png" target="_blank">
              <img className="showcase" src="images/kana/3.png" width="20%" />
            </a>
            <br />
            <br />
            <hr />

            {/* Ride Sharing App for Hong Kong */}
            <h3>
              <i>Ride Sharing App for Hong Kong (React Native App)</i>
            </h3>
            <ul>
              <li>
                <a
                  href="https://github.com/eric19960304/FYP-Ridesharing-App"
                  target="_blank"
                >
                  FE Github link
                </a>
                /
                <a
                  href="https://github.com/eric19960304/Ridesharing-App-For-HK-Back-End"
                  target="_blank"
                >
                  BE Github link
                </a>
                /
                <a
                  href="https://eric19960304.github.io/FYP-Homepage/documents/FYP_Poster.pdf"
                  style={{
                    color: "rgb(204, 49, 49)",
                  }}
                  target="_blank"
                >
                  Poster
                </a>
                /
                <a
                  href="https://i.cs.hku.hk/fyp/2018/fyp18028/"
                  target="_blank"
                >
                  Homepage link
                </a>
              </li>
              <li>Final year project (2018 Sep - 2019 Apr)</li>
              <li>Mobile App: React Native + NativeBase + Expo</li>
              <li>
                Back-end system: Nodejs + Expressjs + Redis + MongoDB + Python
              </li>
            </ul>
            <a
              href="https://eric19960304.github.io/FYP-Homepage/documents/FYP_Poster.pdf"
              target="_blank"
            >
              <img
                className="showcase"
                src="images/fyp-homepage/1.jpg"
                width="40%"
              />
            </a>
            <a href="images/fyp-homepage/2.jpg" target="_blank">
              <img
                className="showcase"
                src="images/fyp-homepage/2.jpg"
                width="43%"
              />
            </a>

            <br />
            <br />
            <hr />

            {/* Peer Learning */}
            <h3>
              <a
                href="https://github.com/hkucsplearn/peer-learning"
                target="_blank"
              >
                <i>Peer Learning</i>
              </a>
            </h3>
            <ul>
              <li>2019 Jun - 2019 Jul</li>
              <li>
                A wiki-like platform for HKU students to collaboratively create
                and edit CS-related learning materials (code, articles, images,
                videos, etc.). I was working on this project during my 1-month
                student research assistant appointment.
              </li>
              <li>Node.js + Express.js + Vue.js + Socket.io + MongoDB</li>
              <li>
                Built on top of an open source project:
                <a href="https://docs-legacy.requarks.io/wiki" target="_blank">
                  wiki.js 1.0.117
                </a>
              </li>
              <li>
                Features:
                <ul>
                  <li>
                    Integraded with HKU Central Authetication System (HKU Portal
                    Login)
                  </li>
                  <li>
                    Allow users to style article using HTML, CSS, and markdown
                  </li>
                  <li>
                    Account manager, Article history, Image uploader, Article
                    Editor, etc.
                  </li>
                </ul>
              </li>
            </ul>
            <a href="images/peerlearning/1.jpg" target="_blank">
              <img
                className="showcase"
                src="images/peerlearning/1.jpg"
                width="40%"
              />
            </a>
            <a href="images/peerlearning/2.jpg" target="_blank">
              <img
                className="showcase"
                src="images/peerlearning/2.jpg"
                width="40%"
              />
            </a>
            <br />
            <br />
            <hr />

            {/* Spell Racer */}
            <h3>
              <a
                href="https://github.com/eric19960304/SpellRacer"
                target="_blank"
              >
                <i>Spell Racer (Android Native App)</i>
              </a>
            </h3>
            <ul>
              <li>2022 Dec</li>
              <li>
                An English learning game where you will listen to a random
                English sentence and type it as fast as you can.
              </li>
              <li>
                Kotlin + Google OAuth/TTS/Firebase/Firestore, Open Trivia APIs
              </li>
            </ul>

            <a href="images/spell_racer/1.png" target="_blank">
              <img src="images/spell_racer/1.png" width="45%" />
            </a>
            <a href="images/spell_racer/2.png" target="_blank">
              <img src="images/spell_racer/2.png" width="45%" />
            </a>
            <br />
            <br />
            <hr />

            {/* Go Go Goach */}
            <h3>
              <a
                href="https://github.com/eric19960304/go-go-coach"
                target="_blank"
              >
                <i>
                  Go Go Goach - A map-base coach finding App (Android Native
                  App)
                </i>
              </a>
            </h3>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=NzOF8m8CTpE&feature=youtu.be"
                  style={{
                    color: "rgb(204, 49, 49)",
                  }}
                  target="_blank"
                >
                  Demo Video
                </a>
              </li>
              <li>
                Mobile App Development course project in 2019 spring semester
              </li>
              <li>Java + Firebase + Android Studio</li>
              <li>Full-feature online coach booking system</li>
            </ul>
            <a href="images/gogocoach/1.png" target="_blank">
              <img
                className="showcase"
                src="images/gogocoach/1.png"
                width="20%"
              />
            </a>
            <a href="images/gogocoach/2.png" target="_blank">
              <img
                className="showcase"
                src="images/gogocoach/2.png"
                width="20%"
              />
            </a>
            <a href="images/gogocoach/3.png" target="_blank">
              <img
                className="showcase"
                src="images/gogocoach/3.png"
                width="20%"
              />
            </a>
            <a href="images/gogocoach/4.png" target="_blank">
              <img
                className="showcase"
                src="images/gogocoach/4.png"
                width="21%"
              />
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
      {/* END main-content */}

      <footer id="myFooter">
        <div className="w3-container w3-theme-l2 w3-padding-32"></div>
      </footer>
    </div>
  );
};

export default Home;

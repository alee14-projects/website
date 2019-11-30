/*
    Alee Productions Website: Website for Alee Productions
    Copyright (C) 2019 Alee

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

*/

import Layout from '../components/Layout';

const About = () => (
    <Layout>
    <div>
    <div className="jumbotron special-color bounceIn white-text">
        <h2 className="display-4">About</h2>
        <p className="lead">Alee Productions is a productions company by Andrew Lee that focuses on making videos and software.</p>
    </div>
    <div className="container">
    <h1>History</h1>
        <p>Alee Productions started in 2016. It used to be called "AleeCorp" and used to make just software but over
            time it started branching to other things like making games and videos.
            In late 2018, AleeCorp merged with Universe and some project merged but due to a community conflict during
            October in that year, Universe and AleeCorp splited. In 2019 however, AleeCorp got renamed to Alee
            Productions
            just to make the company more professional.</p>
        <h1>FAQ</h1>
        <ul className="none">
            <h4>
                <li>Q: Why did you create Alee Productions?</li>
                <li>A: Reason why I want to create this is because I want to make my own things as a passion also
                    sharing
                    it to the public and to make it as a career.</li>
                <br/>
                <li>Q: Why did you call this productions company Alee Productions?</li>
                <li>A: As you know my name is Andrew Lee and my name starts with an "A" and combine it with "Lee" you get "Alee". :)</li>
            </h4>
        </ul>
        <h1>Team</h1>
        <div className="card text-white success-color-dark mb-3" style={{maxWidth: '20rem'}}>
            <div className="card-body">
                <h5 className="card-title">Community Team (Discord)</h5>
                <p className="card-text text-white">
                    <ul>
                        <li>Travis#1777 (Admin)</li>
                        <li>jtsshieh#6424 (Admin)</li>
                        <li>The Pixel Polygon#2069 (Admin)</li>
                        <li>Inkydink#9098 (Moderator)</li>

                    </ul>
                </p>
            </div>
        </div>
        <div id="credits">
        <h1>Credits</h1>
        <p>Website is powered by NextJS, Netlify and Material Design Bootstrap.</p>
        <p>This project is open source meaning that you can help <a href="https://github.com/aleeproductions/website">contribute</a> to this website.</p>
        </div>
        </div>
    </div>
    </Layout>
  )
  
export default About;
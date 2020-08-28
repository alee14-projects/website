/*
    Alee Productions Website: Website for Alee Productions
    Copyright (C) 2020 Alee

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

import Layout from "../components/Layout";

const Index = () => (
	<Layout>
		<div className="container">
        <h1>Announcement</h1>
        <p>We is planning on rewriting the website once again.</p>
        <p>Right now the website has been mashed up into one page.</p>
        <h1>TOS</h1>
        <a href="/tos">Read the ToS here.</a>
        <h1>About</h1>
		<h1>History</h1>
				<p>Alee Productions started in 2017 under the name of AleeCorp. It used to make just software but over
					time it started branching to other things like making games and videos.
					In late 2018, AleeCorp merged with Universe and some project merged but due to a community conflict
					during
					October in that year, Universe and AleeCorp splited. In 2019 however, AleeCorp got renamed to Alee
					Productions
					just to make the company more professional.</p>
				<h1>FAQ</h1>
				<ul className="none">
					<h4>
						<li>Q: Why did you create Alee Productions?</li>
						<li>A: Reason why I want to create this is because I want to make my own things as a passion
							also
							sharing
							it to the public and to make it as a career.
						</li>
						<br/>
						<li>Q: Why the name "Alee Productions?"</li>
						<li>A: As you know my name is Andrew Lee and my name starts with an "A" and combine it with
							"Lee" you get "Alee". :)
						</li>
					</h4>
				</ul>
				<h1>Our Teams</h1>
				<div className="card text-white success-color-dark mb-3" style={{maxWidth: "20rem"}}>
					<div className="card-body">
						<h5 className="card-title">Discord</h5>
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
					<p>This website is powered by <a href="https://nextjs.org">Next.js</a>, <a href="https://netlify.com">Netlify</a> and <a href="https://mdbootstrap.com">Material Design Bootstrap.</a></p>
					<p>This website is open source. Contribute <a href="https://github.com/aleeproductions/website">here.</a></p>
				</div>
			</div>
            <div className="footer-copyright text-center py-3">
				&copy; Copyright 2017-2020, Alee Productions. Licensed with <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL-3.0</a>.
				View the <a href="#credits">credits</a> to see our stack.
			</div>
	</Layout>
);

export default Index;
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

const Navbar = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<a className="navbar-brand" href="/">
			<img src="/assets/img/ALP.png" height="30" className="d-inline-block align-top" alt="ALP Logo"/>
			&nbsp;Alee Productions</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"/>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<a className="nav-link" href="/">Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/projects">Projects</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/tos">ToS</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="https://forums.alee-productions.xyz">Forums</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="https://git.alee-productions.xyz">Gitea</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/blog">Blog</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/about">About</a>
				</li>
			</ul>
			{/* Task: Fix here */}
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" href="https://github.com/aleeproductions">
						<i className="fab fa-github"/> GitHub
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="https://discord.gg/EFhRDqG">
						<i className="fab fa-discord"/> Discord
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="https://www.reddit.com/r/aleeproductions/">
						<i className="fab fa-reddit"/> Reddit
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="https://twitter.com/aleeproductions">
						<i className="fab fa-twitter"/> Twitter
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="https://www.youtube.com/channel/UC9CIwdleH3m_PV35QqULWzA">
						<i className="fab fa-youtube"/> YouTube
					</a>
				</li>
			</ul>
			<ul className="navbar-nav">
				<li className="nav-item">
					<span className="navbar-text white-text">BETA</span>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
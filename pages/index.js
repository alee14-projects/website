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
		<div className="jumbotron special-color bounceIn white-text">
			<h2 className="display-4">Hello! Welcome to Alee Productions.</h2>
			<p className="lead">We are a very small productions company.</p>
			<div className="my-4"/>
			<a className="btn btn-green btn-lg animsition-link" href="/about" role="button">More about us</a>
		</div>
		<div className="container">
			<h1>Hello! Just note that we're reworking on this page!</h1>

		</div>
	</Layout>
);

export default Index;
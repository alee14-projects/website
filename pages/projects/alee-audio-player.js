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
import Layout from "../../components/Layout";

const AAP = () => (
    <Layout>
        <div className="jumbotron special-color bounceIn white-text">
			<h2 className="display-4">Alee Audio Player</h2>
			<p className="lead">An audio player created in Qt and C++.</p>
		</div>
		<div className="container">
			<h1>The new audio player that enhances your experience.</h1>
            <h2>Alee Audio Player is an audio player that's written from C++ and Qt. <br/> It can play, pause and stop audio.</h2><br/>

            <a className="green-text" href="https://github.com/aleeproductions/AleePlayer/releases/tag/v0.1"><h1>Download here!</h1></a>
		</div>
    </Layout>

);

export default AAP
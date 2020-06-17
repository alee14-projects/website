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

const Projects = () => (
	<Layout>
		<div className="jumbotron special-color bounceIn white-text">
			<h2 className="display-4">Projects</h2>
			<p className="lead">These are our current projects.</p>
		</div>
		<div className="container">
			{/*  Software Cards  */}

			<h2 className="m-3 text-center">Games</h2>
			<div className="row d-flex justify-content-center">
				<div className="col-md-5">
					<div className="card elegant-color">
						<div className="card-body">
							<h5 className="card-title">QuantumNet</h5>
							<p className="card-text white-text">A computer "hacking" game made in C#.</p>
							<a className="card-link green-text"
							   href="https://github.com/aleeproductions/QuantumNet"><i
								className="fab fa-github"/> GitHub</a>
						</div>
					</div>
				</div>
			</div>

            <div className="container">
            <h2 className="m-3 text-center">Software</h2>
            <div className="row d-flex justify-content-center">
            	{/*  Software Cards  */}

                <div className="col-md-5">
					<div className="card elegant-color">
						<div className="card-body">
							<h5 className="card-title">Alee Music Player</h5>
							<p className="card-text white-text">A music player created in Qt and C++.</p>
                            <a className="card-link green-text" href="/projects/alee-music-player">Learn more</a>
							<a className="card-link green-text"
							   href="https://github.com/aleeproductions/AleePlayer"><i
								className="fab fa-github"/> GitHub</a>
						</div>
					</div>
				</div>
                </div>
            </div>
			{/*
        <h2 className="m-3">Other software/games we made...</h2>
        <button className="btn green" action="button" onclick="displayRepos();">Reload Repos</button>
        <table className="table table-borderless table-dark elegant-color mt-3">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Language</th>
            </tr>
            </thead>
            <tbody id="repos-table-body">
            </tbody>
        </table>
        </div> */}
			{/* /.Software Cards  */}
			{/*  Disabled for now....
        <h1 className="mt-3 mb-2 text-center">Videos</h1>
        <ul id="yt-results" className="yt none"></ul>
         */}
			{/*
    <script type="text/javascript" data-main="/js/yt-list-videos.js" src="https://requirejs.org/docs/release/2.3.5/minified/require.js"></script>
    <script>
        // Code by cylex

        let count = 0;
        let xhttp = new XMLHttpRequest();
        function displayRepos() {
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    let data = JSON.parse(this.responseText);
                    data.forEach(() => {
                        $("#repos-table-body").append("<tr>" + [`<td><a href="${data[count].html_url}" className="green-text">${data[count].name}</a></td>`, `<td>${data[      // Code by cylex

              let count = 0;
              let xhttp = new XMLHttpRequest();
              function displayRepos() {
                  xhttp.onreadystatechange = function() {
                      if (this.readyState == 4 && this.status == 200) {
                          let data = JSON.parse(this.responseText);
                          data.forEach(() => {
                              $("#repos-table-body").append("<tr>" + [`<td><a href="${data[count].html_url}" className="green-text">${data[count].name}</a></td>`, `<td>${data[count].description}</td>`, `<td>${data[count].language}</td>`] + "</tr>");
                              count++;
                          });
                      }
                  };
              }
              xhttp.open("GET", "https://git.alee-productions.xyz/api/v1/users/aleeproductions/repos", true);
              xhttp.send();count].description}</td>`, `<td>${data[count].language}</td>`] + "</tr>");
                        count++;
                    });
                }
            };
        }
        xhttp.open("GET", "https://git.alee-productions.xyz/api/v1/users/aleeproductions/repos", true);
        xhttp.send();
    </script> */}
		</div>
	</Layout>
);

export default Projects;
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
			{/* Jumbotron */}
			<div className="container">
				{/* Carousel Wrapper*/}
				<div id="carousel-product" className="carousel slide carousel-slide" data-ride="carousel">
					{/* Indicators*/}
					<ol className="carousel-indicators">
						<li data-target="#carousel-product" data-slide-to="0" className="active"/>
						<li data-target="#carousel-product" data-slide-to="1"/>
						<li data-target="#carousel-product" data-slide-to="2"/>
					</ol>
					{/* Indicators */}
					{/* Slides */}
					<div className="carousel-inner" role="listbox">
						<div className="carousel-item active">
							<div className="view">
								<img className="d-block w-100" src="/assets/img/carousel/unicity.png"
									 alt="First slide"/>
								<div className="mask rgba-black-light"/>
							</div>
							<div className="carousel-caption">
								<h3 className="h3-responsive">Unicity</h3>
								<p>A Sims clone written in Unity3D.</p>
								<a className="btn btn-green btn-lg"
								   href="https://github.com/aleeproductions/Unicity/blob/master/README.md"
								   role="button">Learn More</a>
							</div>
						</div>
						<div className="carousel-item">
							{/* Mask color */}
							<div className="view">
								<img className="d-block w-100"
									 src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
									 alt="Second slide"/>
								<div className="mask rgba-black-light"/>
							</div>
							<div className="carousel-caption">
								<h3 className="h3-responsive">QuantumNet</h3>
								<p>A computer "hacking" game made in C#.</p>
								<a className="btn btn-green btn-lg"
								   href="https://github.com/aleeproductions/QuantumNet/blob/master/README.md"
								   role="button">Learn More</a>
							</div>
						</div>
						<div className="carousel-item">
							{/* Mask color */}
							<div className="view">
								<img className="d-block w-100"
									 src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
									 alt="Third slide"/>
								<div className="mask rgba-black-light"/>
							</div>
							<div className="carousel-caption">
								<h3 className="h3-responsive">Slight mask</h3>
								<p>Third text</p>
								<a className="btn btn-green btn-lg" href="#" role="button">Learn More</a>
							</div>
						</div>
						{/* /.Slides */}
						{/* Controls */}
						<a className="carousel-control-prev" href="#carousel-product" role="button"
						   data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"/>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#carousel-product" role="button"
						   data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"/>
							<span className="sr-only">Next</span>
						</a>
						{/* /.Controls */}
					</div>
					{/* /.Carousel Wrapper */}
				</div>
			</div>
		</div>
	</Layout>
);

export default Index;
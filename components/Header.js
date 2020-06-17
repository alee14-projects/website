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

import Head from "next/head";

const Header = (page) => (
	<Head>
		<meta charSet="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
		<meta name="description" content="We make games, videos and software."/>

		<link rel="apple-touch-icon" sizes="180x180" href="/assets/ico/apple-touch-icon.png"/>
		<link rel="icon" type="image/png" sizes="32x32" href="/assets/ico/favicon-32x32.png"/>
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/ico/favicon-16x16.png"/>
		<link rel="manifest" href="/assets/ico/site.webmanifest"/>
		<link rel="mask-icon" href="/assets/ico/safari-pinned-tab.svg" color="#5bbad5"/>
		<link rel="shortcut icon" href="/assets/ico/favicon.ico"/>
		<meta name="msapplication-TileColor" content="#da532c"/>
		<meta name="msapplication-config" content="/assets/ico/browserconfig.xml"/>
		<meta name="theme-color" content="#ffffff"/>

		<script src="https://kit.fontawesome.com/4c90505fb4.js"></script>

		<link href="/assets/css/bootstrap.min.css" rel="stylesheet"/>

		<link href="/assets/css/mdb.min.css" rel="stylesheet"/>

		<link href="https://fonts.googleapis.com/css?family=Play:400,700&display=swap" rel="stylesheet"/>

		<link rel="stylesheet" href="/assets/css/animsition.min.css"/>

		<link rel="stylesheet" href="/assets/css/style.css"/>

		<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

		{/* Fix this part */}

		<title>Alee Productions</title>

	</Head>
);

export default Header;
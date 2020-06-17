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

const Custom404 = () => (
    <Layout>
   <div class="text-center mt-3">
       <h1>404 - Not Found</h1>
       <h2 id="404message"></h2>
       <h3>Return to <a href="/" className="green-text">homepage</a>?</h3>
    </div>
    </Layout>
);

function randomtext() {
    let randomtxt = [
        'Oops, seems like that page isn\'t found!',
        'You seem to be lost!',
        'Uh oh, that page isn\'t found in our servers!',
        'Seems like you landed on this page...'
    ];
    return randomtxt[Math.floor((Math.random() * 4.00))];
}

//document.getElementById("404message").innerHTML = randomtext();
export default Custom404

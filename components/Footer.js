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

const Footer = () => (
    <div>
    <footer className="page-footer mt-5 font-small green">
        <div className="footer-copyright text-center py-3">&copy; Copyright 2016-2019, Alee Productions. Licensed with <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL-3.0</a> and view <a href="/about#credits">credits</a> to see how this website is built.</div>
    </footer>
    <div className="alert alert-warning fixed-bottom m-0 alert-dismissible fade show" role="alert">
            Please note that this website is under active development and bugs may occur.<br/>If there's any, report it to the <a href="https://github.com/aleeproductions/website">GitHub</a> repo.
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    </div>
)

export default Footer;
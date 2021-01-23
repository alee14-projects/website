/*
    Alee Productions Website: Website for Alee Productions
    Copyright (C) 2020 Alee

	DO NOT MODIFY THE TOS WITHOUT ALEE'S PERMISSION.

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

const TOS = () => (
	<Layout>
		<div>
			<div className="container">
				<div id="top"/>
				<h1 className="text-center display-5 mt-3">Alee Productions Terms of Service</h1>
				<p>These terms of service are set in place to ensure you have a great time being part of our community/services.</p>
				<div id="community-guidelines">
				<h1>Community Guidelines</h1>
				<p>These are the community guidelines. They are meant to set the foundations of this community.</p>
				<ul>
					<li>Use common sense.</li>
					<li>No spamming. Any spam will result in an official warning.</li>
					<li>No advertisements/giveaways of any kind, unless for a specific purpose.</li>
					<li>Respect others.</li>
					<li>No backseat moderating (enforcing the rules to other users).</li>
					<li>Refrain from asking for staff.</li>
					<li>Cursing is allowed within reason. However, racial slurs will result in severe punishment.</li>
					<li>Accusations are not tolerated. Spreading any accusations will result in an investigation from all staff, which may lead to temporary or permanent termination from our services.</li>
					<li>Do not argue with or threaten the staff.</li>
					<li>Absolutely no blackmailing, attacking, cyberbullying, or threatening of any members.</li>
					<li>No NSFW content. This include links and pictures.</li>
					<li>Organized raids are not allowed.</li>
					<li>Only one account per person at a time.</li>
					<li>Any malicious content (i.e. viruses, malware, adware, etc) is strictly forbidden.</li>
					<li>Any back talk (i.e, talking negatively on a member from our community/services) is not allowed. This includes exclusive places in the community, not DMs.</li>
				</ul>
				<p>If these guidelines were to be broken several times, action will be taken.</p>
				</div>
				<div id="alp-policies">
					<h1>Alee Productions Policies</h1>
					<div id="coppa">
						<h2>COPPA Policy</h2>
						<p>In order to comply with the Children’s Online Privacy Protection Act (COPPA), you must be at least 13 years of age to use these services. You will be banned if found to be under 13 years of age.</p>
					</div>
					<div id="cityverse">
						<h2>Cityverse Policy</h2>
						<p>These rules apply to the Cityverse server</p>
						<ul>
							<li>Usage of hacked clients (including - but not limited to - Wurst, Wolfram, Sigma, etc.) is strictly prohibited*</li>
							<li>Griefing is not allowed*</li>
							<li>Respect everyone</li>
						</ul>
						<p>If you are found to be in violation of these rules, you may receive a temporary or permanent ban. If you have been banned, and are found playing on an alt, you may be subject to an IP ban.</p>
						<p>* If a certain server allows these actions, then these policies will not apply.</p>
					</div>
				</div>
				<div id="discord-policies">
					<h1>Discord Policies</h1>
					<p>If you are part of our discord server, we have set policies that you must follow.</p>
					<div id="logging">
						<h2>Logging</h2>
						<p>The following will be logged and stored by our bots:</p>
						<ul>
							<li>Deleted Messages</li>
							<li>Edited Messages</li>
							<li>Your user ID</li>
							<li>Members joining and leaving</li>
						</ul>
						<p>If you do not agree to the logging of these items, and wish to opt out, you must leave the community.</p>
					</div>
					<div id="nickname">
						<h2>Nickname</h2>
						<p>We enforce this nickname policy to keep a clean, friendly community.</p>
						<p>To request a nickname change, use the command <code className="green-text">am:nick [nickname]</code>. Our staff will review your request and approve it accordingly. This system is set in place so that the community is a nice place to be for everyone. To have your nickname approved, it must comply with the following guidelines:</p>
						<ul>
							<li>No offensive words</li>
							<li>No symbols</li>
							<li>Nicknames must not be attention-grabbing (i.e. getting to the top of the list by using a symbol)</li>
						</ul>
						<p>Usernames or nickname requests found to be in violation of these guidelines will be subject to:</p>
						<ul>
							<li>Censoring your nickname/username</li>
							<li>Ignoring the nickname change from AstralMod</li>
						</ul>
					</div>
				</div>
				<p>Any staff abusing their powers should be reported to Alee immediately.</p>
				<p>Last updated: January 23rd, 2021</p>
				<a href="#top" className="green-text">Back to top</a>
			</div>
		</div>
	</Layout>
);

export default TOS;
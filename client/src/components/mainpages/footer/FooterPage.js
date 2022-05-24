import React from 'react'
import { Link, Route } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebookF,
	faInstagram,
	faTwitter,
	faPinterestP
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { HashLink as Link } from 'react-router-hash-link';

// Font Awesome icons
const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const pinterestIcon = <FontAwesomeIcon icon={faPinterestP} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;



function FooterPage() {
    return (
        <div>
				<div className="footer">
					<div className="social">
						<ul>
							<li className="heading">Connect</li>
							<li>
								<a href="https://www.facebook.com">{facebookIcon} Facebook</a>
							</li>
							<li>
								<a href="https://www.instagram.com">{instagramIcon} Instagram</a>
							</li>
							<li>
								<a href="https://twitter.com">{twitterIcon} Twitter</a>
							</li>
							<li>
								<a href="https://www.pinterest.com">{pinterestIcon} Pinterest</a>
							</li>
						</ul>
					</div>
					<div className="location">
						<ul>
							<li className="heading">Visit</li>
							<li>
								<div className="address">
									<p>Gadget Go</p>
									<p>Kabanbay Batyr Street</p>
									<p>Nur-Sultan, NS 050001</p>
									<p>Kazakhstan</p>
								</div>
							</li>
						</ul>
					</div>
					<div className="shop-links">
						<ul>
							<li className="heading"> Questions?</li>
							<li>
								<Link exact to="/home">
									About
								</Link>
							</li>
							
						</ul>
					</div>
				</div>

				<div className="github">
					<p>
						Built with <span className="love-ico">{heartIcon}</span>{' '}
						by{' '}
						<a
							href="https://jennamichaels.dev"
							target="_blank"
							rel="noopener noreferrer"
						>
							GoTeam
						</a>
						.
					</p>
				</div>
			</div>
    )
}

export default FooterPage
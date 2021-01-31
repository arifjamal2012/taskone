import React from 'react';
import './styles.css';
import Logo from '../assets/hero1.jpeg';
import Arrow from '../assets/arrownew2.png';
import Video from '../assets/robin.mp4';
import ReactPlayer from 'react-player';

const Hero = () => {
	return (
		<>
			<div className='hero'>
				<div className='hero_section'>
					<span className='tag'>Esperanto</span>

					<p className='tag_para'>
						My year long journey around the world to shine a light on creatives
						from 16 different countries.
					</p>
					<p className='tag_para2'>
						OPEN CASE STUDY
						<span>
							<img
								style={{
									width: '28px',
									height: '15px',
									margin: '-3px 10px',
								}}
								src={Arrow}
								alt='arrow'
							/>
						</span>
					</p>
					<div className='video_player'>
						<ReactPlayer
							width={'220px'}
							height={'130px'}
							border='none'
							playing={true}
							controls
							url={Video}
						/>
					</div>
				</div>

				<div className='image'>
					<div className='logo'>
						<img src={Logo} alt='hero_image' />
					</div>
					<div className='icon'>
						<div className='vl'></div>
						<div className='vl'></div>
						<div className='vl'></div>
						<div className='vl'></div>
						<div className='vl'></div>
						<div className='vl'></div>
						<div className='vl'></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import medal from '../../assets/images/medal-flat.png';
import profile from '../../assets/images/profile.jpg';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1><b>Bloggers Diary</b></h1>
				<nav>
					<Link activeClassName={style.active} href="/article"><b>Article</b></Link>					
					<Link activeClassName={style.active} href="/"><b>Home</b></Link>
					<Link activeClassName={style.active} href="/dashboard"><b>DashBoard</b></Link>
					<Link activeClassName={style.active} href="/profile"><b>Profile</b></Link>
					<a class={style.points}><img src={medal} style={{ width: '20px', position: 'relative', paddingRight: '5px',
    top: '6px'}}/><b>234 Points</b></a>
						<a class={style.user}><img src={profile} style={{ width: '20px', position: 'relative', borderRadius: '10px', paddingRight: '8px',
	    top: '3px'}}/><b>Ankit Chauhan</b></a>
				</nav>
			</header>
		);
	}
}

import { h, Component } from 'preact';
import style from './style';
import Follower from '../../assets/images/followers.png';
import medalImage from '../../assets/images/medal-flat.png';
import profile from '../../assets/images/profile.jpg';
import Love from 'react-icons/fa/heart';
import Users from 'react-icons/fa/user-plus';
import File from 'react-icons/fa/file';
import Blog from 'react-icons/fa/pencil';
import Hand from 'react-icons/fa/hand-spock-o';
import blue from '../../assets/images/blue.jpg';
import Circle from 'react-icons/fa/circle';
export default class Profile extends Component {
	// state = {
	// 	time: Date.now(),
	// 	count: 10
	// };
	//
	// // gets called when this route is navigated to
	// componentDidMount() {
	// 	// start a timer for the clock:
	// 	this.timer = setInterval(this.updateTime, 1000);
	// }
	//
	// // gets called just before navigating away from the route
	// componentWillUnmount() {
	// 	clearInterval(this.timer);
	// }
	//
	// // update the current time
	// updateTime = () => {
	// 	this.setState({ time: Date.now() });
	// };
	//
	// increment = () => {
	// 	this.setState({ count: this.state.count+1 });
	// };
	//
	// // Note: `user` comes from the URL, courtesy of our router
	// render({ user }, { time, count }) {
	render() {
		return (
			// <div class={style.profile}>
			// 	<h1>Profile: {user}</h1>
			// 	<p>This is the user profile for a user named { user }.</p>
			//
			// 	<div>Current time: {new Date(time).toLocaleString()}</div>
			//
			// 	<p>
			// 		<button onClick={this.increment}>Click Me</button>
			// 		{' '}
			// 		Clicked {count} times.
			// 	</p>
			// </div>
			<div class="container">
				<div class={style.paddingAtTop}>
					<h1 class={style.dashBoardText}>DashBoard</h1>
					<div class="row">
						<div class="col-md-6">
							<div class={style.card}>
								<div class="row">
									<div class="col-md-3">
										<img src={profile} class={style.imgResponsive} />
									</div>
									<div class="col-md-9">
										<p style={{     fontSize: '138%',
    letterSpacing: '7px'}}>ANKIT CHAUHAN</p>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<Love style={{ fontSize: '30px', color: '#f5885f' }} /><b class={style.blockPadding}> 544 </b>
										<Users style={{ fontSize: '30px', color: '#80c7ff' }} /><b class={style.blockPadding}> 544 </b>
										<File style={{ fontSize: '30px', color: '#f9c374' }} /><b class={style.blockPadding}> 544 </b>
									</div>
								</div>
							</div>
							<div class={style.card}>
								<div class="row">
									<div class="col-md-6">
										<div class={style.home}>
											<img src={medalImage} class={style.medalResponsive} />
											<p class={style.pointNumbers}>234 Points</p>
										</div>
									</div>
									<div class="col-md-6">
										<Blog style={{ fontSize: '60px' }}/><br />
										<b>Write a Story</b><br /><br />
										<Hand style={{ fontSize: '40px' }} />
										<p>Refer and Earn</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class={style.card}>
								<h3>FOLLOWERS</h3>
								<hr />
								<div class="row">
									<div class="col-md-4">
										<img src={Follower} class={style.imgRespon} /><br />
										User1
									</div>
									<div class="col-md-4">
										<img src={Follower} class={style.imgRespon}/><br />
										User2
									</div>
									<div class="col-md-4">
										<img src={Follower} class={style.imgRespon} /><br />
										User3
									</div>
								</div><br />
								<div class="row">
									<div class="col-md-4">
										<img src={Follower} class={style.imgRespon} /><br />
										User1
									</div>
									<div class="col-md-4">
										<img src={Follower} class={style.imgRespon}/><br />
										User2
									</div>
									<div class="col-md-4">
										<img src={Follower} class={style.imgRespon} /><br />
										User3
									</div>
								</div><br />
								<p>SEE ALL FOLLOWERS</p>
							</div>
						</div>
					</div><br />
					<div class="row">
						<div class="col-md-7">
							<h2>Recent Posts</h2>
							<div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${blue})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p>

                    </div>
                  </div>
                </div>
              </div><br />
							<div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${blue})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p>

                    </div>
                  </div>
                </div>
              </div><br />
							<div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${blue})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p>

                    </div>
                  </div>
                </div>
              </div><br />
						</div>
						<div class="col-md-5">
							<div class={style.card}>
								<h2>LIVE FEED</h2><hr />
								<div class={style.allignleft}>
									<Circle style={{ color: '#ab54bc' }} /> <b>Ankit Chauhan</b> wrote the <b>story</b> on the topic <b>Travel</b>.
									<hr />
									<Circle style={{ color: '#ab54bc' }} /> <b>Harshit Chauhan</b> wrote the <b>story</b> on the topic <b>Travel</b>.
									<hr />
									<Circle style={{ color: '#ab54bc' }} /> <b>Abhinav Chauhan</b> wrote the <b>story</b> on the topic <b>Travel</b>.
									<hr />
									<Circle style={{ color: '#ab54bc' }} /> <b>Ayush Chauhan</b> wrote the <b>story</b> on the topic <b>Travel</b>.
									<hr />
									<Circle style={{ color: '#ab54bc' }} /> <b>Ankur Chauhan</b> wrote the <b>story</b> on the topic <b>Travel</b>.
									<hr />
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

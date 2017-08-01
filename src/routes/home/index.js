import { h, Component } from 'preact';
import style from './style';
import profileImage from '../../assets/images/profile.jpg';
import medalImage from '../../assets/images/medal-flat.png';
import Love from 'react-icons/fa/heart';
import Users from 'react-icons/fa/user-plus';
import File from 'react-icons/fa/file';
import blue from '../../assets/images/blue.jpg';

export default class Home extends Component {
	render() {
		return (
			<div class="container">
				<div class={style.paddingAtTop}>
					<div class="row">
						<div class="col-md-8">
							<div class="row">
								<div class="col-md-4">
									<div class={style.borderOuter}>
										<img src={profileImage} class={style.imageResponsive} />
									</div>
								</div>
								<div class="col-md-8">
									<p class={style.lightText}>Ankit Chauhan</p>
									<p> I am Developer, and a cool Human Being. </p>
									<Love style={{ fontSize: '30px', color: '#f5885f' }} /><b class={style.blockPadding}> 544 </b>
									<Users style={{ fontSize: '30px', color: '#80c7ff' }} /><b class={style.blockPadding}> 1200 </b>
									<File style={{fontSize: '30px', color: '#f9c374' }} /><b class={style.blockPadding}> 24 </b><br /><br />
									<b class={style.followButton}>Follow</b>

								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class={style.home}>
								<img src={medalImage} class={style.medalResponsive} />
								<p class={style.pointNumbers}>234 Points</p>
							</div>
						</div>
					</div>
					<hr />

				</div>
				<div class="container">
					<h2>Blogs Posted</h2>
					<div class="row">
						<div class="col-md-6">
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
              </div>
						</div>
						<div className="col-md-6">
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
              </div>
						</div>
					</div>
					<br />
					<div class="row">
						<div class="col-md-6">
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
              </div>
						</div>
						<div className="col-md-6">
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
              </div>
						</div>
					</div><br />
					<div class="row">
						<div class="col-md-6">
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
              </div>
						</div>
						<div className="col-md-6">
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
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

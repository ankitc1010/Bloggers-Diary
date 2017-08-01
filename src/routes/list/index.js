import { h, Component } from 'preact';
import style from './style';
import header from '../../assets/images/header.png';
import background from '../../assets/images/blogbackground.jpg';
import profile from '../../assets/images/profile.jpg';
import anotherpattern from '../../assets/images/anotherpattern.jpg';
import blue from '../../assets/images/blue.jpg';

export default class Home extends Component {
	render() {
		return (
      <div class={style.paddingAtTop}>
        <div class="container">
          <div class="row">
            <div class="col-md-12" style={{ background: `url(${header})`, backgroundPosition: 'center bottom' }}>
              <div class="row">
                <div class="col-md-5">
                  <div class={style.padding}>
                    <h1>Let your Voice be Heard.</h1>
                    <p>Bloggers Diary is open platform for writers and ideas from across the world. Share your inner self freely and get earned by it. Refer it your friends and begin the revolution of expression.
                    </p>
                    <b class={style.getStarted}>Get Started</b><b class={style.learnMore}>Learn More</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <h2>Travel</h2>
            </div>
            <div class="col-md-8"></div>
            <div class="col-md-2">
              <b>More ></b>
            </div>
          </div><hr />
          <div class="row">
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${background})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${background})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${background})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${background})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <h2>Book Reading</h2>
            </div>
            <div class="col-md-8"></div>
            <div class="col-md-2">
              <b>More ></b>
            </div>
          </div><hr />
          <div class="row">
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${anotherpattern})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${anotherpattern})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${anotherpattern})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${anotherpattern})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <h2>Travel</h2>
            </div>
            <div class="col-md-8"></div>
            <div class="col-md-2">
              <b>More ></b>
            </div>
          </div><hr />
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
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${blue})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${blue})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${blue})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <h2>Travel</h2>
            </div>
            <div class="col-md-8"></div>
            <div class="col-md-2">
              <b>More ></b>
            </div>
          </div><hr />
          <div class="row">
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${background})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${background})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${background})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class={style.card}>
                <div class="row">
                  <div class="col-md-4" style={{background: `url(${background})`}}>

                  </div>
                  <div class="col-md-8">
                    <div class={style.paddingforDescription}>
                      <h3>Travel To Coorg</h3>
                      <p class={style.paragraphMargin}>Embrace your busy life by using distractions as a way to trigger a positive pattern interruption.
 It all began ...</p><div class="row">
    <div class="col-md-2">
      <img src={profile} style={{ width:'50px', borderRadius: '100px' }}/>
    </div>
    <div class="col-md-10">
      <div class={style.allignleft}>
      <p>Ankit Chauhan</p><p class={style.durationlight}>23min Read</p>
    </div>
    </div>
 </div>

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

import { h, Component } from 'preact'
import './style.less';
import image from '../../assets/images/anotherpattern.jpg';
export default class Article extends Component {
  render () {
    return (
      <div class='container' style={{width: '100%'}}>
        <div class='row'>
          <div class='col-md-6' style={{height: '100vh', padding:0, margin:0, background: `url(${image})`}}>
            <div style={{position:'absolute', top:'30vh', width: '100%', background: 'white'}}>
              <center><h1>Title</h1></center>
            </div>
            <div class='container' style={{position:'absolute', top:'45vh', width: '100%'}}>
              <div class='row'>
                <div class='col-md-6'>
                  <center><button style={{boxShadow: '0 0 0 0 #3dc21b', backgroundColor: '#44c767', padding: '20px', fontWeight: 'bold', color: 'white'}}>Like</button></center>
                </div>
                <div class='col-md-6'>
                  <center><button style={{boxShadow: '0 0 0 0 #3dc21b', backgroundColor: '#c0262f', padding: '20px', fontWeight: 'bold', color: 'white'}}>Dislike</button></center>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-6' style={{height: '100vh', padding:'10px', margin:0}}>
            <hr />
            <hr />
            <hr />

              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"<br /><br />
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"<br />
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              
          </div>
        </div>
      </div>
    )
  }
}

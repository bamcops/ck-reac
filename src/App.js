
import { Button,Card, CardImg} from 'react-bootstrap';
import './App.css';

function App() {
  var name="World"
  return (
    <div className="App">
     <h1>Hello {name}</h1>
{/* <Button>click me</Button> */}
     {/* <h2>this is the test for your life </h2>  */}
     <div className='Card'> 
     <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>React to</Card.Title>
    <CardImg src="http://image.over-blog.com/Z-wTOc3dBi5o76-HJDgvgYoyZ4E=/filters:no_upscale()/image%2F1388797%2F20201002%2Fob_c5fdc3_gates-of-hell.jpg" width="120px" height="300px"/>
    <Card.Subtitle className="mb-2 text-muted"> Life</Card.Subtitle>
    <Card.Text>
      Hello , comment vivre ca vie dans ce monde de fou !
    </Card.Text>
   
    <Button>Click Here</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>React to</Card.Title>
    <CardImg src="https://us.123rf.com/450wm/theayvan/theayvan1601/theayvan160100010/51326087-les-portes-du-paradis-dans-les-nuages.jpg?ver=6" width="120px" height="300px"/>
    <Card.Subtitle className="mb-2 text-muted"> Life</Card.Subtitle>
    <Card.Text>
      Hello , comment vivre ca vie dans ce monde de fou !
    </Card.Text>
   
    <Button>Click Here</Button>
  </Card.Body>
</Card>

 </div>
</div>
  );
}

export default App;

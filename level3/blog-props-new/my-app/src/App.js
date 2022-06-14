import './App.css';
import Card from './Card'
import data from './data.js'


const cards = data.map(item => {
  return (
      <Card
          key={item.id}
          item={item}
      />
  )
}) 

export default function App() {
  
 
  return (
    <div className='backdrop'>
      <div className='masterDiv'>
        <div className="App">
      
            <div className='navbar'>
            <div>
            <a><strong>Start Bootstrap</strong></a>
            </div>
            <div className='homeLinks'>
            <strong><a>HOME</a></strong>
            <strong><a>ABOUT</a></strong>
            <strong><a>SAMPLE POST</a></strong>
            <strong><a>CONTACT</a></strong>
            
            </div>
            </div>  
            <div className='CleanBlog'>
              <h1 className='cleanText'>Clean Blog</h1>
              <p>A Blog Theme by Start Bootstrap</p>
            </div>
          </div>
            <div className='cardDiv'>
                  {cards}
                  
            </div>
             
        </div>
        <footer>
          <div className='button'><button className='PostsButton'><strong>OLDER POSTS</strong></button></div>
          <hr/>
        </footer>
    </div>
    
  );
}
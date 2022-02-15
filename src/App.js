
import './App.css';
import data from  './data'
import 'font-awesome/css/font-awesome.min.css'

function App() {

  const {cake, cupcakes} = data

  return (
    <main>
      <div className="hero">
        <div className="logo">
          THE <br/>
          PERPETUAL <br/>
          HUNGER
        </div>
      </div>
      <section className="mission">
        <h3>SMALL BATCH, HAND CRAFTED, FEEL GOOD EATS.</h3>
        <h4>SIMPLE, FRESH, AND DELICIOUS</h4>
        <p>USING THE FINEST LOCAL AND ORGANIC INGREDIENTS SINCE 2012.</p>
        <div className="social-media">
          <div className="insta"> <i className='fa fa-instagram'></i></div>
          <div className="twitter"><i className='fa fa-twitter'></i></div>
          <div className="email"><i className='fa fa-envelope'></i></div>
          
        </div>
      </section>
      <section className="goods">
        <h2>THE GOODS</h2>
        <div className="cake">
  
          <div className="cake-wrapper">
            <h3>CAKE</h3>
            {cake.map((el, index )=> {
              const {name, description} = el
              return ( 
                <div key={index} className="item">
                  <h4 className="name">{name}</h4>
                  <p className="description">{description}</p>
                </div>                
              )
            })}
            <p className='disclaimer'>We ask for a 5 day advance notice for all cake orders.  Sizes include
              ​​6" (feeds 4-6) & 8" (feeds 6-8).</p> 
            <p className='disclaimer seasonal'> ​*SEASONAL </p>
          </div>
          
          <div className="cake-wrapper cupcakes">
            <h3>CUPCAKES</h3>
            {cupcakes.map((el, index )=> {
              const {name, description} = el
              return ( 
                <div key={index} className="item">
                  <h4 className="name">{name}</h4>
                  <p className="description">{description}</p>
                </div>                
              )
            })}
            <p className='disclaimer'>We ask for a 5 day advance notice for all cupcake orders, with a minimum order of one dozen. 
            Flavor mixing is not available for orders less than two dozen.  
            Half dozen orders are not available.</p> 
            <p className='disclaimer seasonal'> ​*SEASONAL </p>
          </div>
        </div>
      </section>


    </main>
  );
}

export default App;

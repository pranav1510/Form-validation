import './App.css';









function App() {

  

  return (
    <div className='outline'>
      <div className="container">
        <header>Enter your Personal Details</header>
        <hr/>
        <div className='inner'>
          <div className='fields'>
            <label>First Name:</label>
            <input 
            placeholder='Enter First Name'
            />
          </div>
          <div className='fields'>
            <label>Last Name:</label>
            <input 
            placeholder='Enter Last Name'
            />
          </div>
          <div className='fields'>
            <label>Phone</label>
            <input 
            />
          </div>
          <div className='fields'>
            <label>Email</label>
            <input 
            placeholder='abc@gmail.com' 
            />
          </div>
          <div className='fields'>
            <label>Address</label>
            <input
            />
          </div>
          <div className='fields'>
            <label>City</label>
            <input
            />
          </div>
          <div className='fields'>
            <label>State</label>
            <input 
            />
          </div>
          <div className='fields'>
            <label>Postal</label>
            <input 
            />
          </div>          
        </div>
        <div className='submission'>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;

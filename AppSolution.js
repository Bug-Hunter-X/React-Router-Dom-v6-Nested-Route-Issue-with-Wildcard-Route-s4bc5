```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactContainer />}>
          <Route path=":contactId" element={<ContactDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }
function About() { return <div>About</div> }

function ContactContainer() {
  let params = useParams();
  return (
    <div>
      {params.contactId ? <p>Contact Details for ID: {params.contactId}</p> : <p>Contact Us</p>}
      <Outlet />
    </div>
  );
}

function ContactDetails() { return <div>Contact Details</div>; }

export default App;
```
import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';
import { Link } from 'react-router-dom';


const Cards = () => {
  return (
    <>
      <div className="card_container">
        <div className="first_row ">
            <div className="card">
            <Card>
      <Card.Body>
        <Card.Title style={{fontSize:'1.2em',}}>Know Us</Card.Title> 
        <Card.Text style={{fontSize:'.9em',}}>
        Discover the difference that sets us apart - explore what we offer and unlock a world of possibilities tailored just for you.
        </Card.Text>
        <Card.Link href="/about">Click here to know more</Card.Link>
      </Card.Body>
    </Card>
            </div>
            <div className="card">
            <Card>
      <Card.Body>
        <Card.Title style={{fontSize:'1.2em',}}>Our Services</Card.Title> 
        <Card.Text style={{fontSize:'.9em',}}>
        Experience the transformative power of our services - unlock your potential and achieve your goals with us by your side.
        </Card.Text>
        <Card.Link href="/services">Click here to know more</Card.Link>
      </Card.Body>
    </Card>
            </div>
        </div>
        <div className="second_row ">
        <div className="card">
            <Card>
      <Card.Body>
        <Card.Title style={{fontSize:'1.2em',}}>Connect & Reach Us</Card.Title> 
        <Card.Text style={{fontSize:'.9em',}}>
        Take the first step towards realizing your dreams - reach out to us today and let's make them a reality together.
        </Card.Text>
        <Card.Link href="/contactus">Click here to connect with us</Card.Link>
      </Card.Body>
    </Card>
            </div>
            <div className="card">
            <Card>
      <Card.Body>
        <Card.Title style={{fontSize:'1.2em',}}>Hire Us today!!!</Card.Title> 
        <Card.Text style={{fontSize:'.9em',}}>
        Elevate your experience - entrust us with your needs and let our expertise turn your vision into exceptional results.
        </Card.Text>
        <Card.Link href="/appointus">Click here to Hire US</Card.Link>
      </Card.Body>
    </Card>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cards

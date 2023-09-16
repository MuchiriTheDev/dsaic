import React, { useState } from 'react';
import dummyData from './dummyData.json';
import prevData from './prevData.json'
import Navbar from "../Navbar/Navbar";
import './events.css';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Events = () => {
  const [sortedupcEvents, setSortedUpcEvents] = useState([...dummyData]);
  const [sortedprevEvents, setSortedPrevEvents] = useState([...prevData]);
  const [searchupcQuery, setSearchUpcQuery] = useState('');
  const [searchprevQuery, setSearchPrevQuery] = useState('');

  const highlightedEvent = dummyData[0];

  const handleUpcSort = (order) => {
    const sortedupc = [...sortedupcEvents];

    if (order === 'asc') {
      sortedupc.sort((a, b) => a.date.localeCompare(b.date));
    } else if (order === 'desc') {
      sortedupc.sort((a, b) => b.date.localeCompare(a.date));
    }

    setSortedUpcEvents(sortedupc);
  };

  const handlePrevSort = (order) => {
    const sortedprev = [...sortedprevEvents]

    if (order === 'asc') {
      sortedprev.sort((a, b) => a.date.localeCompare(b.date));
    } else if (order === 'desc') {
      sortedprev.sort((a, b) => b.date.localeCompare(a.date));
    }

    setSortedPrevEvents(sortedprev);
  };



  const handleUpcSearch = (query) => {
    setSearchUpcQuery(query);
    const filtered = dummyData.filter(event =>
      event.title.toLowerCase().includes(query.toLowerCase())
    );

    setSortedUpcEvents(filtered);
  };

  const handlePrevSearch = (query) => {
    setSearchPrevQuery(query);
    const filtered = prevData.filter(event =>
      event.title.toLowerCase().includes(query.toLowerCase())
    );

    setSortedPrevEvents(filtered);
  };

  return (
    <div className="events-events">
      <div className="events-container">
        <Navbar />
        {/* Highlighted Event */}
        <div key={highlightedEvent.id} className="event-card-highlighted">
          <img src={highlightedEvent.imageUrl} alt={`Event ${highlightedEvent.id}`} className="highlighted-event-image" />
          <div className='inner-desc-card'>
            <h2>{highlightedEvent.title}</h2>
            <p>{highlightedEvent.description}
            </p>
            <Link to="/rsvp">
              <button className="rsvp-button">
                <span>RSVP</span>
              </button>
            </Link>
          </div>
        </div>

        <div className='search-sort'>
          {/* Search bar */}
          <div className="search-tab">
            <input
              type="text"
              placeholder="Search events..."
              value={searchupcQuery}
              onChange={(e) => handleUpcSearch(e.target.value)}
            />
          </div>

          {/* Sort tab */}
          <div className="sort-tab">
            <button onClick={() => handleUpcSort('asc')}>
              <span>SORT</span>
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className='events-card-events'>
          <h1>Upcoming Events</h1>
        <div className="upcoming-events">
          {sortedupcEvents.map((event) => (
            <div key={event.id} className="event-card">
              <Link to="/Event">
                <img src={event.imageUrl} alt={`Event ${event.id}`} className="event-card-image" />
              </Link>
              <p>{event.title}</p>
              <p>{event.date}</p>
              <Link to="/rsvp">
                <button className="rsvp-other-button">
                  <span>RSVP</span>
                </button>
              </Link>
            </div>
          ))}
          </div>
          <h1>Previous Events</h1>
        <div className='previous-events'>
          {sortedprevEvents.map((event) => (
            <div key={event.id} className="event-card">
              <Link to="/Event">
                <img src={event.imageUrl} alt={`Event ${event.id}`} className="event-card-image" />
              </Link>
              <p>{event.title}</p>
              <p>{event.date}</p>
              <Link to="/rsvp">
                <button className="rsvp-other-button">
                  <span>RSVP</span>
                </button>
              </Link>
            </div>
          ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
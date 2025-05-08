import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Client.css';
import sandImg from '../../assets/sand.png';
import cementImg from '../../assets/cement.png';
import waterImg from '../../assets/water.png';
import stoneImg from '../../assets/stone.png';


const Homeclient = () => {
  const username = localStorage.getItem('clientName') || 'Guest';
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [feedbackProgress, setFeedbackProgress] = useState(0);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for your ${rating} star feedback!\nComment: ${comment}`);
    setRating('');
    setComment('');
    setFeedbackProgress(0);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    setFeedbackProgress((e.target.value / 5) * 100); // Update progress bar based on rating
  };

  return (
    <div className="client-home">
      <header className="client-navbar">
        <div className="logo">TKS Client</div>
        <nav className="client-nav">
          <Link to="/client/placeorder" className="nav-link">Place Order</Link>
          <Link to="/client/orders" className="nav-link">My Orders</Link>
        </nav>
        <div className="nav-user">
          <span>{username}</span>
          <button onClick={() => window.location.href = '/'} className="logout-btn">Log Out</button>
        </div>
      </header>

      <div className="hero-section">
        <h2>Welcome, {username}!</h2>
        <p>Manage your orders and discover our top-quality construction materials.</p>
      </div>

      <section className="about-us">
        <h3>About Us</h3>
        <p>
          TKS is your trusted partner for quality construction materials. We provide timely delivery,
          dependable service, and unmatched material quality to help bring your projects to life.
        </p>
      </section>

      <section className="services">
        <h3>What We Provide</h3>
        <div className="service-cards">
          <div className="card">
          <img src={sandImg} alt="Sand" />
            <h4>Sand</h4>
            <p>Quality sand for your construction needs.</p>
          </div>
          <div className="card">
          <img src={cementImg} alt="Cement" />
            <h4>Cement</h4>
            <p>Reliable and durable cement for every project.</p>
          </div>
          <div className="card">
          <img src={waterImg} alt="Water" />
            <h4>Water</h4>
            <p>Freshwater delivery for your construction site.</p>
          </div>
          <div className="card">
          <img src={stoneImg} alt="Stone" />
            <h4>Gravels</h4>
            <p>Top-grade gravels for your construction projects.</p>
          </div>
        </div>
      </section>

      <section className="feedback-section">
        <h3>We Value Your Feedback</h3>
        <form onSubmit={handleFeedbackSubmit}>
          <label>
            Rating:
            <select value={rating} onChange={handleRatingChange} required>
              <option value="">--Choose--</option>
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>{r} Star{r > 1 && 's'}</option>
              ))}
            </select>
          </label>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${feedbackProgress}%` }}></div>
          </div>
          <textarea
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button type="submit">Submit Feedback</button>
        </form>
      </section>

      <footer className="client-footer">
        <p>© 2025 TKS Construction Services | Built with ❤️</p>
      </footer>
    </div>
  );
};

export default Homeclient;

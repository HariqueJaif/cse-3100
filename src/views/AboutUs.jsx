import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div
        className="bg-light p-4 shadow rounded"
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <h2 className="text-center mb-4">About Us</h2>
        <p className="text-justify">
          Welcome to <strong>Purrfect Adoption</strong>! Our mission is to find loving homes
          for adorable cats. We are a dedicated team of animal lovers committed to making
          the adoption process smooth and joyful. Join us in giving our furry friends the
          love and care they deserve!
        </p>
        <div className="mt-4">
          <h4>Our Values:</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="bi bi-heart-fill text-danger"></i> Compassion for all animals
            </li>
            <li className="list-group-item">
              <i className="bi bi-shield-check text-success"></i> Transparency in the adoption process
            </li>
            <li className="list-group-item">
              <i className="bi bi-people text-primary"></i> Promoting responsible pet ownership
            </li>
          </ul>
        </div>
        <p className="mt-4 text-center">
          Thank you for visiting our website and supporting our cause! Together, we can make
          a difference in the lives of our furry friends.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

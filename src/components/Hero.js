import React from 'react';

const Hero = ({ title, subtitle, children, className = '', accent = false }) => {
  return (
    <section className={`hero ${accent ? 'hero-accent' : ''} ${className}`}>
      <div className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <h1 className="fw-bold display-5 hero-title">{title}</h1>
            {subtitle && <p className="text-muted mt-3">{subtitle}</p>}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

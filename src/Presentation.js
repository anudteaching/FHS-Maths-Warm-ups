import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Presentation.css';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "2D Shapes: Area Formulas",
      content: (
        <div style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>Learning Intentions</h2>
          <ul style={{listStyleType: 'disc', listStylePosition: 'inside', textAlign: 'left'}}>
            <li>Understand the concept of area</li>
            <li>Learn and apply the formula for the area of a square</li>
            <li>Learn and apply the formula for the area of a rectangle</li>
            <li>Learn and apply the formula for the area of a triangle</li>
          </ul>
        </div>
      )
    },
    {
      title: "Square",
      content: (
        <div className="shape-display">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <rect width="160" height="160" fill="#90cdf4" />
            <text x="70" y="85" fontSize="24" fontWeight="bold">s</text>
          </svg>
          <div className="shape-info">
            <p className="formula" style={{fontSize: '20px', marginBottom: '8px'}}>Formula: A = s²</p>
            <p>Where:</p>
            <ul style={{listStyleType: 'disc', listStylePosition: 'inside'}}>
              <li>A = Area</li>
              <li>s = Side length</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Rectangle",
      content: (
        <div className="shape-display">
          <svg width="192" height="128" viewBox="0 0 192 128">
            <rect width="192" height="128" fill="#9ae6b4" />
            <text x="85" y="70" fontSize="24" fontWeight="bold">w</text>
            <text x="170" y="110" fontSize="24" fontWeight="bold">l</text>
          </svg>
          <div className="shape-info">
            <p className="formula" style={{fontSize: '20px', marginBottom: '8px'}}>Formula: A = l × w</p>
            <p>Where:</p>
            <ul style={{listStyleType: 'disc', listStylePosition: 'inside'}}>
              <li>A = Area</li>
              <li>l = Length</li>
              <li>w = Width</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Triangle",
      content: (
        <div className="shape-display">
          <svg width="192" height="192" viewBox="0 0 100 100">
            <polygon points="10,90 50,10 90,90" fill="#fde68a" />
            <line x1="10" y1="90" x2="90" y2="90" stroke="black" strokeWidth="2" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="black" strokeDasharray="4" />
            <text x="45" y="55" fontSize="12">h</text>
            <text x="48" y="98" fontSize="12">b</text>
          </svg>
          <div className="shape-info">
            <p  className="formula" style={{fontSize: '20px', marginBottom: '8px'}}>Formula: A = ½ × b × h</p>
            <p>Where:</p>
            <ul style={{listStyleType: 'disc', listStylePosition: 'inside'}}>
              <li>A = Area</li>
              <li>b = Base</li>
              <li>h = Height</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "I Do: Square Example 1",
      content: (
        <div>
          <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '8px'}}>Calculate the area of a square with side length 5 cm</h3>
          <div className="shape-display">
            <svg width="128" height="128" viewBox="0 0 100 100">
              <rect width="100" height="100" fill="#90cdf4" />
              <text x="40" y="55" fontSize="12" fontWeight="bold">5 cm</text>
            </svg>
            <div className="shape-info">
              <p>Given: s = 5 cm</p>
              <p className="formula">Formula: A = s²</p>
              <p>A = 5² = 5 × 5 = 25 cm²</p>
            </div>
          </div>
          <p style={{fontWeight: 'bold', marginTop: '16px'}}>The area of the square is 25 cm²</p>
        </div>
      )
    },
    {
      title: "I Do: Rectangle Example",
      content: (
        <div>
          <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '8px'}}>Calculate the area of a rectangle with length 8 m and width 3 m</h3>
          <div className="shape-display">
            <svg width="192" height="128" viewBox="0 0 100 60">
              <rect width="100" height="60" fill="#9ae6b4" />
              <text x="45" y="30" fontSize="12" fontWeight="bold">3 m</text>
              <text x="45" y="55" fontSize="12" fontWeight="bold">8 m</text>
            </svg>
            <div className="shape-info">
              <p>Given: l = 8 m, w = 3 m</p>
              <p className="formula">Formula: A = l × w</p>
              <p>A = 8 × 3 = 24 m²</p>
            </div>
          </div>
          <p style={{fontWeight: 'bold', marginTop: '16px'}}>The area of the rectangle is 24 m²</p>
        </div>
      )
    },
    {
      title: "We Do: Square Example",
      content: (
        <div>
          <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '8px'}}>Let's calculate the area of a square with side length 6 cm</h3>
          <div className="shape-display">
            <svg width="128" height="128" viewBox="0 0 100 100">
              <rect width="100" height="100" fill="#90cdf4" />
              <text x="40" y="55" fontSize="12" fontWeight="bold">6 cm</text>
            </svg>
            <div className="shape-info">
              <p>Given: s = 6 cm</p>
              <p className="formula">Formula: A = s²</p>
              <p>A = 6² = ?</p>
              <p>A = ? cm²</p>
            </div>
          </div>
          <p style={{fontWeight: 'bold', marginTop: '16px'}}>Can you help complete the calculation?</p>
        </div>
      )
    },
    {
      title: "We Do: Triangle Example",
      content: (
        <div>
          <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '8px'}}>Let's calculate the area of a triangle with base 10 cm and height 4 cm</h3>
          <div className="shape-display">
            <svg width="192" height="192" viewBox="0 0 100 100">
              <polygon points="10,90 50,10 90,90" fill="#fde68a" />
              <line x1="10" y1="90" x2="90" y2="90" stroke="black" strokeWidth="2" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="black" strokeDasharray="4" />
              <text x="45" y="55" fontSize="12">4 cm</text>
              <text x="48" y="98" fontSize="12">10 cm</text>
            </svg>
            <div className="shape-info">
              <p>Given: b = 10 cm, h = 4 cm</p>
              <p className="formula">Formula: A = ½ × b × h</p>
              <p>A = ½ × ? × ?</p>
              <p>A = ? cm²</p>
            </div>
          </div>
          <p style={{fontWeight: 'bold', marginTop: '16px'}}>Can you help complete the calculation?</p>
        </div>
      )
    },
    {
      title: "You Do: Exercise 1",
      content: (
        <div className="exercise">
          <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '8px'}}>Calculate the area of this square:</h3>
          <svg width="192" height="192" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#90cdf4" />
            <text x="40" y="55" fontSize="12" fontWeight="bold">9 cm</text>
          </svg>
          <p style={{marginTop: '16px'}}>Show your work and final answer.</p>
        </div>
      )
    },
    {
      title: "You Do: Exercise 2",
      content: (
        <div className="exercise">
          <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '8px'}}>Calculate the area of this rectangle:</h3>
          <svg width="256" height="192" viewBox="0 0 120 80">
            <rect width="120" height="80" fill="#9ae6b4" />
            <text x="55" y="45" fontSize="12" fontWeight="bold">5 m</text>
            <text x="55" y="75" fontSize="12" fontWeight="bold">12 m</text>
          </svg>
          <p style={{marginTop: '16px'}}>Show your work and final answer.</p>
        </div>
      )
    },
    {
      title: "You Do: Exercise 3",
      content: (
        <div className="exercise">
          <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '8px'}}>Calculate the area of this triangle:</h3>
          <svg width="256" height="256" viewBox="0 0 100 100">
            <polygon points="10,90 50,10 90,90" fill="#fde68a" />
            <line x1="10" y1="90" x2="90" y2="90" stroke="black" strokeWidth="2" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="black" strokeDasharray="4" />
            <text x="45" y="55" fontSize="12">8 cm</text>
            <text x="48" y="98" fontSize="12">14 cm</text>
          </svg>
          <p style={{marginTop: '16px'}}>Show your work and final answer.</p>
        </div>
      )
    },
    {
      title: "You Do: Exercise 4",
      content: (
        <div className="exercise">
          <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '8px'}}>Calculate the total area of this composite shape:</h3>
          <svg width="256" height="256" viewBox="0 0 120 120">
            <rect x="0" y="40" width="80" height="80" fill="#9ae6b4" />
            <polygon points="0,40 80,40 40,0" fill="#fde68a" />
            <text x="35" y="90" fontSize="12" fontWeight="bold">8 m</text>
            <text x="85" y="75" fontSize="12" fontWeight="bold">8 m</text>
            <text x="35" y="35" fontSize="12" fontWeight="bold">4 m</text>
          </svg>
          <p style={{marginTop: '16px'}}>Hint: Break the shape into a rectangle and a triangle. Show your work and final answer.</p>
        </div>
      )
    },
    {
      title: "Summary",
      content: (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Area Formulas</h2>
          <ul className="list-none">
            <li className="mb-2">Square: A = s²</li>
            <li className="mb-2">Rectangle: A = l × w</li>
            <li className="mb-2">Triangle: A = ½ × b × h</li>
          </ul>
          <p className="mt-4">Remember to always include the correct units!</p>
        </div>
      )
    },
    {
      title: "Appendix: Exercise Answers",
      content: (
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4 text-center">Model Answers for "You Do" Exercises</h2>
          
          <h3 className="text-xl font-bold mt-4">Exercise 1: Square</h3>
          <p>Given: Side length (s) = 9 cm</p>
          <p className="formula">Formula: A = s²</p>
          <p>A = 9² = 9 × 9 = 81 cm²</p>
          <p className="font-bold">Answer: The area of the square is 81 cm²</p>

          <h3 className="text-xl font-bold mt-4">Exercise 2: Rectangle</h3>
          <p>Given: Length (l) = 12 m, Width (w) = 5 m</p>
          <p className="formula">Formula: A = l × w</p>
          <p>A = 12 × 5 = 60 m²</p>
          <p className="font-bold">Answer: The area of the rectangle is 60 m²</p>

          <h3 className="text-xl font-bold mt-4">Exercise 3: Triangle</h3>
          <p>Given: Base (b) = 14 cm, Height (h) = 8 cm</p>
          <p className="formula">Formula: A = ½ × b × h</p>
          <p>A = ½ × 14 × 8 = 7 × 8 = 56 cm²</p>
          <p className="font-bold">Answer: The area of the triangle is 56 cm²</p>

          <h3 className="text-xl font-bold mt-4">Exercise 4: Composite Shape</h3>
          <p>This shape consists of a rectangle and a triangle.</p>
          <p>Rectangle: l = 8 m, w = 8 m</p>
          <p>Area of rectangle = 8 × 8 = 64 m²</p>
          <p>Triangle: b = 8 m, h = 4 m</p>
          <p>Area of triangle = ½ × 8 × 4 = 16 m²</p>
          <p>Total area = Area of rectangle + Area of triangle</p>
          <p>Total area = 64 m² + 16 m² = 80 m²</p>
          <p className="font-bold">Answer: The total area of the composite shape is 80 m²</p>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="presentation-container">
      <div className="slide-frame">
        <h1 className="slide-title">{slides[currentSlide].title}</h1>
        <div className="slide-content">
          {slides[currentSlide].content}
        </div>
      </div>
      <div className="navigation">
        <button onClick={prevSlide} className="nav-button">
          <ChevronLeft size={24} />
          Previous
        </button>
        <span className="slide-number">
          {currentSlide + 1} / {slides.length}
        </span>
        <button onClick={nextSlide} className="nav-button">
          Next
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Presentation;
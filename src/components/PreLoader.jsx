// src/components/Preloader.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const Container = styled.div`
  font-family: 'Nalieta', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FFEBCC;
  color: #FF6B6B;
`;

const BookStack = styled.div`
  display: flex;
  gap: 10px;
`;

const Book = styled.div`
  width: 20px;
  height: 40px;
  background-color: #${props => props.color};
  animation: ${bounce} 1s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  border-radius: 4px;
`;

const Text = styled.p`
  font-size: 1.5em;
  margin-top: 20px;
`;

const ProgressBarContainer = styled.div`
  margin-top: 20px;
  width: 80%;
  height: 8px;
  background-color: #ddd;
  border-radius: 4px;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${props => props.width}%;
  background-color: #FF6B6B;
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10;
      });
    }, 500);
  }, []);

  return (
    <Container>
      <BookStack>
        <Book color="FFB6C1" delay={0} />
        <Book color="FF6B6B" delay={0.2} />
        <Book color="FFD700" delay={0.4} />
      </BookStack>
      <Text>Loading your adventure...</Text>
      <ProgressBarContainer>
        <ProgressBar width={progress} />
      </ProgressBarContainer>
    </Container>
  );
};

export default Preloader;

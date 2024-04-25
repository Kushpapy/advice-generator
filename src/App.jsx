import { useEffect, useState } from "react";
import styled from "styled-components";

const AdiceBox = styled.div`
  width: 65rem;
  background-color: var(--dark-grayish-blue);
  padding: 3.2rem 4.8rem;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  position: relative;
  box-shadow: 1rem 1rem 1rem 1.6rem var(--dark-blue);
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  color: var(--neon-green);
`;

const Quote = styled.p`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 1.6rem;
`;
const DividerBox = styled.div`
  margin-bottom: 2.4rem;
`;

const Dice = styled.button`
  width: 5rem;
  height: 5rem;
  background-color: var(--neon-green);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  border: none;
  transition: 0.3s all ease-in;
  position: relative;

  &:hover {
    cursor: ${({ disabled }) => (!disabled ? "pointer" : "not-allowed")};
  }
  &::after {
    content: "";
    position: absolute;
    width: 6rem; /* Slightly larger than base element */
    height: 6rem;
    background-color: var(--neon-green);
    border-radius: 50%;
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* More precise centering */
    z-index: -1;
  }
`;

function App() {
  const [id, setID] = useState("117");
  const [advice, setAdvice] = useState(
    "The journey of a thousand miles begins with just one step."
  );
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    async function getAdvice() {
      setIsLoading(true);
      try {
        const res = await fetch("https://api.adviceslip.com/advice");
        if (!res.ok) {
          throw new Error("Something went wrong with fetching advices");
        }

        const { slip } = await res.json();
        setID(slip.id);
        setAdvice(slip.advice);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getAdvice();
  }

  return (
    <div>
      <AdiceBox>
        <H2>Advice # {id}</H2>
        <Quote>&quot;{advice}&quot;</Quote>
        <DividerBox>
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </DividerBox>
        <Dice onClick={handleClick} disabled={isLoading}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </Dice>
      </AdiceBox>
    </div>
  );
}

export default App;

import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
`;

const animateCardsIn = keyframes`
  from{
    transform:scale(0.95)
  }

  to{
    transform:scale(1)
  }
`;

const animateCardsOut = keyframes`
  from{
    transform:scale(1)
  }

  to{
    transform:scale(0.95)
  }
`;

export const Container = styled.div<{ isVisible: boolean }>`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.lg}) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
  }
  > * {
    animation: ${({ isVisible }) =>
        isVisible ? animateCardsIn : animateCardsOut}
      1s ease-in-out forwards;
  }
`;

export const DiscoverLink = styled.a`
  margin: 1rem 0;
  text-align: center;
  padding: 0.5rem 0;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
  align-self: center;
`;

import { styled } from 'styled-components';

// credit to https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje#the-dots

export const DotsLoader = styled.div`
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side, #000 90%, #0000) 0 /
    calc(100% / 3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: d1 1s steps(4) infinite;

  @keyframes d1 {
    to {
      clip-path: inset(0 -34% 0 0);
    }
  }
`;

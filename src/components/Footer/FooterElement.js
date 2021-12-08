import styled from "styled-components/macro";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #444444;
  height: 35vh;
`;

export const FooterInfo = styled.div`
  width: 15%;
`;

export const FooterContacto = styled.div`
  width: 33.3%;

  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: space-evenly;
`;

export const FooterRedes = styled.div``;

export const FooterTitle = styled.h2`
  text-transform: uppercase;
  color: var(--primary);
  padding: 15px 0;
`;

export const FooterText = styled.p`
  color: white;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.7;
`;

export const FooterContactoTitle = styled.h2`
  color: var(--primary);
  text-transform: uppercase;
`;

export const FooterTelefono = styled.h2`
  color: white;
  font-size: 16px;
  opacity: 0.7;
`;
export const FooterHorarios = styled.p`
  color: white;
  font-size: 18px;
  opacity: 0.7;
`;

export const FooterContactoHorarios = styled.h2`
  color: var(--primary);
  text-transform: uppercase;
`;

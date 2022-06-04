import styled, {css} from 'styled-components/native';

type ButtonBlockProps = {
  theme: 'primary' | 'secondary' | 'outline' | 'ghost';
  isSmall?: boolean;
};

export const ButtonBlock = styled.View<ButtonBlockProps>`
  justify-content: center;
  align-items: center;
  width: 343px;
  height: 64px;
  border-radius: 8px;
  ${props => {
    switch (props.theme) {
      case 'primary':
        return css`
          background-color: #fee440;
        `;
      case 'secondary':
        return css`
          background-color: #f5f5f5;
        `;
      case 'outline':
        return css`
          border: 2px solid #212121;
        `;
      default:
        break;
    }
  }};
`;

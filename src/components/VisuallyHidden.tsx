import * as S from './styles/VisuallyHidden.styled';

export const VisuallyHidden = ({children}: React.PropsWithChildren) => {
  return (
    <S.VisuallyHidden>{children}</S.VisuallyHidden>
  );
};

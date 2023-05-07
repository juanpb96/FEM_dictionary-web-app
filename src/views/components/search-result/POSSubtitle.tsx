import { Typography } from '../../../components';

export const POSSubtitle = ({text}: {text: string}) => {
  return (
    <Typography
      as="h4"
      text={text}
      fontStyles={{
        color: 'paleSky',
        fontWeight: 400,
        fontSize: {
          mobile: '16px',
          tablet: '20px'
        },
        lineHeight: {
          mobile: {
            sansSerif: '19.36px',
            serif: '20.48px',
            mono: '16.78px'
          },
          tablet: {
            sansSerif: '24.2px',
            serif: '25.6px',
            mono: '20.98px'
          }
        }
      }}
    />
  );
};
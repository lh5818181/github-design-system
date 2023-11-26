import { HomeTemplate } from '../../templates/HomeTemplate';
import type { HomeTemplateProps } from '../../templates/HomeTemplate';

export type HomePageProps = HomeTemplateProps;

export const HomePage = (props: HomePageProps) => {
  return <HomeTemplate {...props} />;
};

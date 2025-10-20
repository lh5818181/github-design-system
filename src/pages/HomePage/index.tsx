import { HomeTemplate } from '../../components/templates/HomeTemplate';
import type { HomeTemplateProps } from '../../components/templates/HomeTemplate';

export type HomePageProps = HomeTemplateProps;

export const HomePage = (props: HomePageProps) => {
  return <HomeTemplate {...props} />;
};
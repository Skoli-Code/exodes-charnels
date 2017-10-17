import ParcoursList from 'constants/parcours';

export const resolveParcour = (_slug) => (
  ParcoursList.find(({ slug }) => slug==_slug)
);

export const list = () => ParcoursList;

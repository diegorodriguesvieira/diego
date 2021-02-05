import * as React from 'react';
import './Icon.scss';

export type IconNames = 'add' | 'add-circle';

export interface IconProps {
  name: IconNames;
}

const Icon: React.FC<IconProps> = ({ name }) => (
  <span className={`icon icon-${name}`} />
);

Icon.displayName = 'Icon';

export default Icon;

import * as React from 'react';
import './Icon.scss';
export declare type IconNames = 'add' | 'add-circle';
export interface IconProps {
    name: IconNames;
}
declare const Icon: React.FC<IconProps>;
export default Icon;

/// <reference types="react" />
import './mylabel.css';
export interface Props {
    label: string;
    size: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, }: {
    label?: string | undefined;
    size?: string | undefined;
    color?: string | undefined;
    allCaps?: boolean | undefined;
    fontColor?: string | undefined;
}) => JSX.Element;

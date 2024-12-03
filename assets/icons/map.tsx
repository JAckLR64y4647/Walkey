import React from 'react';
import Svg, { Path } from "react-native-svg";

const MapIcon = ({ width, height, fill, style }: { width: number, height: number, style?: object }) => (
<Svg width="30" height="31" viewBox="0 0 20 21" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M7.49984 4.71176C7.44567 6.08009 7.49984 14.6893 7.49984 14.6893C7.63428 14.6893 7.76595 14.7106 7.89484 14.7534L12.4998 16.2884V6.31092C12.3656 6.31089 12.2322 6.28922 12.1048 6.24676L7.49984 4.71176ZM7.10484 3.08676C7.36125 3.00135 7.63843 3.00135 7.89484 3.08676L12.4998 4.62176L16.9073 3.15259C17.0702 3.09833 17.2435 3.08353 17.4132 3.10941C17.5829 3.13529 17.744 3.20112 17.8832 3.30146C18.0224 3.4018 18.1358 3.53378 18.2141 3.68654C18.2923 3.8393 18.3331 4.00846 18.3332 4.18009V15.2001C18.3331 15.4625 18.2506 15.7182 18.0971 15.931C17.9436 16.1439 17.7271 16.303 17.4782 16.3859L12.8948 17.9134C12.6382 17.9993 12.3615 17.9993 12.1048 17.9134L7.49984 16.3784L3.09234 17.8476C2.92951 17.9018 2.75613 17.9166 2.58646 17.8908C2.4168 17.8649 2.25571 17.7991 2.11648 17.6987C1.97724 17.5984 1.86383 17.4664 1.7856 17.3136C1.70736 17.1609 1.66655 16.9917 1.6665 16.8201V5.80009C1.66653 5.5377 1.74912 5.28198 1.90257 5.06915C2.05603 4.85632 2.27256 4.69717 2.5215 4.61426L7.10484 3.08676Z" 
fill={fill || "#FF6C22"}/>
</Svg>
);

export default MapIcon;

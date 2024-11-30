import React from 'react';
import Svg, { Path, Rect } from "react-native-svg";

const HomeIcon = ({ width, height, fill, style }: { width: number, height: number, style?: object }) => (
<Svg width="30" height="31" viewBox="0 0 20 21" fill="none">
<Rect x="0.75" y="0.75" width="19.5" height="18.5" rx="9.25" fill="#FFE5D8"/>
<Path d="M14.4998 4.66675C13.3598 4.66675 12.6665 4.88675 12.2665 5.07341C11.7532 4.82008 11.1665 4.66675 10.4998 4.66675C9.83317 4.66675 9.2465 4.82008 8.73317 5.07341C8.33317 4.88675 7.63984 4.66675 6.49984 4.66675C4.49984 4.66675 3.1665 10.0001 3.1665 11.3334C3.1665 11.8867 4.0465 12.3934 5.25984 12.6001C5.6865 14.0934 7.69984 15.2334 10.1665 15.3334V12.4801C9.77317 12.2334 9.1665 11.7867 9.1665 11.3334C9.1665 10.6667 10.4998 10.6667 10.4998 10.6667C10.4998 10.6667 11.8332 10.6667 11.8332 11.3334C11.8332 11.7867 11.2265 12.2334 10.8332 12.4801V15.3334C13.2998 15.2334 15.3132 14.0934 15.7398 12.6001C16.9532 12.3934 17.8332 11.8867 17.8332 11.3334C17.8332 10.0001 16.4998 4.66675 14.4998 4.66675ZM5.2665 11.2467C4.93317 11.1667 4.67317 11.0734 4.49984 11.0001C4.6665 9.15341 5.9665 6.26675 6.53317 6.00008C6.89317 6.00008 7.1665 6.04008 7.41317 6.07341C6.01317 7.61341 5.45984 10.0267 5.2665 11.2467ZM8.49984 10.0001C8.32303 10.0001 8.15346 9.92984 8.02843 9.80482C7.90341 9.67979 7.83317 9.51023 7.83317 9.33342C7.83317 8.97341 8.13317 8.66675 8.49984 8.66675C8.67665 8.66675 8.84622 8.73699 8.97124 8.86201C9.09627 8.98703 9.1665 9.1566 9.1665 9.33342C9.1665 9.70675 8.8665 10.0001 8.49984 10.0001ZM12.4998 10.0001C12.323 10.0001 12.1535 9.92984 12.0284 9.80482C11.9034 9.67979 11.8332 9.51023 11.8332 9.33342C11.8332 8.97341 12.1332 8.66675 12.4998 8.66675C12.6766 8.66675 12.8462 8.73699 12.9712 8.86201C13.0963 8.98703 13.1665 9.1566 13.1665 9.33342C13.1665 9.70675 12.8665 10.0001 12.4998 10.0001ZM15.7332 11.2467C15.5398 10.0267 14.9865 7.61341 13.5865 6.07341C13.8332 6.04008 14.1065 6.00008 14.4665 6.00008C15.0332 6.26675 16.3332 9.15341 16.4998 11.0001C16.3332 11.0734 16.0732 11.1667 15.7332 11.2467Z" 
fill={fill || "#FF6C22"}/>
</Svg>
);

export default HomeIcon;

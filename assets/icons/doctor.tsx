import React from 'react';
import Svg, { Path } from "react-native-svg";

const Doctor = ({ width, height, style }: { width: number, height: number, style?: object }) => (
    <Svg width="30" height="31" viewBox="0 0 20 21" fill="none">
        <Path d="M7.33317 9.83325C6.44912 9.83325 5.60127 9.48206 4.97615 8.85694C4.35103 8.23182 3.99984 7.38397 3.99984 6.49992V3.83325C3.99984 3.65644 4.07008 3.48687 4.1951 3.36185C4.32012 3.23682 4.48969 3.16659 4.6665 3.16659H5.33317C5.50998 3.16659 5.67955 3.09635 5.80457 2.97132C5.9296 2.8463 5.99984 2.67673 5.99984 2.49992C5.99984 2.32311 5.9296 2.15354 5.80457 2.02851C5.67955 1.90349 5.50998 1.83325 5.33317 1.83325H4.6665C4.13607 1.83325 3.62736 2.04397 3.25229 2.41904C2.87722 2.79411 2.6665 3.30282 2.6665 3.83325V6.49992C2.66736 7.25308 2.85102 7.99477 3.2017 8.66131C3.55239 9.32784 4.05962 9.89929 4.67984 10.3266C5.27632 10.8514 5.75998 11.492 6.10148 12.2094C6.44299 12.9267 6.63521 13.706 6.6665 14.4999C6.6665 15.7376 7.15817 16.9246 8.03334 17.7998C8.90851 18.6749 10.0955 19.1666 11.3332 19.1666C12.5708 19.1666 13.7578 18.6749 14.633 17.7998C15.5082 16.9246 15.9998 15.7376 15.9998 14.4999V13.7399C16.6283 13.5777 17.176 13.1918 17.5402 12.6546C17.9045 12.1174 18.0604 11.4658 17.9786 10.8219C17.8968 10.178 17.583 9.5861 17.096 9.15704C16.609 8.72798 15.9822 8.49126 15.3332 8.49126C14.6841 8.49126 14.0574 8.72798 13.5703 9.15704C13.0833 9.5861 12.7695 10.178 12.6878 10.8219C12.606 11.4658 12.7618 12.1174 13.1261 12.6546C13.4904 13.1918 14.0381 13.5777 14.6665 13.7399V14.4999C14.6665 15.384 14.3153 16.2318 13.6902 16.8569C13.0651 17.4821 12.2172 17.8333 11.3332 17.8333C10.4491 17.8333 9.60127 17.4821 8.97615 16.8569C8.35103 16.2318 7.99984 15.384 7.99984 14.4999C8.03282 13.705 8.22712 12.9252 8.57094 12.2077C8.91477 11.4903 9.40092 10.8503 9.99984 10.3266C10.6176 9.89781 11.1222 9.32571 11.4705 8.65927C11.8189 7.99282 12.0005 7.25189 11.9998 6.49992V3.83325C11.9998 3.30282 11.7891 2.79411 11.4141 2.41904C11.039 2.04397 10.5303 1.83325 9.99984 1.83325H9.33317C9.15636 1.83325 8.98679 1.90349 8.86177 2.02851C8.73674 2.15354 8.6665 2.32311 8.6665 2.49992C8.6665 2.67673 8.73674 2.8463 8.86177 2.97132C8.98679 3.09635 9.15636 3.16659 9.33317 3.16659H9.99984C10.1766 3.16659 10.3462 3.23682 10.4712 3.36185C10.5963 3.48687 10.6665 3.65644 10.6665 3.83325V6.49992C10.6665 6.93766 10.5803 7.37111 10.4128 7.77553C10.2453 8.17995 9.99972 8.54741 9.69019 8.85694C9.38066 9.16647 9.0132 9.412 8.60878 9.57952C8.20436 9.74703 7.77091 9.83325 7.33317 9.83325ZM15.3332 12.4999C14.9795 12.4999 14.6404 12.3594 14.3904 12.1094C14.1403 11.8593 13.9998 11.5202 13.9998 11.1666C13.9998 10.813 14.1403 10.4738 14.3904 10.2238C14.6404 9.97373 14.9795 9.83325 15.3332 9.83325C15.6868 9.83325 16.0259 9.97373 16.276 10.2238C16.526 10.4738 16.6665 10.813 16.6665 11.1666C16.6665 11.5202 16.526 11.8593 16.276 12.1094C16.0259 12.3594 15.6868 12.4999 15.3332 12.4999Z" fill="#C5C8D2"/>
    </Svg>
);

export default Doctor;
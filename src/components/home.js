import React from 'react';

export default function Home() {
    return(
        <div className='home-container-wrapper'>
            <div className='home-container'>
                <h1 className='home-title user-select-none'>Jackie <span>Au</span></h1>
                <div className='connect-icon'>
                    <svg className='connect-icon-svg' width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="199" height="59" stroke="#D4AF37"/>
                        <path d="M39.9395 34.1582C39.0547 34.1582 38.2871 33.9619 37.6367 33.5693C36.9922 33.1709 36.4941 32.6113 36.1426 31.8906C35.7969 31.1641 35.624 30.3086 35.624 29.3242C35.624 28.1934 35.832 27.25 36.248 26.4941C36.6699 25.7383 37.2178 25.1699 37.8916 24.7891C38.5713 24.4082 39.2979 24.2178 40.0713 24.2178C40.54 24.2178 41.0293 24.2822 41.5391 24.4111C42.0488 24.54 42.5381 24.7832 43.0068 25.1406L42.6113 26.3271C42.2012 25.9521 41.7734 25.6943 41.3281 25.5537C40.8887 25.4072 40.4697 25.334 40.0713 25.334C39.1514 25.334 38.3926 25.6562 37.7949 26.3008C37.2031 26.9395 36.9072 27.8916 36.9072 29.1572C36.9072 29.9424 37.0391 30.625 37.3027 31.2051C37.5723 31.7852 37.9414 32.2334 38.4102 32.5498C38.8789 32.8604 39.4121 33.0156 40.0098 33.0156C40.5137 33.0156 41.0176 32.9043 41.5215 32.6816C42.0312 32.459 42.4707 32.1631 42.8398 31.7939L43.1035 33.0771C42.8516 33.3115 42.541 33.5107 42.1719 33.6748C41.8027 33.833 41.4219 33.9531 41.0293 34.0352C40.6367 34.1172 40.2734 34.1582 39.9395 34.1582ZM48.6055 34.1582C47.9023 34.1582 47.2402 33.9707 46.6191 33.5957C46.0039 33.2148 45.5059 32.6611 45.125 31.9346C44.7441 31.2021 44.5537 30.3086 44.5537 29.2539C44.5537 28.1992 44.7529 27.2969 45.1514 26.5469C45.5557 25.7969 46.0771 25.2227 46.7158 24.8242C47.3545 24.4199 48.0283 24.2178 48.7373 24.2178C49.4404 24.2178 50.0967 24.4082 50.7061 24.7891C51.3213 25.1641 51.8164 25.7178 52.1914 26.4502C52.5723 27.1768 52.7627 28.0674 52.7627 29.1221C52.7627 30.1768 52.5605 31.082 52.1562 31.8379C51.7578 32.5879 51.2422 33.1621 50.6094 33.5605C49.9766 33.959 49.3086 34.1582 48.6055 34.1582ZM48.6758 33.0156C49.4785 33.0156 50.1436 32.6875 50.6709 32.0312C51.2041 31.3691 51.4707 30.4551 51.4707 29.2891C51.4707 28.0703 51.2129 27.1123 50.6973 26.415C50.1875 25.7178 49.5137 25.3691 48.6758 25.3691C47.8438 25.3691 47.1611 25.7061 46.6279 26.3799C46.1006 27.0479 45.8369 27.9531 45.8369 29.0957C45.8369 30.2969 46.0947 31.252 46.6104 31.9609C47.1318 32.6641 47.8203 33.0156 48.6758 33.0156ZM61.042 34L54.8809 25.0703L55.8037 24.376L61.9648 33.3408L61.042 34ZM54.6172 34C54.6641 33.7363 54.6904 33.3555 54.6963 32.8574C54.708 32.3594 54.7139 31.7852 54.7139 31.1348V27.25C54.7139 26.5996 54.708 26.0254 54.6963 25.5273C54.6904 25.0234 54.6641 24.6396 54.6172 24.376H55.8037V34H54.6172ZM61.042 34V24.376H62.2285C62.1816 24.6396 62.1523 25.0234 62.1406 25.5273C62.1348 26.0254 62.1318 26.5996 62.1318 27.25V34H61.042ZM70.9385 34L64.7773 25.0703L65.7002 24.376L71.8613 33.3408L70.9385 34ZM64.5137 34C64.5605 33.7363 64.5869 33.3555 64.5928 32.8574C64.6045 32.3594 64.6104 31.7852 64.6104 31.1348V27.25C64.6104 26.5996 64.6045 26.0254 64.5928 25.5273C64.5869 25.0234 64.5605 24.6396 64.5137 24.376H65.7002V34H64.5137ZM70.9385 34V24.376H72.125C72.0781 24.6396 72.0488 25.0234 72.0371 25.5273C72.0312 26.0254 72.0283 26.5996 72.0283 27.25V34H70.9385ZM74.4102 34C74.457 33.7363 74.4834 33.3555 74.4893 32.8574C74.501 32.3594 74.5068 31.7852 74.5068 31.1348V27.25C74.5068 26.5996 74.501 26.0254 74.4893 25.5273C74.4834 25.0234 74.457 24.6396 74.4102 24.376H80.0088V25.4658H75.7549V28.4365H79.5166V29.4912H75.7549V32.9189H77.4951C78.1455 32.9189 78.6934 32.9131 79.1387 32.9014C79.5898 32.8896 79.9473 32.8604 80.2109 32.8135V34H74.4102ZM85.9414 34.1582C85.0566 34.1582 84.2891 33.9619 83.6387 33.5693C82.9941 33.1709 82.4961 32.6113 82.1445 31.8906C81.7988 31.1641 81.626 30.3086 81.626 29.3242C81.626 28.1934 81.834 27.25 82.25 26.4941C82.6719 25.7383 83.2197 25.1699 83.8936 24.7891C84.5732 24.4082 85.2998 24.2178 86.0732 24.2178C86.542 24.2178 87.0312 24.2822 87.541 24.4111C88.0508 24.54 88.54 24.7832 89.0088 25.1406L88.6133 26.3271C88.2031 25.9521 87.7754 25.6943 87.3301 25.5537C86.8906 25.4072 86.4717 25.334 86.0732 25.334C85.1533 25.334 84.3945 25.6562 83.7969 26.3008C83.2051 26.9395 82.9092 27.8916 82.9092 29.1572C82.9092 29.9424 83.041 30.625 83.3047 31.2051C83.5742 31.7852 83.9434 32.2334 84.4121 32.5498C84.8809 32.8604 85.4141 33.0156 86.0117 33.0156C86.5156 33.0156 87.0195 32.9043 87.5234 32.6816C88.0332 32.459 88.4727 32.1631 88.8418 31.7939L89.1055 33.0771C88.8535 33.3115 88.543 33.5107 88.1738 33.6748C87.8047 33.833 87.4238 33.9531 87.0312 34.0352C86.6387 34.1172 86.2754 34.1582 85.9414 34.1582ZM93.2539 34C93.3125 33.7363 93.3477 33.3555 93.3594 32.8574C93.377 32.3594 93.3857 31.7852 93.3857 31.1348V25.4658H91.8389C91.5459 25.4658 91.2676 25.4746 91.0039 25.4922C90.7461 25.5039 90.4854 25.5391 90.2217 25.5977V24.376H97.8418V25.5977C97.5781 25.5391 97.3145 25.5039 97.0508 25.4922C96.793 25.4746 96.5176 25.4658 96.2246 25.4658H94.6426V31.1348C94.6426 31.7852 94.6484 32.3594 94.6602 32.8574C94.6777 33.3555 94.7158 33.7363 94.7744 34H93.2539ZM111.28 34L108.775 25.4043L108.415 24.376H109.637L112.142 33.1475L112.01 34H111.28ZM105.286 34L103.273 26.7842C103.098 26.1572 102.951 25.665 102.834 25.3076C102.723 24.9502 102.617 24.6396 102.518 24.376H103.968L106.139 33.1475L106.077 34H105.286ZM106.077 34L105.945 33.1475L108.415 24.376H109.637L109.268 25.4043L106.763 34H106.077ZM112.01 34L111.939 33.1475L114.084 24.376H115.534C115.429 24.6455 115.32 24.9561 115.209 25.3076C115.098 25.6533 114.954 26.1455 114.778 26.7842L112.766 34H112.01ZM116.888 34V33.0508H118.47V25.334H116.888V24.376H121.335V25.334H119.718V33.0508H121.335V34H116.888ZM125.721 34C125.779 33.7363 125.814 33.3555 125.826 32.8574C125.844 32.3594 125.853 31.7852 125.853 31.1348V25.4658H124.306C124.013 25.4658 123.734 25.4746 123.471 25.4922C123.213 25.5039 122.952 25.5391 122.688 25.5977V24.376H130.309V25.5977C130.045 25.5391 129.781 25.5039 129.518 25.4922C129.26 25.4746 128.984 25.4658 128.691 25.4658H127.109V31.1348C127.109 31.7852 127.115 32.3594 127.127 32.8574C127.145 33.3555 127.183 33.7363 127.241 34H125.721ZM131.785 34C131.832 33.7363 131.858 33.3555 131.864 32.8574C131.876 32.3594 131.882 31.7852 131.882 31.1348V27.25C131.882 26.5996 131.876 26.0254 131.864 25.5273C131.858 25.0234 131.832 24.6396 131.785 24.376H133.13V28.498H137.876V24.376H139.229C139.183 24.6396 139.153 25.0234 139.142 25.5273C139.136 26.0254 139.133 26.5996 139.133 27.25V31.1348C139.133 31.7852 139.136 32.3594 139.142 32.8574C139.153 33.3555 139.183 33.7363 139.229 34H137.876V29.5527H133.13V34H131.785ZM149.645 34L146.313 24.376H147.438L150.269 32.6553L153.143 24.376H154.241L150.928 34H149.645ZM145.496 34C145.52 33.8125 145.546 33.502 145.575 33.0684C145.604 32.6289 145.634 32.1162 145.663 31.5303C145.692 30.9385 145.719 30.3174 145.742 29.667C145.771 29.0166 145.798 28.3779 145.821 27.751C145.851 27.124 145.874 26.5586 145.892 26.0547C145.909 25.5449 145.924 25.1377 145.936 24.833C145.947 24.5283 145.953 24.376 145.953 24.376H147.104L146.92 26.0635L146.709 34H145.496ZM153.828 34L153.644 26.0635L153.433 24.376H154.593C154.593 24.376 154.596 24.5283 154.602 24.833C154.613 25.1377 154.628 25.5449 154.646 26.0547C154.663 26.5586 154.684 27.124 154.707 27.751C154.736 28.3779 154.763 29.0166 154.786 29.667C154.815 30.3174 154.845 30.9385 154.874 31.5303C154.903 32.1162 154.933 32.6289 154.962 33.0684C154.991 33.502 155.021 33.8125 155.05 34H153.828ZM157.326 34C157.373 33.7363 157.399 33.3555 157.405 32.8574C157.417 32.3594 157.423 31.7852 157.423 31.1348V27.25C157.423 26.5996 157.417 26.0254 157.405 25.5273C157.399 25.0234 157.373 24.6396 157.326 24.376H162.925V25.4658H158.671V28.4365H162.433V29.4912H158.671V32.9189H160.411C161.062 32.9189 161.609 32.9131 162.055 32.9014C162.506 32.8896 162.863 32.8604 163.127 32.8135V34H157.326Z" fill="white"/>
                    </svg>
                </div>
                
            </div>
        </div>
    );
}
import React from 'react';
import me from '../images/me.jpg';
import resume from '../resume/JACKIE_AU.pdf';

// iPhone 6,7,8 media query, remove animation //useRef(null)

export default function About() {

    return(
        <div id='about-container-wrapper'>
            <div id='about-container'>
                <div id='about-content'>
                    <h1 id='about-header' data-aos='fade-up-left' data-aos-duration='1300' data-aos-once='true'>Who I am.</h1>
                    <p id='about-paragraph' data-aos='fade-up-left' data-aos-duration='1300' data-aos-once='true'>
                        I&#39;m a recent UC Davis computer science graduate who&#39;s passionate for front 
                        and back end development. Outside of coding, I enjoy hiking,
                        cooking Chinese influenced dishes, and playing first person shooters.
                        <br/>
                        <br/>
                        I&#39;m currently seeking for any opportunity to start my career as a
                        software developer so if you&#39;re hiring or have any resources feel free to reach out to me.
                        <br/>
                        <br/>
                        Join me on my journey of refining and improving my skills.
                    </p> 
                    <a id='a-download' href={resume} target='_blank' rel='noreferrer' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='200' data-aos-once='true'>
                        <svg id='download-resume' width="230" height="50" viewBox="0 0 230 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="229" height="49" stroke="#D4AF37"/>
                            <path d="M63.6914 30L61.1162 22.7842C60.8877 22.1455 60.709 21.6533 60.5801 21.3076C60.457 20.9561 60.3398 20.6455 60.2285 20.376H61.6436L64.4297 28.7168L67.2158 20.376H68.6309C68.5137 20.6455 68.3848 20.9561 68.2441 21.3076C68.1094 21.6533 67.9307 22.1455 67.708 22.7842L65.168 30H63.6914ZM69.9229 30V29.0508H71.5049V21.334H69.9229V20.376H74.3701V21.334H72.7529V29.0508H74.3701V30H69.9229ZM76.4883 30C76.5352 29.7363 76.5615 29.3555 76.5674 28.8574C76.5791 28.3594 76.585 27.7852 76.585 27.1348V23.25C76.585 22.5996 76.5791 22.0254 76.5674 21.5273C76.5615 21.0234 76.5352 20.6396 76.4883 20.376H82.0869V21.4658H77.833V24.4365H81.5947V25.4912H77.833V28.9189H79.5732C80.2236 28.9189 80.7715 28.9131 81.2168 28.9014C81.668 28.8896 82.0254 28.8604 82.2891 28.8135V30H76.4883ZM92.1064 30L89.6016 21.4043L89.2412 20.376H90.4629L92.9678 29.1475L92.8359 30H92.1064ZM86.1123 30L84.0996 22.7842C83.9238 22.1572 83.7773 21.665 83.6602 21.3076C83.5488 20.9502 83.4434 20.6396 83.3438 20.376H84.7939L86.9648 29.1475L86.9033 30H86.1123ZM86.9033 30L86.7715 29.1475L89.2412 20.376H90.4629L90.0938 21.4043L87.5889 30H86.9033ZM92.8359 30L92.7656 29.1475L94.9102 20.376H96.3604C96.2549 20.6455 96.1465 20.9561 96.0352 21.3076C95.9238 21.6533 95.7803 22.1455 95.6045 22.7842L93.5918 30H92.8359ZM101.836 30C101.883 29.7363 101.909 29.3555 101.915 28.8574C101.927 28.3594 101.933 27.7852 101.933 27.1348V23.4082C101.933 22.7637 101.927 22.1631 101.915 21.6064C101.909 21.0498 101.883 20.6396 101.836 20.376C101.836 20.376 102.088 20.3672 102.592 20.3496C103.096 20.3262 103.731 20.3145 104.499 20.3145C105.53 20.3145 106.365 20.5283 107.004 20.9561C107.643 21.3779 107.962 22.0635 107.962 23.0127C107.962 23.5342 107.859 23.9795 107.654 24.3486C107.449 24.7119 107.186 25.0078 106.863 25.2363C106.547 25.459 106.21 25.623 105.853 25.7285C105.501 25.834 105.173 25.8867 104.868 25.8867H103.181V27.1348C103.181 27.7852 103.187 28.3623 103.198 28.8662C103.21 29.3643 103.239 29.7422 103.286 30H101.836ZM107.303 30L104.473 25.8164L105.492 25.3242C105.492 25.3242 105.565 25.4268 105.712 25.6318C105.864 25.8369 106.058 26.1035 106.292 26.4316C106.532 26.7539 106.79 27.1055 107.065 27.4863C107.347 27.8613 107.619 28.2275 107.883 28.585C108.146 28.9365 108.378 29.2412 108.577 29.499C108.776 29.751 108.911 29.918 108.981 30H107.303ZM103.181 24.8584H104.438C105.182 24.8584 105.747 24.7061 106.134 24.4014C106.521 24.0908 106.714 23.6631 106.714 23.1182C106.714 22.5498 106.535 22.1162 106.178 21.8174C105.826 21.5186 105.246 21.3691 104.438 21.3691C104.203 21.3691 103.978 21.3721 103.761 21.3779C103.55 21.3838 103.356 21.3926 103.181 21.4043V24.8584ZM110.432 30C110.479 29.7363 110.505 29.3555 110.511 28.8574C110.522 28.3594 110.528 27.7852 110.528 27.1348V23.25C110.528 22.5996 110.522 22.0254 110.511 21.5273C110.505 21.0234 110.479 20.6396 110.432 20.376H116.03V21.4658H111.776V24.4365H115.538V25.4912H111.776V28.9189H113.517C114.167 28.9189 114.715 28.9131 115.16 28.9014C115.611 28.8896 115.969 28.8604 116.232 28.8135V30H110.432ZM120.741 30.1582C120.108 30.1582 119.517 30.0762 118.966 29.9121C118.421 29.748 117.981 29.5371 117.647 29.2793L117.946 27.9258C118.38 28.3008 118.831 28.5762 119.3 28.752C119.774 28.9277 120.255 29.0156 120.741 29.0156C121.274 29.0156 121.749 28.8691 122.165 28.5762C122.581 28.2832 122.789 27.8701 122.789 27.3369C122.789 27.1025 122.733 26.8857 122.622 26.6865C122.517 26.4814 122.294 26.2822 121.954 26.0889C121.614 25.8955 121.102 25.6963 120.416 25.4912C119.73 25.2861 119.206 25.0547 118.843 24.7969C118.485 24.5332 118.239 24.2432 118.104 23.9268C117.976 23.6045 117.911 23.2559 117.911 22.8809C117.911 22.5059 118.017 22.1133 118.228 21.7031C118.438 21.293 118.772 20.9443 119.229 20.6572C119.687 20.3643 120.278 20.2178 121.005 20.2178C121.515 20.2178 121.969 20.2646 122.367 20.3584C122.771 20.4521 123.188 20.6016 123.615 20.8066L123.352 22.0898C122.877 21.832 122.461 21.6475 122.104 21.5361C121.752 21.4248 121.365 21.3691 120.943 21.3691C120.416 21.3691 119.985 21.5156 119.651 21.8086C119.323 22.0957 119.159 22.4209 119.159 22.7842C119.159 23.0244 119.209 23.2383 119.309 23.4258C119.414 23.6074 119.622 23.7803 119.933 23.9443C120.243 24.1084 120.712 24.2812 121.339 24.4629C122.212 24.7207 122.88 25.0635 123.343 25.4912C123.806 25.9189 124.037 26.4902 124.037 27.2051C124.037 27.791 123.888 28.3066 123.589 28.752C123.29 29.1973 122.892 29.543 122.394 29.7891C121.896 30.0352 121.345 30.1582 120.741 30.1582ZM129.451 30.1582C128.25 30.1582 127.362 29.8359 126.788 29.1914C126.214 28.541 125.927 27.6797 125.927 26.6074V23.25C125.927 22.5996 125.921 22.0254 125.909 21.5273C125.903 21.0234 125.877 20.6396 125.83 20.376H127.175V26.3086C127.175 27.1699 127.336 27.8525 127.658 28.3564C127.986 28.8604 128.584 29.1123 129.451 29.1123C130.307 29.1123 130.893 28.8604 131.209 28.3564C131.531 27.8525 131.692 27.1699 131.692 26.3086V20.376H133.046C133.005 20.6396 132.979 21.0146 132.967 21.501C132.955 21.9814 132.949 22.5645 132.949 23.25V26.6074C132.949 27.6797 132.662 28.541 132.088 29.1914C131.52 29.8359 130.641 30.1582 129.451 30.1582ZM139.471 30L136.14 20.376H137.265L140.095 28.6553L142.969 20.376H144.067L140.754 30H139.471ZM135.322 30C135.346 29.8125 135.372 29.502 135.401 29.0684C135.431 28.6289 135.46 28.1162 135.489 27.5303C135.519 26.9385 135.545 26.3174 135.568 25.667C135.598 25.0166 135.624 24.3779 135.647 23.751C135.677 23.124 135.7 22.5586 135.718 22.0547C135.735 21.5449 135.75 21.1377 135.762 20.833C135.773 20.5283 135.779 20.376 135.779 20.376H136.931L136.746 22.0635L136.535 30H135.322ZM143.654 30L143.47 22.0635L143.259 20.376H144.419C144.419 20.376 144.422 20.5283 144.428 20.833C144.439 21.1377 144.454 21.5449 144.472 22.0547C144.489 22.5586 144.51 23.124 144.533 23.751C144.562 24.3779 144.589 25.0166 144.612 25.667C144.642 26.3174 144.671 26.9385 144.7 27.5303C144.729 28.1162 144.759 28.6289 144.788 29.0684C144.817 29.502 144.847 29.8125 144.876 30H143.654ZM147.152 30C147.199 29.7363 147.226 29.3555 147.231 28.8574C147.243 28.3594 147.249 27.7852 147.249 27.1348V23.25C147.249 22.5996 147.243 22.0254 147.231 21.5273C147.226 21.0234 147.199 20.6396 147.152 20.376H152.751V21.4658H148.497V24.4365H152.259V25.4912H148.497V28.9189H150.237C150.888 28.9189 151.436 28.9131 151.881 28.9014C152.332 28.8896 152.689 28.8604 152.953 28.8135V30H147.152Z" fill="black"/>
                            <path d="M164.711 21.5586C164.516 21.7539 164.535 22.0469 164.711 22.2422L167.074 24.4688H161.469C161.195 24.4688 161 24.6836 161 24.9375V25.5625C161 25.8359 161.195 26.0312 161.469 26.0312H167.074L164.711 28.2773C164.535 28.4727 164.535 28.7656 164.711 28.9609L165.141 29.3906C165.336 29.5664 165.629 29.5664 165.805 29.3906L169.613 25.582C169.789 25.4062 169.789 25.1133 169.613 24.918L165.805 21.1289C165.629 20.9531 165.336 20.9531 165.141 21.1289L164.711 21.5586Z" fill="black"/>
                        </svg>
                    </a>
                </div>
                <img id='about-picture' draggable='false' src={me} data-aos='fade-up-right' data-aos-duration='1300' data-aos-once='true'/>
            </div>
        </div>
    );
}
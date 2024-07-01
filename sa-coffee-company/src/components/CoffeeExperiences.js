import "./CoffeeExperiences.css"; // Make sure to create a corresponding CSS file for styles
import coffeePackageImage from "../assets/images/coffeeExperienceImage.png";
import React, { useState, useEffect } from 'react';

const CoffeeExperience = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
  return (
    <div className="coffee-experience">
      <h2>Providing unique coffee experiences</h2>
      <p>From floral and bright to bold and smooth coffee flavors</p>

      <div className="content">
        <div className="ContentInner">
          <div className="item">
            {/* <img src="/path/to/coffee-shop-icon.png" alt="Coffee Shop" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="50"
              viewBox="0 0 46 50"
              fill="none"
            >
              <g clip-path="url(#clip0_332_812)">
                <path
                  d="M1.61277 50C1.13312 49.7862 0.978793 49.4035 0.987135 48.8978C1.00486 47.9395 0.987135 46.9802 0.994434 46.0209C1.00278 45.3035 1.29265 45.0199 2.00693 45.0157C3.0288 45.0084 4.04964 45.0157 5.14138 45.0157V27.9744C5.14138 26.9202 5.37599 26.6876 6.43645 26.6876H13.1485C12.7033 26.2799 12.3143 25.9577 11.9567 25.5928C10.3477 23.965 9.42179 21.9953 9.34984 19.718C9.26329 16.7984 9.3123 13.8672 9.31543 10.9413C9.31543 10.3981 9.60739 10.1072 10.1496 10.0488C10.3116 10.0352 10.4741 10.031 10.6366 10.0362H19.2912C19.2912 9.32511 19.2912 8.64942 19.2912 7.97268C19.2912 6.95602 19.5425 6.70785 20.5592 6.70472C21.1932 6.70472 21.8272 6.70125 22.4611 6.69429C22.5175 6.68183 22.5724 6.6633 22.6248 6.63903V4.68912C22.6248 3.60156 22.8511 3.37633 23.9408 3.37633H32.7446C32.4661 2.22932 32.7101 1.29086 33.6069 0.57972C34.5787 -0.196072 37.3148 -0.188772 38.2992 0.57972C38.7093 0.892292 39.0119 1.32474 39.1651 1.81708C39.3183 2.30942 39.3145 2.83724 39.1542 3.32732C38.8174 4.35962 37.8967 5.03531 36.7434 5.03844C32.8092 5.04887 28.875 5.03844 24.9408 5.03844H24.336V6.70681H26.363C27.387 6.70681 27.6352 6.95289 27.6373 7.96956C27.6373 8.63377 27.6373 9.29695 27.6373 10.0373H36.3806C37.3732 10.0373 37.6162 10.2834 37.6162 11.2781C37.6162 13.7494 37.5953 16.2207 37.6214 18.6909C37.6558 21.89 36.5015 24.5135 33.9593 26.4958C33.9218 26.525 33.8926 26.5656 33.7748 26.6887H40.5911C41.5108 26.6887 41.7882 26.9629 41.7882 27.8784C41.7882 33.3701 41.7882 38.8646 41.7882 44.3619V45.0147H43.1656C43.7996 45.0147 44.4346 45.0042 45.0675 45.0209C45.5889 45.0355 45.909 45.315 45.9195 45.827C45.9434 46.9479 45.9278 48.0699 45.9247 49.1918C45.9247 49.6089 45.6442 49.8237 45.3188 50.001L1.61277 50ZM40.0896 44.9855V28.3862H6.84415V44.9855H40.0896ZM35.8571 11.738H11.0036C11.0036 14.4564 10.8795 17.1445 11.0338 19.816C11.2487 23.5313 14.3706 26.5646 18.0035 26.6501C21.6363 26.7356 25.2859 26.7325 28.925 26.6501C32.366 26.5729 35.562 23.7117 35.8154 20.2988C36.0292 17.4782 35.8571 14.6253 35.8571 11.738ZM44.2417 46.6997H2.69721V48.2993H44.2417V46.6997ZM20.994 9.99871H25.9366V8.40125H20.994V9.99871ZM35.9364 3.36798C36.2283 3.36798 36.5224 3.38467 36.8122 3.36798C37.0176 3.36049 37.2126 3.27656 37.3593 3.13265C37.5059 2.98874 37.5934 2.79523 37.6047 2.59011C37.6256 2.197 37.3566 1.79242 36.9374 1.75592C36.2752 1.70431 35.61 1.70431 34.9478 1.75592C34.5308 1.79137 34.2565 2.2043 34.3024 2.5974C34.3545 3.03952 34.6152 3.30959 35.0594 3.35338C35.3493 3.38988 35.6433 3.36798 35.9364 3.36798Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M23.4549 31.6792C26.9307 31.6792 30.4093 31.6792 33.8906 31.6792C34.8562 31.6792 35.1189 31.9325 35.1148 32.8835C35.1075 34.6562 35.1367 36.4288 35.0595 38.2014C35.0032 39.4819 34.5684 40.6623 33.3369 41.2775C32.7803 41.5367 32.173 41.6688 31.559 41.6644C26.4385 41.6949 21.318 41.6991 16.1975 41.6769C14.0401 41.6717 12.4854 40.4965 11.9536 38.4965C11.8578 38.0865 11.8126 37.6663 11.8191 37.2453C11.8035 35.7854 11.8097 34.3194 11.8191 32.8564C11.8191 31.9378 12.085 31.6812 13.0245 31.6812C16.4996 31.6785 19.9764 31.6778 23.4549 31.6792ZM33.5069 33.3757H13.4864C13.4864 34.7219 13.475 36.0357 13.4864 37.3495C13.5052 38.9835 14.5 40.0043 16.1402 40.0095C21.31 40.0262 26.4799 40.0262 31.6498 40.0095C32.6487 40.0095 33.2139 39.63 33.2973 38.654C33.4485 36.9137 33.4443 35.1598 33.5069 33.3757Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M23.4641 13.374H33.0218C33.8716 13.374 34.2731 13.6347 34.2793 14.1915C34.2856 14.7483 33.8695 15.0414 32.9988 15.0414C26.6424 15.0414 20.2866 15.0414 13.9315 15.0414C13.7368 15.0433 13.5422 15.03 13.3496 15.0017C12.894 14.9308 12.675 14.6274 12.6541 14.1936C12.6354 13.7974 12.9482 13.4637 13.3715 13.4043C13.5649 13.3804 13.7597 13.3707 13.9544 13.3751L23.4641 13.374Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M23.4384 37.5081C23.1621 37.5081 22.8847 37.5268 22.6105 37.5081C22.3965 37.4998 22.1939 37.4095 22.0446 37.256C21.8953 37.1024 21.8108 36.8974 21.8086 36.6833C21.8094 36.4689 21.8941 36.2634 22.0446 36.1108C22.195 35.9582 22.3993 35.8706 22.6136 35.8668C23.1819 35.8418 23.7522 35.8418 24.3195 35.8668C24.5337 35.872 24.7374 35.9607 24.887 36.114C25.0366 36.2674 25.1204 36.4732 25.1203 36.6874C25.117 36.9013 25.0316 37.1058 24.8817 37.2585C24.7319 37.4113 24.5291 37.5006 24.3153 37.5081C24.0244 37.5268 23.7303 37.5081 23.4384 37.5081Z"
                  fill="#B98D58"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_332_812">
                  <rect
                    width="44.9417"
                    height="50"
                    fill="white"
                    transform="translate(0.988281)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <h3>Coffee Shop</h3>
            <p>
              Our coffees are carefully selected for quality, flavor, and social
              impact
            </p>
          </div>
          <div className="item">
            {/* <img src="/path/to/coffee-machine-icon.png" alt="Coffee Machine" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <g clip-path="url(#clip0_332_823)">
                <path
                  d="M0 11.041V0.593847C0.261889 0.132546 0.660462 0 1.18111 0C17.0614 0.00974089 32.9421 0.0125242 48.8231 0.00834953C49.7214 0.00834953 49.9896 0.274484 49.9906 1.16891C49.9906 4.26025 49.9906 7.35159 49.9906 10.4429C49.9906 11.4302 49.7485 11.6682 48.7385 11.6703C48.0593 11.6703 47.3821 11.6703 46.7019 11.6703V45.0092H48.7886C49.7277 45.0092 49.9833 45.2576 49.9843 46.1833C49.9843 47.0621 49.9635 47.9408 49.9927 48.8186C50.0094 49.3404 49.8602 49.738 49.399 50H0V45.6062C0.236848 45.1522 0.606206 44.98 1.11851 45.0019C1.84262 45.0311 2.56985 45.0092 3.30335 45.0092V11.6703C2.55212 11.6703 1.82384 11.6609 1.09555 11.6703C0.594729 11.6818 0.208677 11.5315 0 11.041ZM5.00824 44.9601H19.3339C19.1106 44.1847 18.7673 43.4124 18.6787 42.6119C18.253 38.7973 17.8982 34.9754 17.5142 31.1566C17.4381 30.4031 17.7636 29.995 18.518 29.9939C22.8306 29.9877 27.1433 29.9877 31.4559 29.9939C32.2374 29.9939 32.5619 30.402 32.4722 31.1889C32.3929 31.8799 32.3313 32.5718 32.2562 33.3264C32.5891 33.3264 32.8822 33.3201 33.166 33.3264C34.9074 33.3692 36.2346 34.3179 36.5435 35.9251C36.7115 36.8049 36.6593 37.74 36.6123 38.6449C36.5638 39.3987 36.2483 40.1105 35.7225 40.6526C35.1966 41.1946 34.4948 41.5315 33.743 41.6027C32.9876 41.6653 32.2228 41.6141 31.4612 41.6141C31.3568 42.2779 31.3255 42.8519 31.1774 43.3946C31.0292 43.9373 30.7683 44.4383 30.5513 44.9758H44.9698V11.7037H33.3205V12.2683C33.3205 13.3756 33.3205 14.4819 33.3205 15.5882C33.3205 16.3845 33.0304 16.6642 32.2249 16.6736C31.7752 16.6799 31.3255 16.6736 30.8685 16.6736C30.832 17.2529 30.8007 17.7663 30.7642 18.2986H34.9899C34.9899 18.0325 34.9753 17.805 34.9899 17.5806C35.0347 16.9794 35.3227 16.682 35.9185 16.6788C38.0825 16.6684 40.2468 16.6684 42.4115 16.6788C42.9801 16.6788 43.3025 16.9794 43.3171 17.5472C43.3443 18.6208 43.3443 19.6947 43.3171 20.769C43.3036 21.3346 42.9822 21.6571 42.4219 21.6613C40.2426 21.6766 38.0623 21.6766 35.8809 21.6613C35.3342 21.6613 35.0462 21.3555 34.9961 20.8118C34.9711 20.5602 34.9961 20.3035 34.9961 20.0071C33.3351 20.0071 31.7439 20.0008 30.1527 20.0175C30.0213 20.0175 29.8648 20.1449 29.7657 20.2534C29.0791 20.9996 28.2528 21.535 27.2407 21.5945C25.8791 21.6749 24.5091 21.6989 23.1464 21.6404C22.1291 21.6049 21.1613 21.1919 20.4315 20.482C19.7018 19.7721 19.2622 18.816 19.1983 17.7997C19.1805 17.4334 19.1461 17.0692 19.1179 16.6788H18.3959C18.1517 16.6788 17.9076 16.6872 17.6655 16.6788C16.9821 16.6517 16.691 16.3657 16.6754 15.6853C16.666 15.2949 16.6754 14.9046 16.6754 14.5143V11.7037H5.00824V44.9601ZM48.3087 1.70848H1.70072V9.96702H48.3087V1.70848ZM19.2911 31.693C19.2782 31.7489 19.2705 31.8059 19.2682 31.8632C19.6219 35.4398 19.9651 39.0165 20.3376 42.591C20.4952 44.1043 21.5386 45.0008 23.0755 45.0081C24.3275 45.0137 25.5796 45.0137 26.8317 45.0081C28.5313 45.0081 29.5299 44.0365 29.6843 42.3301C29.9086 39.8524 30.1757 37.3789 30.4219 34.9034C30.5263 33.8409 30.6306 32.7785 30.735 31.693H19.2911ZM48.3275 48.3124V46.7104H1.6882V48.3124H48.3275ZM18.3636 14.9766H31.6333V11.7037H18.3636V14.9766ZM20.8677 16.7049C20.6663 18.6555 21.6356 19.9403 23.3499 20.0029C24.4527 20.0426 25.5598 20.0447 26.6616 20.0029C28.3957 19.9351 29.5059 18.4165 29.1 16.706L20.8677 16.7049ZM31.5968 39.962C32.3272 39.962 32.9761 40.0121 33.6157 39.9495C34.3607 39.8754 34.9033 39.2523 34.9648 38.504C34.9951 38.1481 34.9648 37.7891 34.9899 37.4322C35.1318 35.374 34.1666 34.9013 32.4576 34.9868C32.1237 35.0046 32.0517 35.1392 32.0308 35.4241C31.986 36.0232 31.9119 36.6202 31.8545 37.2182C31.7679 38.121 31.6855 39.0238 31.5968 39.962ZM41.631 19.9873V18.3832H36.7021V19.9904L41.631 19.9873Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M25.0003 8.33261C23.7159 8.33261 22.4315 8.33261 21.1471 8.33261C20.2633 8.33261 20.0067 8.07795 19.9994 7.21066C19.9994 6.25153 19.9931 5.2924 19.9994 4.33327C20.0056 3.65802 20.3124 3.34075 20.9833 3.33866C23.6502 3.33031 26.3164 3.33031 28.9819 3.33866C29.6601 3.33866 29.9699 3.65176 29.9762 4.32388C29.9846 5.33206 29.9846 6.34094 29.9762 7.35052C29.971 8.03412 29.6809 8.32843 28.9923 8.33365C27.6662 8.33887 26.3327 8.33261 25.0003 8.33261ZM21.6938 6.63039H28.2755V5.02418H21.6938V6.63039Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M6.64842 8.32534C6.32242 8.32522 5.99967 8.26053 5.69879 8.13502C5.3979 8.00951 5.12484 7.82565 4.89534 7.59406C4.66585 7.36246 4.48446 7.08771 4.36165 6.78565C4.23883 6.48358 4.17702 6.16019 4.17978 5.83411C4.18248 5.17592 4.44408 4.54525 4.908 4.07847C5.37192 3.61169 6.00087 3.34632 6.65886 3.33975C8.02465 3.33348 9.19011 4.5097 9.16298 5.8696C9.15011 6.52718 8.87918 7.15332 8.4087 7.6128C7.93822 8.07227 7.30595 8.32821 6.64842 8.32534ZM6.60669 6.65548C6.71609 6.6634 6.82597 6.64946 6.92993 6.61447C7.03389 6.57948 7.12985 6.52414 7.21221 6.45167C7.29456 6.3792 7.36167 6.29105 7.40962 6.19237C7.45757 6.09369 7.48539 5.98645 7.49148 5.8769C7.49366 5.66405 7.41638 5.45804 7.27473 5.29918C7.13309 5.14032 6.93729 5.04004 6.72563 5.01796C6.51387 5.00698 6.30587 5.07703 6.14386 5.21388C5.98186 5.35073 5.87799 5.54412 5.85336 5.75479C5.84068 5.86384 5.85037 5.97433 5.88186 6.0795C5.91335 6.18467 5.96596 6.28231 6.03649 6.36643C6.10701 6.45055 6.19395 6.51939 6.292 6.56873C6.39004 6.61808 6.49712 6.64688 6.60669 6.65339V6.65548Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M41.227 4.99704C40.6918 4.99704 40.1565 5.00852 39.6223 4.99704C39.0881 4.98556 38.7698 4.65889 38.7584 4.19863C38.7527 4.08803 38.77 3.97746 38.809 3.87381C38.848 3.77017 38.908 3.67569 38.9851 3.59626C39.0623 3.51684 39.155 3.45417 39.2574 3.41218C39.3599 3.37019 39.4699 3.34978 39.5805 3.35222C40.6824 3.32508 41.7852 3.32717 42.8881 3.35222C42.9987 3.35056 43.1086 3.37093 43.2114 3.41214C43.3141 3.45336 43.4076 3.5146 43.4864 3.59229C43.5653 3.66999 43.6279 3.76259 43.6706 3.86472C43.7133 3.96684 43.7353 4.07644 43.7353 4.18715C43.7353 4.65471 43.3743 4.99182 42.8328 5.00434C42.2913 5.01687 41.7623 4.99704 41.227 4.99704Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M41.2135 8.33054C40.6918 8.33054 40.1753 8.34307 39.6578 8.33054C39.0965 8.31384 38.7626 7.9997 38.7574 7.51857C38.7522 7.03744 39.0861 6.69094 39.638 6.68364C40.7078 6.65998 41.778 6.65998 42.8485 6.68364C43.3879 6.69616 43.7416 7.07188 43.7322 7.52901C43.7229 7.98613 43.3754 8.31906 42.8193 8.33472C42.2861 8.34202 41.7509 8.33054 41.2135 8.33054Z"
                  fill="#B98D58"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_332_823">
                  <rect width="50" height="50" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <h3>Coffe Machine</h3>
            <p>
              Our coffees are carefully selected for quality, flavor, and social
              impact
            </p>
          </div>
          <div className="item">
            {/* <img src="/path/to/high-quality-icon.png" alt="High Quality" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="50"
              viewBox="0 0 44 50"
              fill="none"
            >
              <g clip-path="url(#clip0_332_834)">
                <path
                  d="M10.4147 50.0002C9.9336 49.6965 9.81462 49.2822 9.88037 48.7134C10.3072 45.0471 10.7007 41.3767 11.1056 37.7073C11.234 36.5437 11.3613 35.3801 11.4969 34.2175C11.5658 33.6289 11.8591 33.3638 12.4623 33.3304C12.671 33.3179 12.8797 33.3304 13.1636 33.3304C13.1636 32.6927 13.172 32.078 13.1542 31.4685C13.1542 31.3809 13.0436 31.2755 12.958 31.215C12.2828 30.737 12.0031 30.0513 11.8904 29.2655C11.3373 25.4041 10.7775 21.5426 10.2112 17.6812C10.156 17.453 10.0255 17.25 9.84072 17.1052C6.95544 14.7208 4.06356 12.3448 1.16507 9.97721C0.848856 9.72257 0.584819 9.44079 0.689181 8.99203C0.793543 8.54327 1.11602 8.33455 1.69941 8.33246C3.79918 8.32724 5.89895 8.33246 7.99768 8.33246C8.11128 8.3241 8.22534 8.3241 8.33894 8.33246C8.86075 8.41178 9.11122 8.2521 9.29594 7.69481C9.84176 6.03754 11.4562 5.00957 13.3661 4.99809C14.944 4.98869 16.5209 4.99809 18.1907 4.99809C18.0759 3.27298 18.4329 1.73572 19.9367 0.704619C20.7601 0.141062 21.6921 -0.0447021 22.6762 0.0168717C23.9286 0.0961871 24.9555 0.619042 25.7247 1.62301C26.4802 2.60923 26.5794 3.76557 26.5199 4.99809C28.0853 4.99809 29.5944 4.98348 31.1025 5.00644C31.6058 5.00411 32.1074 5.0644 32.5959 5.18594C34.0152 5.56999 34.9785 6.48212 35.4293 7.88579C35.5472 8.25419 35.7174 8.34707 36.0816 8.34081C37.432 8.3189 38.7835 8.3262 40.134 8.33455C42.0313 8.34081 43.0572 9.38548 43.1438 11.288C43.3431 15.905 43.5706 20.5199 43.7867 25.1348C43.8587 26.6794 43.9474 28.2229 43.9954 29.7674C44.058 31.6126 42.6314 33.2114 40.8645 33.3158C39.1613 33.4118 37.5406 31.9591 37.3611 30.1703C37.3409 29.9434 37.3322 29.7156 37.335 29.4878C37.335 24.3288 37.335 19.1705 37.335 14.0129V13.346C36.6243 13.346 35.949 13.3325 35.2759 13.3627C35.1945 13.3627 35.0724 13.5892 35.0526 13.7228C34.7113 16.0188 34.3826 18.3241 34.0517 20.6253C33.6259 23.585 33.1987 26.5454 32.7702 29.5065C32.7264 29.8381 32.6173 30.1576 32.4493 30.4467C32.2813 30.7358 32.0576 30.9888 31.7913 31.1909C31.6446 31.3243 31.5537 31.508 31.5366 31.7055C31.5032 32.221 31.5251 32.7397 31.5251 33.297C31.7234 33.3085 31.88 33.3231 32.0365 33.3262C32.8902 33.3398 33.1323 33.5401 33.2314 34.399C33.4464 36.24 33.6426 38.083 33.8482 39.925C34.1627 42.7533 34.4758 45.5815 34.7875 48.4097C34.8198 48.6998 34.9002 49.0233 34.8094 49.278C34.7113 49.5514 34.4379 49.7622 34.2406 50.0002H10.4147ZM12.1263 18.9732C12.1419 19.1684 12.144 19.2321 12.1523 19.2957C12.6241 22.5936 13.0965 25.8911 13.5696 29.1882C13.6604 29.8092 13.9035 29.9908 14.5735 29.9918C19.7631 29.9918 24.9531 29.9918 30.1434 29.9918C30.8353 29.9918 31.0367 29.8217 31.1369 29.1329C31.9753 23.3589 32.8119 17.5845 33.6468 11.8098C33.7324 11.2233 33.8034 10.6347 33.8816 10.0357H15.3584C15.4825 11.1972 15.5973 12.3108 15.7205 13.4233C15.9866 15.8309 16.26 18.2375 16.5241 20.6451C16.5846 21.1972 16.2674 21.6554 15.7737 21.6366C15.4878 21.607 15.217 21.4937 14.9952 21.311C14.0538 20.5763 13.1375 19.804 12.1263 18.9732ZM31.6243 35.0284H13.0874C12.7796 37.7981 12.4759 40.5397 12.1638 43.3408H12.79C16.1108 43.3408 19.4313 43.3408 22.7514 43.3408C22.9463 43.3311 23.1418 43.3409 23.3348 43.37C23.5144 43.3973 23.6786 43.4875 23.7979 43.6245C23.9172 43.7616 23.9838 43.9366 23.986 44.1183C24.0088 44.2917 23.9687 44.4675 23.873 44.6138C23.7772 44.7601 23.6322 44.8672 23.4642 44.9156C23.2306 44.9825 22.988 45.0125 22.7451 45.0043C19.3596 45.0092 15.9741 45.0092 12.5886 45.0043H11.9781C11.8528 46.1231 11.7307 47.196 11.6065 48.3064H33.1052C32.6084 43.872 32.1179 39.4658 31.6243 35.0284ZM35.3657 11.6648H37.7013C38.7898 11.6648 39.0069 11.887 39.0069 12.9922C39.0069 18.4887 39.0069 23.9879 39.0069 29.4898C39.0007 29.6848 39.0067 29.88 39.0246 30.0743C39.129 30.9092 39.9722 31.6658 40.7602 31.6512C41.5116 31.6366 42.2212 30.93 42.3204 30.0931C42.3339 29.9309 42.3339 29.7679 42.3204 29.6057C42.2379 27.867 42.1492 26.1283 42.0689 24.3876C41.865 19.9682 41.6625 15.5488 41.4615 11.1294C41.4281 10.4228 41.0774 10.0273 40.3698 10.0127C38.8733 9.98139 37.3757 9.99391 35.8823 10.0127C35.8127 10.0262 35.7476 10.0568 35.693 10.1018C35.6383 10.1468 35.5957 10.2048 35.5692 10.2705C35.4732 10.7057 35.4325 11.1555 35.3657 11.6648ZM14.5976 18.8449C14.5976 18.6069 14.6111 18.4619 14.5976 18.3231C14.3085 15.6921 14.0079 13.0611 13.7313 10.4291C13.6917 10.0565 13.532 9.99183 13.2001 9.99391C10.2415 10.0043 7.28279 9.99913 4.32934 10.0012C4.21245 10.0012 4.09452 10.0252 3.88058 10.0482L14.5976 18.8449ZM10.829 8.29385H33.795C33.7838 8.21883 33.7652 8.14508 33.7397 8.07364C33.6894 7.97179 33.6322 7.87346 33.5685 7.77934C32.9987 6.95384 32.1847 6.65745 31.212 6.65849C25.2912 6.66406 19.3711 6.66614 13.4517 6.66475C13.1592 6.65856 12.867 6.68729 12.5813 6.75033C11.7568 6.94966 11.1849 7.45269 10.829 8.29385ZM14.8616 33.2897H29.8324V31.6898H14.8616V33.2897ZM24.8376 4.96469C24.9419 3.80731 24.8679 2.72299 23.7846 2.05507C22.8349 1.4696 21.8142 1.48003 20.8749 2.08533C19.8219 2.76369 19.7791 3.83549 19.8887 4.96469H24.8376Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M28.1758 43.3437C28.7112 43.3437 29.2466 43.3302 29.7819 43.3437C30.3173 43.3573 30.6314 43.6693 30.645 44.14C30.6524 44.2505 30.6368 44.3613 30.599 44.4654C30.5612 44.5694 30.5021 44.6645 30.4255 44.7444C30.3489 44.8243 30.2564 44.8874 30.1541 44.9296C30.0517 44.9718 29.9417 44.9922 29.831 44.9895C28.7279 45.0198 27.6237 45.0177 26.5217 44.9895C26.411 44.992 26.3009 44.9725 26.1978 44.932C26.0948 44.8916 26.0008 44.831 25.9213 44.7539C25.8419 44.6768 25.7786 44.5847 25.7351 44.4829C25.6916 44.381 25.6688 44.2716 25.668 44.1609C25.668 43.6923 26.0259 43.3656 26.5697 43.3364C26.602 43.3364 26.6344 43.3364 26.6667 43.3364H28.1758V43.3437Z"
                  fill="#B98D58"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_332_834">
                  <rect
                    width="43.3312"
                    height="50"
                    fill="white"
                    transform="translate(0.666016)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <h3>High Quality</h3>
            <p>
              Our coffees are carefully selected for quality, flavor, and social
              impact
            </p>
          </div>
        </div>
        {windowWidth > 986 ? (
          <div className="images">
            <img
              src={coffeePackageImage}
              alt="Coffee Package"
              className="coffee-package"
            />
          </div>
        ): (windowWidth > 716) ? <div style={{width: "100px"}}></div> : ""}
        <div className="ContentInner">
          <div className="item">
            {/* <img src="/path/to/perfect-cup-icon.png" alt="The Perfect Cup" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M0 43.9457C0.227543 43.4791 0.604346 43.3319 1.11371 43.333C4.72622 43.3466 8.33873 43.3403 11.9523 43.3403H12.5253C12.5483 43.2923 12.5817 43.2526 12.5723 43.2359C11.8917 42.0564 11.9742 40.7213 11.827 39.4405C11.4231 35.904 11.064 32.3653 10.6799 28.8163C10.3097 25.3417 9.93883 21.8657 9.56725 18.3883C9.19358 14.8956 8.81782 11.4026 8.43997 7.90919C8.1999 5.6785 7.95148 3.45094 7.72394 1.21399C7.63209 0.312108 7.94 0 8.85644 0H41.3241C42.2635 0 42.5579 0.326722 42.4629 1.25261C42.3658 2.20355 42.2541 3.15344 42.1498 4.1691H42.7374C44.2509 4.1691 45.7644 4.16284 47.2778 4.1691C48.9907 4.18163 49.9969 5.20042 49.9969 6.92067C49.9969 12.8608 49.9969 18.8024 49.9969 24.7453C49.9969 26.4781 48.9771 27.499 47.2309 27.5063C44.9199 27.5157 42.609 27.5063 40.2981 27.5063H39.6541C39.5497 28.4259 39.4453 29.3246 39.3545 30.2203C38.9767 33.7296 38.5936 37.238 38.2293 40.7484C38.1385 41.6211 38.0853 42.4948 37.505 43.3382H48.7318C49.7985 43.3382 50.0981 43.6775 49.9729 44.7369C49.6597 47.4259 47.7809 49.4144 45.0869 49.9154C45.0276 49.9348 44.9714 49.9626 44.9199 49.9979H5.07797C5.00959 49.9609 4.93752 49.9312 4.86295 49.9092C3.06139 49.5804 1.67004 48.6367 0.792226 47.0397C0.432123 46.3862 0.260944 45.6294 0.0041752 44.9196L0 43.9457ZM9.4587 1.68998C9.53072 2.37891 9.59752 3.03862 9.66745 3.69729C10.0056 6.86778 10.3442 10.0376 10.683 13.2067C11.031 16.4252 11.3761 19.643 11.7185 22.8601L12.7455 32.4175C13.0524 35.2797 13.3802 38.1399 13.6589 41.0052C13.8154 42.618 14.545 43.3392 16.1639 43.3403H29.8374C31.3185 43.3403 32.7996 43.3507 34.2807 43.3403C35.4946 43.3288 36.3683 42.5752 36.4956 41.4332C36.7733 38.8789 37.0321 36.3184 37.3025 33.7672C37.6393 30.5807 37.9781 27.3946 38.3191 24.2088C38.6622 21.0077 39.007 17.8065 39.3535 14.6054C39.7014 11.3876 40.0466 8.16945 40.3889 4.95094C40.4985 3.86848 40.6133 2.79019 40.7281 1.68998H9.4587ZM48.2089 45.0438H1.75146C1.83554 45.3216 1.93413 45.5948 2.04684 45.8622C2.86934 47.5689 4.26696 48.3361 6.12801 48.3361H43.8636C43.9941 48.3361 44.1246 48.3361 44.254 48.3309C46.2393 48.2255 47.758 46.9791 48.2089 45.0438ZM41.7855 7.50835C42.4952 7.50835 43.1424 7.50835 43.7916 7.50835C45.6109 7.50835 46.5962 8.48956 46.5973 10.3048C46.5973 13.9812 46.5973 17.6573 46.5973 21.333C46.5973 23.1795 45.6172 24.1576 43.7707 24.1639C42.6487 24.1639 41.5266 24.1566 40.4046 24.1733C40.2616 24.1733 40.0152 24.2777 39.9975 24.3737C39.9119 24.8413 39.8858 25.3205 39.8357 25.8278C42.4284 25.8278 44.9502 25.8392 47.4668 25.8194C48.0575 25.8194 48.33 25.4582 48.331 24.8069C48.331 18.8222 48.331 12.8375 48.331 6.85282C48.331 6.15031 48.0179 5.85073 47.3123 5.84551C46.2226 5.8382 45.1329 5.84551 44.0432 5.84551H41.9723C41.9097 6.39979 41.8554 6.91336 41.7855 7.50835ZM41.607 9.1785C41.13 13.6347 40.6592 18.0376 40.1833 22.4937H43.7238C44.6976 22.4937 44.9325 22.2589 44.9325 21.2881C44.9325 17.6451 44.9325 14.0017 44.9325 10.358C44.9325 10.2276 44.9325 10.0971 44.9241 9.96764C44.8803 9.51148 44.5985 9.19833 44.1423 9.1858C43.3167 9.1618 42.4879 9.1785 41.607 9.1785Z"
                fill="#B98D58"
              ></path>
              <path
                d="M41.6072 9.17851C42.4881 9.17851 43.3158 9.1618 44.1425 9.18581C44.5986 9.19834 44.8805 9.51149 44.9243 9.96765C44.9368 10.0971 44.9326 10.2276 44.9326 10.358C44.9326 14.0011 44.9326 17.6444 44.9326 21.2881C44.9326 22.2589 44.6978 22.4917 43.7239 22.4937H40.1855C40.6594 18.0376 41.1302 13.6347 41.6072 9.17851Z"
                fill="white"
              ></path>
              <path
                d="M30.8705 19.3006C30.6356 22.6232 29.4676 25.5063 26.591 27.4593C24.5849 28.8163 22.1497 28.5637 20.7458 26.9186C19.7313 25.7286 19.2971 24.3006 19.2846 22.7724C19.2428 19.9436 20.1655 17.4321 22.0892 15.3507C23.2666 14.0752 24.7446 13.3038 26.5325 13.3674C28.3205 13.4311 29.8392 14.761 30.4707 16.7735C30.5889 17.1447 30.6789 17.5244 30.74 17.9092C30.8089 18.3518 30.8266 18.8079 30.8705 19.3006ZM21.251 24.4603C24.7748 22.3079 26.4918 19.0939 27.1473 15.1033C26.6254 15.1033 26.0942 14.999 25.6171 15.1221C24.111 15.4979 23.0881 16.5115 22.2969 17.8058C21.0402 19.8633 20.6916 22.0543 21.251 24.4603ZM22.1101 25.9217C22.7008 26.4864 23.3156 26.7484 24.0337 26.6357C24.6714 26.5443 25.2839 26.3245 25.8342 25.9895C26.3844 25.6545 26.861 25.2113 27.235 24.6868C28.3925 23.1159 29.0825 21.3726 29.1388 19.4102C29.167 18.452 29.07 17.5042 28.5272 16.5365C27.7496 20.6357 25.5796 23.6879 22.1101 25.9175V25.9217Z"
                fill="#B98D58"
              ></path>
              <path
                d="M24.9945 40.0052H32.9459C33.7528 40.0052 34.1452 40.2703 34.1598 40.8163C34.1745 41.3622 33.7507 41.6722 32.9303 41.6722H17.0764C16.2507 41.6722 15.8322 41.3841 15.8384 40.8257C15.8447 40.2672 16.2455 40.0052 17.091 40.0042L24.9945 40.0052Z"
                fill="#B98D58"
              ></path>
            </svg>
            <h3>The Perfect Cup</h3>
            <p>
              Our coffees are carefully selected for quality, flavor, and social
              impact
            </p>
          </div>
          <div className="item">
            {/* <img src="/path/to/barista-coffee-icon.png" alt="Barista Coffee" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
            >
              <g clip-path="url(#clip0_332_793)">
                <path
                  d="M0 44.0418C0.226551 43.5083 0.632674 43.3297 1.20375 43.3318C5.38712 43.3454 9.57154 43.3391 13.7549 43.3391H14.3385C14.3057 43.251 14.2648 43.1661 14.2164 43.0854C12.7547 41.2135 12.0793 39.0336 11.6168 36.743C10.0309 28.8879 8.40537 21.041 6.7955 13.1911C6.74943 13.0016 6.71457 12.8095 6.6911 12.6158C6.65038 12.1137 6.92078 11.7712 7.42191 11.6888C7.58265 11.6656 7.745 11.6555 7.90738 11.6585C19.3018 11.6585 30.6962 11.6585 42.0905 11.6585H42.1887C43.1554 11.67 43.4718 12.0761 43.2473 13.0282C42.8791 14.5943 42.5092 16.1603 42.1375 17.7263C42.0926 17.9132 42.0613 18.1032 42.0143 18.337C43.2671 18.337 44.4897 18.337 45.7081 18.337C46.3105 18.337 46.9139 18.3235 47.5152 18.337C48.9643 18.3861 49.976 19.4166 50.0084 20.8667C50.0282 21.8261 50.0084 22.7877 50.0084 23.7482C50.0084 26.5148 49.9562 29.2815 50.0261 32.0492C50.0762 34.0276 48.7827 34.9077 47.2073 34.9442C44.4093 35.01 41.6092 34.9818 38.8092 34.9912C38.0784 34.9912 38.0784 34.9912 37.9103 35.722C37.5271 37.383 37.2473 39.0837 36.3965 40.5902C35.8745 41.5194 35.2481 42.3901 34.629 43.3433H35.1447C39.6538 43.3433 44.1629 43.3611 48.672 43.3308C49.8121 43.3224 50.1159 43.8737 49.9749 44.855C49.5907 47.5559 47.7919 49.4268 45.1015 49.9217C45.0411 49.9406 44.9832 49.9669 44.9292 50H5.07914C5.00831 49.9643 4.93418 49.9357 4.85781 49.9143C3.06523 49.6064 1.67878 48.6751 0.798672 47.0955C0.427003 46.4284 0.25996 45.6495 0 44.9208V44.0418ZM41.4401 13.3717H8.55049C8.5839 13.5805 8.60478 13.7371 8.63714 13.8937C10.2213 21.6166 11.8047 29.3389 13.3874 37.0604C13.7486 38.8353 14.327 40.5057 15.4347 41.9673C16.1238 42.8725 16.9496 43.3767 18.1648 43.3621C22.3962 43.3109 26.6287 43.335 30.8601 43.3485C31.5992 43.3643 32.3152 43.0904 32.8552 42.5854C34.306 41.2812 35.3158 39.5585 35.745 37.6555C37.3758 30.7587 38.9982 23.8606 40.6122 16.961C40.8857 15.7782 41.1572 14.5932 41.4401 13.3717ZM1.77483 45.0231C2.21436 47.083 3.85033 48.3358 6.05529 48.3358C18.6879 48.3358 31.3205 48.3358 43.9531 48.3358C44.2785 48.3358 44.6035 48.3107 44.925 48.2606C46.5902 47.9965 48.0571 46.5484 48.1991 45.0242L1.77483 45.0231ZM38.4856 33.2936C38.6359 33.3061 38.7309 33.3218 38.8259 33.3218C41.4464 33.3218 44.0669 33.3218 46.6863 33.3166C46.9787 33.3126 47.2699 33.2776 47.5549 33.2122C48.174 33.0744 48.3442 32.8551 48.3442 32.235C48.3442 28.5246 48.3442 24.8141 48.3442 21.1037C48.3442 20.28 48.0592 20.0054 47.2167 20.0043C45.8333 20.0043 44.45 19.9981 43.0667 20.0043C42.5844 20.0043 41.958 19.8655 41.6604 20.1087C41.3629 20.352 41.3754 21.0014 41.2564 21.4722C41.2502 21.5365 41.2502 21.6011 41.2564 21.6654C42.1615 21.6654 43.0688 21.6654 43.9708 21.6654C45.6412 21.6748 46.6696 22.7031 46.6769 24.3798C46.6832 25.9103 46.6769 27.4398 46.6769 28.9735C46.6769 29.5915 46.538 30.1678 46.1549 30.6648C45.6047 31.3758 44.8666 31.6629 43.9802 31.6566C42.2899 31.6451 40.5986 31.6566 38.875 31.6566C38.7476 32.1984 38.6286 32.7163 38.4856 33.2936ZM39.255 29.982C40.9421 29.982 42.5656 29.9924 44.188 29.9757C44.6776 29.9757 44.995 29.6437 45.0013 29.1186C45.0214 27.4774 45.0214 25.8366 45.0013 24.1961C44.996 23.7471 44.7486 23.3734 44.2757 23.3609C43.1272 23.3243 41.9788 23.3494 40.8148 23.3494L39.255 29.982Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M23.3486 9.08082C23.3997 8.40888 23.7132 7.78405 24.2214 7.34149C25.2915 6.40919 25.2884 6.36638 24.2287 5.42781C23.0615 4.39424 23.073 2.80629 24.2464 1.77271C24.6212 1.44176 25.0044 1.1463 25.0817 0.571051C25.1349 0.168061 25.6037 -0.0553585 25.9879 0.0198106C26.1908 0.0568043 26.3723 0.168653 26.4967 0.333199C26.621 0.497746 26.679 0.702988 26.6592 0.908268C26.6379 1.24123 26.5497 1.56648 26.4 1.86461C26.2502 2.16274 26.0419 2.42762 25.7874 2.64342C24.7236 3.5632 24.7246 3.64463 25.777 4.55502C26.9442 5.56562 26.9358 7.2016 25.7655 8.21429C25.3844 8.54211 25.0169 8.84905 24.9303 9.41386C24.8655 9.84087 24.4083 10.0476 23.9771 9.95153C23.7856 9.90535 23.617 9.79217 23.5017 9.63247C23.3864 9.47277 23.3321 9.27709 23.3486 9.08082Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M16.6936 9.00051C16.7209 8.67945 16.8115 8.36698 16.9602 8.08116C17.1089 7.79533 17.3129 7.54183 17.5602 7.33531C18.6167 6.43119 18.6157 6.34767 17.5602 5.42371C16.4118 4.42668 16.4118 2.78444 17.5529 1.79367C17.9433 1.45541 18.3453 1.15264 18.4142 0.557555C18.4601 0.166049 18.9456 -0.0625902 19.3287 0.016755C19.5384 0.0588767 19.7239 0.179797 19.847 0.354604C19.9702 0.529411 20.0216 0.74479 19.9906 0.956369C19.9082 1.64438 19.6284 2.23111 19.0813 2.67482C19.0562 2.6957 19.0312 2.71658 19.0072 2.7385C18.1093 3.51943 18.1104 3.69273 19.0072 4.46739C20.3164 5.59493 20.3216 7.14112 19.0249 8.28118C18.6982 8.56829 18.3672 8.83242 18.2889 9.3252C18.2106 9.81797 17.8149 10.0351 17.3555 9.95787C16.9327 9.88792 16.6769 9.54549 16.6936 9.00051Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M33.3252 6.39665C33.313 6.74486 33.2275 7.08659 33.0745 7.39959C32.9214 7.71258 32.7041 7.98982 32.4367 8.21323C32.0567 8.54001 31.6725 8.83964 31.6015 9.41281C31.5524 9.83041 31.0795 10.0444 30.6473 9.95256C30.4484 9.90434 30.2744 9.78424 30.1587 9.61539C30.0431 9.44654 29.994 9.24089 30.0209 9.03801C30.0903 8.35079 30.4279 7.71868 30.9605 7.27884C31.9429 6.44363 31.9366 6.32878 30.9761 5.49566C29.7035 4.39422 29.7045 2.8115 30.9855 1.7111C31.3478 1.3979 31.6631 1.09513 31.7508 0.576259C31.8207 0.158652 32.1768 -0.0240505 32.5985 0.00935798C32.796 0.0249496 32.9801 0.11488 33.1139 0.260989C33.2476 0.407099 33.3208 0.598501 33.3189 0.796546C33.3302 1.13262 33.2653 1.46688 33.1289 1.77427C32.9926 2.08165 32.7884 2.35417 32.5317 2.57137C31.4627 3.47549 31.3217 3.6488 32.5474 4.6594C33.0694 5.08641 33.2939 5.70238 33.3252 6.39665Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M30.3809 30.1971C30.2838 32.5263 29.3557 35.0476 26.9524 36.8788C24.3904 38.829 21.1863 38.1316 19.6871 35.2741C18.524 33.0577 18.5125 30.7504 19.2267 28.4128C19.7414 26.7299 20.6267 25.2703 22.0455 24.1835C24.8852 22.012 28.2814 22.9067 29.7096 26.1964C30.1836 27.2853 30.4008 28.4254 30.3809 30.1971ZM21.5872 35.1895C24.3361 31.8059 24.9802 28.5935 24.4676 24.7609C22.4067 25.5011 21.3439 27.0984 20.7697 29.0507C20.1423 31.1837 20.1955 33.2706 21.5861 35.1895H21.5872ZM22.9507 36.1427C23.9874 36.4486 24.8226 36.2847 25.5962 35.7825C27.4441 34.5809 28.3524 32.8071 28.6364 30.6773C28.8598 29.0006 28.6541 27.4001 27.6602 25.9709C27.2951 25.4312 26.7657 25.0237 26.1506 24.8089C26.7143 29.0747 25.6755 32.8217 22.9496 36.1427H22.9507Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M18.3603 16.6678C20.4421 16.6678 22.5245 16.6678 24.6077 16.6678C24.7863 16.6607 24.9651 16.6695 25.1422 16.6939C25.5421 16.7659 25.7791 17.0133 25.8093 17.4247C25.8427 17.8496 25.6506 18.1555 25.2351 18.2682C25.0138 18.3198 24.7868 18.3423 24.5597 18.3351C20.4107 18.3392 16.2618 18.3392 12.1129 18.3351C11.8862 18.3413 11.6596 18.3188 11.4385 18.2682C11.2602 18.2305 11.1023 18.1281 10.9951 17.9809C10.8879 17.8336 10.8391 17.6518 10.858 17.4706C10.8736 17.053 11.1096 16.7732 11.5335 16.696C11.7105 16.6707 11.8894 16.6616 12.068 16.6688C14.1644 16.6667 16.2618 16.6664 18.3603 16.6678Z"
                  fill="#B98D58"
                ></path>
                <path
                  d="M30.0228 16.6719C30.5573 16.6719 31.0929 16.6573 31.6275 16.6719C32.162 16.6865 32.4856 17.0164 32.5002 17.4695C32.5028 17.5803 32.483 17.6904 32.442 17.7933C32.401 17.8963 32.3397 17.9899 32.2618 18.0687C32.1838 18.1474 32.0908 18.2096 31.9883 18.2516C31.8858 18.2936 31.7758 18.3145 31.665 18.3131C30.5626 18.3437 29.4601 18.3437 28.3576 18.3131C27.8137 18.2984 27.4973 17.9184 27.5224 17.435C27.5474 16.9725 27.869 16.6928 28.4119 16.6625C28.4442 16.6625 28.4766 16.6625 28.509 16.6625H30.0176L30.0228 16.6719Z"
                  fill="#B98D58"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_332_793">
                  <rect width="50.0282" height="50" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <h3>Barista Coffee</h3>
            <p>
              Our coffees are carefully selected for quality, flavor, and social
              impact
            </p>
          </div>
          <div className="item">
            {/* <img src="/path/to/supreme-beans-icon.png" alt="Supreme Beans" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="51"
              viewBox="0 0 57 51"
              fill="none"
            >
              <path
                d="M0 33.8836C0.0887049 33.2058 0.1644 32.5257 0.267297 31.8502C1.02188 26.8684 3.16144 22.5133 6.51685 18.7395C9.52927 15.3517 13.1638 12.9044 17.7055 11.9243C19.1627 11.6049 20.6646 11.5322 22.1467 11.7092C22.9911 11.8115 22.9746 11.8255 23.1674 10.9931C24.0284 7.15648 26.162 4.17208 29.5411 2.12938C32.4897 0.347112 35.7351 0.0936645 39.0692 0.838893C43.1295 1.74572 46.4648 3.89305 49.2939 6.82049C52.2673 9.8979 54.4057 13.4822 55.5624 17.5769C56.848 22.1366 57.0526 26.7254 55.2017 31.1933C53.3211 35.7275 49.929 38.5689 44.9202 39.2781C42.2212 39.6594 39.6168 39.0758 37.1141 38.0899C35.3802 37.4098 33.8108 36.446 32.3122 35.2334C32.194 35.5066 32.0982 35.7298 32.0047 35.9542C30.1431 40.4209 27.3294 44.1749 23.327 47.0059C20.162 49.2439 16.673 50.61 12.7002 50.4809C8.67889 50.346 5.51271 48.5812 3.10467 45.4817C1.23241 43.0728 0.36783 40.2802 0.11236 37.2854C0.0958014 37.09 0.0437611 36.8982 0.00827909 36.7041L0 33.8836ZM27.8522 16.1946C27.8131 16.4085 27.7859 16.5631 27.7564 16.7166C27.7221 16.8945 27.6984 17.0747 27.6499 17.2479C26.848 20.166 25.0148 22.1308 22.0993 23.1458C18.9746 24.2316 17.3341 27.0916 17.8415 30.2993C18.0024 31.32 18.0781 32.4094 17.9066 33.4174C17.3389 36.6552 15.3601 38.7758 12.2129 39.8512C11.0214 40.2521 9.97757 40.9913 9.21348 41.9753C7.9728 43.5448 7.74689 45.3213 8.08043 47.207C8.10408 47.343 8.28504 47.493 8.43524 47.5628C10.8598 48.7451 13.4027 48.9172 16.0047 48.3324C20.0142 47.4337 23.1981 45.2073 25.864 42.2264C29.1496 38.5514 31.1863 34.2847 31.8368 29.4192C32.3099 25.8884 31.9551 22.4587 30.2531 19.2452C29.6495 18.0925 28.8357 17.0584 27.8522 16.1946ZM50.5985 34.68C50.7276 34.5839 50.8465 34.4753 50.9533 34.3556C51.6322 33.4383 52.4199 32.5756 52.9485 31.5805C54.7723 28.1415 54.9923 24.4583 54.356 20.7055C53.618 16.3492 51.7327 12.487 48.8539 9.11431C46.3702 6.2078 43.3767 3.9849 39.6286 2.87578C36.7085 2.01196 33.8332 2.08404 31.0384 3.39546C30.7238 3.54311 30.5772 3.71634 30.5653 4.08372C30.5038 5.33817 30.8445 6.47403 31.4926 7.53898C32.4021 9.03292 33.8143 9.81768 35.4287 10.4129C37.2087 11.0759 38.6957 12.3317 39.6304 13.9617C40.5652 15.5916 40.8885 17.4922 40.5441 19.3324C40.2921 20.695 40.2898 22.0273 40.8527 23.319C41.6251 25.0931 42.9367 26.3081 44.8019 26.9231C47.4193 27.7927 49.1685 29.5401 50.0674 32.0792C50.356 32.9 50.4234 33.7941 50.5985 34.6846V34.68ZM5.91366 45.82C6.09817 44.9132 6.17504 44.004 6.47309 43.1705C7.38971 40.5883 9.22531 38.8979 11.8628 37.9945C14.8989 36.9575 16.6079 34.0057 16.0284 30.9027C15.6132 28.6774 15.9101 26.5882 17.1721 24.6688C18.2768 22.9935 19.8451 21.9367 21.7493 21.2856C23.0286 20.8548 24.1293 20.0241 24.883 18.9204C25.6367 17.8168 26.002 16.5008 25.9231 15.1738C25.9045 15.0511 25.8587 14.9339 25.7891 14.8304C25.7194 14.727 25.6275 14.6398 25.5198 14.5751C23.2371 13.4473 20.8232 13.2078 18.3323 13.6694C15.0775 14.2774 12.3004 15.8121 9.89001 17.9978C5.22886 22.2215 2.54051 27.4579 1.93495 33.6685C1.62034 36.8889 2.09462 40.014 3.65228 42.9193C4.22502 44.0105 4.99076 44.9927 5.91366 45.82ZM24.822 12.2394C25.0585 12.337 25.2667 12.4184 25.4678 12.4975C27.0749 13.1383 28.5218 14.1136 29.709 15.3563C32.2153 17.9292 33.4074 21.0833 33.7812 24.57C34.0831 27.3804 33.8354 30.2217 33.0514 32.9407C33.0018 33.1163 33.0692 33.4267 33.2005 33.5348C35.4784 35.4031 38.0177 36.7703 40.9639 37.3074C43.3933 37.7516 45.7587 37.5748 48.0047 36.4866C48.181 36.4018 48.4021 36.2332 48.4364 36.0693C48.809 34.3254 48.5239 32.6977 47.5305 31.2015C46.5996 29.8005 45.2324 29.0425 43.6747 28.4728C40.1029 27.1649 37.9255 23.3574 38.5961 19.6812C38.8504 18.2861 38.8811 16.92 38.3004 15.5854C37.4725 13.6845 36.0118 12.5172 34.0426 11.8569C33.0774 11.5453 32.1871 11.043 31.4267 10.3808C30.6662 9.71866 30.0515 8.91061 29.6203 8.00635C29.1733 7.09951 28.9036 6.10898 28.5559 5.16494C26.5346 7.05185 25.3885 9.46076 24.822 12.2394Z"
                fill="#B98D58"
              ></path>
            </svg>
            <h3>Supreme Beans</h3>
            <p>
              Our coffees are carefully selected for quality, flavor, and social
              impact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeExperience;

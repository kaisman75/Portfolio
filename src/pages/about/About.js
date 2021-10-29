import React from "react";
import styled from "styled-components";
import MyImage from "../../Components/img/kais.jpg";
import { Fade } from "react-reveal";
const About = () => {
  return (
    <ContainerAbout>
      <Fade bottom duration={3000} distance="60px">
        <ContactImg>
          <img src={MyImage} alt="kais manai" />
        </ContactImg>
        </Fade>
<Fade top duration={3000} distance="60px">
        <ContainerText>
          <h1>About Me</h1>
          <p>
            With a professional experience of more than five years as a civil
            servant, I acquired an excellent command of the computer tool,
            passionate about web development (html, css, javascript, reactjs,
            bootstrape .... ), I know how to adapt quickly in order to meet the
            time constraints imposed on me, I am a young serious family man who
            is punctual and organized. Responsible and voluntary, I am convinced
            that our collaboration would be a great success. I remain at your
            entire disposal to provide you with any further information during
            an interview.
          </p>
        </ContainerText>
      </Fade>
      <Fade bottom duration={3000} distance="60px">
      <ContainerSvgFamilly>
        <svg width="400.000000pt" height="600.000000pt" viewBox="0 0 1280.000000 1060.000000">
          <g
            transform="translate(0.000000,1060.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M10352 10538 c-17 -35 -58 -100 -91 -145 -69 -95 -196 -231 -206
-222 -3 4 -13 49 -21 100 -18 112 -22 129 -35 129 -24 0 -76 -196 -120 -450
-11 -69 -27 -137 -35 -151 -14 -29 -581 -768 -696 -909 -190 -232 -442 -484
-634 -632 -266 -205 -556 -352 -793 -400 -59 -12 -64 -11 -77 7 -16 22 -19
106 -4 121 7 7 40 9 85 6 87 -5 84 -8 109 118 41 212 46 461 10 600 -28 110
-80 208 -148 276 -102 101 -219 144 -392 144 -318 0 -498 -113 -561 -353 -22
-83 -22 -281 1 -405 21 -117 78 -316 108 -379 l23 -48 130 -5 130 -5 0 -50 0
-50 -125 1 c-191 1 -368 44 -555 134 -155 75 -257 145 -429 295 -125 109 -981
1041 -1099 1196 -22 30 -38 79 -76 245 -54 228 -70 275 -102 298 -39 27 -49
11 -47 -68 7 -194 -98 -166 -329 85 -42 46 -81 86 -86 88 -16 6 -1 -64 29
-140 15 -38 24 -72 21 -75 -4 -4 -52 28 -108 69 -92 69 -119 82 -119 57 0 -4
20 -30 43 -56 59 -66 119 -146 114 -151 -3 -2 -41 19 -86 48 -65 41 -85 49
-94 39 -9 -9 12 -34 98 -115 60 -57 106 -107 102 -111 -4 -4 -30 -2 -58 4 -28
7 -59 12 -70 12 -32 0 -21 -20 18 -36 229 -93 439 -248 565 -416 30 -40 101
-136 159 -213 105 -141 420 -542 955 -1215 589 -741 740 -942 794 -1057 49
-102 70 -200 70 -319 0 -144 -35 -270 -169 -613 -172 -439 -259 -704 -336
-1024 -57 -241 -68 -320 -100 -762 -48 -645 -105 -1205 -210 -2049 -36 -290
-42 -375 -25 -405 5 -10 32 -33 60 -51 27 -18 62 -46 76 -63 24 -29 25 -34 19
-113 l-7 -82 31 -16 c44 -23 53 -46 41 -102 -6 -25 -18 -60 -27 -77 -12 -25
-15 -50 -10 -127 9 -146 17 -165 80 -188 29 -11 87 -27 130 -37 91 -20 111
-15 149 37 29 40 126 279 144 356 7 29 20 62 28 71 9 10 16 27 16 39 0 27 33
29 87 7 30 -13 39 -13 49 -3 8 8 24 97 39 208 14 107 53 391 85 630 95 703
177 1325 234 1780 l53 425 21 -70 c90 -296 349 -1339 633 -2548 65 -280 119
-510 119 -513 0 -9 61 -34 82 -34 33 0 68 -27 68 -52 0 -12 8 -31 19 -42 18
-20 18 -24 1 -138 -17 -114 -37 -167 -75 -198 -25 -21 -17 -47 18 -61 45 -19
213 -17 309 5 66 15 81 22 112 56 20 22 41 61 50 92 8 29 21 73 28 98 13 45
13 45 61 48 34 2 50 8 54 20 9 25 22 31 83 37 30 3 70 8 89 11 l33 5 -6 52
c-19 140 -143 553 -336 1117 -190 555 -171 447 -181 1045 -7 462 -19 734 -49
1080 -27 302 -60 675 -65 720 -3 28 -10 320 -16 650 -5 330 -13 641 -17 690
-23 266 40 589 190 974 l61 156 202 200 c221 218 220 217 510 640 109 160 302
439 429 620 268 384 418 610 523 786 l74 127 187 160 c220 189 260 228 246
242 -7 7 -21 7 -42 -1 -57 -20 -57 -17 -53 153 2 103 -1 158 -8 162 -6 4 -26
-21 -48 -59 -20 -35 -40 -61 -45 -57 -4 4 -8 38 -10 76 -2 39 -8 71 -14 73 -6
2 -25 -25 -42 -59z"
            />
            <path
              d="M3386 10054 c-132 -42 -212 -141 -250 -311 -21 -92 -21 -300 -1 -419
16 -95 51 -222 66 -240 33 -41 68 -243 69 -396 0 -102 12 -91 -160 -154 -58
-21 -199 -85 -314 -142 -355 -178 -377 -214 -426 -687 -38 -367 -68 -524 -165
-860 -118 -408 -210 -646 -387 -993 -174 -344 -175 -335 35 -579 58 -67 110
-130 115 -140 13 -25 62 -229 62 -259 0 -68 -313 -174 -516 -174 -86 0 -82 -6
-60 112 26 138 39 297 34 435 -7 187 -41 292 -127 386 -92 102 -285 114 -419
27 -32 -20 -113 -95 -182 -168 -156 -164 -227 -220 -344 -276 -105 -50 -123
-67 -290 -280 -125 -159 -130 -167 -123 -222 13 -119 109 -225 280 -309 87
-42 127 -68 162 -106 51 -55 91 -132 101 -195 7 -48 -11 -449 -27 -604 l-11
-104 -128 -271 c-290 -613 -371 -836 -357 -975 5 -40 28 -107 81 -227 75 -170
99 -240 112 -323 11 -72 42 -127 102 -178 228 -195 271 -280 290 -573 6 -83
14 -143 23 -157 34 -54 125 -47 178 13 56 64 66 123 64 365 -4 370 -41 695
-112 994 -40 164 -40 208 -2 267 44 68 111 139 131 139 41 0 88 -80 146 -252
46 -134 59 -211 94 -564 49 -491 63 -566 129 -689 27 -50 42 -93 51 -150 27
-175 88 -291 173 -334 47 -23 48 -23 93 -6 32 12 53 29 72 58 25 37 27 48 27
141 0 89 -4 108 -28 160 -36 77 -35 132 3 276 81 306 106 486 96 695 -8 158
-25 242 -121 590 -133 483 -165 643 -165 814 1 110 2 114 64 261 35 86 56 159
116 408 36 153 97 350 114 371 6 8 76 57 156 109 282 183 350 235 402 306 28
39 30 45 25 111 -11 148 -71 388 -157 630 -53 150 -50 159 252 645 107 173
204 333 215 355 12 22 42 106 69 188 31 94 51 141 55 130 3 -10 2 -72 -2 -138
-5 -66 -18 -295 -29 -510 -21 -406 -23 -429 -95 -1235 -45 -507 -75 -851 -121
-1415 -28 -348 -42 -950 -43 -1955 -2 -769 -12 -850 -146 -1117 -86 -172 -93
-209 -43 -246 55 -41 201 -33 373 20 116 36 321 122 339 142 14 15 14 30 0
151 -17 147 -15 224 9 285 31 81 72 368 242 1685 172 1333 269 1942 343 2165
15 44 31 79 37 78 27 -4 188 -456 244 -684 81 -329 90 -447 101 -1214 5 -363
11 -718 15 -790 3 -71 10 -346 16 -610 10 -501 25 -887 35 -942 6 -30 9 -33
43 -33 46 0 115 -40 242 -142 119 -96 248 -178 320 -202 67 -23 116 -16 150
20 37 40 34 129 -8 215 l-32 65 9 204 c73 1563 75 2982 4 3705 -39 407 -110
887 -179 1225 -68 328 -68 322 5 375 26 19 55 50 64 69 18 39 21 114 6 166 -6
19 -27 127 -48 240 -36 198 -37 212 -35 415 1 247 19 524 38 615 29 135 102
300 133 300 24 0 192 -116 288 -199 110 -95 305 -340 475 -599 118 -178 128
-204 145 -361 26 -254 28 -262 97 -349 146 -186 267 -302 315 -302 12 0 39 17
60 39 44 45 128 182 148 240 13 40 13 44 -26 141 -59 148 -100 226 -170 317
-49 65 -72 109 -114 220 -254 662 -742 1366 -1185 1712 -97 75 -138 90 -350
127 -108 18 -274 49 -370 69 -96 19 -175 35 -177 35 -1 0 -7 14 -13 31 -16 46
-14 109 11 334 27 256 29 545 4 655 -34 151 -107 256 -209 301 -68 30 -227 37
-301 13z m-2611 -5172 c23 -16 125 -156 122 -166 -6 -18 -136 -37 -215 -31
-79 6 -184 35 -219 60 -13 9 -23 27 -23 40 0 32 45 83 83 94 39 11 238 14 252
3z"
            />
            <path
              d="M8600 5738 c-33 -75 -33 -85 -9 -171 16 -57 8 -67 -56 -67 -55 0 -74
-13 -55 -36 22 -26 142 -114 405 -299 503 -353 764 -560 832 -659 32 -47 33
-52 33 -146 0 -108 -1 -107 74 -135 83 -30 112 -64 147 -173 94 -295 180 -749
195 -1038 l7 -120 -41 -125 c-92 -279 -160 -623 -212 -1070 -29 -258 -49 -525
-51 -687 l-1 -142 55 -53 54 -53 -5 -141 c-6 -163 -1 -193 30 -193 19 0 162
48 214 72 26 12 42 44 50 101 9 58 29 94 56 100 13 4 30 18 39 32 8 15 38 43
65 64 l49 37 7 239 c7 266 17 373 53 580 45 257 102 451 128 442 12 -4 64
-230 96 -422 34 -196 51 -377 58 -615 l7 -225 74 -50 c94 -62 102 -80 102
-224 0 -60 4 -121 10 -135 9 -24 13 -26 52 -21 85 12 179 38 201 56 19 14 26
34 35 101 7 46 12 112 12 147 0 52 4 68 25 92 13 16 27 46 31 66 9 46 -12 761
-31 1070 -25 404 -49 632 -96 902 -39 228 -38 233 31 289 105 84 210 184 226
213 13 26 14 56 5 227 -22 415 -33 704 -27 726 4 18 24 32 86 57 44 19 92 43
106 54 l25 20 -21 105 c-38 182 -17 240 145 409 135 141 520 493 554 508 15 6
96 16 180 22 84 6 160 15 170 20 13 7 16 18 13 41 -4 25 2 38 28 65 44 45 52
107 19 149 l-23 29 -172 -6 c-136 -5 -175 -3 -183 7 -9 11 -52 -27 -199 -173
-261 -262 -463 -410 -812 -597 -196 -105 -418 -209 -427 -200 -4 3 8 42 26 85
36 88 52 147 45 166 -3 7 -19 16 -36 19 -27 5 -30 9 -24 33 15 65 19 271 6
324 -37 158 -123 234 -293 261 -204 31 -363 -75 -425 -287 -8 -30 -16 -105
-17 -185 -2 -74 -4 -138 -4 -142 -1 -5 -9 -8 -19 -8 -33 0 -42 -19 -27 -61 15
-41 52 -110 93 -171 39 -59 28 -68 -82 -68 -170 0 -315 42 -543 155 -82 40
-204 110 -273 155 -185 121 -447 321 -459 350 -8 19 -41 249 -41 284 0 21 -20
-2 -43 -50 -27 -55 -28 -56 -48 -38 -11 10 -33 42 -50 71 -41 72 -77 113 -99
113 -12 0 -27 -22 -50 -72z"
            />
          </g>
        </svg>
      </ContainerSvgFamilly>
      </Fade>
    </ContainerAbout>
  );
};

export default About;

const ContainerAbout = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;
const ContactImg = styled.div`
  width: 30rem;
  height: 30rem;
  box-shadow: 0 5px 15px #353535;
  border-radius: 4px;
  img {
    width: 100%;
    height: auto;
  }
`;
const ContainerText = styled.div`
  width: 50rem;
  height:50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    color: rgb(127, 141, 170);
    font-size:35px;
  }
  font-size: 25px;
  line-height: 30px;
  text
  margin-top: 0px;
  font-family: "Google Sans Medium";
`;
const ContainerSvgFamilly = styled.div``;

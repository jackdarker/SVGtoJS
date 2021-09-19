"use strict";
 function loadImages(container){ 
container.strToBuf=function(data){let s=2,l=data.length/s,buf=new Uint8Array(l);for(var i=0;i<l;i++){buf[i]=(parseInt(data.substr(i*s,s),16));}return buf;}
container.cache={}; 
container.Blob1=function(){ let x=this.cache.Blob1;if(!x) x=this.cache.Blob1=('<svg width="234.342" height="157.164" viewBox="0 0 62.003 41.583" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-21.8 -30.983)"><path d="M330.714 35.357c-4.268 5.877-69.279-.946-72.234-7.581-2.955-6.635 35.46-59.524 42.683-58.766 7.223.758 33.82 60.47 29.551 66.347z" transform="matrix(.16185 .07088 -.06243 .14255 24.287 18.956)" stroke="#fff" stroke-width=".205" stroke-linecap="round" stroke-linejoin="round" paint-order="stroke fill markers"/><use xlink:href="#use32455" width="100%" height="100%" transform="rotate(-34.343 41.371 62.655)" stroke="#fff" stroke-width="0"/><path d="M79.347 70.997s-19.434.873-28.577.912c-9.142.04-20.57 1.099-26.623-2.881-.916-6.074-.613-8.728-1.844-14.404-.118-6.13 2.318-8.934 4.92-10.13 7.122-3.278 16.572-8.105 25.707-8.204 9.14-.103 24.285 3.317 26.934 7.212 1.53 6.24 3.814 11.094 3.385 16.785-.285 3.789-3.901 10.71-3.901 10.71z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/><path id="use32455" d="M62.715 47.826c-4.434 1.495-8.856 1.446-12.578-2.469-.797-.838 7.173-8.58 8.431-8.332 1.258.247 5.27 10.422 4.147 10.801z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke-dasharray="none" stroke-opacity="1" paint-order="stroke fill markers"/><use xlink:href="#use32455" width="100%" height="100%" transform="matrix(-.16656 .8447 -.84765 -.16792 119.997 21.71)" stroke="#fff" stroke-width="0"/><use x="0" y="0" xlink:href="#use32455" id="use32459" width="100%" height="100%" transform="matrix(.83958 -.46579 .4958 .78876 -33.017 35.065)" stroke="#fff" stroke-width="0" stroke-miterlimit="4" stroke-dasharray="none" stroke-opacity="1"/><use xlink:href="#use32459" width="100%" height="100%" transform="rotate(-89.38 43.37 52.758)" stroke="#fff" stroke-width="0"/><use xlink:href="#use32455" width="100%" height="100%" transform="matrix(.86853 .41669 -.34074 .71314 40.033 -11.245)"/></g></svg>');return(x);};
container.wolf3=function(){ let x=this.cache.wolf3;if(!x) x=this.cache.wolf3=('<svg width="454.315" height="336.629" viewBox="0 0 120.204 89.066" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="linearGradient1996"><stop offset="0" stop-color="#645555"/><stop offset="1" stop-color="#393030"/></linearGradient><linearGradient id="linearGradient133717"><stop offset="0" stop-color="#1a1616"/><stop offset="1" stop-color="#110e0e"/></linearGradient><linearGradient id="linearGradient124628"><stop offset="0" stop-color="#e135ab"/><stop offset="1" stop-color="#e135ab"/></linearGradient><linearGradient id="linearGradient118085"><stop offset="0"/><stop offset="1"/></linearGradient><linearGradient id="linearGradient104555"><stop offset="0" stop-color="#493e3e"/><stop offset="1" stop-color="#a29191"/></linearGradient><linearGradient id="linearGradient104295"><stop offset="0" stop-color="#252120"/><stop offset="1" stop-color="#252120"/></linearGradient><linearGradient xlink:href="#linearGradient1996" id="linearGradient102346" x1="-208.248" y1="238.484" x2="-165.874" y2="238.484" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient104555" id="linearGradient103766" x1="-124.669" y1="216.673" x2="-118.128" y2="169.66" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient104555" id="linearGradient103804" x1="-170.744" y1="227.047" x2="-208.141" y2="179.5" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.7004 0 0 .7004 -65.455 90.337)"/><linearGradient xlink:href="#linearGradient104555" id="linearGradient103882" x1="-149.027" y1="237.309" x2="-177.876" y2="221.282" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient1996" id="linearGradient104251" x1="-120.445" y1="213.268" x2="-65.953" y2="271.767" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient1996" id="linearGradient104297" x1="-219.398" y1="240.503" x2="-170.942" y2="240.503" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient104295" id="linearGradient104522" x1="-215.862" y1="213.302" x2="-202.391" y2="213.302" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient104295" id="linearGradient104530" x1="-208.12" y1="238.129" x2="-200.121" y2="238.129" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient104555" id="linearGradient104557" x1="-209.753" y1="216.192" x2="-218.353" y2="207.981" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient104555" id="linearGradient116690" x1="-135.273" y1="226.423" x2="-137.542" y2="215.624" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient118087" x1="-193.307" y1="294.192" x2="-188.6" y2="294.192" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient120432" x1="-197.965" y1="295.939" x2="-195.857" y2="295.939" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient120744" gradientUnits="userSpaceOnUse" x1="-197.965" y1="295.939" x2="-195.857" y2="295.939" gradientTransform="matrix(.26458 0 .03094 .23364 -192.07 293.668)"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient120755" gradientUnits="userSpaceOnUse" x1="-197.965" y1="295.939" x2="-195.857" y2="295.939" gradientTransform="matrix(.20912 0 0 .16402 -186.327 293.605)"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient120766" gradientUnits="userSpaceOnUse" x1="-197.965" y1="295.939" x2="-195.857" y2="295.939" gradientTransform="matrix(.16157 0 0 .22333 -201.536 290.639)"/><linearGradient xlink:href="#linearGradient133717" id="linearGradient120926" x1="-132.012" y1="267.995" x2="-114.132" y2="257.31" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient121774" gradientUnits="userSpaceOnUse" x1="-197.965" y1="295.939" x2="-195.857" y2="295.939" gradientTransform="matrix(-.73131 -.5057 .31689 -.35591 -426.165 279.456)"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient122123" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-.76468 -.58472 .33135 -.41153 -436.393 278.13)" x1="-197.965" y1="295.939" x2="-195.857" y2="295.939"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient121774-8" gradientUnits="userSpaceOnUse" x1="-197.965" y1="295.939" x2="-195.857" y2="295.939" gradientTransform="matrix(-.58674 -.43796 .25424 -.30824 -378.956 273.206)"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient121774-4" gradientUnits="userSpaceOnUse" x1="-197.965" y1="295.939" x2="-195.857" y2="295.939" gradientTransform="matrix(-.38134 -.46053 .27738 -.16169 -347.394 233.095)"/><linearGradient xlink:href="#linearGradient124628" id="linearGradient124630" x1="-123.925" y1="238.061" x2="-121.487" y2="238.061" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient104555" id="linearGradient125072" gradientUnits="userSpaceOnUse" x1="-112.467" y1="241.284" x2="-117.512" y2="225.614"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient128582" x1="-127.961" y1="242.257" x2="-126.443" y2="242.257" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient129313" gradientUnits="userSpaceOnUse" x1="-193.307" y1="294.192" x2="-188.6" y2="294.192" gradientTransform="translate(115.48 .58)"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient129315" gradientUnits="userSpaceOnUse" x1="-197.965" y1="295.939" x2="-195.857" y2="295.939" gradientTransform="translate(115.48 .58)"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient129317" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.26458 0 .03094 .23364 -76.59 294.247)" x1="-197.965" y1="295.939" x2="-195.857" y2="295.939"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient129319" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.20912 0 0 .16402 -70.847 294.184)" x1="-197.965" y1="295.939" x2="-195.857" y2="295.939"/><linearGradient xlink:href="#linearGradient118085" id="linearGradient129321" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.16157 0 0 .22333 -86.055 291.218)" x1="-197.965" y1="295.939" x2="-195.857" y2="295.939"/><linearGradient xlink:href="#linearGradient104555" id="linearGradient133719" x1="-110.993" y1="226.073" x2="-79.643" y2="225.627" gradientUnits="userSpaceOnUse"/><linearGradient xlink:href="#linearGradient104555" id="linearGradient133814" x1="-59.568" y1="248.537" x2="-52.983" y2="238.379" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.7004 0 0 .7004 -65.698 90.072)"/></defs><path d="M-139.486 217.306c-1.785 4.998-5.124 10.007-4.373 15.26 1.174 8.22 4.73 17.493 11.333 22.58 1.696 4.73 5.815 9.571 4.641 14.456-1.379 5.74-9.363 7.856-13.26 12.288-2.737-.03-6.36-.638-8.383-.133-3.093.655-4.148 2.278-4.728 4.31-.248.871.67 2.723.67 2.723 7.318 2.53 14.977 2.124 20.347.089.535-1.1.624-1.755 1.16-2.856 3.927-3.57 7.853-6.425 11.78-9.995 1.725-2.826 7.201-6.728 5.622-9.638-.366-.675-6.326-13.282-5.533-14.547 4.403-7.028 7.04-11.487 10.352-17.134l-1.16-17.403c-6.663-6.348-19.131-4.837-28.468 0z" fill="url(#linearGradient120926)" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M52.811 76.51c-1.956-.226-3.889-.737-5.834.708-.564.406-1.237 1.68-1.237 1.68" fill="none" stroke="#000" stroke-width=".29136224" stroke-linecap="round" paint-order="stroke fill markers"/><path d="M53.266 77.309c-1.957-.227-1.64-.769-3.584.676-.565.406-.613 2.273-.613 2.273" fill="none" stroke="#000" stroke-width=".29136224" stroke-linecap="round" paint-order="stroke fill markers"/><path d="M-180.27 202.224c-5.248 18.278-24.705 48.634-27.844 53.546-.324 5.526 4.105 11.244 5.89 15.528.44 1.055 10.387 6.475 12.672 4.998 1.866-1.207 3.524-4.517 3.48-7.63-.01-.833.471-2.094-1.484-2.962-2.305-1.024-6.464-5.286-6.726-7.078.407-5.698 5.983-17.593 12.762-23.382 1.89-1.613 5.104-.717 7.14-2.142 3.83-2.681 8.36-6.568 8.388-11.244.05-8.092-12.046-27.412-14.278-19.634z" fill="url(#linearGradient102346)" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-191.29 276.191c.074.328.654.352.808.349.153-.003 1.164-.085 1.37-.885-1.067.333-2.38-.367-2.178.536z" fill="url(#linearGradient121774-4)" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-189.764 274.553c.245.446 1.065.228 1.277.158.212-.071 1.588-.63 1.527-1.884-1.343.948-3.477.498-2.804 1.726z" fill="url(#linearGradient121774)" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-189.167 271.781c.256.515 1.113.264 1.335.182.222-.082 1.66-.727 1.597-2.177-1.404 1.095-3.636.575-2.932 1.995z" fill="url(#linearGradient122123)" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-189.287 268.96c.196.386.854.197 1.024.136.17-.061 1.274-.544 1.226-1.63-1.078.82-2.79.43-2.25 1.494z" fill="url(#linearGradient121774-8)" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-129.953 225.958c4.013 3.893 8.257 13.361 11.501 18.501 2.997 4.749 14.167 9.917 16.626 13.752.416 2.618 2.74 5.65 2.75 11-4.085.063-9.212-1.874-13.75-2.937-5.506-1.29-11.992-2.057-16.377-5.626-5.584-4.545-5.471-10.964-7.876-17.751-1.13-3.19 2.6-11.507.626-15.189 2.113-5.804 3.906-4.246 6.5-1.75z" fill="url(#linearGradient133814)" transform="translate(219.28 -211.567)"/><g><path d="M-175.484 174.885c5.512-2.566 15.875-.996 23.771-.326 23.232 3.073 51.494 2.062 63.566 23.371 5.184 10.418 2.644 27.807-6.45 33.03-6.877 3.652-15.512-3.883-23.203-2.677-7.681 1.205-16.665 6.993-25.524 8.032-11.057 1.296-25.777 3.304-33.312-2.385-4.443-3.354 14.117-7.693 11.001-9.038-19.912-5.743-15.648-47.308-9.85-50.007z" fill="url(#linearGradient103766)" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path style="mix-blend-mode:screen" d="M-147.159 223.136c9.398-7.783 25.14-7.005 36.141-1.725 5.29 2.54 9.781 2.124 10.689 6.027.822 3.535-12.576-.073-18.975 1.14-8.08 1.533-12.62 5.592-23.95 7.696-11.329 2.104-30.816-.15-33.06-.39-5.16-.554 25.158-9.437 29.155-12.748z" fill="url(#linearGradient116690)" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/></g><g fill="#5d544f"><path d="M-108.34 197.405c-5.649 3.837-4.058 18.738-4.82 25.523-.707 6.299 2.431 17.964 6.247 23.025 5.287 7.012 16.503 10.467 20.883 11.245 11.705-.847 16.55 26.807 8.389 30.7-4.075-.436-6.069.535-7.05 2.855-.287.678-1.957 5.402-.625 6.782 2.845 2.95 9.33 3.444 13.386 2.856 3.398-.492 6.092-2.523 8.032-5.354 1.282-1.871-1.765-3.86.536-6.783 1.585-2.014.307-6.425.507-8.98.77-9.856-2.793-17.042-4.27-25.87.565-2.282-10.374-3.628-12.658-7.808-3.81-6.971 3.223-15.867 2.142-23.738-.684-4.981-2.404-10.03-5.355-14.1-6.107-8.425-19.242-14.5-25.345-10.353z" fill="url(#linearGradient104251)" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-84.772 291.24c-.244-.464-.97.81-1.048 1.129-.077.32-.531 2.534.078 4.314.464-3.226 1.618-4.092.97-5.443z" fill="url(#linearGradient129321)" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-68.948 294.849c-.09-.34-1.23.175-1.33.41-.1.235.505 3.328 1.018 3.541.366-1.682.502-3.243.312-3.951z" fill="url(#linearGradient129319)" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-74.993 295.006c-.599-.425-.97.78-1.051 1.114-.082.335-.52 2.652.724 4.514.04-2.881 1.977-4.457.327-5.628z" fill="url(#linearGradient129317)" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-80.9 294.186c-.542-.481-1.072.08-1.199.459-.126.378-.691 2.98.305 5.089.847-1.813 2.39-4.222.894-5.548z" fill="url(#linearGradient129315)" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M98.823 82.16s-2.231-.054-2.808.454c-1.014.893-1.437 3.5-1.375 3.813.063.312.31 1.154.31 1.154M103.801 83.163s-.66.83-.772 1.176c-.36 1.116.07 3 .26 3.906" fill="none" stroke="#000" stroke-width=".29136224" stroke-linecap="round" paint-order="stroke fill markers"/><path d="M-75.03 291.994s-1.272.455-2.282 1.464c-1.01 1.01-.306 5.73-.306 5.73" fill="none" stroke="url(#linearGradient129313)" stroke-width=".416" stroke-linecap="round" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/></g><g fill="none"><path d="M-156.75 178.206c7.285 1.329 13.062 21.444 14.38 28.732 2.08 11.51-5.297 18.736-8.654 27.94-3.408 14.572-13.217 23.676-18.51 36.024-2.814 6.64-3.333 14.779-7.158 20.892-1.704 2.723-5.553 6.815-6.815 6.815-1.262 0-14.114 4.274-17.684-.311-1.531-1.966.274-5.767.646-8.208.222-1.456 3.729-3.153 7.854-4.604 1.044-.367 5.925-.494 6.762-1.219 2.495-3.397 5.388-9.56 5.793-15.16 2.707-3.028 9.581-18.998 11.774-29.059 2.13-12.975-7.836-12.674-4.796-24.484 2.24-7.6 8.612-38.78 16.407-37.358z" fill="url(#linearGradient103882)" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-188.808 289.774s-2.911 1.023-3.921 2.032c-1.01 1.01-.37 6.803-.37 6.803" stroke="url(#linearGradient118087)" stroke-width=".416" stroke-linecap="round" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M23.759 82.27s-1.146 1.272-1.258 1.62c-.36 1.115-.285 3.043-.094 3.949M18.384 80.958s-2.674.743-3.25 1.25c-1.015.893-1.438 3.5-1.376 3.813.063.313 0 1.375 0 1.375" stroke="#000" stroke-width=".29136224" stroke-linecap="round" paint-order="stroke fill markers"/><path d="M-196.38 292.803c-.543-.48-1.073.884-1.2 1.262-.125.38-.87 3.003.127 5.112.423-3.263 2.568-5.048 1.073-6.374z" fill="url(#linearGradient120432)" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-190.474 293.757c-.599-.425-.97.78-1.051 1.115-.082.334-.52 2.651.724 4.513.041-2.88 1.978-4.457.327-5.628z" fill="url(#linearGradient120744)" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-185.075 293.667c-.43-.298-.848.548-.948.783-.1.235-.688 1.861.1 3.169.334-2.023 2.03-3.13.848-3.952z" fill="url(#linearGradient120755)" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/><path d="M-200.568 290.724c-.331-.406-.655.746-.732 1.066-.077.32-.532 2.534.077 4.314.258-2.754 1.568-4.26.655-5.38z" fill="url(#linearGradient120766)" paint-order="stroke fill markers" transform="matrix(.7004 0 0 .7004 153.582 -121.495)"/></g><path d="M-213.318 245.24c-2.127-10.944 5.39-20.295 11.23-28.623 3.644-5.197 14.044-6.927 15.861-.844 3.59 12.014 4.896 26.8 2.832 35.087.058 2.923-6.588 5.435-7.707 5.88-2.074.823-15.243-.489-17.34-1.75-3.596-2.16-4.076-5.633-4.876-9.75z" fill="url(#linearGradient103804)" transform="translate(219.28 -211.567)"/><g transform="matrix(.7004 0 0 .7004 153.582 -121.495)" fill="#252120"><path d="M-171.257 238.278c-1.212 4.607-2.98 7.331-6.425 10.62-2.265 2.162-6.783 1.294-8.835 3.66-2.85 3.284-1.833 7.504-4.195 11.154-1.2 1.857-4.252 4.333-6.425 3.927-2.937-.548-5.068-3.496-6.426-6.158-1.938-3.8.543-8.086-1.874-11.601-3.256-4.736-9.657-4.444-12.762-9.281-2.024-3.155-1.147-11.5 2.142-13.298 5.84-3.192 2.569-14.542 9.86-13.71 12.958 1.48 13.017 1.147 25.932-.246 4.7-.506 3.6 7.507 7.402 15.206 1.147 2.324 2.266 7.22 1.606 9.727z" fill="url(#linearGradient104297)"/><path d="M-190.649 263.694c-1.2 1.857-4.252 4.333-6.425 3.927-2.937-.548-5.068-3.496-6.426-6.158-1.348-2.642-1.331-3.702-1.557-5.639-.196-1.683.19-5.08.19-5.08z" fill="none"/><path d="M-190.649 263.694c-.086.08-.291.21-.565.477-.194.19-.46.466-.817.8-.418.389-.972.865-1.624 1.301-.544.363-1.148.693-1.758.896a4.065 4.065 0 01-.842.192 2.575 2.575 0 01-.908-.053 5.717 5.717 0 01-1.806-.758 8.603 8.603 0 01-1.69-1.42c-.996-1.062-1.855-2.399-2.573-3.802a17.869 17.869 0 01-.771-1.693c-.19-.49-.32-.918-.415-1.32-.097-.41-.16-.8-.214-1.197-.057-.422-.104-.856-.164-1.323a8.271 8.271 0 01-.057-.68 17.328 17.328 0 01-.017-.79c0-.6.022-1.223.04-1.657.008-.24.017-.448.024-.622.041-1.136-.021-1.296-.062-1.3-.025-.003-.162.135-.305 1.27a26.87 26.87 0 00-.178 2.301 17.01 17.01 0 00-.007.815c.005.25.017.498.04.724.048.462.085.897.134 1.33.047.409.106.82.203 1.259.096.43.229.884.424 1.401.196.517.451 1.09.79 1.755.73 1.437 1.619 2.827 2.668 3.941a9.098 9.098 0 001.815 1.514 6.232 6.232 0 002.156.851c.306.056.62.06.936.024a4.69 4.69 0 00.96-.219c.674-.225 1.325-.583 1.893-.971.684-.467 1.252-.98 1.662-1.414.35-.371.593-.692.742-.933.206-.334.252-.594.286-.699z" fill="#070606"/><path d="M-192.854 238.903c.536 2.678 1.071 5.355 1.696 7.348.625 1.993 1.339 3.302 2.053 4.61M-199.368 238.903c-.476 2.38-.952 4.76-1.666 6.396-.714 1.636-1.666 2.528-2.618 3.42"/><path d="M-197.022 259.116c3.63-.05 5.1 1.584 4.48 2.956-.788 1.746-2.913 3.933-4.448 3.723-1.536-.21-3.302-3.008-3.913-4.302-.61-1.293.857-2.334 3.881-2.377z" fill="#070606"/><g id="g13614" display="inline" fill="#080705" fill-opacity="1" stroke="none" stroke-linecap="round"><path d="M-213.81 200.886c-.432 3.897-4.09 25.761-.06 25.687 2.158-.04 8.82-3.198 10.53-5.325 1.71-2.127.52-6.113-1.204-9.936-1.726-3.822-8.836-14.323-9.267-10.426z" fill="url(#linearGradient104522)" stroke="url(#linearGradient104522)" stroke-width=".062"/><path d="M-213.04 205.278c.418 3.355-3.328 14.987-.063 19.057 1.48 1.845 4.962-1.809 5.175-4.165.448-4.96.383-8.944-5.112-14.892z" fill="url(#linearGradient104557)" stroke-width=".234"/><path d="M-202.51 218.339c-.08-.89-.275-2.289-.841-4.229a35.3 35.3 0 00-1.734-4.731c-.775-1.74-1.809-3.547-3.09-5.19-.857-1.098-1.65-1.898-2.234-2.408-.72-.63-1.354-.993-1.641-1.171.265.246.728.74 1.38 1.44.528.565 1.25 1.36 2.068 2.463a28.363 28.363 0 013.125 5.391c.752 1.662 1.39 3.15 1.807 4.31.682 1.89.996 3.235 1.16 4.125z" fill="#020202" stroke-width=".416"/></g><g id="g28255" display="inline" stroke="none" stroke-width=".234" stroke-linecap="round"><path d="M-207.936 235.422c4.697 1.571 8.014 1.385 7.675 4.106-.178 1.432-2.846 1.585-4.194 1.07-1.943-.74-3.94-3.447-3.48-5.176z" fill="url(#linearGradient104530)"/><circle cx="-203.206" cy="238.457" r="1.606" fill="#afd016"/><ellipse cx="-203.161" cy="238.234" rx=".58" ry=".759" fill="#0c0302"/></g><use xlink:href="#g13614" width="100%" height="100%" transform="matrix(-1 0 0 1 -390.766 1.874)"/><use xlink:href="#g28255" width="100%" height="100%" transform="matrix(-1 0 0 1 -391.954 .268)"/></g></svg>');return(x);};

 return(container);}
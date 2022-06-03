import styled from 'styled-components'

const StyledFog = styled.div`

pointer-events:none;
height: 75%;
position: absolute;
bottom: 0;
width: 100%;
-webkit-filter: blur(8px) grayscale(0.3) saturate(1.3);
filter: blur(8px) grayscale(0.2) saturate(1.3);
z-index:-1;

.fog {
  height: 100vh;  
  position: absolute;
  width: 200vw;
  display:flex;
}
.fog .image01, .fog .image02 {
  height: 100vh;
  width: 100vw;
}

#layer_00 {
  margin-left:-250vw;
  opacity:.8;
  -webkit-animation: layer_04_opacity 46s linear infinite, layer_move 48s linear 1;
  -moz-animation: layer_04_opacity 46s linear infinite, layer_move 48s linear 1;
  animation: layer_04_opacity 46s linear infinite, layer_move 48s linear 1;
}

#layer_01 {
  opacity:.4;
  -webkit-animation: layer_01_opacity 26s linear infinite, layer_move 58s linear infinite;
  -moz-animation: layer_01_opacity 26s linear infinite, layer_move 58s linear infinite;
  animation: layer_01_opacity 26s linear infinite, layer_move 58s linear infinite;
}

#layer_02 {
  opacity:.5;
  -webkit-animation: layer_02_opacity 28s linear infinite, layer_move 43s linear infinite;
  -moz-animation: layer_02_opacity 28s linear infinite, layer_move 43s linear infinite;
  animation: layer_02_opacity 28s linear infinite, layer_move 43s linear infinite;
}

#layer_03 {
  opacity:.8;
  -webkit-animation: layer_03_opacity 18s linear infinite, layer_move 53s linear infinite;
  -moz-animation: layer_03_opacity 18s linear infinite, layer_move 53s linear infinite;
  animation: layer_03_opacity 18s linear infinite, layer_move 53s linear infinite;
}

#layer_04 {
  opacity:.8;
  -webkit-animation: layer_04_opacity 28s linear infinite, layer_move 46s linear infinite;
  -moz-animation: layer_04_opacity 28s linear infinite, layer_move 46s linear infinite;
  animation: layer_04_opacity 28s linear infinite, layer_move 46s linear infinite;
}

#layer_05 {
  opacity:.8;
  height:60%;
  position:absolute;
  bottom:0;
  -webkit-animation: layer_04_opacity 18s linear infinite, layer_move_rev 80s linear infinite;
  -moz-animation: layer_04_opacity 18s linear infinite, layer_move_rev 80s linear infinite;
  animation: layer_04_opacity 18s linear infinite, layer_move_rev 80s linear infinite;
  filter: sepia(1.3) saturate(1.3);
}

#layer_00.image01, #layer_00 .image02 {
  background: url(/fog_a.webp) center center/contain no-repeat transparent; 
  transform: scale(-1);
}

#layer_01 .image01, #layer_01 .image02 {
  background: url(/fog_a.webp) center center/contain no-repeat transparent;
}

#layer_02 .image01, #layer_02 .image02 {
  background: url(/fog_b.webp) center center/contain no-repeat transparent;
}

#layer_03 .image01, #layer_03 .image02 {
  background: url(/fog_a.webp) center center/contain no-repeat transparent; 
  transform: scale(-1);
}

#layer_04 .image01, #layer_04 .image02 {
  background: url(/fog_b.webp) center center/contain no-repeat transparent; 
  transform: scale(-1);
}

#layer_05 .image01, #layer_05 .image02 {
  background: url(/fog_b.webp) center center/contain no-repeat transparent; 
}


/* ---------- Keyframe Layer 1 ---------- */
@-webkit-keyframes layer_01_opacity {
  0% { opacity: .4; }
  22% { opacity: .5; }
  40% { opacity: .25; }
  58% { opacity: .7; }
  80% { opacity: .18; }
  100% { opacity: .4; }
}
@-moz-keyframes layer_01_opacity {
  0% { opacity: .4; }
  22% { opacity: .5; }
  40% { opacity: .25; }
  58% { opacity: .7; }
  80% { opacity: .18; }
  100% { opacity: .4; }
}
@-o-keyframes layer_01_opacity {
  0% { opacity: .4; }
  22% { opacity: .5; }
  40% { opacity: .25; }
  58% { opacity: .7; }
  80% { opacity: .18; }
  100% { opacity: .4; }
}
@keyframes layer_01_opacity {
  0% { opacity: .4; }
  22% { opacity: .5; }
  40% { opacity: .25; }
  58% { opacity: .7; }
  80% { opacity: .18; }
  100% { opacity: .4; }
}
/* ---------- Keyframe Layer 2 ---------- */
@-webkit-keyframes layer_02_opacity {
  0% { opacity: .6; }
  25% { opacity: .2; }
  50% { opacity: .1; }
  80% { opacity: .3; }
  100% { opacity: .6; }
}
@-moz-keyframes layer_02_opacity {
  0% { opacity: .6; }
  25% { opacity: .2; }
  50% { opacity: .1; }
  80% { opacity: .3; }
  100% { opacity: .6; }
}
@-o-keyframes layer_02_opacity {
  0% { opacity: .6; }
  25% { opacity: .2; }
  50% { opacity: .1; }
  80% { opacity: .3; }
  100% { opacity: .6; }
}
@keyframes layer_02_opacity {
  0% { opacity: .6; }
  25% { opacity: .2; }
  50% { opacity: .1; }
  80% { opacity: .3; }
  100% { opacity: .6; }
}
/* ---------- Keyframe Layer 3 ---------- */
@-webkit-keyframes layer_03_opacity {
  0% { opacity: .8 }
  27% { opacity: .2; }
  52% { opacity: .6; }
  68% { opacity: .3; }
  100% { opacity: .8; }
}
@-moz-keyframes layer_03_opacity {
  0% { opacity: .8 }
  27% { opacity: .2; }
  52% { opacity: .6; }
  68% { opacity: .3; }
  100% { opacity: .8; }
}
@-o-keyframes layer_03_opacity {
  0% { opacity: .8 }
  27% { opacity: .2; }
  52% { opacity: .6; }
  68% { opacity: .3; }
  100% { opacity: .8; }
}
@keyframes layer_03_opacity {
  0% { opacity: .8; }
  27% { opacity: .2; }
  52% { opacity: .6; }
  68% { opacity: .3; }
  100% { opacity: .8; }
}
/* ---------- Keyframe Layer 4 ---------- */
@-webkit-keyframes layer_04_opacity {
  0% { opacity: .8 }
  27% { opacity: .4; }
  52% { opacity: .6; }
  68% { opacity: .9; }
  100% { opacity: .8; }
}
@-moz-keyframes layer_04_opacity {
  0% { opacity: .8 }
  27% { opacity: .4; }
  52% { opacity: .6; }
  68% { opacity: .9; }
  100% { opacity: .8; }
}
@-o-keyframes layer_04_opacity {
  0% { opacity: .8 }
  27% { opacity: .4; }
  52% { opacity: .6; }
  68% { opacity: .9; }
  100% { opacity: .8; }
}
@keyframes layer_04_opacity {
  0% { opacity: .8; }
  27% { opacity: .4; }
  52% { opacity: .6; }
  68% { opacity: .9; }
  100% { opacity: .8; }
}

/* ---------- Keyframe move ---------- */
@-webkit-keyframes layer_move {
  0% { left: 100vw; }
  100% { left: -200vw; }
}
@-moz-keyframes layer_move {
  0% { left: 100vw; }
  100% { left: -250vw; }
}
@-o-keyframes layer_move {
  0% { left: 100vw; }
  100% { left: -250vw; }
}
@keyframes layer_move {
  0% { left: 100vw; }
  100% { left: -250vw; }
}

/* ---------- Keyframe move reverse---------- */
@-webkit-keyframes layer_move_rev {
  0% { left: -200vw; }
  100% { left: 250vw; }
}
@-moz-keyframes layer_move_rev {
  0% { left: -200vw; }
  100% { left: 250vw; }
}
@-o-keyframes layer_move_rev {
  0% { left: -200vw; }
  100% { left: 250vw; }
}
@keyframes layer_move_rev {
  0% { left: -200vw; }
  100% { left: 250vw; }
}
`

const Fog = () => (
  <StyledFog>
    <div id="layer_00" className="fog">
      <div className="image01"></div>
      <div className="image02"></div>
    </div>
    <div id="layer_01" className="fog">
      <div className="image01"></div>
      <div className="image02"></div>
    </div>
    <div id="layer_02" className="fog">
      <div className="image01"></div>
      <div className="image02"></div>
    </div>
    <div id="layer_03" className="fog">
      <div className="image01"></div>
      <div className="image02"></div>
    </div>
    <div id="layer_04" className="fog">
      <div className="image01"></div>
      <div className="image02"></div>
    </div>
    <div id="layer_05" className="fog">
      <div className="image01"></div> 
      <div className="image02"></div>
    </div>
  </StyledFog>
)
export default Fog
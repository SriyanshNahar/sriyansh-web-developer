import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, Sparkles, Text } from '@react-three/drei';
import * as THREE from 'three';

type V3=[number,number,number];
const M=({p,s,c='#181a20',e}:{p:V3;s:V3;c?:string;e?:string})=><mesh position={p}><boxGeometry args={s}/><meshStandardMaterial color={c} emissive={e||'#000'} emissiveIntensity={e?.startsWith('#')?.valueOf()?0.18:0} metalness={.42} roughness={.38}/></mesh>;
const T=({p,children,size=.16,color='#f4e6cf'}:{p:V3;children:string;size?:number;color?:string})=><Text position={p} fontSize={size} color={color} anchorX="center" anchorY="middle" letterSpacing={.045}>{children}</Text>;
const Plant=({p}:{p:V3})=><group position={p}><M p={[0,.18,0]} s={[.3,.36,.3]} c="#202126"/>{[-.2,-.1,0,.1,.2].map((x,i)=><M key={i} p={[x,.55+Math.abs(x)*.35,0]} s={[.07,.58,.05]} c="#27402a"/>)}</group>;
const Desk=()=> <group><M p={[0,.4,.2]} s={[3.1,.12,.85]} c="#211b15"/>{[-1.3,1.3].map(x=><M key={x} p={[x,.18,.2]} s={[.09,.55,.65]} c="#14161b"/>)}{[-.55,.55].map((x,i)=><group key={i}><M p={[x,.93,.1]} s={[.98,.58,.07]} c="#11161e" e={i?'#2a1742':'#0d1d31'}/><T p={[x,.94,.15]} size={.07}>{i?'CREATE':'DESIGN'}</T></group>)}</group>;
const Room=({y,title,sub,kind}:{y:number;title:string;sub:string;kind:'about'|'experience'|'projects'|'graphics'|'skills'|'contact'})=>{
 let content:React.ReactNode;
 if(kind==='about')content=<><M p={[0,-.2,.15]} s={[2.7,.55,.6]} c="#211b16"/><T p={[0,.05,.48]} size={.13}>ABOUT SRIYANSH</T><Plant p={[-3,-.75,.2]}/><Plant p={[3,-.75,.2]}/></>;
 else if(kind==='experience')content=<><Desk/><T p={[-2.6,-.45,.2]} size={.1}>JOURNEY</T><T p={[2.6,-.45,.2]} size={.1}>GROWTH</T></>;
 else if(kind==='projects')content=<>{[-2.7,-.9,.9,2.7].map((x,i)=><group key={x}><M p={[x,-.05,.1]} s={[1.35,1.45,.1]} c={['#263a64','#55335f','#67412b','#1f554f'][i]}/><T p={[x,.1,.17]} size={.11}>PROJECT {i+1}</T></group>)}</>;
 else if(kind==='graphics')content=<>{[-2.7,-.9,.9,2.7].map((x,i)=><group key={x}><M p={[x,-.02,.1]} s={[1.35,1.65,.1]} c={['#1f2b4f','#4b274c','#5c3a24','#28483b'][i]}/><T p={[x,.05,.17]} size={.09}>{['BRAND','SOCIAL','PRINT','UI/UX'][i]}</T></group>)}</>;
 else if(kind==='skills')content=<>{[-2.6,-.85,.85,2.6].map((x,i)=><group key={x}><M p={[x,-.1,.1]} s={[1.35,1.25,.12]} c="#171a22"/><T p={[x,.25,.18]} size={.1}>{['FRONTEND','BACKEND','DESIGN','SERVICES'][i]}</T></group>)}</>;
 else content=<><M p={[0,-.2,.15]} s={[3.2,.55,.7]} c="#211b16"/><T p={[0,.05,.5]} size={.16}>LET'S WORK TOGETHER</T><T p={[0,-.55,.32]} size={.08} color="#c8b493">CONTACT · HIRE · START A PROJECT</T><Plant p={[-3,-.75,.2]}/><Plant p={[3,-.75,.2]}/></>;
 return <group position={[0,y,0]}>
   <M p={[0,0,-.7]} s={[9.6,2.75,.58]} c="#0e1015"/><M p={[0,0,-.35]} s={[8.9,2.36,.07]} c="#10151b"/>
   {[-3.3,-2.2,-1.1,0,1.1,2.2,3.3].map(x=><M key={x} p={[x,0,-.05]} s={[.06,2.25,.18]} c="#262932"/>)}
   <M p={[0,1.4,-.2]} s={[9.85,.16,.72]} c="#1a1d23"/><M p={[0,-1.4,-.2]} s={[9.85,.14,.72]} c="#17191f"/>
   <T p={[0,1.02,-.1]} size={.19}>{title}</T><T p={[0,.72,-.1]} size={.075} color="#c7ad85">{sub}</T>{content}
   <pointLight position={[-3,.5,1.4]} intensity={2.5} color="#d89143" distance={5.5}/><pointLight position={[3,.5,1.4]} intensity={2.1} color="#ffd4a0" distance={5.5}/>
 </group>
};

const ids=['home','about','experience','projects','graphic-design','skills','contact'];
const ys=[1.5,-5.4,-2.6,.2,3,5.8,8.6];
function stageFromScroll(){
 const center=window.innerHeight*.5; let best=0,dist=Infinity;
 ids.forEach((id,i)=>{const el=document.getElementById(id);if(!el)return;const r=el.getBoundingClientRect();const d=Math.abs(r.top+r.height*.45-center);if(d<dist){dist=d;best=i;}});
 return best;
}
const Studio=()=>{const root=useRef<THREE.Group>(null);const target=useRef(new THREE.Vector3());useFrame(({camera,mouse},d)=>{
 const stage=stageFromScroll(); const floorY=ys[stage]; const far=stage===0;
 const pos=new THREE.Vector3(mouse.x*.38, far?1.8:floorY, far?23:8.6);
 camera.position.lerp(pos,1-Math.exp(-d*1.55)); target.current.set(0,far?1.6:floorY,0);camera.lookAt(target.current);
 if(root.current)root.current.rotation.y=THREE.MathUtils.lerp(root.current.rotation.y,mouse.x*.03,1-Math.exp(-d*1.8));
 });
 return <group ref={root}>
   <M p={[-4.05,1.6,-.85]} s={[1.4,17.2,.75]} c="#090b10"/><T p={[-4.05,5.6,-.38]} size={.55}>SN</T><T p={[-4.05,4.85,-.38]} size={.12}>STUDIO</T><T p={[-4.05,3.85,-.38]} size={.075} color="#aaaeb7">SCROLL THE STORY</T>
   <Room y={-5.4} title="GROUND FLOOR · ABOUT" sub="THE PERSON BEHIND THE STUDIO" kind="about"/>
   <Room y={-2.6} title="FIRST FLOOR · EXPERIENCE" sub="THE JOURNEY & GROWTH" kind="experience"/>
   <Room y={.2} title="SECOND FLOOR · PROJECTS" sub="SELECTED DIGITAL WORK" kind="projects"/>
   <Room y={3} title="THIRD FLOOR · GRAPHIC DESIGN" sub="THE VISUAL GALLERY" kind="graphics"/>
   <Room y={5.8} title="FOURTH FLOOR · SKILLS" sub="THE TOOLS BEHIND THE WORK" kind="skills"/>
   <Room y={8.6} title="FIFTH FLOOR · CONTACT" sub="LET'S BUILD SOMETHING TOGETHER" kind="contact"/>
   <M p={[0,10.2,-.5]} s={[9.9,.2,.9]} c="#1a1d23"/>{[-3.5,-2.5,-1.5,-.5,.5,1.5,2.5,3.5].map(x=><M key={x} p={[x,10.7,-.05]} s={[.08,.9,.9]} c="#272a31"/>)}
   <T p={[0,11.1,-.15]} size={.22}>ROOFTOP · CLIENT MEETING SPACE</T>
   <M p={[0,-6.95,0]} s={[10.8,.32,3.8]} c="#15171b"/>{[-4.8,-3.6,3.6,4.8].map(x=><Plant key={x} p={[x,-6.55,.65]}/>)}
   <T p={[0,-6.1,.18]} size={.3}>SRIYANSH STUDIO</T><T p={[0,-6.48,.18]} size={.085} color="#b8a88d">CREATIVE MINDS · BOLDER BRANDS</T>
 </group>};
const Scene=()=><><fog attach="fog" args={['#050609',15,40]}/><ambientLight intensity={.42}/><directionalLight position={[4,12,8]} intensity={1.2} color="#f0e0c7"/><Studio/><Grid position={[0,-7.15,0]} args={[42,42]} cellSize={.7} cellThickness={.5} cellColor="#252730" sectionSize={3.5} sectionThickness={1} sectionColor="#5b5d69" fadeDistance={30} fadeStrength={1.4} infiniteGrid/><Sparkles count={130} scale={[18,20,12]} size={1} speed={.18} opacity={.28} color="#f2d6ae"/></>;
export default function GlobalScene(){return <div style={{position:'fixed',inset:0,width:'100vw',height:'100vh',zIndex:-1,pointerEvents:'none'}}><Canvas dpr={[1,1.5]} camera={{position:[0,1.8,23],fov:42}}><color attach="background" args={['#050609']}/><Scene/></Canvas></div>}
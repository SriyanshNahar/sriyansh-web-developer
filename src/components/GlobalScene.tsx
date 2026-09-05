import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, Sparkles, Text } from '@react-three/drei';
import * as THREE from 'three';

type V3=[number,number,number];
const M=({p,s,c='#181a20',e}:{p:V3;s:V3;c?:string;e?:string})=><mesh position={p}><boxGeometry args={s}/><meshStandardMaterial color={c} emissive={e||'#000'} emissiveIntensity={e?.startsWith('#')?.valueOf()?0.18:0} metalness={0.35} roughness={0.42}/></mesh>;
const Label=({p,children,size=.18,color='#f4e6cf'}:{p:V3;children:string;size?:number;color?:string})=><Text position={p} fontSize={size} color={color} anchorX="center" anchorY="middle" letterSpacing={0.04}>{children}</Text>;

const Plant=({p}:{p:V3})=><group position={p}><M p={[0,.18,0]} s={[.32,.36,.32]} c="#1c1d20"/>{[-.22,-.1,0,.1,.22].map((x,i)=><M key={i} p={[x,.55+Math.abs(x)*.35,0]} s={[.08,.55,.05]} c="#253b27"/>)}</group>;
const Desk=({p}:{p:V3})=><group position={p}><M p={[0,.46,0]} s={[2.6,.1,.75]} c="#211c17"/><M p={[-1.12,.2,0]} s={[.08,.52,.55]} c="#15161a"/><M p={[1.12,.2,0]} s={[.08,.52,.55]} c="#15161a"/><M p={[-.48,.95,-.05]} s={[.9,.56,.06]} c="#11151b" e="#0a1728"/><M p={[.48,.95,-.05]} s={[.9,.56,.06]} c="#11151b" e="#151025"/><Label p={[-.48,.96,.01]} size={.075}>DESIGN</Label><Label p={[.48,.96,.01]} size={.075}>CREATE</Label></group>;
const Lounge=({p}:{p:V3})=><group position={p}><M p={[-.8,.35,0]} s={[1.25,.7,.75]} c="#1a1a1d"/><M p={[.8,.35,0]} s={[1.25,.7,.75]} c="#1a1a1d"/><M p={[0,.22,.65]} s={[1.1,.35,.7]} c="#28221c"/><Plant p={[-1.55,.1,.4]}/><Plant p={[1.55,.1,.4]}/></group>;
const Shelf=({p}:{p:V3})=><group position={p}><M p={[0,1.15,0]} s={[.12,2.3,.4]} c="#18191e"/>{[.3,.8,1.3,1.8].map((y,i)=><M key={i} p={[.22,y,0]} s={[.58,.05,.38]} c="#4a351e"/>)}</group>;
const Facade=({y}:{y:number})=><group position={[0,y,.08]}>
  {[-3.3,-2.2,-1.1,0,1.1,2.2,3.3].map(x=><M key={x} p={[x,0,0]} s={[.055,2.18,.18]} c="#24272d"/>)}
  <M p={[0,-1.12,0]} s={[8.7,.05,.16]} c="#262a31"/>
</group>;
const Steps=()=> <group position={[0,-3.03,1.05]}>{[0,1,2,3,4].map(i=><M key={i} p={[0,i*.11,-i*.14]} s={[5.2-i*.32,.12,.42]} c="#3a3126" e="#2a1c0f"/>)}</group>;
const Pergola=()=> <group position={[0,6.05,-.05]}><M p={[0,0,0]} s={[8.8,.12,.75]} c="#17191f"/>{[-3.5,-2.5,-1.5,-.5,.5,1.5,2.5,3.5].map(x=><M key={x} p={[x,.48,0]} s={[.08,.9,.9]} c="#24272b"/>)}</group>;
const ExteriorDetails=()=> <><Steps/><Pergola/>
  <M p={[-5.35,-1.45,-.4]} s={[.35,2.1,1.15]} c="#101217"/><Label p={[-5.35,-.8,.2]} size={.09}>CREATIVE</Label><Label p={[-5.35,-1.05,.2]} size={.09}>DESIGN</Label>
  <M p={[5.25,-.35,-.35]} s={[.35,3.4,1.05]} c="#111318"/><Label p={[5.25,.35,.18]} size={.1}>TURNING</Label><Label p={[5.25,.08,.18]} size={.1}>IDEAS</Label><Label p={[5.25,-.19,.18]} size={.1}>IMPACT</Label>
  {[-4.9,-3.5,3.5,4.9].map((x,i)=><Plant key={i} p={[x,-2.92,.72]}/>)}
  <M p={[-6.1,-3.02,.25]} s={[1.55,.7,.42]} c="#3a332a"/><Label p={[-6.1,-2.94,.48]} size={.16}>SN STUDIO</Label>
  <M p={[6.1,-3.02,.25]} s={[1.55,.7,.42]} c="#3a332a"/><Label p={[6.1,-2.94,.48]} size={.12}>IDEAS BUILD</Label>
</>;

const Room=({y,title,sub,kind}:{y:number;title:string;sub:string;kind:'reception'|'design'|'lab'})=>{
 const items=kind==='reception'?<><Lounge p={[0,-.5,.25]}/><M p={[0,.15,-.1]} s={[2.6,.5,.5]} c="#201b17"/><Label p={[0,.28,.18]} size={.15}>WELCOME</Label><Plant p={[-3,-.7,.2]}/><Plant p={[3,-.7,.2]}/></>:kind==='design'?<><Desk p={[0,-.55,.25]}/><Shelf p={[-3,-.85,-.1]}/><Shelf p={[3,-.85,-.1]}/><Plant p={[-2.1,-.8,.2]}/><Plant p={[2.1,-.8,.2]}/></>:<><Desk p={[0,-.55,.25]}/><M p={[-2.5,-.05,.05]} s={[1.15,.8,.08]} c="#0b1720" e="#12445a"/><M p={[2.5,-.05,.05]} s={[1.15,.8,.08]} c="#151022" e="#3a1b58"/><Label p={[-2.5,-.02,.1]} size={.11}>3D</Label><Label p={[2.5,-.02,.1]} size={.11}>WEB</Label></>;
 return <group position={[0,y,0]}><M p={[0,0,-.68]} s={[9.5,2.7,.55]} c="#0e1014"/><M p={[0,0,-.35]} s={[8.8,2.35,.06]} c="#10141a"/><Facade y={0}/><M p={[0,1.38,-.22]} s={[9.7,.16,.7]} c="#1a1c22"/><M p={[0,-1.38,-.22]} s={[9.7,.13,.7]} c="#17191f"/><M p={[-4.45,0,-.08]} s={[.13,2.65,.65]} c="#25272d"/><M p={[4.45,0,-.08]} s={[.13,2.65,.65]} c="#25272d"/>
 <Label p={[0,1.02,-.1]} size={.2}>{title}</Label><Label p={[0,.72,-.1]} size={.08} color="#b9a98f">{sub}</Label>{items}
 <pointLight position={[-3,0.55,1.2]} intensity={2.4} color="#d68c42" distance={5}/><pointLight position={[3,.55,1.2]} intensity={2.1} color="#ffd6a0" distance={5}/>
 </group>
};

const Studio=()=>{const root=useRef<THREE.Group>(null);const target=useRef(new THREE.Vector3());useFrame(({camera,mouse},d)=>{const max=Math.max(1,document.body.scrollHeight-window.innerHeight),p=Math.min(1,window.scrollY/max);const z=THREE.MathUtils.lerp(15.2,7.4,p),y=THREE.MathUtils.lerp(1.7,2.1,p);camera.position.lerp(new THREE.Vector3(mouse.x*.35,y,z),1-Math.exp(-d*1.45));target.current.set(0,THREE.MathUtils.lerp(.8,2.3,p),0);camera.lookAt(target.current);if(root.current)root.current.rotation.y=THREE.MathUtils.lerp(root.current.rotation.y,mouse.x*.035,1-Math.exp(-d*2));});return <group ref={root}>
 <M p={[-3.95,2.05,-.8]} s={[1.35,7.8,.72]} c="#090b0f"/><Label p={[-3.95,3.45,-.38]} size={.56}>SN</Label><Label p={[-3.95,2.75,-.38]} size={.12}>STUDIO</Label><Label p={[-3.95,1.85,-.38]} size={.08} color="#a5a7ad">DESIGN · CREATE · GROW</Label>
 <Room y={-1.65} title="WELCOME TO SRIYANSH STUDIO" sub="GROUND FLOOR · CLIENT EXPERIENCE" kind="reception"/>
 <Room y={1.15} title="THE DESIGN FLOOR" sub="FIRST FLOOR · GRAPHIC DESIGN STUDIO" kind="design"/>
 <Room y={3.95} title="3D · WEB · MOTION" sub="SECOND FLOOR · CREATIVE LAB" kind="lab"/>
 <ExteriorDetails/>
 <M p={[0,5.5,-.5]} s={[9.8,.18,.85]} c="#1b1d22"/><Label p={[1.1,5.82,-.25]} size={.18}>IDEAS LIVE HERE</Label>
 <M p={[0,-3.15,0]} s={[10.8,.3,3.6]} c="#15171b"/><M p={[0,-2.76,-.18]} s={[4.8,.13,1.35]} c="#c49b68" e="#4b2d14"/><Label p={[0,-2.22,.18]} size={.28}>SRIYANSH STUDIO</Label><Label p={[0,-2.56,.18]} size={.09} color="#b7a58a">CREATIVE MINDS · BOLDER BRANDS</Label>
 </group>};

const Scene=()=><><fog attach="fog" args={['#050609',12,32]}/><ambientLight intensity={.42}/><directionalLight position={[4,8,6]} intensity={1.15} color="#f0e0c7"/><Studio/><Grid position={[0,-3.32,0]} args={[36,36]} cellSize={.65} cellThickness={.5} cellColor="#252730" sectionSize={3.25} sectionThickness={1} sectionColor="#5b5d69" fadeDistance={24} fadeStrength={1.4} infiniteGrid/><Sparkles count={100} scale={[16,11,10]} size={1.05} speed={.2} opacity={.3} color="#f2d6ae"/></>;
export default function GlobalScene(){return <div style={{position:'fixed',inset:0,width:'100vw',height:'100vh',zIndex:-1,pointerEvents:'none'}}><Canvas dpr={[1,1.5]} camera={{position:[0,1.7,15.2],fov:44}}><color attach="background" args={['#050609']}/><Scene/></Canvas></div>}
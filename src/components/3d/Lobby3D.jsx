import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

// Chatbot já criado
import NPCChat from "../NPCChat";

// ======================================================
// CORES DA BRUNA
// ======================================================

const C = {
  skin: "#c08a68",
  skinLight: "#cc9876",
  skinShade: "#9c6648",
  hair: "#100a0d",
  hairLight: "#22171a",
  dress: "#0b0b0f",
  dressSheen: "#262630",
  lace: "#2a1d1d",
  shoes: "#111016",
  white: "#fff9f4",
  iris: "#2b170f",
  lip: "#a24f58",
  mouth: "#4a1a1f",
  teeth: "#fffaf2",
  silver: "#d5d8df",
  nail: "#0d0d10",
};

// ======================================================
// PEÇAS REUTILIZÁVEIS
// ======================================================

function Ellipsoid({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  color = C.skin,
  rotation = [0, 0, 0],
  roughness = 0.85,
}) {
  return (
    <mesh position={position} scale={scale} rotation={rotation} castShadow>
      <sphereGeometry args={[1, 32, 24]} />
      <meshStandardMaterial color={color} roughness={roughness} />
    </mesh>
  );
}

function Limb({ start, end, radiusTop, radiusBottom, color }) {
  const startVec = new THREE.Vector3(...start);
  const endVec = new THREE.Vector3(...end);

  const center = startVec.clone().add(endVec).multiplyScalar(0.5);

  const direction = endVec.clone().sub(startVec);
  const length = direction.length();

  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction.normalize(),
  );

  return (
    <mesh position={center.toArray()} quaternion={quaternion} castShadow>
      <cylinderGeometry args={[radiusTop, radiusBottom, length, 20]} />
      <meshStandardMaterial color={color} roughness={0.9} />
    </mesh>
  );
}

// ======================================================
// CABELO COM MECHAS INDIVIDUAIS
// ======================================================

function HairStrand({ points, radius = 0.085, color = C.hair }) {
  const curve = new THREE.CatmullRomCurve3(
    points.map((p) => new THREE.Vector3(...p)),
  );

  const geometry = new THREE.TubeGeometry(curve, 24, radius, 8, false);

  return (
    <mesh geometry={geometry} castShadow>
      <meshStandardMaterial color={color} roughness={0.75} />
    </mesh>
  );
}

// ======================================================
// ROSTO E CABELO DA BRUNA
// ======================================================

function BrunaHead({ headRef, eyeRefs }) {
  return (
    <group ref={headRef} position={[0, 2.47, 0]}>
      {/* Pescoço */}
      <mesh position={[0, -0.36, 0]}>
        <cylinderGeometry args={[0.105, 0.125, 0.35, 24]} />
        <meshStandardMaterial color={C.skin} />
      </mesh>

      {/* Cabelo atrás (longo, até o peito) */}
      <Ellipsoid
        position={[0, -0.42, -0.17]}
        scale={[0.385, 0.68, 0.2]}
        color={C.hair}
      />
      <Ellipsoid
        position={[0, -0.1, -0.14]}
        scale={[0.405, 0.56, 0.31]}
        color={C.hair}
      />

      {/* Rosto */}
      <Ellipsoid
        position={[0, 0.02, 0.025]}
        scale={[0.355, 0.44, 0.33]}
        color={C.skin}
      />
      <Ellipsoid
        position={[0, -0.26, 0.08]}
        scale={[0.25, 0.16, 0.2]}
        color={C.skin}
      />

      {/* Orelhas + brincos longos de gota */}
      {[-1, 1].map((side) => (
        <group key={`ear-${side}`}>
          <Ellipsoid
            position={[side * 0.345, -0.07, 0.035]}
            scale={[0.065, 0.12, 0.07]}
            color={C.skinShade}
          />
          <Ellipsoid
            position={[side * 0.355, -0.19, 0.04]}
            scale={[0.014, 0.014, 0.014]}
            color={C.silver}
          />
          <mesh position={[side * 0.36, -0.3, 0.04]} scale={[1, 1.8, 1]}>
            <torusGeometry args={[0.04, 0.006, 8, 24]} />
            <meshStandardMaterial
              color={C.silver}
              metalness={0.9}
              roughness={0.25}
            />
          </mesh>
        </group>
      ))}

      {/* Olhos */}
      {[-1, 1].map((side, index) => (
        <group key={`eye-${side}`} position={[side * 0.145, 0.055, 0.31]}>
          <Ellipsoid scale={[0.092, 0.05, 0.025]} color={C.white} />

          <mesh
            ref={(element) => {
              eyeRefs.current[index] = element;
            }}
            position={[0, -0.002, 0.023]}
          >
            <sphereGeometry args={[0.04, 20, 20]} />
            <meshStandardMaterial color={C.iris} />
          </mesh>

          <Ellipsoid
            position={[0, -0.002, 0.056]}
            scale={[0.019, 0.026, 0.007]}
            color="#0a0507"
          />
          <Ellipsoid
            position={[-0.013, 0.016, 0.063]}
            scale={[0.009, 0.01, 0.005]}
            color="#ffffff"
          />

          {/* Sobrancelha marcada e arqueada */}
          <mesh position={[0, 0.115, 0.012]} rotation={[0, 0, -side * 0.18]}>
            <capsuleGeometry args={[0.017, 0.125, 6, 12]} />
            <meshStandardMaterial color={C.hair} />
          </mesh>
        </group>
      ))}

      {/* Nariz */}
      <Ellipsoid
        position={[0, -0.065, 0.345]}
        scale={[0.058, 0.086, 0.066]}
        color={C.skinLight}
      />

      {/* Bochechas (elevadas pelo sorriso) */}
      {[-1, 1].map((side) => (
        <Ellipsoid
          key={`cheek-${side}`}
          position={[side * 0.2, -0.15, 0.272]}
          scale={[0.095, 0.06, 0.016]}
          color="#c9755f"
        />
      ))}

      {/* Sorriso largo com dentes */}
      <group position={[0, -0.222, 0.3]}>
        <mesh scale={[1, 0.75, 1]}>
          <circleGeometry args={[0.105, 32, Math.PI, Math.PI]} />
          <meshStandardMaterial color={C.mouth} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, -0.001, 0.003]} scale={[0.94, 0.38, 1]}>
          <circleGeometry args={[0.105, 32, Math.PI, Math.PI]} />
          <meshStandardMaterial color={C.teeth} side={THREE.DoubleSide} />
        </mesh>
        <mesh
          position={[0, 0, 0.006]}
          rotation={[0, 0, Math.PI]}
          scale={[1, 0.75, 1]}
        >
          <torusGeometry args={[0.105, 0.011, 8, 32, Math.PI]} />
          <meshStandardMaterial color={C.lip} />
        </mesh>
        <Ellipsoid
          position={[0, 0, 0.006]}
          scale={[0.105, 0.01, 0.01]}
          color={C.lip}
        />
      </group>

      {/* Topo do cabelo */}
      <Ellipsoid
        position={[0, 0.3, -0.07]}
        scale={[0.375, 0.2, 0.33]}
        color={C.hair}
      />

      {/* Repartição no meio, mechas caindo dos dois lados do rosto */}
      {[-1, 1].map((side) => (
        <group key={`hair-${side}`}>
          <HairStrand
            points={[
              [side * 0.02, 0.46, 0.12],
              [side * 0.17, 0.4, 0.27],
              [side * 0.3, 0.22, 0.27],
              [side * 0.37, 0.0, 0.15],
            ]}
            radius={0.06}
          />

          {/* Mechas onduladas na frente, sobre os ombros */}
          <HairStrand
            points={[
              [side * 0.33, 0.1, 0.1],
              [side * 0.4, -0.15, 0.16],
              [side * 0.34, -0.4, 0.2],
              [side * 0.4, -0.62, 0.21],
              [side * 0.35, -0.85, 0.21],
              [side * 0.4, -1.0, 0.2],
            ]}
            radius={0.075}
          />
          <HairStrand
            points={[
              [side * 0.3, 0.15, 0.0],
              [side * 0.43, -0.1, 0.02],
              [side * 0.38, -0.35, 0.05],
              [side * 0.45, -0.6, 0.08],
              [side * 0.4, -0.85, 0.1],
            ]}
            radius={0.085}
            color={C.hairLight}
          />

          {/* Mechas de trás */}
          <HairStrand
            points={[
              [side * 0.25, 0.2, -0.25],
              [side * 0.34, -0.1, -0.3],
              [side * 0.28, -0.4, -0.3],
              [side * 0.34, -0.7, -0.28],
              [side * 0.28, -0.98, -0.25],
            ]}
            radius={0.1}
          />
        </group>
      ))}
    </group>
  );
}

// ======================================================
// CORPO DA BRUNA
// ======================================================

// Braço nu, com a mão apoiada na cintura (side: -1 esquerda, 1 direita)
function Arm({ armRef, side: s }) {
  return (
    <group ref={armRef} position={[s * 0.45, 1.91, 0]}>
      <Limb
        start={[0, 0, 0]}
        end={[s * 0.2, -0.42, -0.02]}
        radiusTop={0.075}
        radiusBottom={0.062}
        color={C.skin}
      />
      <Ellipsoid
        position={[s * 0.2, -0.42, -0.02]}
        scale={[0.064, 0.064, 0.064]}
        color={C.skin}
      />
      <Limb
        start={[s * 0.2, -0.42, -0.02]}
        end={[-s * 0.15, -0.71, 0.16]}
        radiusTop={0.062}
        radiusBottom={0.045}
        color={C.skin}
      />
      <Ellipsoid
        position={[-s * 0.15, -0.73, 0.16]}
        scale={[0.05, 0.07, 0.04]}
        color={C.skin}
      />
      {/* Unhas escuras */}
      <Ellipsoid
        position={[-s * 0.17, -0.78, 0.18]}
        scale={[0.03, 0.02, 0.015]}
        color={C.nail}
      />
    </group>
  );
}

function BrunaBody({ leftArm, rightArm, leftLeg, rightLeg }) {
  return (
    <group>
      {/* Tronco (pele) achatado na profundidade */}
      <group scale={[1, 1, 0.62]}>
        <mesh position={[0, 1.54, 0]} castShadow>
          <cylinderGeometry args={[0.4, 0.29, 0.94, 32]} />
          <meshStandardMaterial color={C.skin} roughness={0.85} />
        </mesh>

        {/* Parte de renda transparente do corpete */}
        <mesh position={[0, 1.4, 0]}>
          <cylinderGeometry args={[0.352, 0.33, 0.4, 32]} />
          <meshStandardMaterial
            color={C.lace}
            transparent
            opacity={0.6}
            roughness={0.9}
          />
        </mesh>

        {/* Barbatanas verticais do corpete */}
        {[-0.9, -0.45, 0, 0.45, 0.9].map((a) => (
          <mesh
            key={`bone-${a}`}
            position={[0.345 * Math.sin(a), 1.4, 0.345 * Math.cos(a)]}
            rotation={[0, a, 0]}
          >
            <boxGeometry args={[0.028, 0.4, 0.02]} />
            <meshStandardMaterial color={C.dress} />
          </mesh>
        ))}

        {/* Faixa da cintura */}
        <mesh position={[0, 1.17, 0]}>
          <cylinderGeometry args={[0.322, 0.31, 0.12, 32]} />
          <meshStandardMaterial
            color={C.dressSheen}
            roughness={0.35}
            metalness={0.2}
          />
        </mesh>
      </group>

      {/* Ombros e colo à mostra */}
      <Ellipsoid
        position={[0, 1.95, 0]}
        scale={[0.44, 0.12, 0.2]}
        color={C.skin}
      />

      {/* Bojo do corpete */}
      {[-1, 1].map((s) => (
        <group key={`cup-${s}`}>
          <Ellipsoid
            position={[s * 0.12, 1.76, 0.2]}
            scale={[0.14, 0.12, 0.1]}
            color={C.dress}
            roughness={0.35}
          />
          {/* Alça fina */}
          <Limb
            start={[s * 0.15, 1.86, 0.25]}
            end={[s * 0.21, 2.02, 0.05]}
            radiusTop={0.015}
            radiusBottom={0.015}
            color={C.dress}
          />
        </group>
      ))}

      {/* Saia superior (cetim) */}
      <group scale={[1, 1, 0.8]}>
        <mesh position={[0, 1.01, 0]} castShadow>
          <cylinderGeometry args={[0.31, 0.36, 0.32, 32]} />
          <meshStandardMaterial
            color={C.dress}
            roughness={0.3}
            metalness={0.15}
          />
        </mesh>

        {/* Saia longa com fenda (abertura do lado +x, frente) */}
        <mesh position={[0, 0.485, 0]} castShadow>
          <cylinderGeometry
            args={[0.36, 0.5, 0.73, 40, 1, true, 0.6, Math.PI * 2 - 0.5]}
          />
          <meshStandardMaterial
            color={C.dress}
            roughness={0.3}
            metalness={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* Braços */}
      <Arm armRef={leftArm} side={-1} />
      <Arm armRef={rightArm} side={1} />

      {/* Pernas (a da fenda aparece) */}
      {[
        { ref: leftLeg, x: -0.17 },
        { ref: rightLeg, x: 0.17 },
      ].map(({ ref, x }) => (
        <group key={`leg-${x}`} ref={ref} position={[x, 0.95, 0]}>
          <Limb
            start={[0, 0, 0]}
            end={[0, -0.43, 0]}
            radiusTop={0.115}
            radiusBottom={0.085}
            color={C.skin}
          />
          <Limb
            start={[0, -0.43, 0]}
            end={[0, -0.83, 0]}
            radiusTop={0.085}
            radiusBottom={0.062}
            color={C.skin}
          />
          <Ellipsoid
            position={[0, -0.83, 0.08]}
            scale={[0.08, 0.07, 0.17]}
            color={C.shoes}
          />
        </group>
      ))}
    </group>
  );
}

// ======================================================
// NPC ANIMADA DA BRUNA
// ======================================================

function BrunaNPC({ onChatOpen }) {
  const character = useRef(null);
  const head = useRef(null);

  const leftArm = useRef(null);
  const rightArm = useRef(null);

  const leftLeg = useRef(null);
  const rightLeg = useRef(null);

  const eyes = useRef([]);

  const elapsed = useRef(0);
  const waveUntil = useRef(0);

  const [greeting, setGreeting] = useState(false);

  useFrame((state, delta) => {
    if (!character.current) return;

    const dt = Math.min(delta, 0.05);
    elapsed.current += dt;
    const t = elapsed.current;

    // Ela fica parada, com um balanço suave
    character.current.position.x = 0;
    character.current.position.y = 0.22 + Math.sin(t * 1.4) * 0.006;
    character.current.rotation.y = Math.sin(t * 0.5) * 0.12;

    // Braço esquerdo: mão na cintura
    if (leftArm.current) {
      leftArm.current.rotation.z = THREE.MathUtils.damp(
        leftArm.current.rotation.z,
        0,
        6,
        dt,
      );
    }

    // Braço direito: acena ao clicar, depois volta para a cintura
    if (rightArm.current) {
      if (t < waveUntil.current) {
        rightArm.current.rotation.z = 2.4 + Math.sin(t * 9) * 0.2;
      } else {
        rightArm.current.rotation.z = THREE.MathUtils.damp(
          rightArm.current.rotation.z,
          0,
          6,
          dt,
        );
      }
    }

    // Cabeça
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.6) * 0.09;
      head.current.rotation.z = Math.sin(t * 0.7) * 0.025;
    }

    // Piscar
    const blinking = t % 4.3 > 4.1;
    eyes.current.forEach((eye) => {
      if (eye) eye.scale.y = blinking ? 0.12 : 1;
    });
  });

  function handleClick(event) {
    event.stopPropagation();

    waveUntil.current = elapsed.current + 2.1;

    setGreeting(true);

    onChatOpen?.();
  }

  return (
    <group ref={character} onClick={handleClick} position={[0, 0.22, 0]}>
      <BrunaBody
        leftArm={leftArm}
        rightArm={rightArm}
        leftLeg={leftLeg}
        rightLeg={rightLeg}
      />

      <BrunaHead headRef={head} eyeRefs={eyes} />

      <Text
        position={[0, 3.05, 0]}
        fontSize={0.22}
        color="#ffffff"
        outlineWidth={0.008}
        outlineColor="#181225"
        anchorX="center"
      >
        Profª Bruna
      </Text>

      <Text
        position={[0, 2.88, 0]}
        fontSize={0.105}
        color="#c6b6fa"
        anchorX="center"
      >
        Clique para conversar
      </Text>

      {greeting && (
        <group position={[0.88, 3.28, 0]}>
          <mesh>
            <planeGeometry args={[2.14, 0.65]} />
            <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} />
          </mesh>

          <Text
            position={[0, 0, 0.015]}
            fontSize={0.132}
            color="#282034"
            maxWidth={1.94}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
          >
            Oi! Sou a Bruna virtual! Vamos explorar a Geração Z?
          </Text>
        </group>
      )}
    </group>
  );
}

// ======================================================
// LOBBY 3D + CHATBOT
// ======================================================

function Lobby3D({ onNavigateYear }) {
  const [chatOpen, setChatOpen] = useState(false);

  function handleNavigateYear(year) {
    const success = onNavigateYear?.(year) ?? false;

    if (success) {
      setChatOpen(false);
    }

    return success;
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "540px",
        overflow: "hidden",
        borderRadius: "22px",
        background: "#10101a",
        border: "1px solid rgba(168,85,247,0.35)",
      }}
    >
      <Canvas
        camera={{
          position: [0, 2.7, 6.7],
          fov: 42,
        }}
        shadows
        dpr={[1, 2]}
      >
        <color attach="background" args={["#10101a"]} />

        <ambientLight intensity={1.7} />

        <directionalLight position={[4, 8, 5]} intensity={2.4} castShadow />

        <pointLight position={[-3, 4, 3]} color="#a855f7" intensity={15} />

        <pointLight position={[4, 3, -3]} color="#3b82f6" intensity={11} />

        {/* Piso */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.05, 0]}
          receiveShadow
        >
          <planeGeometry args={[14, 14]} />
          <meshStandardMaterial color="#1b1a2b" />
        </mesh>

        {/* Plataforma */}
        <mesh position={[0, 0.1, 0]} receiveShadow castShadow>
          <cylinderGeometry args={[1.8, 1.8, 0.2, 64]} />
          <meshStandardMaterial
            color="#37324f"
            metalness={0.35}
            roughness={0.4}
          />
        </mesh>

        {/* Anel luminoso */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.215, 0]}>
          <torusGeometry args={[1.55, 0.025, 10, 80]} />
          <meshStandardMaterial
            color="#bb8cff"
            emissive="#8b5cf6"
            emissiveIntensity={1.8}
          />
        </mesh>

        {/* Primeira professora NPC */}
        <BrunaNPC onChatOpen={() => setChatOpen(true)} />

        <OrbitControls
          enablePan={false}
          minDistance={3.5}
          maxDistance={9}
          maxPolarAngle={Math.PI / 2}
          enabled={!chatOpen}
        />
      </Canvas>

      {!chatOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "18px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 18px",
            borderRadius: "30px",
            background: "rgba(30,24,47,0.93)",
            border: "1px solid rgba(168,85,247,0.4)",
            color: "#e9dcff",
            fontSize: "12px",
            textAlign: "center",
            pointerEvents: "none",
            maxWidth: "90%",
          }}
        >
          👆 Clique na professora Bruna para conversar!
        </div>
      )}

      {chatOpen && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px",
            background: "rgba(8,7,17,0.7)",
            backdropFilter: "blur(5px)",
          }}
        >
          <NPCChat
            onClose={() => setChatOpen(false)}
            onNavigateYear={handleNavigateYear}
          />
        </div>
      )}
    </div>
  );
}

export default Lobby3D;

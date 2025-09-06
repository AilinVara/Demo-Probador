import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from './Model';

function ProbadorVirtual () {
  const [outfit, setOutfit] = useState({
    mostrarTraje: false,
    mostrarRemera: false
  });

const cambiarOutfit = (prenda: keyof typeof outfit) => {
    setOutfit(prevState => ({
        ...prevState,
        [prenda]: !prevState[prenda]
    }));
};

  return (
    <>
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, -1, 0] }}
        >
          <Environment preset="city" />
          <ambientLight intensity={0.5} />

          <OrbitControls
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            target={[0, 2, 0]}
            enableZoom={false} />

          <Model url="/avatar-masculino-1.glb" scale={2} />
          {outfit.mostrarTraje && <Model url="/traje-1.glb" scale={2} position={[0, 0, 0]} />}
          {outfit.mostrarRemera && <Model url="/buzo.glb" scale={2} position={[0, 0, 0]} />}
        </Canvas>
      </div>

      <div className="button-container">
        <button
          onClick={() => cambiarOutfit('mostrarTraje')}
          className="button-style"
        >
          {outfit.mostrarTraje ? 'Quitar Traje' : 'Probar Traje'}
        </button>
        <button
          onClick={() => cambiarOutfit('mostrarRemera')}
          className="button-style"
        >
          {outfit.mostrarRemera ? 'Quitar Remera' : 'Probar Remera'}
        </button>
      </div>
    </>
  );
}

export default ProbadorVirtual;
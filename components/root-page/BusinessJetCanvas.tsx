"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const FLIGHT_SECONDS = 4.1;

const makeWing = (points: Array<[number, number]>, material: THREE.Material) => {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  points.slice(1).forEach(([x, y]) => shape.lineTo(x, y));
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.12, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2 });
  geometry.rotateX(Math.PI / 2);
  geometry.translate(0, 0, -0.06);
  return new THREE.Mesh(geometry, material);
};

function buildJet() {
  const jet = new THREE.Group();
  const airframe = new THREE.MeshPhysicalMaterial({ color: "#edf1f5", metalness: 0.34, roughness: 0.42, clearcoat: 0.22, clearcoatRoughness: 0.32 });
  const wingMaterial = new THREE.MeshPhysicalMaterial({ color: "#c6d0db", metalness: 0.42, roughness: 0.4, clearcoat: 0.18 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: "#111827", metalness: 0.82, roughness: 0.22 });
  const glass = new THREE.MeshPhysicalMaterial({ color: "#071d33", metalness: 0.12, roughness: 0.08, transparent: true, opacity: 0.92, clearcoat: 1 });

  // Smooth fuselage: front is +Z, with a rounded nose and a slim rear taper.
  const fuselage = new THREE.Mesh(new THREE.CapsuleGeometry(0.72, 4.9, 20, 40), airframe);
  fuselage.rotateX(Math.PI / 2);
  fuselage.position.z = -0.05;
  jet.add(fuselage);

  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.7, 48, 28), airframe);
  nose.scale.set(0.84, 0.57, 0.96);
  nose.position.set(0, -0.08, 3.06);
  jet.add(nose);

  // A broad, shallow windshield band gives the front the flat Gulfstream-like
  // glazing line. Its dividers sit flush on the glass, so they move with it.
  const windscreenShape = new THREE.Shape();
  windscreenShape.moveTo(-0.56, -0.13);
  windscreenShape.lineTo(-0.47, 0.17);
  windscreenShape.lineTo(0.47, 0.17);
  windscreenShape.lineTo(0.56, -0.13);
  windscreenShape.lineTo(-0.56, -0.13);
  const windscreen = new THREE.Mesh(
    new THREE.ExtrudeGeometry(windscreenShape, { depth: 0.04, bevelEnabled: true, bevelSize: 0.006, bevelThickness: 0.006, bevelSegments: 2 }),
    glass,
  );
  windscreen.position.set(0, 0.22, 3.67);
  jet.add(windscreen);
  const cockpitFrame = new THREE.MeshStandardMaterial({ color: "#8da0b8", metalness: 0.55, roughness: 0.3 });
  [-0.25, 0, 0.25].forEach((x) => {
    const divider = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.275, 0.012), cockpitFrame);
    divider.position.set(x, 0.24, 3.718);
    jet.add(divider);
  });

  const leftWing = makeWing([[-0.42, 0.65], [-8.4, -2.3], [-8.65, -3.35], [-0.38, -1.48]], wingMaterial);
  const rightWing = makeWing([[0.42, 0.65], [8.4, -2.3], [8.65, -3.35], [0.38, -1.48]], wingMaterial);
  leftWing.position.y = -0.03;
  rightWing.position.y = -0.03;
  jet.add(leftWing, rightWing);

  const verticalTailGeometry = new THREE.BufferGeometry();
  verticalTailGeometry.setAttribute("position", new THREE.Float32BufferAttribute([
    -0.27, 0.46, -3.8, 0.27, 0.46, -3.8, 0, 2.1, -4.55,
    0.27, 0.46, -3.8, 0.31, 0.46, -4.45, 0, 2.1, -4.55,
    -0.31, 0.46, -4.45, -0.27, 0.46, -3.8, 0, 2.1, -4.55,
  ], 3));
  verticalTailGeometry.computeVertexNormals();
  const verticalTail = new THREE.Mesh(verticalTailGeometry, new THREE.MeshPhysicalMaterial({ color: "#b9c9da", metalness: 0.58, roughness: 0.3, side: THREE.DoubleSide }));
  jet.add(verticalTail);

  const leftTailplane = makeWing([[-0.16, -4.34], [-2.85, -4.74], [-2.58, -5.03], [-0.1, -4.62]], wingMaterial);
  const rightTailplane = makeWing([[0.16, -4.34], [2.85, -4.74], [2.58, -5.03], [0.1, -4.62]], wingMaterial);
  leftTailplane.position.y = 2.04;
  rightTailplane.position.y = 2.04;
  jet.add(leftTailplane, rightTailplane);

  const fanGroups: THREE.Group[] = [];
  const makeEngine = (x: number) => {
    const engine = new THREE.Group();
    engine.position.set(x, 0.58, -2.15);
    const nacelle = new THREE.Mesh(new THREE.CylinderGeometry(0.47, 0.54, 1.92, 48, 3), airframe);
    nacelle.rotateX(Math.PI / 2);
    engine.add(nacelle);

    const intakeRing = new THREE.Mesh(new THREE.TorusGeometry(0.41, 0.06, 16, 48), wingMaterial);
    intakeRing.position.z = 0.95;
    engine.add(intakeRing);
    const intake = new THREE.Mesh(new THREE.CircleGeometry(0.4, 48), darkMetal);
    intake.position.z = 0.96;
    engine.add(intake);

    const fan = new THREE.Group();
    fan.position.z = 0.99;
    const bladeGeometry = new THREE.BoxGeometry(0.028, 0.27, 0.028);
    for (let blade = 0; blade < 24; blade += 1) {
      const part = new THREE.Mesh(bladeGeometry, wingMaterial);
      part.position.y = 0.175;
      part.rotation.z = (blade / 24) * Math.PI * 2 + 0.16;
      fan.add(part);
    }
    const spinner = new THREE.Mesh(new THREE.ConeGeometry(0.085, 0.21, 20), airframe);
    spinner.rotateX(Math.PI / 2);
    spinner.position.z = 0.16;
    fan.add(spinner);
    engine.add(fan);
    jet.add(engine);

    // Rear-mounted engines need a visible fuselage-to-nacelle fairing. Build
    // it in aircraft coordinates rather than inside the engine group so the
    // pylon actually spans the gap instead of becoming a floating top tab.
    const root = new THREE.Vector3(x > 0 ? 0.46 : -0.46, 0.56, -2.55);
    const nacelleMount = new THREE.Vector3(x > 0 ? x - 0.25 : x + 0.25, 0.92, -2.23);
    const pylonDirection = nacelleMount.clone().sub(root);
    const pylon = new THREE.Mesh(new THREE.BoxGeometry(0.24, pylonDirection.length(), 0.64), wingMaterial);
    pylon.position.copy(root.clone().add(nacelleMount).multiplyScalar(0.5));
    pylon.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pylonDirection.normalize());
    jet.add(pylon);

    const nacelleFairing = new THREE.Mesh(new THREE.SphereGeometry(0.19, 20, 14), wingMaterial);
    nacelleFairing.scale.set(0.85, 0.7, 1.55);
    nacelleFairing.position.copy(nacelleMount);
    jet.add(nacelleFairing);
    fanGroups.push(fan);
  };

  makeEngine(-1.17);
  makeEngine(1.17);

  const addLight = (x: number, color: number) => {
    const light = new THREE.PointLight(color, 3.6, 2.8);
    light.position.set(x, 0.1, -2.65);
    jet.add(light);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.08, 14, 10), new THREE.MeshBasicMaterial({ color }));
    bulb.position.copy(light.position);
    jet.add(bulb);
  };
  addLight(-8.4, 0xff3b30);
  addLight(8.4, 0x34c7ff);

  return { jet, fanGroups };
}

/** A real WebGL business-jet scene: approach, pitch-up, climb, and turbine spin. */
export function BusinessJetCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 180);
    camera.position.set(0, 1.1, 17);
    camera.lookAt(0, 0.1, -2);
    scene.add(new THREE.HemisphereLight(0xdbeafe, 0x1e3a5f, 2.4));
    const keyLight = new THREE.DirectionalLight(0xffffff, 4.2);
    keyLight.position.set(-5, 8, 12);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0x60a5fa, 2.4);
    rimLight.position.set(6, 3, -8);
    scene.add(rimLight);

    const { jet, fanGroups } = buildJet();
    scene.add(jet);
    const start = performance.now();
    let frame = 0;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const render = (now: number) => {
      const elapsed = Math.min((now - start) / 1000, FLIGHT_SECONDS);
      const progress = elapsed / FLIGHT_SECONDS;
      const takeoff = Math.max((progress - 0.54) / 0.46, 0);
      // Keep advancing toward the camera throughout the manoeuvre.  The old
      // two-phase path reached z=0 and then started a separate climb, which
      // read as the aircraft stopping before taking off.
      // Cover most of the distance before rotation begins, so the aircraft
      // makes a genuinely close pass at the reveal. The linear tail keeps it
      // moving forward through the climb instead of holding position.
      jet.position.z = -84 + (1 - Math.pow(1 - progress, 3)) * 86 + progress * 16;
      jet.position.y = Math.pow(takeoff, 1.55) * 11.5;
      jet.rotation.x = -Math.sin(takeoff * Math.PI * 0.5) * 1.18;
      jet.scale.setScalar(0.76 + Math.min(progress / 0.7, 1) * 0.34 - takeoff * 0.08);
      fanGroups.forEach((fan, index) => { fan.rotation.z = now * 0.0045 * (index ? -1 : 1); });
      renderer.render(scene, camera);
      if (elapsed < FLIGHT_SECONDS) frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="jet-intro__canvas" aria-hidden="true" />;
}

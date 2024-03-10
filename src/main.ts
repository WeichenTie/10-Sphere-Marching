import "./style.css";

import {
  Cache,
  FileLoader,
  Mesh,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
  GLSL3,
  CubeTextureLoader,
  Clock,
} from "three";
import { throttle } from "lodash";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

Cache.enabled = true;
const loader = new FileLoader();
const cubeMapLoader = new CubeTextureLoader();

window.addEventListener(
  "resize",
  throttle(handleResize, 50, { leading: false })
);

function handleResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.getContext().canvas.width = window.innerWidth;
  renderer.getContext().canvas.height = window.innerHeight;
  /** @ts-ignore */
  (renderer.getContext().canvas as HTMLCanvasElement).style =
    "height: 100lvh !important;";
  quad.material.uniforms.u_WindowWidth = {
    value: renderer.getContext().canvas.width,
  };
  quad.material.uniforms.u_WindowHeight = {
    value: renderer.getContext().canvas.height,
  };
}

let clock = new Clock();
let delta = 0;
let interval = 1 / 60;

function animate(time: number) {
  const debugDelta = clock.getDelta();
  delta += debugDelta;

  if (delta > interval) {
    quad.material.uniforms.u_Time = { value: time * 0.0005 };

    renderer.render(scene, camera);
    delta = delta % interval;
  }
  requestAnimationFrame(animate);
}

const vert = loader.loadAsync("shaders/spheretracing/vert.glsl");
const frag = loader.loadAsync("shaders/spheretracing/frag.glsl");
const cubeMap = cubeMapLoader
  .setPath("cubemaps/aurora/")
  .loadAsync([
    "px.webp",
    "nx.webp",
    "py.webp",
    "ny.webp",
    "pz.webp",
    "nz.webp",
  ]);

const scene = new Scene();
const renderer = new WebGLRenderer({
  canvas: document.getElementById("hero-canvas") as HTMLCanvasElement,
});
const camera = new PerspectiveCamera(
  50,
  renderer.getContext().canvas.width / renderer.getContext().canvas.height,
  0.1,
  2000
);

camera.position.x = 20;
camera.lookAt(0, 0, 0);

new OrbitControls(camera, renderer.getContext().canvas as HTMLCanvasElement);

const quad = new Mesh(
  new PlaneGeometry(2, 2),
  new ShaderMaterial({
    vertexShader: (await vert) as string,
    fragmentShader: (await frag) as string,
    depthWrite: false,
    depthTest: false,
    glslVersion: GLSL3,

    uniforms: {
      u_Time: { value: 0 },
      u_WindowWidth: {
        value: renderer.getContext().canvas.width,
      },
      u_WindowHeight: {
        value: renderer.getContext().canvas.height,
      },
      u_InvProjection: { value: camera.projectionMatrixInverse },
      u_CameraToWorld: { value: camera.matrixWorld },
      u_CameraPosition: { value: camera.position },
      u_CubeMapTex: { value: await cubeMap },
    },
  })
);
scene.add(quad);
handleResize();
requestAnimationFrame(animate);

const fragmentShader = `
void main() {
  vec3 color = vec3(0.64, 0.31, 0.9);
  gl_FragColor = vec4(color, 1.0);
}
`

export default fragmentShader
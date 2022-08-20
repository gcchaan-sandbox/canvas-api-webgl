export const vertexShader2d = `
// バッファーからデータを取る属性
attribute vec4 a_position;

// 全てのシェーダーは「main」の関数がある
void main() {

  // 特別の変数「gl_Position」を割り当てることは頂点シェーダーの役割である
  gl_Position = a_position;
}
`;
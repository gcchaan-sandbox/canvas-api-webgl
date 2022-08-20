export const fragmentShader2d = `
// フラグメントシェーダーは既定の精度がないので選択することが必要である。
// 「mediump」は一般的な既定の設定である。それは「中間の精度」の意味である。
precision mediump float;

void main() {
  // 特別の変数「gl_FragColor」を割り当てることは
  // フラグメントシェーダーの役割である
  gl_FragColor = vec4(1, 0, 0.5, 1); // 赤紫
}
`
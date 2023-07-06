//
// シェーダープログラムを初期化し、WebGL にデータの描画方法を教える
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // シェーダープログラムの作成

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // シェーダープログラムの作成に失敗した場合、アラートを出す

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      `シェーダープログラムを初期化できません: ${gl.getProgramInfoLog(
        shaderProgram
      )}`
    );
    return null;
  }

  return shaderProgram;
}

//
// 指定された種類のシェーダーを作成し、ソースをアップロード、
// そしてコンパイル。
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // シェーダーオブジェクトにソースを送信

  gl.shaderSource(shader, source);

  // シェーダープログラムをコンパイル

  gl.compileShader(shader);

  // コンパイルが成功したか確認する

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      `シェーダーのコンパイル時にエラーが発生しました: ${gl.getShaderInfoLog(shader)}`
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

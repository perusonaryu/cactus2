/**
 * @file ルートレイアウトのページオプション
 * @description 全ページを静的プリレンダし、レンタルサーバーへアップロード可能な HTML を生成する
 */

/** 全ルートをビルド時に静的 HTML として出力する */
export const prerender = true;

/**
 * URL 末尾にスラッシュを付与する
 * @description レンタルサーバーでは `/path/index.html` 形式が扱いやすいため always にする
 */
export const trailingSlash = 'always';

/**
 * # OUT OF THE BOX FEATURES
 * - global obj
 * - this
 * - outer env
 * # EXP:
 * - browser: global = window; this = window; outer env = null
 * - nodejs: global = global; this = global; outer env = null
 */
console.log('window:', window);
console.log('this:', this);
console.log(window===this);

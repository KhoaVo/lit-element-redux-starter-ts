import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';
import commonjs from 'rollup-plugin-commonjs';

// Static assets will vary depending on the application
const copyConfig = {
  targets: [
    { src: 'single_file_bundle_index.html', dest: 'prod', rename: "index.html"},
    { src: 'images', dest: 'prod' },
    { src: 'data', dest: 'prod' },
  ],
};

const ignoredWarnings = new Set([
  'THIS_IS_UNDEFINED',
]);

const config = {
  input: 'src_compiled/components/my-element.js',
  output: {
		file: 'prod/bundle.js',
    name: 'bundle',
    // immediately-invoked function expression — suitable for <script> tags
		format: 'iife', 
		sourcemap: true
	},
  plugins: [
    minifyHTML(),
    copy(copyConfig),
    resolve(),
    commonjs(),
  ],
  onwarn: function ( message ) {
    if ( ignoredWarnings.has(message.code)) { return; }
    console.error( message );
  },
};

if (process.env.NODE_ENV !== 'development') {
  config.plugins.push(terser());
}

export default config;
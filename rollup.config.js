import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js',           // The ESM entry point
  output: {
    file: 'dist/openai-realtime-api-beta.umd.js',
    format: 'umd',
    name: 'OpenAIRealtimeBeta', // The global name in a <script> tag
    // If you want source map:
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      // For a browser build:
      browser: true,
      preferBuiltins: false
    }),
    commonjs(),
    terser() // optional minification
  ]
};

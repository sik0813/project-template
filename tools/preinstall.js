/**
 * only allowed pnpm
 */
if (process.env.npm_execpath.toLowerCase().indexOf('pnpm') === -1) {
  console.error('You must use PNPM to install dependencies:');
  console.error('  $ pnpm install');
  process.exit(1);
}

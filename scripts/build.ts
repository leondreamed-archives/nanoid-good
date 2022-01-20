import { copyPackageFiles } from 'lion-system';
import { execaCommandSync as exec } from 'execa';

exec('tsc');
await copyPackageFiles();

import { copyPackageFiles, chProjectDir } from 'lion-system';
import { execaCommandSync as exec } from 'execa';

chProjectDir(import.meta.url);
exec('tsc');
copyPackageFiles();

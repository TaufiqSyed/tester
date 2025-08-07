import * as migration_20250807_082915 from './20250807_082915';
import * as migration_20250807_085441 from './20250807_085441';

export const migrations = [
  {
    up: migration_20250807_082915.up,
    down: migration_20250807_082915.down,
    name: '20250807_082915',
  },
  {
    up: migration_20250807_085441.up,
    down: migration_20250807_085441.down,
    name: '20250807_085441'
  },
];

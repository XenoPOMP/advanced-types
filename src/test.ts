import { WithParams } from './types/WithParams';
import { WithSearchParams } from './types/WithSearchParams';

type Sus = WithParams<{}, 'serviceId' | 'name'>['params'];
type Amongus = WithSearchParams<{}, 'serviceId' | 'name'>['searchParams'];

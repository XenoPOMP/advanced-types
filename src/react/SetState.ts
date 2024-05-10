import { Dispatch, SetStateAction } from 'react';

/**
 * Type of set state function from useState.
 *
 * @example
 * // typeof setState => SetState<string>
 * const [state, setState] = useState<string>('example');
 */
export type SetState<TType> = Dispatch<SetStateAction<TType>>;

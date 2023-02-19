import {TransformKeysToCamelCase} from '@confs/shared/api-interfaces';
import {GithubUser} from './github-user';

export type User = TransformKeysToCamelCase<GithubUser> & {user: string};

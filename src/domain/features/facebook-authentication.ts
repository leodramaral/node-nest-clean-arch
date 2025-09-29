import { AccessToken } from '@/domain/models';
import { FacebookAuthenticationError } from '@/domain/errors';

export interface FacebookAuthentication {
  perform: (
    params: FacebookAuthenticationParams,
  ) => Promise<FacebookAuthenticationResult>;
}

type FacebookAuthenticationParams = {
  token: string;
};

type FacebookAuthenticationResult = AccessToken | FacebookAuthenticationError;

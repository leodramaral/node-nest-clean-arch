import { FacebookAuthenticationParams } from '@/domain/features';

interface LoadFacebookUserApi {
  loadUser: (params: { token: string }) => Promise<void>;
}

interface LoadFacebookUserApiResponse {
  token: string;
}

class FacebookAuthenticationService {
  constructor(private readonly loadFacebookUserApi: LoadFacebookUserApi) {}
  async perform(params: FacebookAuthenticationParams): Promise<void> {
    await this.loadFacebookUserApi.loadUser(params);
  }
}

class LoadFacebookUserApiSpy implements LoadFacebookUserApi {
  token?: string;

  loadUser(params: LoadFacebookUserApiResponse): Promise<void> {
    this.token = params.token;
    return Promise.resolve();
  }
}

describe('FacebookAuthentication', () => {
  it('should call LoadFacebookUserApi with correct token', async () => {
    const loadFacebookUserApi = new LoadFacebookUserApiSpy();
    const sut = new FacebookAuthenticationService(loadFacebookUserApi);
    await sut.perform({ token: 'any_token' });
    expect(loadFacebookUserApi.token).toBe('any_token');
  });
});

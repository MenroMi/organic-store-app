import {
  onSignInThunk,
  getAuthUserThunk,
  onLogOutThunk,
  onSignInFacebookThunk,
  onSignInGitHubThunk,
  onSignInGoogleThunk,
} from './auth';
import onRegisterThunk from './register';
import {onUpdatePasswordThunk, onUpdateAvatarUserThunk} from './update';

export {
  onLogOutThunk,
  onSignInThunk,
  getAuthUserThunk,
  onRegisterThunk,
  onUpdatePasswordThunk,
  onUpdateAvatarUserThunk,
  onSignInFacebookThunk,
  onSignInGitHubThunk,
  onSignInGoogleThunk,
};

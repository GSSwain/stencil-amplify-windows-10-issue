import Amplify from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';
import { amplifyConfig } from "../amplify-config";

export default async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
  Amplify.configure(amplifyConfig);
  Auth.currentAuthenticatedUser().then(console.log, console.error);
};

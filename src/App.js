import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
//import { Authenticator, SignIn } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <body>
          <div class="App-file-form">
            <form>
              <label>
                File:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
//export default withAuthenticator(App);

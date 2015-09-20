import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Input from 'react-bootstrap/lib/Input';
import Well from 'react-bootstrap/lib/Well';

import SignIn from './sign-in';
import SignUp from './sign-up';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      container: {
        margin: '0 auto',
        textAlign: 'center',
        maxWidth: '50%'
      },
      title: {
        fontSize: '60px',
        fontWeight: '700',
        color: 'white',
        textTransform: 'uppercase'
      },
      subtitle: {
        fontSize: '18px',
        fontWeight: '500',
        color: 'white'
      },
      bg: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("images/eat.jpg")',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      }
    };

    return (
      <div style={style.bg}>
        <div style={style.container}>
          <p style={style.title}>Welcome Majaja</p>
          <p style={style.subtitle}>Order anything you want</p>
        </div>

        <SignIn ref='signIn' />
        <SignUp ref='signUp' />
      </div>
    );
  }

}

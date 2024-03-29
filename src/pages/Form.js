import React, { Component } from 'react';
var { GiftedForm, GiftedFormManager } = require('react-native-gifted-form');


class Form extends Component {
  render() {
    return (
      <GiftedForm
        formName='signupForFm' // GiftedForm instances that use the same name will also share the same states
        openModal={(route) => {
          navigator.push(route); // The ModalWidget will be opened using this method. Tested with ExNavigator
        }}
        clearOnClose={false} // delete the values of the form when unmounted
        defaults={{

          username: 'Farid',
          'gender{M}': true,
          password: 'abcdefg',
          country: 'FR',
          birthday: new Date(((new Date()).getFullYear() - 18) + ''),

        }}
        validators={{
          fullName: {
            title: 'Full name',
            validate: [{
              validator: 'isLength',
              arguments: [1, 23],
              message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
            }]
          },
          username: {
            title: 'Username',
            validate: [{
              validator: 'isLength',
              arguments: [3, 16],
              message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
            }, {
              validator: 'matches',
              arguments: /^[a-zA-Z0-9]*$/,
              message: '{TITLE} can contains only alphanumeric characters'
            }]
          },
          password: {
            title: 'Password',
            validate: [{
              validator: 'isLength',
              arguments: [6, 16],
              message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
            }]
          },
          emailAddress: {
            title: 'Email address',
            validate: [{
              validator: 'isLength',
              arguments: [6, 255],
            }, {
              validator: 'isEmail',
            }]
          },
          bio: {
            title: 'Biography',
            validate: [{
              validator: 'isLength',
              arguments: [0, 512],
              message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
            }]
          },
          gender: {
            title: 'Gender',
            validate: [{
              validator: (...args) => {
                if (args[0] === undefined) {
                  return false;
                }
                return true;
              },
              message: '{TITLE} is required',
            }]
          },

          country: {
            title: 'Country',
            validate: [{
              validator: 'isLength',
              arguments: [2],
              message: '{TITLE} is required'
            }]
          },
        }}
      >
        <GiftedForm.SeparatorWidget />

        <GiftedForm.TextInputWidget
          name='fullName' // mandatory
          title='Full name'

          placeholder='Marco Polo'
          clearButtonMode='while-editing'
        />

        <GiftedForm.TextInputWidget
          name='username'
          title='Username'

          placeholder='MarcoPolo'
          clearButtonMode='while-editing'
          onTextInputFocus={(currentText = '') => {
            if (!currentText) {
              let fullName = GiftedFormManager.getValue('signupForm', 'fullName');
              if (fullName) {
                return fullName.replace(/[^a-zA-Z0-9-_]/g, '');
              }
            }
            return currentText;
          }}
        />

        <GiftedForm.TextInputWidget
          name='password' // mandatory
          title='Password'
          placeholder='******'
          clearButtonMode='while-editing'
          secureTextEntry={true}

        />

        <GiftedForm.TextInputWidget
          name='emailAddress' // mandatory
          title='Email address'
          placeholder='example@nomads.ly'
          keyboardType='email-address'
          clearButtonMode='while-editing'

        />

        <GiftedForm.SeparatorWidget />

        <GiftedForm.ModalWidget
          title='Gender'
          displayValue='gender'

        >
          <GiftedForm.SeparatorWidget />

          <GiftedForm.SelectWidget name='gender' title='Gender' multiple={false}>
            <GiftedForm.OptionWidget title='Female' value='F' />
            <GiftedForm.OptionWidget title='Male' value='M' />
          </GiftedForm.SelectWidget>
        </GiftedForm.ModalWidget>

        <GiftedForm.ModalWidget
          title='Birthday'
          displayValue='birthday'

          scrollEnabled={false}
        >
          <GiftedForm.SeparatorWidget />

          <GiftedForm.DatePickerIOSWidget
            name='birthday'
            mode='date'
            getDefaultDate={() => {
              return new Date(((new Date()).getFullYear() - 18) + '');
            }}
          />
        </GiftedForm.ModalWidget>

        <GiftedForm.ModalWidget
          title='Country'
          displayValue='country'

          scrollEnabled={false}
        >
          <GiftedForm.SelectCountryWidget
            code='alpha2'
            name='country'
            title='Country'
            autoFocus={true}
          />
        </GiftedForm.ModalWidget>

        <GiftedForm.ModalWidget
          title='Biography'
          displayValue='bio'

          scrollEnabled={true} // true by default
        >
          <GiftedForm.SeparatorWidget />

          <GiftedForm.TextAreaWidget
            name='bio'
            autoFocus={true}
            placeholder='Something interesting about yourself'
          />
        </GiftedForm.ModalWidget>

        <GiftedForm.ErrorsWidget />

        <GiftedForm.SubmitWidget
          title='Sign up'
          widgetStyles={{
            submitButton: {

            }
          }}
          onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
            if (isValid === true) {
              // prepare object
              values.gender = values.gender[0];


              /* Implement the request to your server using values variable
              ** then you can do:
              ** postSubmit(); // disable the loader
              ** postSubmit(['An error occurred, please try again']); // disable the loader and display an error message
              ** postSubmit(['Username already taken', 'Email already taken']); // disable the loader and display an error message
              ** GiftedFormManager.reset('signupForm'); // clear the states of the form manually. 'signupForm' is the formName used
              moment, themes
              */
            }
          }}
        />

        <GiftedForm.NoticeWidget
          title='By signing up, you agree to the Terms of Service and Privacy Policity.'
        />

        <GiftedForm.HiddenWidget name='tos' value={true} />

        
      </GiftedForm>
    );
  }
}


export default Form;

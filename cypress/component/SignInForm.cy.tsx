import SignInForm from '@/app/sigInPage/components/SignInForm';

describe('<SignInForm />', () => {
  it('mounts', () => {
    cy.mount(<SignInForm />);
  });
});

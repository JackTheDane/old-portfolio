import React from 'react';
import styles from './Contact.module.scss';

export interface ContactProps {
  
}
 
export interface ContactState {
  name: string;
  email: string;
  message: string;
  status: any;
}
 
class Contact extends React.Component<ContactProps, ContactState> {
  constructor(props: ContactProps) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      status: null
    }

    this.handleChange = this.handleChange.bind(this);
  }

  render() { 
    return (

      <div>

        <h1>
          Kontakt mig
        </h1>

        <div className={styles['contact__form']}>
          <form method="POST" action="https://formspree.io/martin@mbpmedia.com">
            <div className="form-group columns">
              <div className="column col-6 col-xs-12">
                <label className="form-label" htmlFor="input-name">Navn</label>
                <input className="form-input" required type="text" id="input-name" name="name" placeholder="Dit navn" value={this.state.name} onChange={this.handleChange} />
              </div>

              <div className="column col-6 col-xs-12">
                <label className="form-label" htmlFor="input-email">Email</label>
                <input className="form-input" required type="email" id="input-email" name="email" placeholder="Din email addresse" value={this.state.email} onChange={this.handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="input-besked">Besked</label>
              <textarea className="form-input" required id="input-besked" name="message" rows={5} placeholder="Skriv en besked til mig her" value={this.state.message} onChange={this.handleChange} />
            </div>

            <div className="form-group">
              <button type="submit" className={`btn btn-primary my-2 mr-3 btn-lg ${this.state.status === 'loading' ? 'loading' : ''}`}>Send <i className="icon mx-2 icon-message"></i> </button>
              <small>
                Sendt via FormSpree.io
              </small>
            </div>

          </form>
        </div>

        <div className="">

          <div className={`${styles['contact__subcontent']}`}>
            <h4 className=''>
              Email
            </h4>
            <a href="mailto:martin@mbpmedia.com">
              Martin@mbpmedia.com
            </a>
          </div>

          <div className={`${styles['contact__subcontent']}`}>
            <h4 className=''>
              Telefon
            </h4>
            <span>
              +45 42236801
            </span>
          </div>
        </div>
        
      </div>
     );
  }

  private handleChange(e: any) {
    const inputName = e.target.name;
    const value = e.target.value;

    if (inputName === 'name') {
      this.setState({
        name: value
      })
    } else if (inputName === 'email') {
      this.setState({
        email: value
      })
    } else if (inputName === 'message') {
      this.setState({
        message: value
      })
    }
  }
}
 
export default Contact;
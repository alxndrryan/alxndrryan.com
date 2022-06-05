const Contact = () => {
  return (
    <section className="container">
      <div className="landing-inner">
        <h1 className="large">Contact</h1>
        <p className="lead">
          Have a question? Send me a message and I will get back to you!
        </p>

        <form className="form form-border p-2 bg-medium">
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
            />
          </div>
          <input className="btn btn-primary" value="Register" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;

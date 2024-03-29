import "../css/team.css"

const Team = () => {
  return (
   <div className="teams">
    <div className="teams-content">
      <div className="teams-heading">
        <h1>Meet Our Team </h1>
      </div>
      <div className="professor">
      <div className="container">
  <div className="row">
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 w-40 mx-10 rounded">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="./dp.png"/>
        </div>
        <div className="team-content">
          <h3 className="name">Dr.Balaji Babu</h3>
          <h4 className="title">The Boss</h4>
        </div>
        <ul className="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
 
  </div>
</div>
      </div>
      <div className="team-members">
      <div className="container">
  <div className="row">
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 w-40 mx-20 mt-5 rounded">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="https://picsum.photos/130/130?image=1027"/>
        </div>
        <div className="team-content">
          <h3 className="name">Michele Miller</h3>
          <h4 className="title">Web Developer</h4>
        </div>
        <ul className="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 w-40 mx-20 mt-5">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="https://picsum.photos/130/130?image=839"/>
        </div>
        <div className="team-content">
          <h3 className="name">Patricia Knott</h3>
          <h4 className="title">Web Developer</h4>
        </div>
        <ul className="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
  
     
  </div>
</div>
      </div>
    </div>
   </div>
  )
}

export default Team
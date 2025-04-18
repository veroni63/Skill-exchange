import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../util/UserContext";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProfileCard from "./ProfileCard";
import { ImRedo2 } from "react-icons/im";
import "./Discover.css";
import Search from "./Search";
import Spinner from "react-bootstrap/Spinner";
import { ImArrowRight } from "react-icons/im";
import { ImCool2 } from "react-icons/im";
const Discover = () => {
  const navigate = useNavigate();

  const { user, setUser } = useUser();

  const [loading, setLoading] = useState(false);

  const [discoverUsers, setDiscoverUsers] = useState([]);

  const [webDevUsers, setWebDevUsers] = useState([]);

  const [mlUsers, setMlUsers] = useState([]);

  const [otherUsers, setOtherUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/user/registered/getDetails`);
        console.log(data.data);
        setUser(data.data);
        localStorage.setItem("userInfo", JSON.stringify(data.data));
      } catch (error) {
        console.log(error);
        if (error?.response?.data?.message) {
          toast.error(error.response.data.message);
        }
        localStorage.removeItem("userInfo");
        setUser(null);
        await axios.get("/auth/logout");
        navigate("/login");
      }
    };
    const getDiscoverUsers = async () => {
      try {
        const { data } = await axios.get("/user/discover");
        console.log(data);
        setDiscoverUsers(data.data.forYou);
        setWebDevUsers(data.data.webDev);
        setMlUsers(data.data.ml);
        setOtherUsers(data.data.others);
      } catch (error) {
        console.log(error);
        if (error?.response?.data?.message) {
          toast.error(error.response.data.message);
        }
        localStorage.removeItem("userInfo");
        setUser(null);
        await axios.get("/auth/logout");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    getUser();
    getDiscoverUsers();
  }, []);

  return (
    <>
      <div className="discover-page">
        <div className="content-container">
          <div className="nav-bar">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="#for-you" className="navlink" id="foryou">
                For You
              </Nav.Link>
              <Nav.Link href="#popular" className="navlink" id="popular1">
                Popular
              </Nav.Link>
              <Nav.Link href="#web-development" className="navlink">
              <img src="/assets/program.png" alt="" style={{width:"25px",height:"25px"}} /> Programming
              </Nav.Link>
              <Nav.Link href="#machine-learning" className="navlink">
              <img src="/assets/cook.png" alt="" style={{width:"25px",height:"25px"}} />  Cooking
              </Nav.Link>
              <Nav.Link href="#graphic-design" className="navlink">
              <img src="/assets/photo.png" alt="" style={{width:"25px",height:"25px"}} /> Photography
              </Nav.Link>
              <Nav.Link href="#soft-skills" className="navlink">
              <img src="/assets/music.png" alt="" style={{width:"25px",height:"25px"}} /> Music
              </Nav.Link> 
              <Nav.Link href="#others" className="navlink">
              <img src="/assets/acadamisc.png" alt="" style={{width:"25px",height:"25px"}} /> Academics
              </Nav.Link>
              <Nav.Link href="#web-development" className="navlink">
              <img src="/assets/gamin.png" alt="" style={{width:"25px",height:"25px"}} /> Games
              </Nav.Link>
              <Nav.Link href="#machine-learning" className="navlink">
              <img src="/assets/fitness.png" alt="" style={{width:"25px",height:"25px"}} /> Fitness
              </Nav.Link>
              <Nav.Link href="#graphic-design" className="navlink">
              <img src="/assets/business.png" alt="" style={{width:"25px",height:"25px"}} /> Marketing
              </Nav.Link>
              <Nav.Link href="#others" className="navlink">
              <img src="/assets/others.png" alt="" style={{width:"25px",height:"25px"}} /> Others
              </Nav.Link>
              
            </Nav>
          </div>
          <div className="heading-container">
            {loading ? (
              <div className="container d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <>
                <p
                  id="for-you"
                  style={{
                    fontFamily: "Josefin Sans, sans-serif",
                    color: "gray",
                    marginTop: "2rem",
                    marginBottom: "1rem",
                  
                  }}
                >
                  SkillME <ImRedo2 /> For You
                </p>
                <div className="profile-cards">
                  {discoverUsers && discoverUsers.length > 0 ? (
                    discoverUsers.map((user) => (
                      <ProfileCard
                        profileImageUrl={user?.picture}
                        name={user?.name}
                        rating={user?.rating ? user?.rating : 5}
                        bio={user?.bio}
                        skills={user?.skillsProficientAt}
                        username={user?.username}
                      />
                    ))
                  ) : (
                    <p style={{color:"black"}}>No users to show right now</p>
                  )}
          
                </div>
                <h3
                  id="popular"
                  style={{
                    fontFamily: "Josefin Sans, sans-serif",
                    color: "gray",
                    marginTop: "1rem",
                    marginBottom: "3rem",
                  }}
                >
                  Popular
                </h3>
                <p id="web-development" style={{color:"gray",fontFamily: "Josefin Sans, sans-serif"}}>SkillME <ImRedo2 /> Programming</p>
                <div className="profile-cards">
                  {/* Profile cards go here */}
                  {webDevUsers && webDevUsers.length > 0 ? (
                    webDevUsers.map((user) => (
                      <ProfileCard
                        profileImageUrl={user?.picture}
                        name={user?.name}
                        rating={4}
                        bio={user?.bio}
                        skills={user?.skillsProficientAt}
                        username={user?.username}
                      />
                    ))
                  ) : (
                    <p style={{ color: "black" }}>No users to show right now</p>
                  )}
                  {/* Add more ProfileCard components as needed */}
                </div>
                <p id="machine-learning" style={{color:"gray",fontFamily: "Josefin Sans, sans-serif"}}>SkillME <ImRedo2 />Cooking</p>
                <div className="profile-cards">
                  {mlUsers && mlUsers.length > 0 ? (
                    mlUsers.map((user) => (
                      <ProfileCard
                        profileImageUrl={user?.picture}
                        name={user?.name}
                        rating={4}
                        bio={user?.bio}
                        skills={user?.skillsProficientAt}
                        username={user?.username}
                      />
                    ))
                  ) : (
                    <p style={{ color: "black" }}>No users to show right now</p>
                  )}
                  {/* <ProfileCard
                    profileImageUrl="/assets/images/profile2.png"
                    name="Madan Gupta"
                    rating="⭐⭐⭐⭐⭐"
                    bio="Experienced professor specialising in data science and machine learning"
                    skills={["Machine Learning", "Python", "Data Science", "English", "Communication"]}
                  />
                  <ProfileCard
                    profileImageUrl="/assets/images/profile4.jpg"
                    name="Karuna Yadav"
                    rating="⭐⭐⭐⭐"
                    bio="Working professional specialising in Artificial Intelligence and Machine Learning Research."
                    skills={["Machine Learning", "Python", "Data Science", "Artificial Intelligence"]}
                  /> */}
                </div>
                {/* <h2 id="graphic-design">Graphic Design</h2>
                <div className="profile-cards">
                  <ProfileCard
                    profileImageUrl="profile-image-url"
                    name="Name"
                    rating="⭐⭐⭐⭐⭐"
                    bio="yahan apan bio rakhre"
                    skills={["HTML", "CSS", "JS"]}
                  />
                  <ProfileCard
                    profileImageUrl="profile-image-url"
                    name="Name"
                    rating="⭐⭐⭐⭐⭐"
                    bio="yahan apan bio rakhre"
                    skills={["HTML", "CSS", "JS"]}
                  />
                </div>
                <h2 id="soft-skills">Soft Skills</h2>
                <div className="profile-cards">
                  <ProfileCard
                    profileImageUrl="profile-image-url"
                    name="Name"
                    rating="⭐⭐⭐⭐⭐"
                    bio="yahan apan bio rakhre"
                    skills={["HTML", "CSS", "JS"]}
                  />
                  <ProfileCard
                    profileImageUrl="profile-image-url"
                    name="Name"
                    rating="⭐⭐⭐⭐⭐"
                    bio="yahan apan bio rakhre"
                    skills={["HTML", "CSS", "JS"]}
                  />
                </div> */}
                <p id="others" style={{color:"gray",fontFamily: "Josefin Sans, sans-serif"}}>SkillME <ImRedo2 />Others</p>
                <div className="profile-cards">
                  {/* Profile cards go here */}
                  {otherUsers && otherUsers.length > 0 ? (
                    otherUsers.map((user) => (
                      <ProfileCard
                        profileImageUrl={user?.picture}
                        name={user?.name}
                        rating={4}
                        bio={user?.bio}
                        skills={user?.skillsProficientAt}
                        username={user?.username}
                      />
                    ))
                  ) : (
                    <p style={{ color: "black" }}>No users to show right now</p>
                  )}
                  {/* <ProfileCard
                    profileImageUrl="/assets/images/profile.jpg"
                    name="Anil Khosla"
                    rating="⭐⭐⭐⭐"
                    bio="Professor - Maths 2 @ IIIT Raipur. Specialising in Algebra"
                    skills={["Mathematics", "Algebra", "Arithmetic"]}
                  />
                  <ProfileCard
                    profileImageUrl="/assets/images/profile3.jpg"
                    name="Rahul Goel"
                    rating="⭐⭐⭐⭐"
                    bio="Photography and art enthusiast. National Wildlife Photography Awardee."
                    skills={["Art", "Photography"]}
                  /> */}
                  {/* Add more ProfileCard components as needed */}
                </div>
                {/* Add more ProfileCard components as needed */}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;

import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
// import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup",
  },
];

const Homepage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   // Send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // NOTE 1:
  // fetch data from an API
  // Read data from a database or file system
  // Also, we need to return an object

  // NOTE2:
  // context can also be used here, but it won't have access to res & req.
  // Instead it will hold params key instead
 

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;
//    // fetch data from an API
//   return {
//     props:{
//         meetups: DUMMY_MEETUPS,
//     }
//   }
// }

export default Homepage;

// NOTE
// useRouter can only be in component funtions

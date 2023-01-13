import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  );
};


export async function getStaticPaths(){
  return{
    paths: [
      {params: {
        meetupId: 'm1',
      }}
    ]
  }
}


export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetuId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: meetuId,
        title: "First Meetup",
        address: "Some Street %, Some City",
      },
    },
  };
}

export default MeetupDetails;

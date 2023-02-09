import React from "react";
import Body from "../../components/Body";
import CardGroup from "../../components/Card";



const cardsList2 = [
  {
    teamMembers:"Team Members",
    title: "Title",
  },
  
  {
   
    teamMembers:"Test",
    title: "testeeee",
    
  }
];




class Home extends React.Component {
  
  render() {
    return (
      <>
        <Body>
          
          <h1>
            Substitua este H1 pelo seu codigo durante os testes, depois remova-o
            {
              cardsList2.map(card => (
                <CardGroup title={card.title} teamMembers={card.teamMembers}/>
              ))
            }
          
            
          </h1>
        </Body>

      </>
    );
  }
}

export default Home;

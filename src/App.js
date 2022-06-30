import "./components/wrapper/wrapper.scss"
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Student from "./components/student/Student";
import Assistant from "./components/assistant/Assistant";
import groups from "./answer.two"


function App() {
  const groupsData  = groups()

  return (
    <section >
      <Header></Header>
      <div className="wrapper">
        {Object.entries(groupsData).map((group, index) => {
          return (
            <Card key={index} groupName={group[0]}>
              {group[1].map(member => {
                return member.assistant ? 
                <Assistant key={member.id} name={member.name} /> : 
                <Student key={member.id} name={member.name} />
              })}
            </Card>
          )
        })} 
      </div>
    </section>
  );
}

export default App;

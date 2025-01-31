import React from "react";
import IconSystem from "../../assets/IconSystem";
import {
  Container,
  OpenClose,
  User,
  Img,
  Name,
  Id,
  Email,
  Ul,
  Slink,
  Li,
  Span,
  Icon,
  Logout,
} from "./styles";

class SidBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidBartState: "false",
    };
  }
  render() {
    return (
      <>
        <Container
          $column={this.props.column}
          $row={this.props.row}
          $mode={this.state.sidBartState}
        >
          <OpenClose
            $mode={this.state.sidBartState}
            onClick={() =>
              this.setState({ sidBartState: !this.state.sidBartState })
            }
          >
            <IconSystem icon="openclose" />
          </OpenClose>
          <User $mode={this.state.sidBartState}>
            <Img $mode={this.state.sidBartState}></Img>
            <Name $mode={this.state.sidBartState}>Héder Silva Oliveira</Name>
            <Email $mode={this.state.sidBartState}>meuemail@tcs.com</Email>
            <Id $mode={this.state.sidBartState}>ID:2555555</Id>
          </User>
          <Ul $mode={this.state.sidBartState}>
            <Slink to="/home">
              <Li>
                <Icon $mode={this.state.sidBartState}>
                  <IconSystem icon="home" />
                  <Span $mode={this.state.sidBartState}>Home</Span>
                </Icon>
              </Li>
            </Slink>
            <Slink to="/home">
              <Li>
                <Icon $mode={this.state.sidBartState}>
                  <IconSystem icon="client" />
                  <Span $mode={this.state.sidBartState}>Client</Span>
                </Icon>
              </Li>
            </Slink>

            <Slink to="/home">
              <Li>
                <Icon $mode={this.state.sidBartState}>
                  <IconSystem icon="subjects" />
                  <Span $mode={this.state.sidBartState}>Subjects</Span>
                </Icon>
              </Li>
            </Slink>

            <Slink to="/home">
              <Li>
                <Icon $mode={this.state.sidBartState}>
                  <IconSystem icon="planner" />
                  <Span $mode={this.state.sidBartState}>Planner</Span>
                </Icon>
              </Li>
            </Slink>

            <Slink to="/home">
              <Li>
                <Icon $mode={this.state.sidBartState}>
                  <IconSystem icon="remark" />
                  <Span $mode={this.state.sidBartState}>Remark</Span>
                </Icon>
              </Li>
            </Slink>
          </Ul>
          <Logout $mode={this.state.sidBartState}>
            <IconSystem icon="logout" />
            <Span $mode={this.state.sidBartState}>Logout</Span>
          </Logout>
        </Container>
      </>
    );
  }
}

export default SidBar;

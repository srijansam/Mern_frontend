import React from "react";
import Header from "../../layout/partials/Header-compo";
import { Button, Container, Row, Col } from "react-bootstrap";
import TicketTable from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assest/data/dummy-tickets.json";
import Footer from "../../layout/partials/Footer-compo";
const Dashboard = () => {
    
  return (
    <>
    <Header/>
      <Container>
        <Row>
            <Col className="text-center mt-5 mb-2">
                <Button className="addticket" style={{fontSize: "1.5rem"}}>Add a new Ticket</Button>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mb-2">
                <div>Total tickets-</div>
                <div>Pending tickets-</div>
            </Col>
        </Row>
        <Row>
            <Col className="mt-2">
                Recently added tickets
            </Col>
        </Row>
        <hr />

        <Row>
            <Col className="recent-ticket">
            <TicketTable tickets={tickets}/>
            </Col>
        </Row>
      </Container>
      <Footer/>
      </>
  )
}

export default Dashboard

import React from "react";
import {
  Alert,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CCardLink,
  CCardFooter,
  CRow,
  CCol,
  CCardSubtitle,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Events = () => {
  return (
    <section
      id="events"
      className="min-h-[80vh] w-full bg-transparent text-white flex flex-col items-center pt-16 pl-16"
    >
      <h1 className="text-6xl font-heading shadow-heading border-b-2 border-red-600">
        Ev<span className="text-red-500">ent</span>s
      </h1>
      <div className="pt-12">
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
          <CCol xs>
            <CCard
              className="mb-3"
              style={{
                maxHeight: "50rem",
                maxWidth: "50rem",
                backgroundColor: "#2B2D2F",
              }}
            >
              <CRow className="g-0">
                <CCol md={4}>
                  <CCardImage
                    style={{ maxHeight: "50rem", maxWidth: "50rem" }}
                    src="/mnmcse.jpeg"
                  />
                </CCol>
                <CCol md={8}>
                  <CCardBody style={{ color: "#ff0000" }}>
                    <CCardTitle className="text-center fs-1">
                      Mr and Mrs CSE
                    </CCardTitle>
                    <CCardText style={{ color: "#ffffff" }}>
                      Are you ready to showcase your best and bring out the
                      talent in you? Audition for Mr. And Ms. CSE and get a
                      chance to win the department's most prestigious titles.
                      So, what are you waiting for?! Only CSE, CST, and CSBS
                      students from 1st and 2nd Years can apply
                    </CCardText>
                    <CButton
                      className="center"
                      color="danger"
                      variant="outline"
                      href="https://forms.gle/DtTF6czUYrn2qKfA6" target="_blank"
                    >
                      Register
                    </CButton>
                  </CCardBody>
                </CCol>
              </CRow>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard
              className="mb-3"
              style={{
                maxHeight: "50rem",
                maxWidth: "50rem",
                backgroundColor: "#2B2D2F",
              }}
            >
              <CRow className="g-0">
                <CCol md={4}>
                  <CCardImage
                    style={{ maxHeight: "50rem", maxWidth: "50rem" }}
                    src="/badminton.jpeg"
                  />
                </CCol>
                <CCol md={8}>
                  <CCardBody style={{ color: "#ff0000" }}>
                    <CCardTitle className="text-center fs-1">
                      Badminton
                    </CCardTitle>
                    <CCardText style={{ color: "#ffffff" }}>
                      Hey there Shuttlers! Ready to test your badminton skills?
                      Then register for the most compelling Badminton Tournament
                      for free! Here is your chance to prove your talents and
                      win Exciting goodies!
                    </CCardText>
                    <CButton
                      className="center"
                      color="danger"
                      variant="outline"
                      href="https://forms.gle/Kd31XKVxwj9Qa6cx8" target="_blank"
                    >
                      Register
                    </CButton>
                  </CCardBody>
                </CCol>
              </CRow>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard
              className="mb-3"
              style={{
                maxHeight: "50rem",
                maxWidth: "50rem",
                backgroundColor: "#2B2D2F",
              }}
            >
              <CRow className="g-0">
                <CCol md={4}>
                  <CCardImage
                    style={{ maxHeight: "50rem", maxWidth: "50rem" }}
                    src="/valo.jpeg"
                  />
                </CCol>
                <CCol md={8}>
                  <CCardBody style={{ color: "#ff0000" }}>
                    <CCardTitle className="text-center fs-1">
                      Valorant
                    </CCardTitle>
                    <CCardText style={{ color: "#ffffff" }}>
                      Do you want to get an invite to the ultimate Valorant
                      battle? Register for the most-exciting gaming tournament
                      and compete from the comfort of your home! Book your spot
                      today and get a chance to win prizes from a prize pool of
                      Rs. 2000. P.S.: We have limited slots for 16 teams. So,
                      what are you waiting for?!
                    </CCardText>
                    <CButton
                      className="center"
                      color="danger"
                      variant="outline"
                      href="https://forms.gle/PRupLCGzXdZdfjP66" target="_blank"
                    >
                      Register
                    </CButton>
                  </CCardBody>
                </CCol>
              </CRow>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard
              className="mb-3"
              style={{
                maxHeight: "50rem",
                maxWidth: "50rem",
                backgroundColor: "#2B2D2F",
              }}
            >
              <CRow className="g-0">
                <CCol md={4}>
                  <CCardImage
                    style={{ maxHeight: "50rem", maxWidth: "50rem" }}
                    src="/omtf.jpeg"
                  />
                </CCol>
                <CCol md={8}>
                  <CCardBody style={{ color: "#ff0000" }}>
                    <CCardTitle className="text-center fs-1">
                      One Minute to Fame
                    </CCardTitle>
                    <CCardText style={{ color: "#ffffff" }}>
                      Still waiting for a chance to showcase your unique talents
                      in front of the world? CSE UNITED presents 1 minute to
                      Fame, an awesome platform to display your talents in front
                      of your everyone. Participants will be given exactly a
                      minute to perform anything of their choice in front of the
                      judges.
                    </CCardText>
                    <CButton
                      className="center"
                      color="danger"
                      variant="outline"
                      href="https://forms.gle/dGAR5XYWdjKBAecr9" target="_blank"
                    >
                      Register
                    </CButton>
                  </CCardBody>
                </CCol>
              </CRow>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </section>
  );
};

export default Events;

import React from 'react';
import { Container, Spinner } from 'reactstrap';

const Loading = () => {

    return (

        <Container fluid={true} className="mx-0 px-0">
            <div className="d-flex justify-content-center align-items-center h-100 w-100 bg-light" style={{ minHeight: "100vh", opacity: "0.8", zIndex: "9999999999", position: "absolute", top: "0" }}>
                <Spinner
                    as="span"
                    size="lg"
                    role="status"
                    aria-hidden="true"
                    color="info"
                    style={{height: "4rem", width: "4rem"}}
                />
            </div>
        </Container>
    )
}

export default Loading;
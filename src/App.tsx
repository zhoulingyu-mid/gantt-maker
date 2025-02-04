import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CodeMirror from "@uiw/react-codemirror";
import { githubDark } from "@uiw/codemirror-theme-github";
import 'bootstrap/dist/css/bootstrap.min.css';

import GanttChart from 'src/components/GanttChart/GanttChart';
import './App.css';
import { GanttLangSupport } from 'src/GanttLangLezer/GanttLangLezerLanguage';

const SAMPLE_GANTT = `
task "design" costs 2
task "another deadline" spans 1-3
task "backend" depends on "design" costs 3
task "frontend" depends on "design" costs 5
task "integration test" depends on "backend" "frontend" costs 5

participant "worker1": "design" "backend" "integration test"
participant "worker2": "another deadline" "frontend"
`;


function App() {
  const [gantt, setGantt] = useState<string>(SAMPLE_GANTT);

  return (
    <Container fluid>
      {/* Top Bar */}
      <Row>
        <h1>Gantt Chart</h1>
      </Row>

      {/* Main Section */}
      <Row className='main'>
        {/* Left Panel */}
        <Col md={4}>
          <CodeMirror
            value={gantt}
            onChange={(value)=>setGantt(value)}
            extensions={[GanttLangSupport()]}
            theme={githubDark}
          />
        </Col>

        {/* Right Panel */}
        <Col md={8}>
          <GanttChart gantt={gantt} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
